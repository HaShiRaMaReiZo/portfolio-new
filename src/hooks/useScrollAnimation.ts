'use client';

import { useEffect, useRef, useState } from 'react';

interface UseScrollAnimationOptions {
  threshold?: number;
  initialVisible?: boolean;
}

export function useScrollAnimation(options: UseScrollAnimationOptions = {}) {
  const { threshold = 0.3, initialVisible = false } = options;
  const [isVisible, setIsVisible] = useState(initialVisible);
  const hasBeenVisibleRef = useRef(initialVisible);
  const isVisibleRef = useRef(initialVisible); // Track current visibility state
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const currentRef = sectionRef.current;

    // Simple visibility check function - works in both directions every time
    const checkVisibility = () => {
      if (!currentRef) return;
      
      const rect = currentRef.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      const sectionTop = rect.top;
      const sectionBottom = rect.bottom;
      
      // Determine if section should be visible based purely on viewport position
      // Show when section is entering or in viewport (top < 70% of viewport and bottom > 0)
      const shouldBeVisible = sectionTop < viewportHeight * 0.7 && sectionBottom > -50;
      
      // Update visibility state if it changed
      if (shouldBeVisible && !isVisibleRef.current) {
        setIsVisible(true);
        isVisibleRef.current = true;
        hasBeenVisibleRef.current = true;
      } else if (!shouldBeVisible && isVisibleRef.current) {
        // Only hide if section is completely scrolled past (bottom is well above viewport)
        if (sectionBottom < -100) {
          setIsVisible(false);
          isVisibleRef.current = false;
        }
      }
    };

    // Set initial visibility
    if (initialVisible) {
      setIsVisible(true);
      isVisibleRef.current = true;
      hasBeenVisibleRef.current = true;
    } else {
      // Check immediately on mount - if section is already in viewport, make it visible
      // Use requestAnimationFrame to ensure DOM is ready
      requestAnimationFrame(() => {
        checkVisibility();
        // Check again after short delays to catch sections as they load
        setTimeout(checkVisibility, 50);
        setTimeout(checkVisibility, 150);
        setTimeout(checkVisibility, 300);
      });
    }

    // Check multiple times to ensure it catches
    const timeouts = [50, 100, 200, 400, 600, 1000, 1500].map(delay => 
      setTimeout(checkVisibility, delay)
    );
    
    // Fallback: If section hasn't become visible after 1 second, check again
    // This ensures sections don't stay hidden forever
    const fallbackTimeout = setTimeout(() => {
      if (!hasBeenVisibleRef.current && currentRef) {
        checkVisibility();
        // If still not visible after another check, make it visible if it exists
        setTimeout(() => {
          if (!hasBeenVisibleRef.current && currentRef) {
            const rect = currentRef.getBoundingClientRect();
            if (rect.height > 0) {
              setIsVisible(true);
              isVisibleRef.current = true;
              hasBeenVisibleRef.current = true;
            }
          }
        }, 500);
      }
    }, 1000);

    // Intersection Observer - trigger when section enters viewport
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // Always check visibility when intersection changes
          checkVisibility();
        });
      },
      {
        threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1],
        rootMargin: '0px 0px 0px 0px', // No margin, trigger exactly when entering viewport
      }
    );

    observer.observe(currentRef);

    // Scroll listener as backup - more frequent checks
    const handleScroll = () => {
      checkVisibility();
    };

    // Less throttled scroll handler for more responsive updates
    let scrollTimeout: NodeJS.Timeout;
    let lastScrollY = window.scrollY;
    const throttledScroll = () => {
      const currentScrollY = window.scrollY;
      // Only check if scroll position actually changed
      if (Math.abs(currentScrollY - lastScrollY) > 1) {
        lastScrollY = currentScrollY;
        clearTimeout(scrollTimeout);
        scrollTimeout = setTimeout(handleScroll, 16); // ~60fps
      }
    };

    window.addEventListener('scroll', throttledScroll, { passive: true });
    window.addEventListener('resize', checkVisibility, { passive: true });
    
    // Also check on load
    window.addEventListener('load', checkVisibility, { passive: true });

    return () => {
      timeouts.forEach(clearTimeout);
      clearTimeout(fallbackTimeout);
      observer.unobserve(currentRef);
      window.removeEventListener('scroll', throttledScroll);
      window.removeEventListener('resize', checkVisibility);
      window.removeEventListener('load', checkVisibility);
      clearTimeout(scrollTimeout);
    };
  }, [threshold, initialVisible]);

  return { sectionRef, isVisible };
}

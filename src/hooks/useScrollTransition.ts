'use client';

import { useEffect, useRef, useState } from 'react';

interface UseScrollTransitionOptions {
  sectionId: string;
  previousSectionId: string | null;
  initialVisible?: boolean;
}

export function useScrollTransition(options: UseScrollTransitionOptions) {
  const { sectionId, previousSectionId, initialVisible = false } = options;
  const [isVisible, setIsVisible] = useState(initialVisible);
  const isVisibleRef = useRef(initialVisible);
  const sectionRef = useRef<HTMLElement>(null);
  const lastScrollY = useRef(window.scrollY);

  useEffect(() => {
    // Get element by ID (primary) or use ref
    const currentRef = document.getElementById(sectionId) || sectionRef.current;
    if (!currentRef) {
      // Element not found yet, will be checked on next render
      return;
    }

    // Visibility check function based on 50% viewport logic
    const checkVisibility = () => {
      const currentSection = document.getElementById(sectionId);
      if (!currentSection) return;

      const viewportHeight = window.innerHeight;
      const viewportCenter = viewportHeight * 0.3; // 50% threshold for smooth transitions
      
      const currentRect = currentSection.getBoundingClientRect();
      const isCurrentPast50 = currentRect.bottom < viewportCenter;
      
      let shouldBeVisible = false;

      if (previousSectionId) {
        // For sections with a previous section
        const prevSection = document.getElementById(previousSectionId);
        if (!prevSection) return;
        
        const prevRect = prevSection.getBoundingClientRect();
        const isPrevPast50 = prevRect.bottom < viewportCenter;
        
        // Show current section when previous is past 50% AND current is not past 50%
        shouldBeVisible = isPrevPast50 && !isCurrentPast50;
      } else {
        // First section (Home) - visible until past 50%
        shouldBeVisible = !isCurrentPast50;
      }

      // Update visibility state if it changed
      if (shouldBeVisible !== isVisibleRef.current) {
        setIsVisible(shouldBeVisible);
        isVisibleRef.current = shouldBeVisible;
      }
    };

    // Set initial visibility
    if (initialVisible) {
      setIsVisible(true);
      isVisibleRef.current = true;
    } else {
      // Check immediately on mount
      requestAnimationFrame(() => {
        checkVisibility();
        setTimeout(checkVisibility, 50);
        setTimeout(checkVisibility, 150);
      });
    }

    // Intersection Observer for efficient detection
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(() => {
          checkVisibility();
        });
      },
      {
        threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1],
        rootMargin: '0px',
      }
    );

    observer.observe(currentRef);

    // Scroll listener with throttling
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const scrollDirection = currentScrollY > lastScrollY.current ? 'down' : 'up';
      lastScrollY.current = currentScrollY;
      
      checkVisibility();
    };

    let scrollTimeout: NodeJS.Timeout;
    const throttledScroll = () => {
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(handleScroll, 16); // ~60fps
    };

    window.addEventListener('scroll', throttledScroll, { passive: true });
    window.addEventListener('resize', checkVisibility, { passive: true });
    window.addEventListener('load', checkVisibility, { passive: true });

    // Initial check after a delay to ensure DOM is ready
    const initialCheckTimeout = setTimeout(checkVisibility, 100);

    return () => {
      clearTimeout(initialCheckTimeout);
      clearTimeout(scrollTimeout);
      observer.unobserve(currentRef);
      window.removeEventListener('scroll', throttledScroll);
      window.removeEventListener('resize', checkVisibility);
      window.removeEventListener('load', checkVisibility);
    };
  }, [sectionId, previousSectionId, initialVisible]);

  return { sectionRef, isVisible };
}

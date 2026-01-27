'use client';

import { useEffect } from 'react';

export default function ScrollbarStyle() {
  useEffect(() => {
    // Apply scrollbar styling on mobile
    const style = document.createElement('style');
    style.id = 'mobile-scrollbar-style';
    style.textContent = `
      * {
        scrollbar-width: thin !important;
        scrollbar-color: #ff0000 #0f0f0f !important;
      }
      html, body {
        scrollbar-width: thin !important;
        scrollbar-color: #ff0000 #0f0f0f !important;
      }
      ::-webkit-scrollbar {
        width: 6px !important;
        height: 6px !important;
      }
      ::-webkit-scrollbar-thumb {
        background: #ff0000 !important;
        border-radius: 3px !important;
      }
      ::-webkit-scrollbar-track {
        background: #0f0f0f !important;
      }
      html::-webkit-scrollbar,
      body::-webkit-scrollbar {
        width: 6px !important;
        height: 6px !important;
      }
      html::-webkit-scrollbar-thumb,
      body::-webkit-scrollbar-thumb {
        background: #ff0000 !important;
        border-radius: 3px !important;
      }
      html::-webkit-scrollbar-track,
      body::-webkit-scrollbar-track {
        background: #0f0f0f !important;
      }
    `;
    
    // Remove existing style if present
    const existing = document.getElementById('mobile-scrollbar-style');
    if (existing) {
      existing.remove();
    }
    
    document.head.appendChild(style);
    
    return () => {
      const styleToRemove = document.getElementById('mobile-scrollbar-style');
      if (styleToRemove) {
        styleToRemove.remove();
      }
    };
  }, []);

  return null;
}

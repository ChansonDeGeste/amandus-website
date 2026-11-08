import { useEffect, useRef } from 'react';

export function useStoryMotion() {
  const storyRef = useRef(null);

  useEffect(() => {
    const story = storyRef.current;
    if (!story) return;

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (!('IntersectionObserver' in window)) return;

    const reveals = [...story.querySelectorAll('[data-reveal]')];
    const observer = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        const visible = entry.intersectionRatio >= .18;
        entry.target.classList.toggle('is-visible', visible);
        entry.target.classList.toggle('is-exiting-above', !visible && entry.boundingClientRect.top < 0);
      }
    }, { threshold: [0, .18], rootMargin: '-6% 0px -6% 0px' });

    function syncMotionPreference() {
      story.classList.toggle('motion-ready', !reducedMotion.matches);
    }

    syncMotionPreference();
    reveals.forEach((element) => observer.observe(element));
    reducedMotion.addEventListener('change', syncMotionPreference);

    return () => {
      observer.disconnect();
      reducedMotion.removeEventListener('change', syncMotionPreference);
    };
  }, []);

  return storyRef;
}

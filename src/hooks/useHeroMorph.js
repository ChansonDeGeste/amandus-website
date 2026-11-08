import { useEffect, useRef } from 'react';

const mix = (start, end, amount) => start + (end - start) * amount;
const clamp = (value) => Math.min(1, Math.max(0, value));

export function useHeroMorph() {
  const heroRef = useRef(null);
  const wordsRef = useRef(null);
  const markRef = useRef(null);

  useEffect(() => {
    const hero = heroRef.current;
    const words = wordsRef.current;
    const mark = markRef.current;
    if (!hero || !words || !mark) return;

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    const targetProgress = () => clamp(window.scrollY / window.innerHeight);
    let progress = targetProgress();
    let lastScrollY = window.scrollY;

    function render() {
      const width = window.innerWidth;
      const height = window.innerHeight;
      const mobile = width <= 600;
      const bannerHeight = mobile ? 112 : 164;
      const bannerInset = 12;
      const textStartX = width * (mobile ? .06 : .30);
      const textStartY = height * (mobile ? .64 : .50);
      const markStartX = width * (mobile ? .57 : .69);
      const markStartY = height * (mobile ? .25 : .50);

      hero.style.height = `${mix(height, bannerHeight, progress)}px`;
      hero.style.top = `${bannerInset * progress}px`;
      hero.style.left = `${bannerInset * progress}px`;
      hero.style.right = `${bannerInset * progress}px`;
      hero.style.borderRadius = `${8 * progress}px`;
      hero.style.boxShadow = `0 ${12 * progress}px ${30 * progress}px rgba(0, 0, 0, ${.25 * progress})`;
      hero.style.setProperty('--image-opacity', String(1 - progress));
      hero.style.setProperty('--parallax-y', `${reducedMotion.matches ? 0 : -progress * 28}px`);
      hero.style.setProperty('--nav-opacity', String(clamp((progress - .78) / .22)));
      hero.style.setProperty('--nav-events', progress > .95 ? 'auto' : 'none');

      words.style.left = `${mix(textStartX, width * .05, progress)}px`;
      words.style.top = `${mix(textStartY, bannerHeight * .5, progress)}px`;
      words.style.setProperty('--word-scale', String(mix(1, mobile ? .46 : .28, progress)));

      mark.style.left = `${mix(markStartX, width * (mobile ? .45 : .20), progress)}px`;
      mark.style.top = `${mix(markStartY, bannerHeight * .5, progress)}px`;
      mark.style.setProperty('--mark-scale', String(mix(1, mobile ? .40 : .28, progress)));
    }

    function update() {
      lastScrollY = window.scrollY;
      progress = targetProgress();
      render();
    }

    render();
    document.addEventListener('scroll', update, { passive: true });
    window.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);
    reducedMotion.addEventListener('change', update);
    const scrollFallback = window.setInterval(() => {
      if (window.scrollY !== lastScrollY) update();
    }, 100);

    return () => {
      document.removeEventListener('scroll', update);
      window.removeEventListener('scroll', update);
      window.removeEventListener('resize', update);
      reducedMotion.removeEventListener('change', update);
      window.clearInterval(scrollFallback);
    };
  }, []);

  return { heroRef, wordsRef, markRef };
}

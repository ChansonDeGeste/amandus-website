import { useCallback, useEffect, useRef, useState } from 'react';
import BrandMark from './BrandMark.jsx';
import BrandText from './BrandText.jsx';
import HeroBackdrop from './HeroBackdrop.jsx';
import SectionNav from './SectionNav.jsx';
import '../styles/hero.css';

export default function HeroBanner() {
  const [coverClosed, setCoverClosed] = useState(false);
  const [morphComplete, setMorphComplete] = useState(false);
  const coverClosedRef = useRef(false);
  const transitioningRef = useRef(false);
  const transitionTimerRef = useRef(null);
  const touchStartY = useRef(0);
  const touchConsumedRef = useRef(false);
  const closeCover = useCallback((lockScroll = true) => {
    if (coverClosedRef.current) return;
    coverClosedRef.current = true;
    if (lockScroll) {
      transitioningRef.current = true;
      setMorphComplete(false);
      const duration = window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 0 : 600;
      transitionTimerRef.current = window.setTimeout(() => {
        transitioningRef.current = false;
        setMorphComplete(true);
      }, duration);
    } else {
      setMorphComplete(true);
    }
    setCoverClosed(true);
  }, []);
  function openCover(event) {
    event.preventDefault();
    window.clearTimeout(transitionTimerRef.current);
    transitioningRef.current = false;
    coverClosedRef.current = false;
    setMorphComplete(false);
    const previousScrollBehavior = document.documentElement.style.scrollBehavior;
    document.documentElement.style.scrollBehavior = 'auto';
    window.scrollTo(0, 0);
    requestAnimationFrame(() => { document.documentElement.style.scrollBehavior = previousScrollBehavior; });
    setCoverClosed(false);
  }

  useEffect(() => {
    if (window.scrollY > 0 || (window.location.hash && window.location.hash !== '#top')) closeCover(false);

    function onWheel(event) {
      if (transitioningRef.current) { event.preventDefault(); return; }
      if (coverClosedRef.current || event.deltaY <= 0) return;
      event.preventDefault();
      closeCover();
    }
    function onTouchStart(event) { touchStartY.current = event.touches[0]?.clientY ?? 0; touchConsumedRef.current = false; }
    function onTouchMove(event) {
      if (touchConsumedRef.current) { event.preventDefault(); return; }
      if (transitioningRef.current) { event.preventDefault(); return; }
      if (coverClosedRef.current || touchStartY.current - (event.touches[0]?.clientY ?? touchStartY.current) < 8) return;
      event.preventDefault();
      touchConsumedRef.current = true;
      closeCover();
    }
    function onTouchEnd() { touchConsumedRef.current = false; }
    function onKeyDown(event) {
      if (transitioningRef.current && ['ArrowDown', 'PageDown', ' ', 'End'].includes(event.key)) { event.preventDefault(); return; }
      if (coverClosedRef.current || !['ArrowDown', 'PageDown', ' ', 'End'].includes(event.key)) return;
      event.preventDefault();
      closeCover();
    }
    function onScroll() {
      if (coverClosedRef.current || window.scrollY <= 0) return;
      closeCover();
      const previousScrollBehavior = document.documentElement.style.scrollBehavior;
      document.documentElement.style.scrollBehavior = 'auto';
      window.scrollTo(0, 0);
      requestAnimationFrame(() => { document.documentElement.style.scrollBehavior = previousScrollBehavior; });
    }

    window.addEventListener('wheel', onWheel, { passive: false });
    window.addEventListener('touchstart', onTouchStart, { passive: true });
    window.addEventListener('touchmove', onTouchMove, { passive: false });
    window.addEventListener('touchend', onTouchEnd);
    window.addEventListener('keydown', onKeyDown);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      window.removeEventListener('wheel', onWheel);
      window.removeEventListener('touchstart', onTouchStart);
      window.removeEventListener('touchmove', onTouchMove);
      window.removeEventListener('touchend', onTouchEnd);
      window.removeEventListener('keydown', onKeyDown);
      window.removeEventListener('scroll', onScroll);
      window.clearTimeout(transitionTimerRef.current);
    };
  }, [closeCover]);

  return (
    <>
      <header className="site-header">
        <a className="site-brand" href="#top" onClick={openCover} aria-label="AmPro, back to cover"><img src="/images/amandus-mark.svg" alt="" /> <span>AmPro</span></a>
        <SectionNav />
        <a className="header-cta" href="#contact">Book a call</a>
      </header>
      <section className={`hero${coverClosed ? ' hero--closed' : ''}${morphComplete ? ' hero--finished' : ''}`} id="top" aria-labelledby="hero-title" aria-hidden={coverClosed}>
        <HeroBackdrop />
        <BrandText coverClosed={coverClosed} onBookCall={() => closeCover(false)} />
        <BrandMark />
      </section>
    </>
  );
}

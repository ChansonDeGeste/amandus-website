import BrandMark from './BrandMark.jsx';
import BrandText from './BrandText.jsx';
import HeroBackdrop from './HeroBackdrop.jsx';
import SectionNav from './SectionNav.jsx';
import { useHeroMorph } from '../hooks/useHeroMorph.js';
import '../styles/hero.css';

export default function HeroBanner() {
  const { heroRef, wordsRef, markRef } = useHeroMorph();

  return (
    <header className="hero" ref={heroRef} aria-labelledby="hero-title">
      <HeroBackdrop />
      <BrandText elementRef={wordsRef} />
      <BrandMark elementRef={markRef} />
      <SectionNav />
    </header>
  );
}

import { useEffect, useState } from 'react';
import { sectionGroups } from '../data/sections.js';

export default function SectionNav() {
  const [activeId, setActiveId] = useState(sectionGroups[0].id);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    let lastScrollY = -1;

    function updateActive() {
      lastScrollY = window.scrollY;
      const marker = window.scrollY + Math.min(window.innerHeight * .35, 320);
      let current = sectionGroups[0].id;

      for (const group of sectionGroups) {
        const section = document.getElementById(group.id);
        if (section && section.getBoundingClientRect().top + window.scrollY <= marker) {
          current = group.id;
        }
      }
      setActiveId(current);
    }

    updateActive();
    document.addEventListener('scroll', updateActive, { passive: true });
    window.addEventListener('scroll', updateActive, { passive: true });
    window.addEventListener('resize', updateActive);
    const fallback = window.setInterval(() => {
      if (window.scrollY !== lastScrollY) updateActive();
    }, 150);

    return () => {
      document.removeEventListener('scroll', updateActive);
      window.removeEventListener('scroll', updateActive);
      window.removeEventListener('resize', updateActive);
      window.clearInterval(fallback);
    };
  }, []);

  function goTo(id) {
    if (!id) return;
    setActiveId(id);
    setMenuOpen(false);
    history.pushState(null, '', `#${id}`);
    document.getElementById(id)?.scrollIntoView({
      behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth',
      block: 'start',
    });
  }

  return (
    <div className="site-nav">
      <button className="menu-toggle" type="button" aria-expanded={menuOpen} aria-controls="site-menu" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? 'Close' : 'Menu'}</button>
      <nav className={`site-nav-links${menuOpen ? ' is-open' : ''}`} id="site-menu" aria-label="Main navigation">
        {sectionGroups.map(({ id, label }) => (
          <a
            href={`#${id}`}
            key={id}
            aria-current={activeId === id ? 'location' : undefined}
            onClick={(event) => { event.preventDefault(); goTo(id); }}
          >
            {label}
          </a>
        ))}
      </nav>
    </div>
  );
}

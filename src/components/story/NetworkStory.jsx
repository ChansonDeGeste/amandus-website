import { useRef, useState } from 'react';

const audiences = [
  {
    id: 'venues', label: 'Pubs & Clubs', title: 'Independent Pubs and Clubs Benefit From:',
    intro: 'Keep your independence while making more of every purchasing decision.',
    points: ['Lower costs', 'Potential rebates and incentives that put more money in your pocket', 'Greater buying power without sacrificing your independence', 'Peer collaboration with a trusted network of experienced operators', 'Market insights and industry expertise to make smarter decisions'],
  },
  {
    id: 'brands', label: 'National Brands', title: 'National Brands Benefit From:',
    intro: 'Build stronger relationships with independent operators through a connected network.',
    points: ['Increased market share through a growing network of pubs and clubs', 'Stronger loyalty driven by long-term partnerships', 'Higher product adoption across engaged pubs and clubs', 'Direct access to independent operators for meaningful feedback and relationships', 'More predictable demand through collective purchasing'],
  },
  {
    id: 'vendors', label: 'Local Vendors', title: 'Local Vendors Benefit From:',
    intro: 'Reach more nearby pubs and clubs with partnerships built to last.',
    points: ['Preferred venue relationships that strengthen local partnerships', 'Higher sales volume from committed member purchases', 'Improved customer retention through long-term business relationships', 'Less price shopping and greater focus on value over cost', 'New business opportunities from venues entering the network'],
  },
];

export default function NetworkStory() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const tabRefs = useRef([]);

  function onTabKeyDown(event, index) {
    let nextIndex = index;
    if (event.key === 'ArrowRight') nextIndex = (index + 1) % audiences.length;
    else if (event.key === 'ArrowLeft') nextIndex = (index - 1 + audiences.length) % audiences.length;
    else if (event.key === 'Home') nextIndex = 0;
    else if (event.key === 'End') nextIndex = audiences.length - 1;
    else return;
    event.preventDefault();
    setSelectedIndex(nextIndex);
    tabRefs.current[nextIndex]?.focus();
  }

  return (
    <section className="network-story story-dark" id="network" aria-label="Who benefits from Amandus">
      <div className="story-inner network-grid">
        <div className="network-rail">
          <p className="eyebrow story-reveal" data-reveal>The Ecosystem</p>
          <h2 className="story-reveal" data-reveal>A Network Designed to <span>Benefit Everyone</span></h2>
          <p className="story-reveal" data-reveal>Amandus is purposefully positioned to create value throughout the entire hospitality ecosystem.</p>
          <div className="network-graphic story-reveal" data-reveal>
            <img src="/images/benefit-everyone.svg" alt="Benefit Everyone graphic showing hospitality, partnerships and community" loading="lazy" decoding="async" />
          </div>
        </div>
        <div className="network-content">
          <div className="network-tabs" role="tablist" aria-label="Choose your role">
            {audiences.map((audience, index) => (
              <button
                type="button"
                role="tab"
                id={`network-tab-${audience.id}`}
                aria-controls={`network-panel-${audience.id}`}
                aria-selected={selectedIndex === index}
                tabIndex={selectedIndex === index ? 0 : -1}
                onClick={() => setSelectedIndex(index)}
                onKeyDown={(event) => onTabKeyDown(event, index)}
                ref={(node) => { tabRefs.current[index] = node; }}
                key={audience.id}
              >{audience.label}</button>
            ))}
          </div>
          <div className="network-panel-stack">
            {audiences.map((audience, index) => (
              <div className={`network-panel${selectedIndex === index ? ' is-active' : ''}`} role="tabpanel" id={`network-panel-${audience.id}`} aria-labelledby={`network-tab-${audience.id}`} aria-hidden={selectedIndex !== index} tabIndex={selectedIndex === index ? 0 : -1} key={audience.id}>
                <h3>{audience.title}</h3>
                <p className="story-lead">{audience.intro}</p>
                <ul className="network-list">
                  {audience.points.map((point) => <li key={point}>{point}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

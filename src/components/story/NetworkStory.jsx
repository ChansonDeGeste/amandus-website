const audiences = [
  {
    id: 'venues', number: '05', label: 'Venues', title: 'Venues benefit from:',
    intro: 'AmPro creates value across the entire hospitality ecosystem.',
    points: ['Lower costs', 'Annual rebates & incentives that puts more moeny in your pocket', 'Greater buying power without sacrificing your independence', 'Peer collaboration with a trusted network of experienced operators', 'Market insights and industry expertise to make smarter decisions'],
  },
  {
    id: 'brands', number: '06', label: 'National Brands', title: 'National brands benefit from:',
    intro: 'AmPro creates value across the entire hospitality ecosystem.',
    points: ['increased market share through a growing venue network', 'Stronger venue loyalty driven by long-term partnerships', 'Higher product adoption across engaged member companies', 'Direct access to independent operators for meaningful feedback and relationships', 'More predictable demand through collective purchasing'],
  },
  {
    id: 'vendors', number: '07', label: 'Local Vendors', title: 'Local vendors benefit from:',
    intro: 'AmPro creates value across the entire hospitality ecosystem.',
    points: ['Preferred venue relationships that strengthen local partnerships', 'Higher sales volume from committed member purchases', 'Improved customer retention through long-term business relationships', 'Less price shopping and greater focus on value over cost', 'New business opportunities from venues entering the network'],
  },
];

export default function NetworkStory() {
  return (
    <div className="network-story story-light">
      <div className="story-inner network-grid">
        <div className="network-rail">
          <p className="eyebrow story-reveal" data-reveal>The ecosystem</p>
          <h2 className="story-reveal" data-reveal>A Network designed to <span>benefit everyone</span></h2>
          <p className="story-reveal" data-reveal>AmPro creates value across the entire hospitality ecosystem.</p>
        </div>
        <div className="network-panels">
          {audiences.map((audience) => (
            <section className="network-panel" id={audience.id} aria-labelledby={`${audience.id}-title`} key={audience.id}>
              <div className="story-reveal" data-reveal>
                <p className="eyebrow">{audience.number} / {audience.label}</p>
                <h3 id={`${audience.id}-title`}>{audience.title}</h3>
                <p className="story-lead">{audience.intro}</p>
                <ul className="network-list">
                  {audience.points.map((point) => <li key={point}>{point}</li>)}
                </ul>
              </div>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
}

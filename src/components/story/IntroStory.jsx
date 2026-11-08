const principles = [
  ['Independent', 'We work for members, not suppliers.'],
  ['Strategic', 'Tailored strategies built around how your business actually operates.'],
  ['Commercial', 'We look beyond price to optimise the full commerical outcome.'],
  ['Protection', 'More margin, more control & more flexability.'],
];

export default function IntroStory() {
  return (
    <>
      <section className="story-section story-intro story-dark" id="overview" aria-labelledby="overview-title">
        <div className="story-inner intro-grid">
          <div>
            <p className="eyebrow story-reveal" data-reveal>Amandus Procurement Group</p>
            <h2 className="story-reveal" data-reveal id="overview-title">Power in numbers.<br /><span>Savings at scale.</span></h2>
            <p className="story-lead story-reveal" data-reveal>We pool the buying power of independent clubs so more value stays in your business.</p>
          </div>
        </div>
      </section>

      <section className="story-section story-independent story-light" id="independent" aria-labelledby="independent-title">
        <div className="story-inner">
          <p className="eyebrow story-reveal" data-reveal>01 / The principle</p>
          <h2 className="story-display story-reveal" data-reveal id="independent-title">Independent doesn’t<br />mean buying <span>alone.</span></h2>
          <p className="story-lead story-reveal" data-reveal>Ampro was built to level the playing field, giving independent hospitality groups access to the pricing, purchasing power and partnerships typically reserved for larger companies - all while maintaining complete control of their business.</p>
          <div className="principle-grid">
            {principles.map(([title, copy], index) => (
              <article className="principle-card story-reveal" data-reveal key={title}>
                <span className="card-index">0{index + 1}</span>
                <h3>{title}</h3>
                <p>{copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

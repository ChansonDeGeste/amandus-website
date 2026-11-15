const principles = [
  ['Independent', 'We work for members, not suppliers.'],
  ['Strategic', 'Tailored strategies built around how your business actually operates.'],
  ['Commercial', 'We look beyond price to optimise the full commercial outcome.'],
  ['Protection', 'More margin, more control and more flexibility.'],
];

export default function IntroStory() {
  return (
    <>
      <section className="story-section story-intro story-dark" id="overview" aria-labelledby="overview-title">
        <div className="story-inner intro-grid">
          <div>
            <p className="eyebrow story-reveal" data-reveal>Amandus Procurement Group</p>
            <h2 className="story-reveal" data-reveal id="overview-title">Power in numbers.<br /><span>Savings at scale.</span></h2>
            <p className="story-lead story-reveal" data-reveal>We pool the buying power of independent pubs and clubs so more value stays in your business.</p>
            <a className="button-link hero-story-cta" href="#contact">Book a call <span className="material-symbols-outlined" aria-hidden="true">open_in_new</span></a>
          </div>
        </div>
      </section>

      <section className="story-section story-independent story-light" id="independent" aria-labelledby="independent-title">
        <div className="story-inner">
          <p className="eyebrow story-reveal" data-reveal>The principle</p>
          <h2 className="story-display story-reveal" data-reveal id="independent-title">Independent doesn’t<br />mean buying <span>alone.</span></h2>
          <p className="story-lead story-reveal" data-reveal>AmPro was built to level the playing field, giving independent pubs and clubs access to the pricing, purchasing power and partnerships typically reserved for larger companies, while maintaining control of their business.</p>
          <div className="principle-grid">
            {principles.map(([title, copy]) => (
              <article className="principle-card story-reveal" data-reveal key={title}>
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

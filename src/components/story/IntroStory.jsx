const steps = [
  ['Client', 'Retains purchasing decisions and places orders directly with suppliers.'],
  ['Amandus', 'Analyses spend, negotiates pricing and contracts, and manages supplier performance.'],
  ['Supplier', 'Supplies goods and services, fulfils orders and invoices the client directly.'],
];

export default function IntroStory() {
  return (
    <>
      <section className="story-section story-intro story-light" id="overview" aria-labelledby="overview-title">
        <div className="story-inner intro-grid">
          <div>
            <p className="eyebrow story-reveal" data-reveal>Amandus Procurement Group</p>
            <h2 className="story-reveal" data-reveal id="overview-title">Power in Numbers.<br /><span>Savings at Scale.</span></h2>
            <p className="story-lead story-reveal" data-reveal>We pool the buying power of independent hospitality venues so more value stays in your business.</p>
            <a className="button-link hero-story-cta" href="#contact">Request Call <span className="material-symbols-outlined" aria-hidden="true">open_in_new</span></a>
          </div>
        </div>
      </section>

      <section className="story-section story-independent story-dark" id="independent" aria-labelledby="independent-title">
        <div className="story-inner">
          <p className="eyebrow story-reveal" data-reveal>The Principle</p>
          <h2 className="story-display story-reveal" data-reveal id="independent-title">Independence Doesn’t<br />Mean Buying <span>Alone.</span></h2>
          <p className="story-lead story-reveal" data-reveal>Amandus was built to level the playing field, giving independent hospitality groups access to the pricing, purchasing power and partnerships typically reserved for larger companies - all while maintaining complete control of their business.</p>
          <div className="process-line">
            {steps.map(([title, copy]) => (
              <article className="process-step story-reveal" data-reveal key={title}>
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

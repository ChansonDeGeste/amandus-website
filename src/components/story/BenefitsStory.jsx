const benefits = [
  ['Strengthen your bottom line', 'Leverage the collective purchasing power of our member network to access competitive supplier pricing, preferential terms and meaningful savings across your operating expenditure.'],
  ['Save more time', 'We undertake the research, supplier comparisons and contract negotiations, allowing your team to focus on what matters most.'],
  ['More Informed Decisions', 'Gain greater visibility over your expenditure through market intelligence, supplier benchmarking and practical insights that help identify opportunities and guide purchasing decisions.'],
  ['Procurement Tailored to You', 'We understand that no two venues are alike and develop purchasing strategies around your individual requirements, operating priorities and existing supplier relationships.'],
  ['Savings First', "We prove our value before collecting our fees. You won't pay a cent until your demonstrated savings exceed what we charge."],
  ['Complete Transparency', 'Clear advice, disclosed commissions and no hidden commercial incentives.'],
];

const steps = [
  ['01', 'Client', 'Orders placed directly with supplier'],
  ['02', 'AmPro', 'Negotiating contracts and governing supplier performance'],
  ['03', 'Supplier', 'Direct goods and invoicing'],
];

const metrics = [
  ['EBITDAR', '+0%'],
  ['WAGES', '+ 0%'],
  ['REVENUE', '+6%'],
  ['UTILITIES', '+ 7%'],
];

export default function BenefitsStory() {
  return (
    <>
      <section className="story-section story-benefits story-light" id="benefits" aria-labelledby="benefits-title">
        <div className="story-inner">
          <p className="eyebrow story-reveal" data-reveal>02 / The advantage</p>
          <h2 className="story-display story-reveal" data-reveal id="benefits-title">We do the heavy lifting.<br /><span>You maintain control.</span></h2>
          <p className="story-lead story-reveal" data-reveal>Together, we'll work to drastically cut down on the amount of time it takes to source the goods and services you need, realize cost savings and drive value. You keep running your business - we keep the buying side sharp.</p>
          <div className="benefit-grid">
            {benefits.map(([title, copy], index) => (
              <article className="benefit-card story-reveal" data-reveal key={title}>
                <span className="card-index">0{index + 1}</span>
                <h3>{title}</h3>
                <p>{copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="story-section story-process story-light" id="process" aria-labelledby="process-title">
        <div className="story-inner">
          <p className="eyebrow story-reveal" data-reveal>03 / The process</p>
          <h2 className="story-display story-reveal" data-reveal id="process-title">Simple Enough to Explain in 60 Seconds. <span>Effective Enough to move the bottom line.</span></h2>
          <div className="process-line">
            {steps.map(([number, title, copy]) => (
              <article className="process-step story-reveal" data-reveal key={number}>
                <span className="process-number">{number}</span>
                <h3>{title}</h3>
                <p>{copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="story-section story-market story-dark" id="market" aria-labelledby="market-title">
        <div className="story-inner market-grid">
          <div className="story-reveal" data-reveal>
            <p className="eyebrow">04 / The context</p>
            <h2 className="story-display" id="market-title">It’s not about the dollars you make, it’s about the dollars you <span>keep.</span></h2>
            <p className="story-lead">In today's challenging economic environment, many hospitality operators are working harder than ever to grow revenue, yet their operating earnings remain largely unchanged.</p>
            <p className="market-copy">With mounting cost pressures, controlling expenditure has never been more important.</p>
            <p className="market-copy">Amandus helps operators protect the value of every dollar they earn.</p>
          </div>
          <div className="market-visual story-reveal" data-reveal>
            <p className="market-caption">VAR. FY 25 &amp; 26</p>
            <div className="metric-grid">
              {metrics.map(([label, value]) => (
                <div className="metric" key={label}><span>{label}</span><strong>{value}</strong></div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

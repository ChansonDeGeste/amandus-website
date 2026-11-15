const benefits = [
  ['Strengthen your bottom line', 'Leverage the collective purchasing power of our member network to access competitive supplier pricing, preferential terms and meaningful savings across your operating expenditure.'],
  ['Save more time', 'We undertake the research, supplier comparisons and contract negotiations, allowing your team to focus on what matters most.'],
  ['More Informed Decisions', 'Gain greater visibility over your expenditure through market intelligence, supplier benchmarking and practical insights that help identify opportunities and guide purchasing decisions.'],
  ['Procurement Tailored to You', 'We understand that no two venues are alike and develop purchasing strategies around your individual requirements, operating priorities and existing supplier relationships.'],
  ['A clear commercial case', 'We identify potential savings and discuss the commercial model with you before you decide how to proceed.'],
  ['Complete Transparency', 'Clear advice, disclosed commissions and no hidden commercial incentives.'],
];

const steps = [
  ['Client', 'Retains purchasing decisions and places orders directly with suppliers.'],
  ['AmPro', 'Analyses spend, negotiates pricing and contracts, and manages supplier performance.'],
  ['Supplier', 'Supplies goods and services, fulfils orders and invoices the client directly.'],
];

const measures = [
  ['Supplier spend', 'Understand your current costs'],
  ['Savings', 'Compare negotiated terms with your baseline'],
  ['EBITDA', 'Review the effect on operating earnings'],
];

export default function BenefitsStory() {
  return (
    <>
      <section className="story-section story-benefits story-light" id="benefits" aria-labelledby="benefits-title">
        <div className="story-inner">
          <p className="eyebrow story-reveal" data-reveal>The advantage</p>
          <h2 className="story-display story-reveal" data-reveal id="benefits-title">We do the heavy lifting.<br /><span>You maintain control.</span></h2>
          <p className="story-lead story-reveal" data-reveal>Together, we'll cut the time it takes to source the goods and services you need, realise cost savings and drive value. You keep running your business; we keep the buying side sharp.</p>
          <div className="benefit-grid">
            {benefits.map(([title, copy]) => (
              <article className="benefit-card story-reveal" data-reveal key={title}>
                <h3>{title}</h3>
                <p>{copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="story-section story-process story-light" id="process" aria-labelledby="process-title">
        <div className="story-inner">
          <p className="eyebrow story-reveal" data-reveal>The process</p>
          <h2 className="story-display story-reveal" data-reveal id="process-title">Simple by design. <span>Rigorous in results.</span></h2>
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

      <section className="story-section story-market story-dark" id="market" aria-labelledby="market-title">
        <div className="story-inner market-grid">
          <div className="story-reveal" data-reveal>
            <p className="eyebrow">The context</p>
            <h2 className="story-display" id="market-title">It’s not about the dollars you make, it’s about the dollars you <span>keep.</span></h2>
            <p className="story-lead">In today's challenging economic environment, many hospitality operators are working harder than ever to grow revenue, yet their operating earnings remain largely unchanged.</p>
            <p className="market-copy">With mounting cost pressures, controlling expenditure has never been more important.</p>
            <p className="market-copy">Amandus helps operators protect the value of every dollar they earn.</p>
          </div>
          <div className="market-visual story-reveal" data-reveal>
            <p className="market-caption">What we can measure together</p>
            <div className="metric-grid">
              {measures.map(([label, value]) => (
                <div className="metric" key={label}><span>{label}</span><strong>{value}</strong></div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

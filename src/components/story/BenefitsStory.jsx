const benefits = [
  ['Strengthen Your Bottom Line', 'Leverage the collective purchasing power of our member network to access competitive supplier pricing, preferential terms and meaningful savings across your operating expenditure.'],
  ['Save More Time', 'We undertake the research, supplier comparisons and contract negotiations, allowing your team to focus on what matters most.'],
  ['More Informed Decisions', 'Gain greater visibility over your expenditure through market intelligence, supplier benchmarking and practical insights that help identify opportunities and guide purchasing decisions.'],
  ['Procurement Tailored to You', 'We understand that no two venues are alike and develop purchasing strategies around your individual requirements, operating priorities and existing supplier relationships.'],
  ['A Clear Commercial Case', 'We identify potential savings and discuss the commercial model with you before you decide how to proceed.'],
  ['Complete Transparency', 'Clear advice, disclosed commissions and no hidden commercial incentives.'],
];

export default function BenefitsStory() {
  return (
    <section className="story-section story-benefits story-light" id="benefits" aria-labelledby="benefits-title">
      <div className="story-inner">
        <p className="eyebrow story-reveal" data-reveal>The Advantage</p>
        <h2 className="story-display story-reveal" data-reveal id="benefits-title">We Do the Heavy Lifting.<br /><span>You Maintain Control.</span></h2>
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
  );
}

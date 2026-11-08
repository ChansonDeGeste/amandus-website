import ContactForm from './ContactForm.jsx';

const partnerSteps = [
  ['Submit your Application', 'Fill out this short form so we can learn more about your business and product offering.'],
  ['Connect with our team', 'Once approved, we’ll schedule a discovery call to explore how your goals align with our network.'],
  ['Start building partnerships', 'Get involved, gain visibility and grow your business through strategic connections with AmPro members.'],
];

export default function ContactStory() {
  return (
    <>
      <section className="story-section contact-story story-dark" id="discovery-call" aria-labelledby="discovery-title">
        <div className="story-inner contact-grid">
          <div className="story-reveal" data-reveal>
            <p className="eyebrow">12 / Request Call</p>
            <h2 className="story-display" id="discovery-title">Ready to unlock savings and grow your bottom line?</h2>
            <p className="story-lead">Book a no-obligation discovery call to learn how group purchasing can work for you.</p>
          </div>
          <div className="contact-panel story-reveal" data-reveal>
            <ContactForm />
          </div>
        </div>
      </section>

      <section className="story-section partner-story story-light" id="partner-application" aria-labelledby="partner-title">
        <div className="story-inner partner-grid">
          <div className="story-reveal" data-reveal>
            <p className="eyebrow">13 / Request Call</p>
            <h2 className="story-display" id="partner-title">Ready to unlock savings and grow your bottom line?</h2>
            <div className="partner-steps">
              {partnerSteps.map(([title, copy], index) => (
                <div className="partner-step" key={title}>
                  <span>{String(index + 1).padStart(2, '0')}</span>
                  <div><h3>{title}</h3><p>{copy}</p></div>
                </div>
              ))}
            </div>
          </div>
          <div className="contact-panel contact-panel--light story-reveal" data-reveal>
            <ContactForm partner />
          </div>
        </div>
      </section>
    </>
  );
}

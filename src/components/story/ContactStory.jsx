import ContactForm from './ContactForm.jsx';

export default function ContactStory() {
  return (
    <section className="story-section contact-story story-dark" id="contact" aria-labelledby="contact-title">
      <div className="story-inner contact-grid">
        <div className="story-reveal" data-reveal>
          <p className="eyebrow">Get in Touch</p>
          <h2 className="story-display" id="contact-title">Let's Talk About What Your Business Needs.</h2>
          <p className="story-lead">Whether you're an independent hospitality venue, a local vendor or a national brand, we'd like to hear from you.</p>
          <p className="contact-direct">Call Paddy on <a href="tel:0434872210">0434 872 210</a> or Charles on <a href="tel:0487693602">0487 693 602</a>.</p>
        </div>
        <div className="contact-panel story-reveal" data-reveal>
          <ContactForm />
        </div>
      </div>
    </section>
  );
}

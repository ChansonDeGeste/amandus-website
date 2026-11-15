import ContactForm from './ContactForm.jsx';

export default function ContactStory() {
  return (
    <section className="story-section contact-story story-dark" id="contact" aria-labelledby="contact-title">
      <div className="story-inner contact-grid">
        <div className="story-reveal" data-reveal>
          <p className="eyebrow">Get in touch</p>
          <h2 className="story-display" id="contact-title">Let's talk about what your business needs.</h2>
          <p className="story-lead">Whether you're an independent pub or club, a local vendor or a national brand, we'd like to hear from you.</p>
          <p className="contact-direct">Prefer email? <a href="mailto:paddy.dalton@ampro.com">paddy.dalton@ampro.com</a></p>
        </div>
        <div className="contact-panel story-reveal" data-reveal>
          <ContactForm />
        </div>
      </div>
    </section>
  );
}

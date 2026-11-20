export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="story-inner footer-inner">
        <div className="footer-about">
          <a className="site-brand footer-brand" href="/" aria-label="Amandus, back to home"><img src="/images/amandus-mark.svg" alt="" /><span>Amandus</span></a>
          <p>Better buying for independent hospitality venues.</p>
        </div>
        <div className="footer-contacts">
          <strong>Contact</strong>
          <div className="footer-person">
            <span>Paddy Dalton</span>
            <a href="tel:0434872210">0434 872 210</a>
          </div>
          <div className="footer-person">
            <span>Charles Beatty</span>
            <a href="tel:0487693602">0487 693 602</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

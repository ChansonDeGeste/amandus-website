export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="story-inner footer-inner">
        <div className="footer-about">
          <a className="site-brand footer-brand" href="/" aria-label="AmPro, back to home"><img src="/images/amandus-mark.svg" alt="" /><span>AmPro</span></a>
          <p>Better buying for independent pubs and clubs.</p>
        </div>
        <div className="footer-contacts">
          <strong>Contact</strong>
          <div className="footer-person">
            <span>Paddy Dalton</span>
            <a href="mailto:paddy.dalton@ampro.com">paddy.dalton@ampro.com</a>
            <a href="tel:0434872210">0434 872 210</a>
          </div>
          <div className="footer-person">
            <span>Charles Beatty</span>
            <a href="mailto:charles.beatty@ampro.com">charles.beatty@ampro.com</a>
            <a href="tel:0434872210">0434 872 210</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

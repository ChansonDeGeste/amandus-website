export default function BrandText({ elementRef, coverClosed, onBookCall }) {
  return (
    <div className="hero__words" ref={elementRef}>
      <div className="hero__words-reveal">
        <h1 id="hero-title">
          Amandus<br />Procurement<br />Group
        </h1>
        <p>AmPro</p>
        <a className="hero-call" href="#contact" onClick={onBookCall} tabIndex={coverClosed ? -1 : undefined}>Request Call <span className="material-symbols-outlined" aria-hidden="true">open_in_new</span></a>
      </div>
    </div>
  );
}

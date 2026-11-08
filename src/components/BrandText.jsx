export default function BrandText({ elementRef }) {
  return (
    <div className="hero__words" ref={elementRef}>
      <div className="hero__words-reveal">
        <h1 id="hero-title">
          Amandus<br />Procurement<br />Group
        </h1>
        <p>AmPro</p>
      </div>
    </div>
  );
}

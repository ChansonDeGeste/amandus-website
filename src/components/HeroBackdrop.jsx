export default function HeroBackdrop() {
  return (
    <div className="hero__visual" aria-hidden="true">
      <div className="hero__parallax">
        <div className="hero__visual-reveal">
          <img className="hero__building" src="/images/hero-background.png" alt="" />
          <div className="hero__wash" />
        </div>
      </div>
    </div>
  );
}

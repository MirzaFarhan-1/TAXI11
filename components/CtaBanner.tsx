import RevealWrapper from './RevealWrapper';

export default function CtaBanner() {
  return (
    <RevealWrapper>
      <div className="cta-banner">
        <div className="container">
          <div className="section-eyebrow" style={{ justifyContent: 'center' }}>
            <span>Ready to travel?</span>
          </div>
          <h2 className="section-title">
            Book Your <span className="gold">Taxi Now</span>
          </h2>
          <p className="cta-serif">
            Call us for an instant quote — available every hour of every day.
          </p>
          <a href="tel:07981100009" className="cta-phone" aria-label="Call 07981 100009">
            07981 100009
          </a>
          <div className="cta-btns">
            <a href="tel:07981100009" className="btn" style={{ fontSize: 15, padding: '16px 36px' }}>
              Call Now
            </a>
            <a href="#booking" className="btn btn-outline" style={{ fontSize: 15, padding: '16px 36px' }}>
              Book Online
            </a>
          </div>
        </div>
      </div>
    </RevealWrapper>
  );
}

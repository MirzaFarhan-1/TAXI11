import RevealWrapper from './RevealWrapper';

const PhoneIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ width: 18, height: 18 }}>
    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.22 1.18 2 2 0 012.22 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 7.09a16 16 0 006 6l.56-.56a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92z" />
  </svg>
);

const PinIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ width: 18, height: 18 }}>
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

const ClockIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ width: 18, height: 18 }}>
    <circle cx="12" cy="12" r="10" />
    <polyline points="12 6 12 12 16 14" />
  </svg>
);

const MailIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ width: 18, height: 18 }}>
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
    <polyline points="22,6 12,13 2,6" />
  </svg>
);

export default function Contact() {
  return (
    <section className="contact-section" id="contact" aria-labelledby="contact-heading">
      <div className="container">
        <RevealWrapper>
          <div className="section-eyebrow"><span>Get in touch</span></div>
          <h2 id="contact-heading" className="section-title">
            Contact <span className="gold">Us</span>
          </h2>
        </RevealWrapper>

        <div className="contact-grid">
          <RevealWrapper>
            <div className="contact-info-card">
              <h3>Contact Information</h3>

              <div className="contact-item">
                <div className="contact-icon"><PhoneIcon /></div>
                <div className="contact-item-text">
                  <h4>Phone — Available 24/7</h4>
                  <a href="tel:07981100009">07981 100009</a>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon"><PinIcon /></div>
                <div className="contact-item-text">
                  <h4>Based At</h4>
                  <p>South Street, Bell St<br />St Andrews, KY16 9UR<br />Scotland</p>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon"><ClockIcon /></div>
                <div className="contact-item-text">
                  <h4>Hours</h4>
                  <p>24 hours a day<br />7 days a week<br />Including Bank Holidays</p>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon"><MailIcon /></div>
                <div className="contact-item-text">
                  <h4>Email</h4>
                  <p>
                    <a href="mailto:info@standrewstaxis.co.uk" style={{ color: 'var(--gold)', fontSize: 15, fontWeight: 700 }}>
                      info@standrewstaxis.co.uk
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </RevealWrapper>

          <RevealWrapper>
            <div className="map-embed">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2228.8437200025817!2d-2.7991!3d56.3397!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x488612d7a71a3c8d%3A0x7b5b6c58e30ab8e6!2sBell%20St%2C%20St%20Andrews!5e0!3m2!1sen!2suk!4v1690000000000"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="St Andrews 24/7 Taxi Service location — Bell Street, St Andrews KY16"
              />
            </div>
          </RevealWrapper>
        </div>
      </div>
    </section>
  );
}

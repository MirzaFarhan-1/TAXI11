import RevealWrapper from './RevealWrapper';

const faqs = [
  {
    q: 'How do I book a taxi in St Andrews?',
    a: (
      <>
        The easiest way is to call us directly on{' '}
        <a href="tel:07981100009">07981 100009</a> — we&apos;re available 24 hours a day, 7 days
        a week, every day of the year. You can also submit our online booking form and we&apos;ll
        call you back to confirm. We serve all areas of St Andrews including the town centre, South
        Street, the Scores, the Links and surrounding Fife postcodes.
      </>
    ),
  },
  {
    q: 'What is the cost of a taxi from St Andrews to Edinburgh Airport?',
    a: (
      <>
        We offer fixed-price airport transfers from St Andrews to Edinburgh Airport (EDI) —
        approximately 55 miles. Prices are agreed upfront with no surge pricing. We track your
        flight so we&apos;re always ready when you arrive or depart. Call{' '}
        <a href="tel:07981100009">07981 100009</a> for a free quote.
      </>
    ),
  },
  {
    q: 'Do you do taxi transfers to St Andrews Old Course & golf courses?',
    a: 'Yes — golf transfers are one of our most popular services. We take golfers to the Old Course, Castle Course, Strathtyrum, Jubilee and Eden courses, as well as Kingsbarns, Fairmont St Andrews, Crail and other top Fife golf venues. We know the area inside out and can accommodate clubs and luggage comfortably.',
  },
  {
    q: 'Are you available late at night and early morning in St Andrews?',
    a: 'Absolutely. We never close. Whether you need a taxi at 3am after a night out on Market Street, or a 4am run to catch an early flight from Edinburgh, we\'re always available. University students, residents and visitors alike trust us for reliable round-the-clock service throughout St Andrews and Fife.',
  },
  {
    q: 'What areas and towns do you cover from St Andrews?',
    a: 'Based in St Andrews KY16, we cover all of Fife: Cupar, Anstruther, Crail, Pittenweem, Leuchars, Guardbridge, Strathkinness, Cellardyke, Dundee, Perth, Kirkcaldy, Glenrothes and beyond. We also run long-distance journeys to Edinburgh, Glasgow, Aberdeen and all Scottish airports.',
  },
  {
    q: 'Is your taxi service licensed and insured in Fife?',
    a: 'Yes. All our vehicles are fully licensed with Fife Council and our drivers hold valid private hire licences. We carry full public hire insurance and every driver is PVG-checked and trained. We are compliant with all Scottish private hire regulations, giving you complete peace of mind.',
  },
];

export default function FAQ() {
  return (
    <section className="faq-section" aria-labelledby="faq-heading">
      <div className="container">
        <RevealWrapper>
          <div className="section-eyebrow"><span>Common questions</span></div>
          <h2 id="faq-heading" className="section-title">
            Frequently Asked <span className="gold">Questions</span>
          </h2>
          <p className="section-sub">
            Everything you need to know about our St Andrews taxi and private hire service.
          </p>
        </RevealWrapper>

        <div className="faq-grid">
          {faqs.map((f) => (
            <RevealWrapper key={f.q}>
              <article className="faq-card">
                <h3>{f.q}</h3>
                <p>{f.a}</p>
              </article>
            </RevealWrapper>
          ))}
        </div>

        <RevealWrapper>
          <div className="seo-text-block">
            <h2>St Andrews Taxi &amp; Private Hire — The Local Expert</h2>
            <p>
              St Andrews 24/7 Taxi Service is the leading private hire company in{' '}
              <strong>St Andrews, Fife, Scotland (KY16)</strong>. Whether you need a{' '}
              <strong>local taxi in St Andrews town centre</strong>, an{' '}
              <strong>airport transfer from St Andrews to Edinburgh Airport</strong>, a{' '}
              <strong>taxi to Glasgow Airport</strong>, or a{' '}
              <strong>golf course transfer to the Old Course</strong>, our professional, licensed
              drivers are ready around the clock. We serve{' '}
              <strong>University of St Andrews</strong> students, hotel guests, business travellers
              and local residents across the whole of Fife. Our fixed-price, transparent fares mean
              no surprises — just reliable, comfortable, professional transport. Serving St Andrews,
              Cupar, Anstruther, Crail, Leuchars, Guardbridge, Kingsbarns, Dunino, Boarhills,
              Strathkinness and all surrounding villages. For the best taxi in St Andrews, call{' '}
              <a href="tel:07981100009">07981 100009</a> today.
            </p>
          </div>
        </RevealWrapper>
      </div>
    </section>
  );
}

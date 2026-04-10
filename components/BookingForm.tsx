'use client';
import { useState } from 'react';
import RevealWrapper from './RevealWrapper';

const times: string[] = [];
for (let h = 0; h < 24; h++) {
  for (const m of [0, 30]) {
    const hh = String(h).padStart(2, '0');
    const mm = String(m).padStart(2, '0');
    const period = h < 12 ? 'AM' : 'PM';
    const dh = h === 0 ? 12 : h > 12 ? h - 12 : h;
    times.push(`${hh}:${mm}|${dh}:${mm} ${period}`);
  }
}

export default function BookingForm() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phone, setPhone] = useState('');
  const [pickup, setPickup] = useState('');
  const [dest, setDest] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [pax, setPax] = useState('1');
  const [service, setService] = useState('Local');
  const [notes, setNotes] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  // Compute today client-side to avoid SSR/hydration mismatch
  const today = typeof window !== 'undefined' ? new Date().toISOString().split('T')[0] : '';

  const handleSubmit = async () => {
    const errs: string[] = [];
    if (!firstName) errs.push('First name required');
    if (!lastName) errs.push('Last name required');
    if (!phone) errs.push('Phone number required');
    if (!pickup) errs.push('Pick-up postcode required');
    if (!dest) errs.push('Destination postcode required');
    if (!date) errs.push('Date required');
    if (!time) errs.push('Time required');
    if (errs.length) { setError(errs.join(' · ')); return; }

    setError('');
    setLoading(true);

    try {
      const payload = {
        first_name: firstName,
        last_name: lastName,
        phone_number: phone,
        pickup_location: pickup.toUpperCase(),
        destination: dest.toUpperCase(),
        date_time: `${date} ${time}:00`,
        No_of_passengers: parseInt(pax),
        service_type: service,
        additional_notes: notes || 'none',
      };

      const res = await fetch('https://kneega.app.n8n.cloud/webhook/submitform', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      if (res.status >= 200 && res.status < 500) {
        setSuccess(true);
      } else {
        throw new Error(`HTTP ${res.status}`);
      }
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : 'Unknown error';
      setError(`Something went wrong (${msg}). Please call us on 07981 100009.`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="booking-section" id="booking" aria-labelledby="booking-heading">
      <div className="container">
        <div className="booking-grid">
          <RevealWrapper>
            <div>
              <div className="section-eyebrow"><span>Request a journey</span></div>
              <h2 id="booking-heading" className="section-title">
                Book Your <span className="gold">Taxi</span>
              </h2>
              <p className="section-sub">
                Fill in your details and we&apos;ll confirm your booking with a price. Or call us
                for instant booking.
              </p>
              <br />
              <a href="tel:07981100009" className="btn" style={{ fontSize: 17, padding: '16px 34px' }}>
                Call 07981 100009
              </a>
              <br /><br />
              <p style={{ color: 'var(--mid)', fontSize: 13, fontStyle: 'italic' }}>
                Lines open 24 hours, 7 days a week including Bank Holidays.
              </p>
            </div>
          </RevealWrapper>

          <RevealWrapper>
            <div className="booking-form">
              <h3>Request a Quote</h3>
              <p>We&apos;ll call you back to confirm details and price.</p>

              {success ? (
                <div className="form-success show">
                  <div className="si">✓</div>
                  <h4>Request Sent!</h4>
                  <p>
                    We&apos;ve received your request and will call you on{' '}
                    <strong style={{ color: 'var(--gold)' }}>{phone}</strong> shortly.
                    <br /><br />
                    Need us now? Call{' '}
                    <a href="tel:07981100009" style={{ color: 'var(--gold)' }}>07981 100009</a>
                  </p>
                </div>
              ) : (
                <>
                  {error && <div className="form-error-msg show">{error}</div>}

                  <div className="form-section-label">Your details</div>
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="firstName">First Name *</label>
                      <input id="firstName" type="text" placeholder="John" value={firstName} onChange={e => setFirstName(e.target.value)} />
                    </div>
                    <div className="form-group">
                      <label htmlFor="lastName">Last Name *</label>
                      <input id="lastName" type="text" placeholder="Smith" value={lastName} onChange={e => setLastName(e.target.value)} />
                    </div>
                  </div>
                  <div className="form-group">
                    <label htmlFor="phone">Phone Number *</label>
                    <input id="phone" type="tel" placeholder="+44 7700 000000" value={phone} onChange={e => setPhone(e.target.value)} />
                  </div>

                  <hr className="form-divider" />
                  <div className="form-section-label">Journey details</div>

                  <div className="form-group">
                    <label htmlFor="pickup">Pick-up Postcode *</label>
                    <input id="pickup" type="text" placeholder="e.g. KY16 9UR" value={pickup} onChange={e => setPickup(e.target.value.toUpperCase())} maxLength={8} />
                  </div>
                  <div className="form-group">
                    <label htmlFor="dest">Destination Postcode *</label>
                    <input id="dest" type="text" placeholder="e.g. EH12 9DN" value={dest} onChange={e => setDest(e.target.value.toUpperCase())} maxLength={8} />
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="bDate">Date *</label>
                      <input id="bDate" type="date" min={today} value={date} onChange={e => setDate(e.target.value)} />
                    </div>
                    <div className="form-group">
                      <label htmlFor="bTime">Time *</label>
                      <select id="bTime" value={time} onChange={e => setTime(e.target.value)}>
                        <option value="">-- Select --</option>
                        {times.map(t => {
                          const [val, label] = t.split('|');
                          return <option key={val} value={val}>{label}</option>;
                        })}
                      </select>
                    </div>
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="pax">Passengers</label>
                      <select id="pax" value={pax} onChange={e => setPax(e.target.value)}>
                        {['1','2','3','4','5','6'].map(n => (
                          <option key={n} value={n}>{n}{n === '6' ? '+' : ''} passenger{n !== '1' ? 's' : ''}</option>
                        ))}
                      </select>
                    </div>
                    <div className="form-group">
                      <label htmlFor="serviceType">Service Type</label>
                      <select id="serviceType" value={service} onChange={e => setService(e.target.value)}>
                        <option value="Local">Local Trip</option>
                        <option value="Airport">Airport Transfer</option>
                        <option value="Golf">Golf Course</option>
                        <option value="Wedding">Wedding / Event</option>
                        <option value="Medical">Medical / Hospital</option>
                        <option value="University">University Transfer</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="notes">Additional Notes</label>
                    <textarea id="notes" placeholder="Flight number, luggage details, special requirements..." value={notes} onChange={e => setNotes(e.target.value)} />
                  </div>

                  <button
                    className="btn form-submit"
                    onClick={handleSubmit}
                    disabled={loading}
                    aria-label="Submit booking request"
                  >
                    {loading ? 'Sending…' : 'Send Booking Request →'}
                  </button>
                </>
              )}
            </div>
          </RevealWrapper>
        </div>
      </div>
    </section>
  );
}

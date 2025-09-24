import React, { useState } from 'react';

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState(null); // null | 'sending' | 'sent' | 'error'
  const [errorMessage, setErrorMessage] = useState('');

  const primary = '#4169E1';

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((s) => ({ ...s, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      setStatus('error');
      setErrorMessage('All fields are required.');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(!emailRegex.test(form.email)) {
      setStatus('error');
      setErrorMessage('Please enter a valid email address.');
      return;

    }

    setStatus('sending');
    // Simulate async submit
    setTimeout(() => {
      setStatus('sent');
      setForm({ name: '', email: '', message: '' });
    }, 900);
  };

  return (
    <section id="contact" style={{ padding: '48px 0', background: 'white', minHeight: '80vh' }}>
      <div className="container" style={{ maxWidth: '1000px' }}>
        <div className="row align-items-center">
          <div className="col-md-6 mb-4">
            <h2 style={{ color: primary, fontWeight: '700', letterSpacing: '1px' }}>Contact Us</h2>
            <p style={{ color: '#444', lineHeight: 1.7 }}>
              Have questions or want to collaborate? Send us a message and we'll get back to you shortly.
            </p>

            <div className="card" style={{ borderRadius: '12px', boxShadow: '0 10px 30px rgba(65,105,225,0.08)' }}>
              <div className="card-body">
                <h5 className="card-title" style={{ color: primary }}>Office</h5>
                <p className="card-text mb-1"><strong>Address:</strong> Banay-Banay, Cabuyao, Philippines</p>
                <p className="card-text mb-1"><strong>Phone:</strong> (+63)9123456789</p>
                <p className="card-text mb-0"><strong>Email:</strong> itp112@pnc.edu</p>
              </div>
            </div>
          </div>

          <div className="col-md-6">
            <div className="card p-3" style={{ borderRadius: '12px', boxShadow: '0 10px 30px rgba(65,105,225,0.06)' }}>
              <div className="card-body">
                <form onSubmit={handleSubmit} noValidate>
                  <div className="mb-3">
                    <label className="form-label">Name</label>
                    <input
                      type="text"
                      name="name"
                      className="form-control"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Your full name"
                      required
                    />
                  </div>

                  <div className="mb-3">
                    <label className="form-label">Email</label>
                    <input
                      type="email"
                      name="email"
                      className="form-control"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="you@example.com"
                      required
                    />
                  </div>

                  <div className="mb-3">
                    <label className="form-label">Message</label>
                    <textarea
                      name="message"
                      className="form-control"
                      rows="5"
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Tell us a bit about your inquiry"
                      required
                    />
                  </div>

                  <div className="d-flex justify-content-center">
                    <button
                      type="submit"
                      className="btn"
                      style={{
                        backgroundColor: primary,
                        color: 'white',
                        borderRadius: '30px',
                        padding: '10px 22px',
                        fontWeight: 600,  
                      }}
                      disabled={status === 'sending'}
                    >
                      {status === 'sending' ? 'Sending...' : 'Send Message'}
                    </button>
                  </div>

                  <div className="d-flex justify-content-center mt-2">
                    {status === 'error' && (
                      <div className="text-danger small">{errorMessage}</div>
                    )}

                    {status === 'sent' && (
                      <div className="text-success small">Thanks! We'll reply soon.</div>
                    )}
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

import React, { useState } from 'react';

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState(null); // null | 'sending' | 'sent' | 'error'

  const primary = '#4169E1';

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((s) => ({ ...s, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      setStatus('error');
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
                <p className="card-text mb-1"><strong>Address:</strong> 123 Learning Ave, Example City</p>
                <p className="card-text mb-1"><strong>Phone:</strong> (123) 456-7890</p>
                <p className="card-text mb-0"><strong>Email:</strong> info@example.edu</p>
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
                    />
                  </div>

                  <div className="d-flex align-items-center justify-content-between">
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

                    <div style={{ minWidth: '160px', textAlign: 'right' }}>
                      {status === 'error' && (
                        <div className="text-danger small">Please fill out all fields.</div>
                      )}

                      {status === 'sent' && (
                        <div className="text-success small">Thanks! We'll reply soon.</div>
                      )}
                    </div>
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

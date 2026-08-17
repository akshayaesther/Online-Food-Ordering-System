import React, { useState } from 'react';
import { MapPin, Mail, Phone, Clock, Send } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="container" style={{ padding: '60px 20px', minHeight: 'calc(100vh - 80px)' }}>
      {/* 1. Page Header */}
      <div style={{ textAlign: 'center', marginBottom: '50px' }}>
        <h1 style={{ fontSize: '2.5rem', fontWeight: '800', color: 'var(--dark)', marginBottom: '10px' }}>Get in Touch</h1>
        <p style={{ fontSize: '1.1rem', color: 'var(--text-gray)', maxWidth: '600px', margin: '0 auto' }}>
          Have a question or feedback? We'd love to hear from you.
        </p>
      </div>

      {/* 2. Two Column Layout */}
      <div style={{ display: 'flex', gap: '50px', flexWrap: 'wrap' }}>
        {/* Left Column - Contact Form */}
        <div style={{ flex: '1.3', minWidth: '320px' }}>
          {submitted ? (
            <div style={{ 
              backgroundColor: '#f6ffed', 
              border: '1px solid #b7eb8f', 
              borderRadius: '16px', 
              padding: '40px 30px', 
              textAlign: 'center',
              boxShadow: 'var(--shadow-sm)'
            }}>
              <span style={{ fontSize: '3rem', display: 'block', marginBottom: '15px' }}>🎉</span>
              <h2 style={{ color: '#52c41a', marginBottom: '10px', fontSize: '24px', fontWeight: '700' }}>Message Sent!</h2>
              <p style={{ color: 'var(--text-main)', fontSize: '16px', lineHeight: '1.6' }}>
                Thanks! We'll get back to you within 24 hours.
              </p>
              <button 
                onClick={() => { setSubmitted(false); setFormData({ name: '', email: '', subject: '', message: '' }); }}
                className="checkout-btn"
                style={{ maxWidth: '200px', margin: '25px auto 0 auto', display: 'block' }}
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ backgroundColor: 'var(--white)', padding: '10px 0' }}>
              <div className="form-group">
                <label style={{ fontWeight: '600' }}>Name</label>
                <input 
                  type="text" 
                  required 
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
              </div>
              <div className="form-group">
                <label style={{ fontWeight: '600' }}>Email Address</label>
                <input 
                  type="email" 
                  required 
                  placeholder="your.email@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>
              <div className="form-group">
                <label style={{ fontWeight: '600' }}>Subject</label>
                <input 
                  type="text" 
                  required 
                  placeholder="How can we help you?"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                />
              </div>
              <div className="form-group">
                <label style={{ fontWeight: '600' }}>Message</label>
                <textarea 
                  required 
                  rows="4"
                  placeholder="Write your message here..."
                  style={{ width: '100%', padding: '12px', border: '1px solid var(--border-light)', borderRadius: '4px', fontSize: '15px' }}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                ></textarea>
              </div>
              <button type="submit" className="auth-btn" style={{ height: '48px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', fontWeight: '700' }}>
                <Send size={18} />
                <span>Send Message</span>
              </button>
            </form>
          )}
        </div>

        {/* Right Column - Contact Details */}
        <div style={{ flex: '1', minWidth: '300px', backgroundColor: '#fafafa', borderRadius: '16px', padding: '32px', height: 'fit-content', boxShadow: 'var(--shadow-sm)', border: '1px solid var(--border-light)' }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: '700', color: 'var(--dark)', marginBottom: '30px' }}>
            Contact Information
          </h2>

          <div style={{ display: 'flex', gap: '16px', marginBottom: '25px', alignItems: 'flex-start' }}>
            <div style={{ backgroundColor: 'rgba(232, 115, 12, 0.1)', color: 'var(--primary)', padding: '10px', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <MapPin size={22} />
            </div>
            <div>
              <h4 style={{ fontWeight: '600', fontSize: '15px', color: 'var(--dark)', marginBottom: '4px' }}>Address</h4>
              <p style={{ fontSize: '14px', color: 'var(--text-gray)', lineHeight: '1.5' }}>
                No.8, Anna Nagar, Chennai, Tamil Nadu 600040
              </p>
            </div>
          </div>

          <div style={{ display: 'flex', gap: '16px', marginBottom: '25px', alignItems: 'flex-start' }}>
            <div style={{ backgroundColor: 'rgba(232, 115, 12, 0.1)', color: 'var(--primary)', padding: '10px', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Mail size={22} />
            </div>
            <div>
              <h4 style={{ fontWeight: '600', fontSize: '15px', color: 'var(--dark)', marginBottom: '4px' }}>Email</h4>
              <p style={{ fontSize: '14px', color: 'var(--text-gray)' }}>
                support@fooddash.com
              </p>
            </div>
          </div>

          <div style={{ display: 'flex', gap: '16px', marginBottom: '25px', alignItems: 'flex-start' }}>
            <div style={{ backgroundColor: 'rgba(232, 115, 12, 0.1)', color: 'var(--primary)', padding: '10px', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Phone size={22} />
            </div>
            <div>
              <h4 style={{ fontWeight: '600', fontSize: '15px', color: 'var(--dark)', marginBottom: '4px' }}>Phone</h4>
              <p style={{ fontSize: '14px', color: 'var(--text-gray)' }}>
                +91 98765 43210
              </p>
            </div>
          </div>

          <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
            <div style={{ backgroundColor: 'rgba(232, 115, 12, 0.1)', color: 'var(--primary)', padding: '10px', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Clock size={22} />
            </div>
            <div>
              <h4 style={{ fontWeight: '600', fontSize: '15px', color: 'var(--dark)', marginBottom: '4px' }}>Hours</h4>
              <p style={{ fontSize: '14px', color: 'var(--text-gray)', lineHeight: '1.5' }}>
                Monday – Sunday, 8:00 AM – 11:00 PM
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

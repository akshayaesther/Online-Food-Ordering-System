import React from 'react';

const About = () => {
  return (
    <div style={{ paddingBottom: '40px' }}>
      {/* 1. Hero Section */}
      <div className="about-hero hero-section container" style={{ background: 'linear-gradient(rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.75)), url("https://images.unsplash.com/photo-1498837167922-ddd27525d352?w=1600&q=80") no-repeat center center/cover' }}>
        <div className="hero-content">
          <h1 style={{ fontSize: '3rem', fontWeight: '800' }}>About FoodDash</h1>
          <p style={{ fontSize: '1.2rem', color: '#e5e7eb', maxWidth: '600px', margin: '0 auto', textShadow: '1px 1px 4px rgba(0,0,0,0.5)' }}>
            We're on a mission to bring the best food straight to your door — fast, fresh, and hassle-free.
          </p>
        </div>
      </div>

      {/* 2. Our Story Section */}
      <div className="container about-story-section" style={{ padding: '60px 20px', display: 'flex', gap: '40px', alignItems: 'center', flexWrap: 'wrap' }}>
        <div style={{ flex: '1', minWidth: '300px' }}>
          <h2 className="section-title" style={{ fontSize: '2.2rem', marginBottom: '20px', position: 'relative' }}>Our Story</h2>
          <p style={{ fontSize: '16px', color: 'var(--text-gray)', lineHeight: '1.8', marginBottom: '20px' }}>
            FoodDash was born out of a simple idea — great food should be accessible to everyone, anytime. We started in Chennai with a handful of dishes and a passion for good food. Today, we're proud to serve thousands of happy customers every day.
          </p>
        </div>
        <div style={{ flex: '1', minWidth: '300px' }}>
          <img 
            src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&auto=format&fit=crop" 
            alt="Our Story Vibe" 
            style={{ width: '100%', height: '350px', objectFit: 'cover', borderRadius: '16px', boxShadow: 'var(--shadow-md)' }}
          />
        </div>
      </div>

      {/* 3. Feature Highlights Row */}
      <div className="container" style={{ padding: '40px 20px' }}>
        <h2 className="section-title" style={{ fontSize: '2.2rem', textAlign: 'center', marginBottom: '40px' }}>Why Choose Us?</h2>
        <div className="highlights-grid">
          <div className="highlight-card">
            <span style={{ fontSize: '3rem', display: 'block', marginBottom: '15px' }}>🚀</span>
            <h3>Lightning Fast</h3>
            <p>From kitchen to your door in 30 minutes or less.</p>
          </div>
          <div className="highlight-card">
            <span style={{ fontSize: '3rem', display: 'block', marginBottom: '15px' }}>🍽️</span>
            <h3>Fresh & Quality</h3>
            <p>Every dish is prepared fresh with quality ingredients.</p>
          </div>
          <div className="highlight-card">
            <span style={{ fontSize: '3rem', display: 'block', marginBottom: '15px' }}>📱</span>
            <h3>Easy Ordering</h3>
            <p>Browse, add to cart, and checkout in seconds.</p>
          </div>
          <div className="highlight-card">
            <span style={{ fontSize: '3rem', display: 'block', marginBottom: '15px' }}>💬</span>
            <h3>24/7 Support</h3>
            <p>We're always here to help you with your orders.</p>
          </div>
        </div>
      </div>

      {/* 4. Stats Row */}
      <div style={{ backgroundColor: 'var(--primary)', color: 'var(--white)', padding: '50px 20px', marginTop: '40px' }}>
        <div className="container stats-row" style={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap', gap: '30px', textAlign: 'center' }}>
          <div className="stat-item">
            <h2 style={{ fontSize: '2.8rem', fontWeight: '800', marginBottom: '5px', color: 'var(--white)' }}>500+</h2>
            <p style={{ fontSize: '15px', color: 'rgba(255, 255, 255, 0.9)', textTransform: 'uppercase', fontWeight: '600', letterSpacing: '1px' }}>Dishes</p>
          </div>
          <div className="stat-item">
            <h2 style={{ fontSize: '2.8rem', fontWeight: '800', marginBottom: '5px', color: 'var(--white)' }}>10,000+</h2>
            <p style={{ fontSize: '15px', color: 'rgba(255, 255, 255, 0.9)', textTransform: 'uppercase', fontWeight: '600', letterSpacing: '1px' }}>Orders Delivered</p>
          </div>
          <div className="stat-item">
            <h2 style={{ fontSize: '2.8rem', fontWeight: '800', marginBottom: '5px', color: 'var(--white)' }}>4.8★</h2>
            <p style={{ fontSize: '15px', color: 'rgba(255, 255, 255, 0.9)', textTransform: 'uppercase', fontWeight: '600', letterSpacing: '1px' }}>Average Rating</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

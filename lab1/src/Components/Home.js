import React from 'react';

const Home = () => {
  return (
    <section
      id="home"
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        padding: '40px',
        background: 'linear-gradient(135deg, #4169E1 0%, #6A5ACD 100%)',
        color: 'white',
        fontFamily: 'Arial, sans-serif',
      }}
    >
      <div style={{ maxWidth: '800px' }}>
        <h1
          style={{
            fontSize: '3rem',
            fontWeight: 'bold',
            marginBottom: '20px',
            textShadow: '0 4px 12px rgba(0,0,0,0.3)',
            letterSpacing: '2px',
          }}
        >
          Welcome to Our React Project
        </h1>
        <p
          style={{
            fontSize: '1.2rem',
            marginBottom: '30px',
            lineHeight: '1.8',
            color: '#f0f0f0',
          }}
        >
          This is the Home section of our single-page React application.  
          Navigate through the sections to learn more about us and get in touch.
        </p>
        <a
          href="#about"
          style={{
            padding: '12px 28px',
            backgroundColor: '#f8f9fa',
            color: '#4169E1',
            fontWeight: '600',
            borderRadius: '30px',
            textDecoration: 'none',
            boxShadow: '0 6px 16px rgba(0,0,0,0.2)',
            transition: 'all 0.3s ease',
          }}
          onMouseEnter={(e) => {
            e.target.style.backgroundColor = '#ddd';
            e.target.style.color = '#000';
          }}
          onMouseLeave={(e) => {
            e.target.style.backgroundColor = '#f8f9fa';
            e.target.style.color = '#4169E1';
          }}
        >
          Learn More
        </a>
      </div>
    </section>
  );
};

export default Home;

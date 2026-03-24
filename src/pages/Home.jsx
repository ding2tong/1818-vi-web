import React from 'react';
import SEO from '../components/SEO';
import Hero from '../components/Hero';
import Portfolio from '../components/Portfolio';
import ContactForm from '../components/ContactForm';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
      <SEO />
      <div className="vertical-text">DESIGN SYSTEM & PORTFOLIO 2026</div>
      <Hero />
      <Portfolio />
      <ContactForm />
      <Footer />
    </>
  );
}

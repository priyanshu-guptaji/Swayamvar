import React from 'react';
import Hero from '../components/Hero';
import PopularVenue from '../components/PopularVenue';
import PopularSearch from '../components/PopularSearch';
import GiftSections from '../../components/GiftSections';
import OurWork from '../../components/OurWork';
import Footer from '../../components/Footer';
import './HomePage.css';

const HomePage: React.FC = () => {
  return (
    <div className="home-page">
      <Hero />
      <PopularVenue />
      <PopularSearch />
      <GiftSections />
      <OurWork />
      <Footer />
    </div>
  );
};

export default HomePage;
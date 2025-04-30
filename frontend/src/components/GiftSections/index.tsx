import React from 'react';
import { Link } from 'react-router-dom';
import './GiftSections.css';

interface SectionCard {
  title: string;
  description: string;
  image: string;
  link: string;
}

const GiftSections: React.FC = () => {
  const sections: SectionCard[] = [
    {
      title: "Gifts",
      description: "Wedding Gifts, Anniversary Gifts, Special Occasions...",
      image: "https://i.pinimg.com/474x/62/99/97/629997ef220cacb6db330a3709a043fb.jpg",
      link: "/gifts"
    },
    {
      title: "Return Gifts",
      description: "Memorable Favors, Thank You Gifts, Guest Tokens...",
      image: "https://i.pinimg.com/474x/a9/ce/2c/a9ce2c82515733c8bdd1893e48fa9186.jpg",
      link: "/return-gifts"
    },
    {
      title: "Invitation Cards",
      description: "Traditional Cards, Designer Cards, Custom Invites...",
      image: "https://i.pinimg.com/474x/e4/c7/2c/e4c72c02a17ace02708bef954ea5c20f.jpg",
      link: "/invitation-cards"
    },
    {
      title: "E-Invitation Cards",
      description: "Digital Invites, Video Invitations, Online Cards...",
      image: "https://i.pinimg.com/474x/b1/02/8c/b1028c590fcbc1dd1dae914c89b515f8.jpg",
      link: "/e-invitation-cards"
    }
  ];

  return (
    <div className="gift-sections">
      <div className="gift-sections-header">
        <h2>Wedding Gifts & Invitations</h2>
        <p>Discover our curated collection of wedding essentials - from thoughtful gifts to elegant invitations</p>
      </div>
      <div className="gift-sections-grid">
        {sections.map((section, index) => (
          <Link to={section.link} key={index} className="gift-section-card">
            <img src={section.image} alt={section.title} className="gift-section-image" />
            <div className="gift-section-content">
              <h3>{section.title}</h3>
              <p>{section.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default GiftSections; 
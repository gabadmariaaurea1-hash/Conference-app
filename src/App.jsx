import React, { useState } from 'react';
import LandingPage from './components/LandingPage';
import Navbar from './components/Navbar';
import VenueSelection from './components/VenueSelection';
import AddOnsSelection from './components/AddOnsSelection';
import MealsSelection from './components/MealsSelection';
import DetailsModal from './components/DetailsModal';
import './App.css';

export default function App() {
  const [showProductSelection, setShowProductSelection] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  if (!showProductSelection) {
    return <LandingPage onGetStarted={() => setShowProductSelection(true)} />;
  }

  return (
    <div className="app-container">
      <Navbar
        onShowDetails={() => setShowModal(true)}
        scrollToSection={scrollToSection}
      />
      <div className="main-content">
        <VenueSelection />
        <AddOnsSelection />
        <MealsSelection />
      </div>
      {showModal && <DetailsModal onClose={() => setShowModal(false)} />}
    </div>
  );
}
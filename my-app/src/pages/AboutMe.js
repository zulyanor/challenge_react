import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import AboutContent from '../components/AboutContent';
import '../assets/css/challenge1.css';

function AboutMe() {
    return (
        <div className="AboutMe">
            <Header />
            <AboutContent />
            <Footer />
        </div>
    );
}

export default AboutMe;

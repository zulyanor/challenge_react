import React from 'react';
import '../assets/css/main.css';
import Header from '../components/Header';
import HomeContent from '../components/HomeContent';
import '../assets/css/challenge1.css';

function Home() {
    return (
        <div className="Home">
            <Header />
            <HomeContent />
        </div>
    );
}

export default Home;

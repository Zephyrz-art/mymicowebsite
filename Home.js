import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Home = () => {
    return (
        <div>
            <Header />
            <main>
                <h1>Welcome to the JUTC Bus Schedule</h1>
                <p>Your go-to resource for navigating the JUTC bus system efficiently.</p>
                <p>Explore our bus schedules, find routes, and stay updated on arrival times.</p>
                <a href="/schedule">View Bus Schedule</a>
            </main>
            <Footer />
        </div>
    );
};

export default Home;
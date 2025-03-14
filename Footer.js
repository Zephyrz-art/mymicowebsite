import React from 'react';

const Footer = () => {
    return (
        <footer>
            <div className="footer-content">
                <p>&copy; {new Date().getFullYear()} JUTC Bus Schedule. All rights reserved.</p>
                <ul className="footer-links">
                    <li><a href="/home">Home</a></li>
                    <li><a href="/schedule">Bus Schedule</a></li>
                    <li><a href="/contact">Contact Us</a></li>
                </ul>
            </div>
        </footer>
    );
};

export default Footer;
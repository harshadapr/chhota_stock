
import React from 'react';
import { FaFacebook, FaTwitter, FaYoutube, FaInstagram, FaGooglePlay } from 'react-icons/fa';

import './footer.css';

const Footer = () => {
    return (

        <footer className="footer">
            <div className="top-section">
                <div className="logo">
                    <img src="/icons/InvestPe.png" alt="InvestPe Logo" />
                </div>

                <div className="main-grid">
                    <div className="column">
                        <h4><b>Contact Us</b></h4>
                        <p>8089225625</p>
                        <p>contact@chhotastock.com</p>
                    </div>
                    <div className="column">
                        <h4>Company</h4>
                        <ul style={{listStyleType: "none"}} className="links">
                            <li>About Us</li>
                            <li>Privacy Policy</li>
                            <li>Terms and Conditions</li>
                        </ul>
                    </div>
                    <div className="column">
                        <h4>Quick Links</h4>
                        <ul style={{listStyleType: "none"}} className="links">
                            <li>Home</li>
                            <li>Gateway</li>
                            <li>Blog</li>
                        </ul>
                    </div>
                    
                </div>
            </div>
            <div className="find-us-on-container">
                <div className="find-us-on">
                    <h4>Find Us On</h4>
                    <div className="social-icons">
                        {/* <img src="facebook-icon.png" alt="Facebook" />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <img src="youtube-icon.png" alt="YouTube" />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <img src="instagram-icon.png" alt="Instagram" />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <img src="twitter-icon.png" alt="Twitter" /> */}
                        <FaFacebook size={50} />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <FaYoutube size={50} />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <FaInstagram size={50} />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <FaTwitter size={50} />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    </div>
                </div>
            </div>
            <div className="copyright">
                <p>&copy;2022 Chhotastock Technologies Private Limited. All rights reserved.CIN-U74999WB2012PTC184187 Chhotastock Technologies Private Limited.</p>
                <br />
                <p>Chhotastock Technologies builds platforms & investment products to invest better in Indian investment asset classes.
                    Investing in Stocks/ETFs (Exchange Traded Funds) are subject to market risks. Read all the related documents before investing. Investors should consider all risk factors and consult their financial advisor before investing.</p>
                <br />
                <p>Registered Office: LIST, 3rd Floor, CK Pearl, 5th Main Road, HSR Layout Sector 6, Bengaluru, Karnataka - 560102, India</p>
                <br />
                <p>For any query / feedback/clarifications, email at contact@chhotastock.com</p>
                <br />
                <p>All Investment ideas, model portfolios & advisory are built by SEBI Registered Investment advisors (RIAS) & Chhotastock only facilitates investments in such baskets, portfolios.</p>
            </div>
        </footer>
    );
};

export default Footer;



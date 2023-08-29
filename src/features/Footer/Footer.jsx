
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
                    <div className="column">
                        <h4>Download the App Now!</h4>
                        {/* <p>GET IT ON</p> */}
                        <img src="data:image/jpeg;base64,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Ig8WM+bT/lSfsKqvpZ59U/mv+qtdVQh7HxnY9rmn/IW/3VZt0DBn09W+RzSGSuuDxCT+tpPLe56wUHJr6YbG41EbPWvlEHSQ6WTNblLWPIGpzg4H32NitRX4jJO68jieQbAPUF40WMUrE6xCe+0Zbxw2tMw/LoiLJAIiICIiAiIgIiICIiAiIgIiIJE3N9Pxh7XUtSwyUj3F1x4zmOIs7xT5TSBrHrPGV1sGIaNQSCrjDDIDmawNqXWftBbE7xWm+zUAOpQciDr90DTB2Kzte1pjgiBbDG6xdr1ue+2rMbDUNQA955BEQEREBERAREQEREBdxuX4zR0FTJU1rnh7WZYQ1pdrd5bjbYQAAPaK4dEG+0zx04hWzVJvlc7LE0/0wt1MHUbaz1krQoiAs1L5bPab9VhW70Vwh1VUsY1pLGua6R1iQGA3t6zsA60FndHfNmet/wDK5bReLCqcxwsYRYgXcP7nHMf1JXtQEREBERAWnxnAIappErQbixuAQeTM06j9etbhEEcSbk1GSTkbr/7gfoHgL58EdHzW9tT96klEEbeCOj5re2p+9PBHR81vbU/epJRBG3gjo+a3tqfvTwR0fNb21P3qSUQRt4I6Pmt7an708EdHzW9tT96klEEbeCOj5re2p+9PBHR81vbU/epJRBG3gjo+a3tqfvTwR0fNb21P3qSUQRt4I6Pmt7an708EdHzW9tT96klEEbeCOj5re2p+9PBHR81vbU/epJRBG3gjo+a3tqfvTwR0fNb21P3qSUQRt4I6Pmt7an708EdHzW9tT96klEEbeCOj5re2p+9PBHR81vbU/epJRBG3gjo+a3tqfvTwR0fNb21P3qSUQRt4I6Pmt7an708EdHzW9tT96klEEbeCOj5re2p+9PBHR81vbU/epJRBG3gjo+a3tqfvTwR0fNb21P3qSUQRt4I6Pmt7an708EdHzW9tT96klEEbeCOj5re2p+9PBHR81vbU/epJRBG3gjo+a3tqfvTwR0fNb21P3qSUQRuNySjGvK3tqfvXVYHoxT0gAiaBY3ADQ1oPLYbT1klb5EBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERB//2Q==" alt="Google Play Icon" />
                        {/* <FaGooglePlay /> */}
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



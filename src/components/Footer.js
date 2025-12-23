import React from 'react';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-top">
                <div className="footer-column newsletter">
                    <h3>BE THE FIRST TO KNOW</h3>
                    <p>Sign up for updates from mettä muse.</p>
                    <div className="subscribe-form">
                        <input type="email" placeholder="Enter your e-mail..." />
                        <button type="button">SUBSCRIBE</button>
                    </div>
                </div>
                <div className="footer-column contact-info">
                    <h3>CONTACT US</h3>
                    <p>+44 221 133 5360</p>
                    <p>customercare@mettamuse.com</p>

                    <div className="currency-section">
                        <h3>CURRENCY</h3>
                        <div className="currency-selector">
                            <img src="https://flagcdn.com/w20/us.png" alt="USD Flag" />
                            <span>◆ USD</span>
                        </div>
                        <p className="currency-note">Transactions will be completed in Euros and a currency reference is available on hover.</p>
                    </div>
                </div>
            </div>

            <hr className="footer-divider" />

            <div className="footer-bottom-grid">
                <div className="footer-section">
                    <h3>mettā muse</h3>
                    <ul>
                        <li><a href="/">About Us</a></li>
                        <li><a href="/">Stories</a></li>
                        <li><a href="/">Artisans</a></li>
                        <li><a href="/">Boutiques</a></li>
                        <li><a href="/">Contact Us</a></li>
                        <li><a href="/">EU Compliances Docs</a></li>
                    </ul>
                </div>

                <div className="footer-section">
                    <h3>QUICK LINKS</h3>
                    <ul>
                        <li><a href="/">Orders & Shipping</a></li>
                        <li><a href="/">Join/Login as a Seller</a></li>
                        <li><a href="/">Payment & Pricing</a></li>
                        <li><a href="/">Return & Refunds</a></li>
                        <li><a href="/">FAQs</a></li>
                        <li><a href="/">Privacy Policy</a></li>
                        <li><a href="/">Terms & Conditions</a></li>
                    </ul>
                </div>

                <div className="footer-section">
                    <div className="follow-us">
                        <h3>FOLLOW US</h3>
                        <div className="social-icons">
                            {/* Using placeholder SVGs or emojis for now to keep it simple without extra deps */}
                            <div className="icon-placeholder instagram"><i className="fab fa-instagram"></i></div>
                            <div className="icon-placeholder linkedin"><i className="fab fa-linkedin"></i></div>
                        </div>
                    </div>

                    <div className="payment-gateways">
                        <h3>mettā muse ACCEPTS</h3>
                        <div className="payment-icons">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Google_Pay_Logo.svg/512px-Google_Pay_Logo.svg.png" alt="GPay" />
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Mastercard-logo.svg/200px-Mastercard-logo.svg.png" alt="Mastercard" />
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/PayPal.svg/200px-PayPal.svg.png" alt="PayPal" />
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/American_Express_logo_%282018%29.svg/200px-American_Express_logo_%282018%29.svg.png" alt="Amex" />
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/Apple_Pay_logo.svg/200px-Apple_Pay_logo.svg.png" alt="Apple Pay" />
                        </div>
                    </div>
                </div>
            </div>

            <div className="footer-copyright">
                <p>Copyright © 2023 mettamuse. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;

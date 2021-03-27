import React from 'react';
import '../styles/Footer.css';

const Footer = () => {
    return (
        <div>
            <div className="footer-attributes">
                <div className="footer">
                    <div className="footer-column list-company">
                        <h2>Company</h2>
                        <a>Careers</a>
                        <a>About us</a>
                        <a>Weekly Ad</a>
                        <a>Our suppliers</a>
                        <a>Delivery</a>
                    </div>
                    <div className="footer-column list-website">
                        <h2>Website</h2>
                        <a>Terms of use</a>
                        <a>Privacy and security</a>
                        <a>Privacy rights</a>
                        <a>Our ads</a>
                    </div>
                    <div className="footer-column list-customer">
                        <h2>Customer</h2>
                        <a>Contact us</a>
                        <a>FAQ</a>
                        <a>Returns</a>
                        <a>Survey</a>
                    </div>
                    <div className="footer-column list-social">
                        <h2>Social media</h2>
                        <a>Facebook<i class="fab fa-facebook"></i></a>
                        <a>YouTube<i class="fab fa-youtube"></i></a>
                        <a>Twitter<i class="fab fa-twitter"></i></a>
                        <a>Instagram<i class="fab fa-instagram"></i></a>
                    </div>
                </div>
                <div className="newsletter">
                    <p className="newsletter-message">Would you like to stay up to date on the latest sales?
                            Sign up for our newsletter today:</p>
                    <div className="newsletter-attributes">
                        <div className="align_navbar">
                            <input type="text" placeholder="Type E-mail here" />
                        </div>
                        <button className="newsletter-submit">Sign up</button>
                    </div>
                </div>
            </div>
            <p className="copyright">The Store © 2021 All rights reserved.</p>
        </div>
    );
}

export default Footer;
import React from 'react';
import '../styles/Footer.css';

const Footer = () => {
    return (
        <div>
            <div className="footer-attributes">
                <div className="footer">
                    <div className="footer-column list-company">
                        <h2>Company</h2>
                        <div>Careers</div>
                        <div>About us</div>
                        <div>Weekly Ad</div>
                        <div>Our suppliers</div>
                        <div>Delivery</div>
                    </div>
                    <div className="footer-column list-website">
                        <h2>Website</h2>
                        <div>Terms of use</div>
                        <div>Privacy and security</div>
                        <div>Privacy rights</div>
                        <div>Our ads</div>
                    </div>
                    <div className="footer-column list-customer">
                        <h2>Customer</h2>
                        <div>Contact us</div>
                        <div>FAQ</div>
                        <div>Returns</div>
                        <div>Survey</div>
                    </div>
                    <div className="footer-column list-social">
                        <h2>Social media</h2>
                        <div>Facebook<i class="fab fa-facebook"></i></div>
                        <div>YouTube<i class="fab fa-youtube"></i></div>
                        <div>Twitter<i class="fab fa-twitter"></i></div>
                        <div>Instagram<i class="fab fa-instagram"></i></div>
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
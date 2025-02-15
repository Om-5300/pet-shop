import React from "react";
import "./footer.css";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="subscribe-section">
                    <h2>Subscribe to our Email</h2>
                    <div className="email-input">
                        <input type="email" placeholder="Enter your email" />
                        <button>SUBMIT</button>
                    </div>
                    <p>Lock! Your information is safe with us. We will never spam you.</p>
                    <div className="social-icons">
                        <img src="image/Facebookicon.svg" alt="Facebook" />
                        <img src="image/Instagramicon.svg" alt="Instagram" />
                        <img src="image/Youtubeicon.svg" alt="YouTube" />
                        <span>@utopiapetshop</span>
                    </div>
                </div>

                <div className="links-section">
                    <div className="mission">
                    <h2>Our Mission</h2>
                    <p>Your satisfaction is our priority. Our friendly customer service team is always ready to assist you with any questions or concerns you may have. We aim to make your shopping experience convenient, informative, and enjoyable.</p>
                    </div>
                </div>
            </div>

            <div className="footer-bottom">
                <div className="logo-section">
                    <img src="image/Utopiawhite.png" alt="Utopia Pet Shop" />
                </div>
                <div className="payment-icons">
                    <img src="image/applepayicon.svg" alt="Apple Pay" />
                    <img src="image/gpayicon.svg" alt="Google Pay" />
                    <img src="image/mastercardicon.svg" alt="MasterCard" />
                    <img src="image/visaicon.svg" alt="Visa" />
                </div>
                <p>© 2024, Utopia Pet Shop</p>
            </div>
        </footer>
    );
};

export default Footer;

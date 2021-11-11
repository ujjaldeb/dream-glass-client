import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer-bottom">
                <div className="container">
                    <div className="row p-3">
                        <div className="col-lg-6 col-12 d-flex align-items-center">
                            <div className="copyright">
                                <p>Designed and Developed by <Link to="https://onlytarikul.com/" target='_blank'>Tarikul Islam</Link>
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-6 col-12 text-end">
                            <div className="payment-gateway">
                                <img src="https://demo.graygrids.com/themes/shopgrids/assets/images/footer/credit-cards-footer.png"
                                    alt="#"/>
                            </div>
                        </div>
                    </div>
                </div>
        </footer>
    );
};

export default Footer;


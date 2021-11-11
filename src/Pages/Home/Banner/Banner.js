import React from 'react';
import './Banner.css';

const Banner = () => {
    return (
        // Banner section
        <section className="banner-section d-flex align-items-center">
            <div className="container">
                <div className="row ">
                    <div className="col-lg-5 mx-auto text-white ">
                        <div className="banner-content">
                            <h5>Get up to 50% off Today Only!</h5>
                            <h2>Perfect Sunglass Collection</h2>
                            <button type="button" className="btn border-light text-white btn-outline-primary">Shop Now</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Banner;
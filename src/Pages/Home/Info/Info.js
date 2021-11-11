import React from 'react';
import './Info.css';

const Info = () => {
    return (
        // info section
        <section className="info-section d-flex align-items-center">
            <div className="container">
                <div className="row ">
                    <div className="col-lg-3 info-box border border-1 d-flex align-items-center justify-content-around p-5">
                        <i className="fas fa-truck"></i>
                        <div className="info-details d-flex flex-column">
                            <span>Free Delivery</span>
                            <span>Worldwide</span>
                        </div>
                    </div>
                    <div className="col-lg-3 info-box border border-1 d-flex align-items-center justify-content-around p-5">
                        <i className="fas fa-file-invoice-dollar"></i>
                        <div className="info-details d-flex flex-column">
                            <span>Money Returns</span>
                            <span>Worldwide</span>
                        </div>
                    </div>
                    <div className="col-lg-3 info-box border border-1 d-flex align-items-center justify-content-around p-5">
                        <i className="fas fa-phone-volume"></i>
                        <div className="info-details d-flex flex-column">
                            <span>27/4 Online Support</span>
                            <span>Worldwide</span>
                        </div>
                    </div>
                    <div className="col-lg-3 info-box border border-1 d-flex align-items-center justify-content-around p-5">
                        <i className="fas fa-lock"></i>
                        <div className="info-details d-flex flex-column">
                            <span>Payment Security</span>
                            <span>Worldwide</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Info;
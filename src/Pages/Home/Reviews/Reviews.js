import React from 'react';
import './Reviews.css';

const Reviews = () => {
    return (
        // review section
        <section className="review-section">
            <div className="container px-4 py-5" id="icon-grid">
                <div className="row">
                    <div className="col-12">
                        <div className="section-title">
                            <h2>What Our Client Say</h2>
                        </div>
                    </div>
                </div>
                <div className="row g-1 row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4 py-5">
                    <div className="col d-flex align-items-start">
                        <div className="shadow-sm p-3 border">
                            <h4 className="fw-bold mb-0">Featured title</h4>
                            <p>Paragraph of text beneath the heading to explain the heading.</p>
                        </div>
                    </div>
                    <div className="col d-flex align-items-start">
                        <div className="shadow-sm p-3 border">
                            <h4 className="fw-bold mb-0">Featured title</h4>
                            <p>Paragraph of text beneath the heading to explain the heading.</p>
                        </div>
                    </div>
                    <div className="col d-flex align-items-start">
                        <div className="shadow-sm p-3 border">
                            <h4 className="fw-bold mb-0">Featured title</h4>
                            <p>Paragraph of text beneath the heading to explain the heading.</p>
                        </div>
                    </div>
                    <div className="col d-flex align-items-start">
                        <div className="shadow-sm p-3 border">
                            <h4 className="fw-bold mb-0">Featured title</h4>
                            <p>Paragraph of text beneath the heading to explain the heading.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Reviews;
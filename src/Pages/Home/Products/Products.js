import React from 'react';
import './Products.css';

const Products = () => {
    return (
        // product section
        <section className="trending-product section">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="section-title">
                            <h2>Trending Product</h2>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-4 col-md-6 col-12">

                        <div className="single-product">
                            <div className="product-image">
                                <img src="https://i.ibb.co/92mz8yB/polycarbonates-sunglass-for-unisex-sun1010202-415.jpg" alt="#"/>
                                <div className="button">
                                <a href="product-details.html" className="btn"><i className="lni lni-cart"></i> Add to Cart</a>
                                </div>
                            </div>
                            <div className="product-info">
                                <h4 className="title">
                                    <a href="product-grids.html">Xiaomi Mi Band 5</a>
                                </h4>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, sed.</p>
                                <div className="price d-flex justify-content-between">
                                    <span>$199.00</span>
                                    <button type="button" className="btn btn-outline-primary">Buy Now</button>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="col-lg-4 col-md-6 col-12">

                        <div className="single-product">
                            <div className="product-image">
                                <img src="https://i.ibb.co/SNL2mjZ/polycarbonates-sunglass-for-male-sun-2.jpg" alt="#"/>
                                <div className="button">
                                <a href="product-details.html" className="btn"><i className="lni lni-cart"></i> Add to Cart</a>
                                </div>
                            </div>
                            <div className="product-info">
                                <h4 className="title">
                                    <a href="product-grids.html">Big Power Sound Speaker</a>
                                </h4>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, sed.</p>
                                <div className="price d-flex justify-content-between">
                                    <span>$199.00</span>
                                    <button type="button" className="btn btn-outline-primary">Buy Now</button>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="col-lg-4 col-md-6 col-12">

                        <div className="single-product">
                            <div className="product-image">
                                <img src="https://i.ibb.co/bJvkpzg/polycarbonates-sunglass-for-male-sun-3.jpg" alt="#"/>
                                <div className="button">
                                <a href="product-details.html" className="btn"><i className="lni lni-cart"></i> Add to Cart</a>
                                </div>
                            </div>
                            <div className="product-info">
                                <h4 className="title">
                                    <a href="product-grids.html">WiFi Security Camera</a>
                                </h4>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, sed.</p>
                                <div className="price d-flex justify-content-between">
                                    <span>$199.00</span>
                                    <button type="button" className="btn btn-outline-primary">Buy Now</button>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="col-lg-4 col-md-6 col-12">

                        <div className="single-product">
                            <div className="product-image">
                                <img src="https://demo.graygrids.com/themes/shopgrids/assets/images/products/product-1.jpg" alt="#"/>
                                <div className="button">
                                <a href="product-details.html" className="btn"><i className="lni lni-cart"></i> Add to Cart</a>
                                </div>
                            </div>
                            <div className="product-info">
                                <h4 className="title">
                                    <a href="product-grids.html">iphone 6x plus</a>
                                </h4>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, sed.</p>
                                <div className="price d-flex justify-content-between">
                                    <span>$199.00</span>
                                    <button type="button" className="btn btn-outline-primary">Buy Now</button>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="col-lg-4 col-md-6 col-12">

                        <div className="single-product">
                            <div className="product-image">
                                <img src="https://demo.graygrids.com/themes/shopgrids/assets/images/products/product-1.jpg" alt="#"/>
                                <div className="button">
                                <a href="product-details.html" className="btn"><i className="lni lni-cart"></i> Add to Cart</a>
                                </div>
                            </div>
                            <div className="product-info">
                                <h4 className="title">
                                    <a href="product-grids.html">Wireless Headphones</a>
                                </h4>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, sed.</p>
                                <div className="price d-flex justify-content-between">
                                    <span>$199.00</span>
                                    <button type="button" className="btn btn-outline-primary">Buy Now</button>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="col-lg-4 col-md-6 col-12">

                        <div className="single-product">
                            <div className="product-image">
                                <img src="https://demo.graygrids.com/themes/shopgrids/assets/images/products/product-1.jpg" alt="#"/>
                                <div className="button">
                                <a href="product-details.html" className="btn"><i className="lni lni-cart"></i> Add to Cart</a>
                                </div>
                            </div>
                            <div className="product-info">
                                <h4 className="title">
                                    <a href="product-grids.html">Mini Bluetooth Speaker</a>
                                </h4>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, sed.</p>
                                <div className="price d-flex justify-content-between">
                                    <span>$199.00</span>
                                    <button type="button" className="btn btn-outline-primary">Buy Now</button>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default Products;
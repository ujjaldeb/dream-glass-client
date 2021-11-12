import React from "react";
import useGetData from "../../../Hooks/useGetData";
import { Link } from "react-router-dom";
import "./Products.css";

const Products = () => {
  const [getData] = useGetData("http://localhost:5000/products");

  return (
    // product section
    <section className="trending-product section">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h2 className='mb-5' >Trending Product</h2>
          </div>
        </div>
        <div className="row">
          {!getData.length ? (
            <>
              <div className="container">
                <div className="row">
                  <div className="col-lg-3 mx-auto">
                    <div className="spinner-border text-info" role="status">
                      <span className="visually-hidden">Loading...</span>
                    </div>
                  </div>
                </div>
              </div>
            </>
          ) : (
            <>
              {getData.map((product) => (
                <div key={product._id} className="col-lg-4 col-md-6 col-12">
                  <div className="single-product">
                    <div className="product-image">
                      <img src={product.productImageURL} alt="#" />
                      <div className="button">
                        <a href="product-details.html" className="btn">
                          <i className="lni lni-cart"></i> Add to Cart
                        </a>
                      </div>
                    </div>
                    <div className="product-info">
                      <h4 className="title">
                        <a href="product-grids.html">{product.product_name}</a>
                      </h4>
                      <p>{product.product_description}</p>
                      <div className="price d-flex justify-content-between">
                        <span>${product.productPrice}</span>
                        <Link to={`/purchase/${product._id}`}>
                          <button
                            type="button"
                            className="btn btn-outline-primary"
                          >
                            Buy Now
                          </button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default Products;

import React from "react";
import useGetData from "../../../Hooks/useGetData";
import "./Reviews.css";

const Reviews = () => {
  const [getData] = useGetData("https://afternoon-basin-48392.herokuapp.com/reviews");

  return (
    // review section
    <section className="review-section">
      <div className="container px-4 py-5" id="icon-grid">
        <div className="row">
          <div className="col-12">
            <h2 className='mb-3' >What Our Clients Say</h2>
          </div>
        </div>
        <div className="row g-1 row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4 py-5">
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
              {getData.map((review) => (
                <div key={review._id} className="col d-flex align-items-start">
                  <div className="shadow-sm p-3 border">
                    <h4 className="fw-bold mb-0">{review.name}</h4>
                    <p>{review.email}</p>
                    <p>{review.user_reviews}</p>
                    <p>
                      {[...Array(parseInt(review.review_count))].map((e, i) => (
                        <span key={i}>
                          <i className="fas fa-star review"></i>
                        </span>
                      ))}
                    </p>
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

export default Reviews;

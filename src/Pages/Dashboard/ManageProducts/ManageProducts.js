import React from "react";
import useGetData from "../../../Hooks/useGetData";

const ManageProducts = () => {
  const [getData, setGetData] = useGetData("https://afternoon-basin-48392.herokuapp.com/products");

  const productDeleteHandle = (id) => {
    if (window.confirm("Do you want to delete?")) {
      fetch(`https://afternoon-basin-48392.herokuapp.com/products/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount) {
            const remainigProducts = getData.filter(
              (product) => product._id !== id
            );
            setGetData(remainigProducts);
          }
        });
    }
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <div className="section-title">
            <h2>Manage Products</h2>
          </div>
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
            {getData.map((product) => (
              <div key={product._id} className="col d-flex align-items-start">
                <div className="shadow-sm p-3 border">
                  <h4 className="fw-bold mb-3">{product.product_name}</h4>
                  <p>{product.product_description}</p>
                  <button
                    onClick={() => productDeleteHandle(product._id)}
                    className="btn btn-warning"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </>
        )}
      </div>
    </div>
  );
};

export default ManageProducts;

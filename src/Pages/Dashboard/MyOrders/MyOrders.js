import React from "react";
import useGetData from "../../../Hooks/useGetData";
import useAuth from "../../../Hooks/useAuth";
import { Link } from "react-router-dom";

const MyOrders = () => {
  const { user } = useAuth();
  const [getData, setGetData] = useGetData(
    `http://localhost:5000/orders/${user.email}`
  );

  const orderDeleteHandle = (id) => {
    if (window.confirm("Do you want to delete?")) {
      fetch(`http://localhost:5000/orders/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount) {
            const remainigOrders = getData.filter(
              (product) => product._id !== id
            );
            setGetData(remainigOrders);
          }
        });
    }
  };
  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <div className="section-title">
            <h2>My Orders</h2>
          </div>
        </div>
      </div>
      <div className="row g-1 row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4 py-2">
        {!getData.length ? (
          <>
            <div className="container">
              <div className="row">
                <div className="col-lg-12 mx-auto">
                  <h5>You don't have any order.</h5>
                  <Link to='/shop'>
                    <button
                      className="w-100 btn btn-lg btn-primary mb-2"
                    >
                      Buy Now
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </>
        ) : (
          <>
            {getData.map((order) => (
              <div key={order._id} className="col d-flex align-items-start">
                <div className="shadow-sm p-4 border">
                  <h4 className="fw-bold mb-3">{order.product_name}</h4>
                  <p>
                    <span>Order Price: ${order.price}</span><br />
                    <span>Order Status: {order.status}</span><br />
                    <span>Phone Number: {order.phone}</span>
                  </p>
                  <button
                    onClick={() => orderDeleteHandle(order._id)}
                    className="btn btn-warning"
                  >
                    Delete Order
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

export default MyOrders;

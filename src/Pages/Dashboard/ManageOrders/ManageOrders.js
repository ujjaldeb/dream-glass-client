import React from "react";
import useGetData from "../../../Hooks/useGetData";
import './ManageOrders.css';

const ManageOrders = () => {
  const [getData, setGetData] = useGetData("http://localhost:5000/orders");

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

  const handleUpdateStatus = (id) => {
    if (window.confirm("Do you want update order status?")) {
      const uid = `update_btn_${id}`;
      const sid = `shipped_${id}`;
      document.getElementById(uid).style.display = "inline-block";
      document.getElementById(sid).innerText = "Pending";

      fetch(`http://localhost:5000/orders/${id}`, {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({
          status: "Shipped",
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.modifiedCount) {
            alert("Order Status Update Successfull");
            document.getElementById(uid).style.display = "none";
            document.getElementById(sid).innerText = "Shipped";
          }
        });
    }
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <div className="section-title">
            <h2>Manage Orders</h2>
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
            {getData.map((order) => (
              <div key={order._id} className="col d-flex align-items-start">
                <div className="shadow-sm p-3 border">
                  <h4 className="fw-bold mb-0">{order.product_name}</h4>
                  <p>Order Price: ${order.price}</p>

                  {order.status !== "Shipped" ? (
                    <>
                      <p>
                        Order Status:{" "}
                        <span id={`shipped_${order._id}`}>{order.status}</span>
                      </p>
                    </>
                  ) : (
                    <>
                      <p>Order Status: Shipped</p>
                    </>
                  )}

                  <p>Phone Number: {order.phone}</p>
                  {order.status !== "Shipped" && (
                    <button
                      onClick={() => handleUpdateStatus(order._id)}
                      className="btn btn-info"
                      style={{ marginRight: "6px" }}
                      id={`update_btn_${order._id}`}
                    >
                      Update Order
                    </button>
                  )}
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

export default ManageOrders;

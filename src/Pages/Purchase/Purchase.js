import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router";
import useAuth from "../../Hooks/useAuth";
import useGetData from "../../Hooks/useGetData";

const Purchase = () => {
  const { pid } = useParams();
  const { register, handleSubmit, reset } = useForm();

  const { user } = useAuth();

  const [getData] = useGetData(`http://localhost:5000/products/${pid}`);

  // single service destructuring
  const { product_name, productPrice } = getData;

  //console.log(getData);

  // data save for database
  const onSubmit = (data) => {
    axios.post("http://localhost:5000/orders", data).then((res) => {
      if (res.data.insertedId) {
        alert("Order Place Successfully");
        reset();
      }
    });
  };

  return (
    <section className="booking-form py-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 mx-auto">
            <h3>Please Order Your Product</h3>
            <br />
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="d-flex flex-column post-form"
            >
              <div className="form-floating mb-2">
                <input
                  {...register("product_name", { required: true })}
                  placeholder="Product Name"
                  defaultValue={product_name}
                  readOnly
                  className="form-control"
                />
                <label className="text-start ms-1 fw-bold" htmlFor="">
                  Product Name
                </label>
              </div>

              <div className="form-floating mb-2">
                <input
                  {...register("userName", { required: true })}
                  placeholder="User Name"
                  defaultValue={user.displayName}
                  readOnly
                  className="form-control"
                />
                <label className="text-start ms-1 fw-bold" htmlFor="">
                  User Name
                </label>
              </div>

              <div className="form-floating mb-2">
                <input
                  {...register("email", { required: true })}
                  placeholder="User Email"
                  defaultValue={user.email}
                  readOnly
                  className="form-control"
                />
                <label className="text-start ms-1 fw-bold" htmlFor="">
                  User Email
                </label>
              </div>

              <div className="form-floating mb-2">
                <input
                  type="number"
                  {...register("price", { required: true })}
                  placeholder="Price"
                  defaultValue={productPrice}
                  readOnly
                  className="form-control"
                />
                <label className="text-start ms-1 fw-bold" htmlFor="">
                  Price
                </label>
              </div>

              <div className="form-floating mb-2">
                <textarea
                  type="number"
                  {...register("phone", { required: true })}
                  placeholder="Phone Number"
                  className="form-control"
                />
                <label className="text-start ms-1 fw-bold" htmlFor="">
                  Phone Number
                </label>
              </div>
              <div className="form-floating mb-2">
                <textarea
                  type="url"
                  {...register("address", { required: true })}
                  placeholder="Your Address"
                  className="form-control"
                />
                <label className="text-start ms-1 fw-bold" htmlFor="">
                  Shift Address
                </label>
              </div>
              <div className="form-floating mb-2">
                <input
                  type="text"
                  {...register("status")}
                  defaultValue="Pending"
                  hidden
                  className="form-control"
                />
              </div>
              <button className="w-100 btn btn-lg btn-primary" type="submit">
                Order Place
              </button>
              <br />
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Purchase;

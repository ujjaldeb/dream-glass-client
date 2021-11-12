import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import useAuth from "../../../../Hooks/useAuth";

const ReviewForm = () => {
  const { register, handleSubmit, reset } = useForm();
  const { user } = useAuth();

  const onReviewSubmit = (data) => {
    axios.post("http://localhost:5000/reviews", data).then((res) => {
      if (res.data.insertedId) {
        alert("Review Added Successfully");
        reset();
      }
    });
  };

  return (
    <div className="col-lg-4 col-sm-12 mx-auto">
      <form onSubmit={handleSubmit(onReviewSubmit)}>
        <h1 className="h3 mb-3 fw-normal">Please write a review</h1>

        <div className="form-floating mb-2">
          <input
            {...register("name", { required: true })}
            defaultValue={user.displayName}
            className="form-control"
            id="floatingInput"
            placeholder="User Name"
            readOnly
          />
          <label htmlFor="floatingInput">User Name</label>
        </div>
        <div className="form-floating mb-2">
          <input
            {...register("email", { required: true })}
            defaultValue={user.email}
            className="form-control"
            id="floatingInput"
            placeholder="name@example.com"
            autoComplete="off"
            readOnly
          />
          <label htmlFor="floatingInput">Email address</label>
        </div>
        <div className="form-floating mb-2">
          <textarea
            {...register("user_reviews", { required: true })}
            placeholder="Product Description"
            id="product_description"
            className="form-control"
          />
          <label htmlFor="product_description">User Reviews</label>
        </div>

        <div className="form-floating mb-2">
          <select
            {...register("review_count", { required: true })}
            className="form-control"
          >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
        </div>

        <button className="w-100 btn btn-lg btn-primary" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default ReviewForm;

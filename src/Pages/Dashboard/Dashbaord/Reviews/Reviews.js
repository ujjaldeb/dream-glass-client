import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

const Reviews = () => {

    const { register, handleSubmit } = useForm();
    const [result, setResult] = useState("");
    const onSubmit = (data) => setResult(JSON.stringify(data));

    return (
        <div class="col-lg-4 col-sm-12 mx-auto">
            <form onSubmit={handleSubmit(onSubmit)}>
                <h1 class="h3 mb-3 fw-normal">Please write a review</h1>

                <div class="form-floating mb-2">
                    <input {...register("user_name", { required: true })} class="form-control" id="floatingInput" placeholder="User Name" />
                    <label for="floatingInput">User Name</label>
                </div>
                <div class="form-floating mb-2">
                    <input {...register("email")} class="form-control" id="floatingInput" placeholder="name@example.com" autocomplete="off" />
                    <label for="floatingInput">Email address</label>
                </div>
                <div class="form-floating mb-2">
                    <textarea {...register("user_reviews", { required: true })} placeholder="Product Description" id="product_description" className="form-control" />
                    <label for="product_description">User Reviews</label>
                </div>

                <div class="form-floating mb-2">
                    <select {...register("Select User ", { required: true })} className="form-control">
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select>
                </div>

                <button class="w-100 btn btn-lg btn-primary" type="submit">Submit</button>
                <p>{result}</p>
            </form>
        </div>
    );
};

export default Reviews;
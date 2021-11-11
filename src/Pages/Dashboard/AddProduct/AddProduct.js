import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

const AddProduct = () => {

    const { register, handleSubmit } = useForm();
    const [result, setResult] = useState("");
    const onSubmit = (data) => setResult(JSON.stringify(data));

    return (
        <div class="col-lg-4 col-sm-12 mx-auto">
            <form onSubmit={handleSubmit(onSubmit)}>
                <h1 class="h3 mb-3 fw-normal">Add A Product</h1>

                <div class="form-floating mb-2">
                    <input {...register("product_name", { required: true })} class="form-control" id="floatingInput" placeholder="Product Name" autocomplete="off" />
                    <label for="floatingInput">Product Name</label>
                </div>
                <div class="form-floating mb-2">
                    <textarea {...register("product_description", { required: true })} placeholder="Product Description" id="product_description" className="form-control" />
                    <label for="product_description">Product Description</label>
                </div>

                <div class="form-floating mb-2">
                    <input type="number" placeholder="Product Price " {...register("productPrice", { required: true })} className="form-control" id="productPrice" autocomplete="off" />
                    <label for="productPrice">Product Price</label>
                </div>
                <div class="form-floating mb-2">
                    <input type="url" placeholder="Product Image URL" {...register("productImageURL ", { required: true })} className="form-control" id="productPrice" autocomplete="off" />
                    <label for="productImageURL">Product Image URL</label>
                </div>

                <button class="w-100 btn btn-lg btn-primary" type="submit">Submit</button>
                <p>{result}</p>
            </form>
        </div>
    );
};

export default AddProduct;
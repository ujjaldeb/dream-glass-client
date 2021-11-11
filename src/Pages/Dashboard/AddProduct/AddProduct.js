import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

const AddProduct = () => {

    const { register, handleSubmit } = useForm();
    const [result, setResult] = useState("");
    const onSubmit = (data) => setResult(JSON.stringify(data));

    return (
        <div className="col-lg-4 col-sm-12 mx-auto">
            <form onSubmit={handleSubmit(onSubmit)}>
                <h1 className="h3 mb-3 fw-normal">Add A Product</h1>

                <div className="form-floating mb-2">
                    <input {...register("product_name", { required: true })} className="form-control" id="floatingInput" placeholder="Product Name" autoComplete="off" />
                    <label htmlFor="floatingInput">Product Name</label>
                </div>
                <div className="form-floating mb-2">
                    <textarea {...register("product_description", { required: true })} placeholder="Product Description" id="product_description" className="form-control" />
                    <label htmlFor="product_description">Product Description</label>
                </div>

                <div className="form-floating mb-2">
                    <input type="number" placeholder="Product Price " {...register("productPrice", { required: true })} className="form-control" id="productPrice" autoComplete="off" />
                    <label htmlFor="productPrice">Product Price</label>
                </div>
                <div className="form-floating mb-2">
                    <input type="url" placeholder="Product Image URL" {...register("productImageURL ", { required: true })} className="form-control" id="productPrice" autoComplete="off" />
                    <label htmlFor="productImageURL">Product Image URL</label>
                </div>

                <button className="w-100 btn btn-lg btn-primary" type="submit">Submit</button>
                <p>{result}</p>
            </form>
        </div>
    );
};

export default AddProduct;
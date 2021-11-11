import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

const MakeAdmin = () => {

    const { register, handleSubmit } = useForm();
    const [result, setResult] = useState("");
    const onSubmit = (data) => setResult(JSON.stringify(data));

    return (
        <div class="col-lg-4 col-sm-12 mx-auto">
            <form onSubmit={handleSubmit(onSubmit)}>
                <h3 class="h3 mb-3 fw-normal">Choose an user to make admin</h3>
                <div class="form-floating mb-2">
                    <select {...register("Select User ", { required: true })} className="form-control">
                        <option value="Tarikul">Tarikul</option>
                        <option value="Ujjal">Ujjal</option>
                        <option value="Raju">Raju</option>
                    </select>
                </div>
                <button class="w-100 btn btn-lg btn-primary" type="submit">Make Admin</button>
                <p>{result}</p>
            </form>
        </div>
    );
};

export default MakeAdmin;
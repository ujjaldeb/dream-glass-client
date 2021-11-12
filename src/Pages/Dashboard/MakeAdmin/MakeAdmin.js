import React from "react";
import { useForm } from "react-hook-form";
import useGetData from "../../../Hooks/useGetData";
//import useAuth from "../../../Hooks/useAuth";

const MakeAdmin = () => {
  const { register, handleSubmit, reset } = useForm();
  const [getData] = useGetData("http://localhost:5000/users");

  //const {user} = useAuth();

  const onSubmit = (data) => {

    if (window.confirm("Do you want to make Admin?")) {
      fetch(`http://localhost:5000/users/${data.admin_email}`, {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({
          role: "admin",
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.modifiedCount) {
            alert("Admin Made Successfull");
          }
        });
    }

  };

  return (
    <div className="col-lg-4 col-sm-12 mx-auto">
      <form onSubmit={handleSubmit(onSubmit)}>
        <h3 className="h3 mb-3 fw-normal">Choose an user to make admin</h3>
        <div className="form-floating mb-2">
          <select
            {...register("admin_email", { required: true })}
            className="form-control"
          >
            {getData?.map((user) => (
              <option key={user._id}
                value={user.email}
              >{`${user.displayName}->${user.email}`}</option>
            ))}
          </select>
        </div>
        <button className="w-100 btn btn-lg btn-primary" type="submit">
          Make Admin
        </button>
      </form>
    </div>
  );
};

export default MakeAdmin;

import React from "react";
import { useForm } from "react-hook-form";
import { Link, useHistory } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";

const Register = () => {
  const { registerUser } = useAuth();

  const { register, handleSubmit, reset } = useForm();
  const history = useHistory();

  const onSubmit = (data) => {
    if (data.password === data.password2) {
      registerUser(data.email, data.password, data.name, history);
      reset();
    } else {
      alert("Password didn't match");
    }
  };

  return (
    <section className="login-box d-flex align-items-center justify-content-center">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-sm-12 mx-auto">
            <form onSubmit={handleSubmit(onSubmit)}>
              <h1 className="mb-5">ShopGrids</h1>
              <h1 className="h3 mb-3 fw-normal">Please Register</h1>

              <div className="form-floating mb-2">
                <input
                  {...register("name")}
                  className="form-control"
                  id="floatingInputName"
                  placeholder="Your UserName"
                />
                <label htmlFor="floatingInput">Your UserName</label>
              </div>
              <div className="form-floating mb-2">
                <input
                  {...register("email")}
                  className="form-control"
                  id="floatingInputEmail"
                  placeholder="name@example.com"
                />
                <label htmlFor="floatingInput">Email address</label>
              </div>

              <div className="form-floating mb-2">
                <input
                  type="password"
                  {...register("password")}
                  placeholder="Your Password"
                  className="form-control"
                  id="floatingPassword"
                  autoComplete="off"
                />
                <label htmlFor="floatingPassword">Password</label>
              </div>

              <div className="form-floating mb-2">
                <input
                  type="password"
                  {...register("password2")}
                  placeholder="Your Password"
                  className="form-control"
                  id="floatingPassword2"
                  autoComplete="off"
                />
                <label htmlFor="floatingPassword">Confirm Your Password</label>
              </div>

              <button className="w-100 btn btn-lg btn-primary mb-3" type="submit">
                Register
              </button>

              <p>
                Already Registered!{" "}
                <span>
                  <Link style={{ textDecoration: "none" }} to="/login">
                    Please Login
                  </Link>
                </span>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Register;

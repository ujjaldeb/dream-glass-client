import { useForm } from "react-hook-form";
import { Link, useHistory, useLocation } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";
import "./Login.css";

const Login = () => {
  const { register, handleSubmit } = useForm();
  const { loginUser, authError } = useAuth();

  const history = useHistory();
  const location = useLocation();

  const onSubmit = (data) => {
    loginUser(data.email, data.password, location, history);
  };
  return (
    <section className="login-box d-flex align-items-center justify-content-center">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-sm-12 mx-auto">
            <form onSubmit={handleSubmit(onSubmit)}>
              <h1 className="mb-5">ShopGrids</h1>
              <h1 className="h3 mb-3 fw-normal">Please Login</h1>

              <div className="form-floating mb-2">
                <input
                  {...register("email")}
                  className="form-control"
                  id="floatingInput"
                  placeholder="name@example.com"
                  autoComplete="off"
                />
                <label htmlFor="floatingInput">Email address</label>
              </div>

              <div className="form-floating mb-2">
                <input
                  {...register("password")}
                  placeholder="Your Password"
                  className="form-control"
                  id="floatingPassword"
                  autoComplete="off"
                  type="password"
                />
                <label htmlFor="floatingPassword">Password</label>
              </div>

              <button
                className="w-100 btn btn-lg btn-primary mb-2"
                type="submit"
              >
                login
              </button>
              <p>
                New User!
                <span>
                  <Link style={{ textDecoration: "none" }} to="/register">
                    Please Register
                  </Link>
                </span>
              </p>
              <div>
                <p>Admin Email: admin@admin.com <br /> Admin Password: 123456</p>
              </div>
            </form>
            {authError && (
              <div className="alert alert-danger" role="alert">
                {authError}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;

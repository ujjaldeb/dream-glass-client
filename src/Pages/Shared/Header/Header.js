import React from "react";
import { Link } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";

const Header = () => {
  const { user, logOut } = useAuth();
  //console.log(user);
  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <Link className="navbar-brand" to="/">
            ShopGrids
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link to="/home" className="nav-link">
                  HOME
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/shop" className="nav-link">
                  SHOP
                </Link>
              </li>
              {!user.email ? (
                <>
                  <li className="nav-item">
                    <Link to="/register" className="nav-link">
                      REGISTER
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/login" className="nav-link">
                      LOGIN
                    </Link>
                  </li>
                </>
              ) : (
                <>
                  <li className="nav-item">
                    <Link to="/dashboard" className="nav-link">
                      DASHBOARD
                    </Link>
                  </li>
                  <li className="nav-item">
                    <button
                      type="button"
                      className="btn btn-link text-decoration-none"
                    >
                      {user?.displayName.toUpperCase()}
                    </button>
                  </li>
                  <li className="nav-item">
                    <button
                      type="button"
                      className="btn btn-link text-decoration-none"
                      onClick={logOut}
                    >
                      LOGOUT
                    </button>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;

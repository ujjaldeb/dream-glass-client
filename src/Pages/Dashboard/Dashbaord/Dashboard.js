import React from 'react';
import { Switch, Route, Link, useRouteMatch } from "react-router-dom";
import AddProduct from '../AddProduct/AddProduct';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import ManageOrders from '../ManageOrders/ManageOrders';
import ManageProducts from '../ManageProducts/ManageProducts';
import MyOrders from '../MyOrders/MyOrders';
import "./Dashboard.css";
import Pay from './Pay/Pay';
import Reviews from './Reviews/Reviews';

const Dashboard = () => {

    const { path, url } = useRouteMatch();

    return (
        <section className="dashboard-box">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-2 col-sm-12 bg-dark sidebar-box px-0">
                        <ul className="nav flex-column text-start">
                            <li>
                                <Link to={`${url}/manageProducts`} className="nav-link">
                                    Manage Products
                                </Link>
                            </li>
                            <li>
                                <Link to={`${url}/addProduct`} className="nav-link">
                                    Add A Product
                                </Link>
                            </li>
                            <li>
                                <Link to={`${url}/makeAdmin`} className="nav-link">
                                    Make Admin
                                </Link>
                            </li>
                            <li>
                                <Link to={`${url}/manageOrders`} className="nav-link">
                                    Manage Orders
                                </Link>
                            </li>
                            <hr />
                            <li>
                                <Link to={`${url}/myOrders`} className="nav-link">
                                    My Orders
                                </Link>
                            </li>
                            <li>
                                <Link to={`${url}/reviews`} className="nav-link">
                                    Reviews
                                </Link>
                            </li>
                            <li>
                                <Link to={`${url}/pay`} className="nav-link">
                                    Pay
                                </Link>
                            </li>
                            <li>
                                <button type="button" className="btn btn-link text-decoration-none">Logout</button>
                            </li>
                        </ul>
                    </div>
                    <div className="col-lg-10 col-sm-12 d-flex py-5 justify-content-center">
                        <div className="container">
                            <div className="row">
                                <Switch>
                                    <Route exact path={path}>
                                        <ManageProducts></ManageProducts>
                                    </Route>
                                    <Route path={`${path}/manageProducts`}>
                                        <ManageProducts></ManageProducts>
                                    </Route>
                                    <Route path={`${path}/addProduct`}>
                                        <AddProduct></AddProduct>
                                    </Route>
                                    <Route path={`${path}/makeAdmin`}>
                                        <MakeAdmin></MakeAdmin>
                                    </Route>
                                    <Route path={`${path}/manageOrders`}>
                                        <ManageOrders></ManageOrders>
                                    </Route>
                                    <Route path={`${path}/myOrders`}>
                                        <MyOrders></MyOrders>
                                    </Route>
                                    <Route path={`${path}/reviews`}>
                                        <Reviews></Reviews>
                                    </Route>
                                    <Route path={`${path}/pay`}>
                                        <Pay></Pay>
                                    </Route>
                                </Switch>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Dashboard;
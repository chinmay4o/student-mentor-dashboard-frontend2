import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <>
      <nav
        className="navbar navbar-expand-lg navbar-dark bg-dark shadow-lg"
        style={{ "minHeight": "70px" }}
      >
        <div className="container-fluid">
            <h2 className="fs-2 fw-bold navbar-brand">Assignments</h2>
     
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
          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarNav"
          >
            <ul className="navbar-nav">
              <li className="nav-item  pe-3">
                <Link className="nav-link" to="/home">
                  {" "}
                  Home
                </Link>
              </li>
              <li className="nav-item pe-3">
                <Link className="nav-link" to="/about">
                  {" "}
                  About
                </Link>
              </li>
              <li className="nav-item pe-3">
                <Link className="nav-link" to="/addstudent">
                  {" "}
                  Dashboard
                </Link>
              </li>
              {/* <li className="nav-item pe-3">
                <Link className="nav-link" to="/login">
                  {" "}
                  Login
                </Link>
              </li> */}
              {/* <li className="nav-item pe-3">
                <Link className="nav-link" to="/register">
                  {" "}
                  Register
                </Link>
              </li> */}
             
             {/* //dropdown */}
              <div className="dropstart">
                <button
                  className="btn btnn btn-secondary dropdown-toggle"
                  type="button"
                  id="dropdownMenu2"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  More
                </button>
                <ul className="dropdown-menu" aria-labelledby="dropdownMenu2">
                  <li>
                    <button className="dropdown-item" type="button">
                    <Link to="/addstudent">
                  {" "}
                  AddStudent
                </Link>
                    </button>
                  </li>
                  <li>
                    <button className="dropdown-item" type="button">
                    <Link  to="/addmentor">
                  {" "}
                  AddMentor
                </Link>
                    </button>
                  </li>
                  <li>
                    <button className="dropdown-item" type="button">
                    <Link to="/assignmentor">
                  {" "}
                  Assign Mentor
                </Link>
                    </button>
                  </li>
                  <li>
                    <button className="dropdown-item" type="button">
                    <Link to="/changementor">
                  {" "}
                  Change Mentor
                </Link>
                    </button>
                  </li>
                  <li>
                    <button className="dropdown-item" type="button">
                    <Link to="/showstudents">
                  {" "}
                  Show Students
                </Link>
                    </button>
                  </li>
                </ul>
              </div>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Nav;

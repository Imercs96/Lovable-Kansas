import React from "react";
import { Link } from "react-router-dom";

export default ({}) => {
  return (
    <div class="wrapper">
      <nav
        id="sidebar"
        style={{
          backgroundImage:
            "https://insideone.s3-sa-east-1.amazonaws.com/experience-extreme-bridge-x3.png"
        }}
      >
        <div id="dismiss">
          <i class="fas fa-arrow-left"></i>
        </div>

        <div class="sidebar-header">
          <img
            src="https://insideone.s3-sa-east-1.amazonaws.com/logo-lovable.png"
            height="50"
            alt=""
          />
        </div>

        <ul class="list-unstyled components">
          {/* // <p>Dashboard</p> */}
          {/* <li class="active">
            <a href="#homeSubmenu" data-toggle="collapse" aria-expanded="false">
              Dashboard
            </a>
          </li> */}
          <li>
            <Link
              className="nav-link"
              style={{
                padding: "20px",
                paddingLeft: "20px"
              }}
              to="/"
            >
              Dashboard
            </Link>
          </li>

          <li className="nav-item active">
            <Link
              className="nav-link"
              style={{
                padding: "20px",
                paddingLeft: "20px"
              }}
              to="/orders"
            >
              Orders
            </Link>
          </li>
          <li className="nav-item active">
            <Link
              className="nav-link"
              style={{
                padding: "20px",
                paddingLeft: "20px"
              }}
              to="/configuration"
            >
              Configuration
            </Link>
          </li>
        </ul>
      </nav>

      <div class="overlay"></div>
    </div>
  );
};

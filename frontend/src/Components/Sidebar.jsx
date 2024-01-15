import React from "react";
import { NavLink } from "react-router-dom";




const Sidebar = () => {
  return (
    <>
      <div
        className="sidebar-wrapper"
        data-simplebar="true"
        style={{ backgroundColor: "#7163bafc" }}
      >
        <div className="sidebar-header " style={{ backgroundColor: "#7163bafc"}}>
          <div>
            <img
              src="assets/images/logo-icon.png"
              className="logo-icon"
              alt="logo icon"
            />
          </div>
          <div>
            <h4 className="logo-text text-white">Maya Hospital</h4>
          </div>
          <div className="toggle-icon ms-auto">
            <i className="bx bx-arrow-to-left" />
          </div>
        </div>
        {/*navigation*/}
        <ul className="metismenu" id="menu">
          <li >
            <NavLink to="/">
              <div className="parent-icon text-white" >
                <i className="bx bx-user-circle" />
              </div>
              <div className="menu-title text-white" >Admin</div>
            </NavLink>
          </li>
          <li>
            <NavLink to="/">
              <div className="parent-icon text-white" >
                <i className="bx bx-home-circle" />
              </div>
              <div className="menu-title text-white" >Dashboard</div>
            </NavLink>
          </li>

          <li>
            <NavLink to="/btn">
              <div className="parent-icon text-white" >
                <i className="bx bx-plus-medical" />
              </div>
              <div className="menu-title text-white" > Doctors Master</div>
            </NavLink>
          </li>
          <li>
            <NavLink to="/card">
              <div className="parent-icon text-white" >
                <i className="bx bx-clinic" />
              </div>
              <div className="menu-title text-white" > Nursing Charge</div>
            </NavLink>
          </li>

          <li>
            <NavLink to="/grid">
              <div className="parent-icon text-white" >
                <i className="bx bx-home-alt" />
              </div>
              <div className="menu-title text-white" > Ward</div>
            </NavLink>
          </li>

          <li>
            <NavLink to="/login">
              <div className="parent-icon text-white" >
                <i className="bx bx-log-in" />
              </div>
              <div className="menu-title text-white" > Sign In</div>
            </NavLink>
          </li>
          <li>
            <NavLink to="/signup">
              <div className="parent-icon text-white" >
                <i className="bx bx-log-out" />
              </div>
              <div className="menu-title text-white" > Sign Up</div>
            </NavLink>
          </li>
          <li>
            <NavLink to="/forget">
              <div className="parent-icon text-white" >
                <i className="bx bx-right-arrow-alt" />
              </div>
              <div className="menu-title text-white" >Forgot Password</div>
            </NavLink>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Sidebar;

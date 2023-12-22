import React from 'react'
import { NavLink } from 'react-router-dom'
const Sidebar = () => {
  return (
    <>
    <div className="sidebar-wrapper" data-simplebar="true">
    <div className="sidebar-header">
      <div>
        <img
          src="assets/images/logo-icon.png"
          className="logo-icon"
          alt="logo icon"
        />
      </div>
      <div>
        <h4 className="logo-text">Rocker</h4>
      </div>
      <div className="toggle-icon ms-auto">
        <i className="bx bx-arrow-to-left" />
      </div>
    </div>
    {/*navigation*/}
    <ul className="metismenu" id="menu">
      <li>
        <NavLink to="/">
          <div className="parent-icon">
            <i className="bx bx-home-circle" />
          </div>
          <div className="menu-title">Dashboard</div>
        </NavLink>
      </li>
      <li className="menu-label">UI Elements</li>
      <li>
        <a className="has-arrow" href="javascript:;">
          <div className="parent-icon">
            <i className="bx bx-bookmark-heart" />
          </div>
          <div className="menu-title">Components</div>
        </a>
        <ul>
          <li>
            {" "}
            <NavLink to="/btn">
              <i className="bx bx-right-arrow-alt" />
              Buttons
            </NavLink>
          </li>
          <li>
            {" "}
            <NavLink to="/card">
              <i className="bx bx-right-arrow-alt" />
              Cards
            </NavLink>
          </li>
        </ul>
      </li>
      <li>
        <a className="has-arrow" href="javascript:;">
          <div className="parent-icon">
            <i className="bx bx-repeat" />
          </div>
          <div className="menu-title">Content</div>
        </a>
        <ul>
          <li>
            {" "}
            <NavLink to="/grid">
              <i className="bx bx-right-arrow-alt" />
              Grid System
            </NavLink>
          </li>
          <li>
            {" "}
            <NavLink to="/typo">
              <i className="bx bx-right-arrow-alt" />
              Typography
            </NavLink>
          </li>
          <li>
            {" "}
            <NavLink to="/text">
              <i className="bx bx-right-arrow-alt" />
              Text Utilities
            </NavLink>
          </li>
        </ul>
      </li>
      <li className="menu-label">Addons</li>
      <li>
        <a className="has-arrow" href="javascript:;">
          <div className="parent-icon">
            <i className="bx bx-lock" />
          </div>
          <div className="menu-title">Authentication</div>
        </a>
        <ul>
          <li>
           
            <NavLink to="/login" >
              <i className="bx bx-right-arrow-alt" />
              Sign In
            </NavLink>
          </li>
          <li>
            {" "}
            <NavLink
             to="/signup">
              <i className="bx bx-right-arrow-alt" />
              Sign Up
            </NavLink>
          </li>
          <li>
            {" "}
            <NavLink to="/forget" >
              <i className="bx bx-right-arrow-alt" />
              Forgot Password
            </NavLink>

          </li>
          <li>
            {" "}
            <NavLink to="/error" >
              <i className="bx bx-right-arrow-alt" />
              404 Error
            </NavLink>
          </li>
          <li>
            {" "}
            <NavLink to="/blank" >
              <i className="bx bx-right-arrow-alt" />
              Blank Page
            </NavLink>
          </li>
        </ul>
      </li>
      <li>
        <NavLink to="/chart">
          <div className="parent-icon">
            <i className="bx bx-user-circle" />
          </div>
          <div className="menu-title">Charts</div>
        </NavLink>
      </li>
      <li>
        <NavLink to="/table">
          <div className="parent-icon">
            {" "}
            <i className="bx bx-video-recording" />
          </div>
          <div className="menu-title">Tables</div>
        </NavLink>
      </li>
    </ul>
    {/*end navigation*/}
    <div className="pro-card border border-light-2 bg-light-transparent p-3 radius-10 mx-3">
      <p className="text-light">
        Rocker Premium Template has full features of all UI Components for admin
        panel.
      </p>
      <div className="d-grid">
        <a
          href="https://codervent.gumroad.com/l/rocker"
          target="_blank"
          className="btn btn-primary radius-10"
        >
          Upgrade to Pro!
        </a>
      </div>
    </div>
  </div></>
  )
}

export default Sidebar
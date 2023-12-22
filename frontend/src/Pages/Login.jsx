import React from 'react'
import {Link, NavLink} from 'react-router-dom'
const Login = () => {
  return (
    <>
 <div className="wrapper">
  <div className="section-authentication-signin d-flex align-items-center justify-content-center my-5 my-lg-0">
    <div className="container-fluid">
      <div className="row row-cols-1 row-cols-lg-2 row-cols-xl-3">
        <div className="col mx-auto">
          <div className="mb-4 text-center">
            <img src="assets/images/logo-img.png" width={180} alt="" />
          </div>
          <div className="card">
            <div className="card-body">
              <div className="border p-4 rounded">
                <div className="text-center">
                  <h3 className="">Sign in</h3>
                  <p>
                    Don't have an account yet?
                    <Link to="/signup">Sign up here</Link>
                  </p>
                </div>
                <div className="d-grid">
                  <a
                    className="btn my-4 shadow-sm btn-white"
                    href="javascript:;"
                  >
                    
                    <span className="d-flex justify-content-center align-items-center">
                      <img
                        className="me-2"
                        src="assets/images/icons/search.svg"
                        width={16}
                        alt="Image Description"
                      />
                      <span>Sign in with Google</span>
                    </span>
                  </a>{" "}
                  <a href="" className="btn btn-facebook">
                    <i className="bx bxl-facebook" />
                    Sign in with Facebook
                  </a>
                </div>
                <div className="login-separater text-center mb-4">
                  {" "}
                  <span>OR SIGN IN WITH EMAIL</span>
                  <hr />
                </div>
                <div className="form-body">
                  <form className="row g-3">
                    <div className="col-12">
                      <label htmlFor="inputEmailAddress" className="form-label">
                        Email Address
                      </label>
                      <input
                        type="email"
                        className="form-control"
                        id="inputEmailAddress"
                        placeholder="Email Address"
                      />
                    </div>
                    <div className="col-12">
                      <label
                        htmlFor="inputChoosePassword"
                        className="form-label"
                      >
                        Enter Password
                      </label>
                      <div className="input-group" id="show_hide_password">
                        <input
                          type="password"
                          className="form-control border-end-0"
                          id="inputChoosePassword"
                          
                          placeholder="Enter Password"
                        />{" "}
                        <a
                          href="javascript:;"
                          className="input-group-text bg-transparent"
                        >
                          <i className="bx bx-hide" />
                        </a>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-check form-switch">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          id="flexSwitchCheckChecked"
                          defaultChecked=""
                        />
                        <label
                          className="form-check-label"
                          htmlFor="flexSwitchCheckChecked"
                        >
                          Remember Me
                        </label>
                      </div>
                    </div>
                    <div className="col-md-6 text-end">
                    
                      <NavLink to="/forget">
                        Forgot Password ?
                      </NavLink>
                    </div>
                    <div className="col-12">
                      <div className="d-grid">
                        <button type="submit" className="btn btn-primary">
                          <i className="bx bxs-lock-open" />
                          Sign in
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*end row*/}
    </div>
  </div>
</div>
   
    </>
  )
}

export default Login
import React from 'react'
import Footer from '../Components/Footer'
import Sidebar from '../Components/Sidebar'
import Header from '../Components/Header'

const Button = () => {
  return (
    <>
    <div className="page-wrapper">
      <Header/>
        <Sidebar/>
  <div className="page-content">
    {/*breadcrumb*/}
    <div className="page-breadcrumb d-none d-sm-flex align-items-center mb-3">
      <div className="breadcrumb-title pe-3">Components</div>
      <div className="ps-3">
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb mb-0 p-0">
            <li className="breadcrumb-item">
              <a href="javascript:;">
                <i className="bx bx-home-alt" />
              </a>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              Buttons
            </li>
          </ol>
        </nav>
      </div>
      <div className="ms-auto">
        <div className="btn-group">
          <button type="button" className="btn btn-primary">
            Settings
          </button>
          <button
            type="button"
            className="btn btn-primary split-bg-primary dropdown-toggle dropdown-toggle-split"
            data-bs-toggle="dropdown"
          >
            {" "}
            <span className="visually-hidden">Toggle Dropdown</span>
          </button>
          <div className="dropdown-menu dropdown-menu-right dropdown-menu-lg-end">
            {" "}
            <a className="dropdown-item" href="javascript:;">
              Action
            </a>
            <a className="dropdown-item" href="javascript:;">
              Another action
            </a>
            <a className="dropdown-item" href="javascript:;">
              Something else here
            </a>
            <div className="dropdown-divider" />{" "}
            <a className="dropdown-item" href="javascript:;">
              Separated link
            </a>
          </div>
        </div>
      </div>
    </div>
    {/*end breadcrumb*/}
    <div className="row">
      <div className="col col-lg-9 mx-auto">
        <div className="card radius-10">
          <div className="card-body">
            <div>
              <h5 className="card-title">Basic Examples</h5>
            </div>
            <hr />
            <div className="row row-cols-auto g-3">
              <div className="col">
                <button type="button" className="btn btn-primary px-5">
                  Primary
                </button>
              </div>
              <div className="col">
                <button type="button" className="btn btn-danger px-5">
                  Danger
                </button>
              </div>
              <div className="col">
                <button type="button" className="btn btn-success px-5">
                  Success
                </button>
              </div>
              <div className="col">
                <button type="button" className="btn btn-info px-5">
                  Info
                </button>
              </div>
              <div className="col">
                <button type="button" className="btn btn-warning px-5">
                  Warning
                </button>
              </div>
              <div className="col">
                <button type="button" className="btn btn-dark px-5">
                  Dark
                </button>
              </div>
              <div className="col">
                <button type="button" className="btn btn-secondary px-5">
                  Secondary
                </button>
              </div>
              <div className="col">
                <button type="button" className="btn btn-light px-5">
                  Light
                </button>
              </div>
            </div>
            {/*end row*/}
          </div>
          <div className="card-body">
            <div>
              <h5 className="card-title">Outline Examples</h5>
            </div>
            <hr />
            <div className="row row-cols-auto g-3">
              <div className="col">
                <button type="button" className="btn btn-outline-primary px-5">
                  Primary
                </button>
              </div>
              <div className="col">
                <button type="button" className="btn btn-outline-danger px-5">
                  Danger
                </button>
              </div>
              <div className="col">
                <button type="button" className="btn btn-outline-success px-5">
                  Success
                </button>
              </div>
              <div className="col">
                <button type="button" className="btn btn-outline-info px-5">
                  Info
                </button>
              </div>
              <div className="col">
                <button type="button" className="btn btn-outline-warning px-5">
                  Warning
                </button>
              </div>
              <div className="col">
                <button type="button" className="btn btn-outline-dark px-5">
                  Dark
                </button>
              </div>
              <div className="col">
                <button
                  type="button"
                  className="btn btn-outline-secondary px-5"
                >
                  Secondary
                </button>
              </div>
            </div>
            {/*end row*/}
          </div>
        </div>
        <div className="card radius-10">
          <div className="card-body">
            <div>
              <h5 className="card-title">Round Buttons</h5>
            </div>
            <hr />
            <div className="row row-cols-auto g-3">
              <div className="col">
                <button
                  type="button"
                  className="btn btn-primary px-5 radius-30"
                >
                  Primary
                </button>
              </div>
              <div className="col">
                <button type="button" className="btn btn-danger px-5 radius-30">
                  Danger
                </button>
              </div>
              <div className="col">
                <button
                  type="button"
                  className="btn btn-success px-5 radius-30"
                >
                  Success
                </button>
              </div>
              <div className="col">
                <button type="button" className="btn btn-info px-5 radius-30">
                  Info
                </button>
              </div>
              <div className="col">
                <button
                  type="button"
                  className="btn btn-warning px-5 radius-30"
                >
                  Warning
                </button>
              </div>
              <div className="col">
                <button type="button" className="btn btn-dark px-5 radius-30">
                  Dark
                </button>
              </div>
              <div className="col">
                <button
                  type="button"
                  className="btn btn-secondary px-5 radius-30"
                >
                  Secondary
                </button>
              </div>
              <div className="col">
                <button type="button" className="btn btn-light px-5 radius-30">
                  Light
                </button>
              </div>
            </div>
            {/*end row*/}
          </div>
          <div className="card-body">
            <div>
              <h5 className="card-title">Round Outline Buttons</h5>
            </div>
            <hr />
            <div className="row row-cols-auto g-3">
              <div className="col">
                <button
                  type="button"
                  className="btn btn-outline-primary px-5 radius-30"
                >
                  Primary
                </button>
              </div>
              <div className="col">
                <button
                  type="button"
                  className="btn btn-outline-danger px-5 radius-30"
                >
                  Danger
                </button>
              </div>
              <div className="col">
                <button
                  type="button"
                  className="btn btn-outline-success px-5 radius-30"
                >
                  Success
                </button>
              </div>
              <div className="col">
                <button
                  type="button"
                  className="btn btn-outline-info px-5 radius-30"
                >
                  Info
                </button>
              </div>
              <div className="col">
                <button
                  type="button"
                  className="btn btn-outline-warning px-5 radius-30"
                >
                  Warning
                </button>
              </div>
              <div className="col">
                <button
                  type="button"
                  className="btn btn-outline-dark px-5 radius-30"
                >
                  Dark
                </button>
              </div>
              <div className="col">
                <button
                  type="button"
                  className="btn btn-outline-secondary px-5 radius-30"
                >
                  Secondary
                </button>
              </div>
              <div className="col">
                <button
                  type="button"
                  className="btn btn-outline-light px-5 radius-30"
                >
                  Light
                </button>
              </div>
            </div>
            {/*end row*/}
          </div>
        </div>
      </div>
    </div>
    {/*end row*/}
  </div>
 <Footer/>
</div>
</>
  )
}

export default Button
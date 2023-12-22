import React from 'react'
import Header from '../Components/Header'
import Sidebar from '../Components/Sidebar'
import Footer from '../Components/Footer'

const Chart = () => {
  return (
    <>
    <div className="page-wrapper">
      <Header/>
      <Sidebar/>
  <div className="page-content">
    {/*breadcrumb*/}
    <div className="page-breadcrumb d-none d-sm-flex align-items-center mb-3">
      <div className="breadcrumb-title pe-3">Charts</div>
      <div className="ps-3">
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb mb-0 p-0">
            <li className="breadcrumb-item">
              <a href="javascript:;">
                <i className="bx bx-home-alt" />
              </a>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              Chartjs
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
      <div className="col-xl-9 mx-auto">
        <h6 className="mb-0 text-uppercase">Bar Chart</h6>
        <hr />
        <div className="card">
          <div className="card-body">
            <div className="chart-container1">
              <canvas id="chart2" />
            </div>
          </div>
        </div>
        <h6 className="mb-0 text-uppercase">Line Chart</h6>
        <hr />
        <div className="card">
          <div className="card-body">
            <div className="chart-container1">
              <canvas id="chart1" />
            </div>
          </div>
        </div>
        <h6 className="mb-0 text-uppercase">Pie Chart</h6>
        <hr />
        <div className="card">
          <div className="card-body">
            <div className="chart-container1">
              <canvas id="chart3" />
            </div>
          </div>
        </div>
        <h6 className="mb-0 text-uppercase">Doughnut Chart</h6>
        <hr />
        <div className="card">
          <div className="card-body">
            <div className="chart-container1">
              <canvas id="chart6" />
            </div>
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

export default Chart
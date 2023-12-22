import React from 'react'
import { NavLink } from 'react-router-dom'
import Footer from '../Components/Footer'
import Sidebar from '../Components/Sidebar'
import Header from '../Components/Header'

const Home = () => {
  return (
    <>
    <div className="wrapper">
  {/*sidebar wrapper */}
  <Sidebar/>
  
  {/*end sidebar wrapper */}
  {/*start header */}
  <Header/>
  {/*end header */}
  {/*start page wrapper */}
  <div className="page-wrapper">
    <div className="page-content">
      <div className="row row-cols-1 row-cols-md-2 row-cols-xl-4">
        <div className="col">
          <div className="card radius-10 border-primary border-start border-0 border-4">
            <div className="card-body">
              <div className="d-flex align-items-center">
                <div>
                  <p className="mb-0">Total Orders</p>
                  <h4 className="my-1 text-primary">845</h4>
                </div>
                <div className="text-primary ms-auto font-35">
                  <i className="bx bx-cart-alt" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card radius-10 border-success border-start border-0 border-4">
            <div className="card-body">
              <div className="d-flex align-items-center">
                <div>
                  <p className="mb-0">Total Income</p>
                  <h4 className="my-1 text-success">$89,245</h4>
                </div>
                <div className="text-success ms-auto font-35">
                  <i className="bx bx-dollar" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card radius-10  border-warning border-start border-0 border-4">
            <div className="card-body">
              <div className="d-flex align-items-center">
                <div>
                  <p className="mb-0">Total Users</p>
                  <h4 className="text-warning my-1">24.5K</h4>
                </div>
                <div className="text-warning ms-auto font-35">
                  <i className="bx bx-user-pin" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card radius-10 border-danger border-start border-0 border-4">
            <div className="card-body">
              <div className="d-flex align-items-center">
                <div>
                  <p className="mb-0">Comments</p>
                  <h4 className="my-1 text-danger">8569</h4>
                </div>
                <div className="text-danger ms-auto font-35">
                  <i className="bx bx-comment-detail" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*end row*/}
      <div className="row">
        <div className="col-12 col-lg-8">
          <div className="card radius-10">
            <div className="card-header">
              <div className="d-flex align-items-center">
                <div>
                  <h6 className="mb-0">Sales Overview</h6>
                </div>
                <div className="dropdown ms-auto">
                  <a
                    className="dropdown-toggle dropdown-toggle-nocaret"
                    href="#"
                    data-bs-toggle="dropdown"
                  >
                    <i className="bx bx-dots-horizontal-rounded font-22 text-option" />
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <a className="dropdown-item" href="javascript:;">
                        Action
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="javascript:;">
                        Another action
                      </a>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li>
                      <a className="dropdown-item" href="javascript:;">
                        Something else here
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="card-body">
              <div className="chart-container-0">
                <canvas id="chart1" />
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 col-lg-4">
          <div className="card radius-10">
            <div className="card-header">
              <div className="d-flex align-items-center">
                <div>
                  <h6 className="mb-0">Trending Products</h6>
                </div>
                <div className="dropdown ms-auto">
                  <a
                    className="dropdown-toggle dropdown-toggle-nocaret"
                    href="#"
                    data-bs-toggle="dropdown"
                  >
                    <i className="bx bx-dots-horizontal-rounded font-22 text-option" />
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <a className="dropdown-item" href="javascript:;">
                        Action
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="javascript:;">
                        Another action
                      </a>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li>
                      <a className="dropdown-item" href="javascript:;">
                        Something else here
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="card-body">
              <div className="chart-container-0">
                <canvas id="chart2" />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*end row*/}
      <div className="card radius-10">
        <div className="card-body">
          <div className="d-flex align-items-center">
            <div>
              <h6 className="mb-0">Recent Orders</h6>
            </div>
            <div className="dropdown ms-auto">
              <a
                className="dropdown-toggle dropdown-toggle-nocaret"
                href="#"
                data-bs-toggle="dropdown"
              >
                <i className="bx bx-dots-horizontal-rounded font-22 text-option" />
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="javascript:;">
                    Action
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="javascript:;">
                    Another action
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <a className="dropdown-item" href="javascript:;">
                    Something else here
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="table-responsive">
            <table className="table align-middle mb-0">
              <thead className="table-light">
                <tr>
                  <th>Product</th>
                  <th>Photo</th>
                  <th>Product ID</th>
                  <th>Status</th>
                  <th>Amount</th>
                  <th>Date</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Iphone 5</td>
                  <td>
                    <img
                      src="assets/images/products/01.png"
                      className="product-img-2"
                      alt="product img"
                    />
                  </td>
                  <td>#9405822</td>
                  <td>
                    <span className="badge bg-success text-white shadow-sm">
                      Paid
                    </span>
                  </td>
                  <td>$1250.00</td>
                  <td>03 Feb 2020</td>
                </tr>
                <tr>
                  <td>Earphone GL</td>
                  <td>
                    <img
                      src="assets/images/products/02.png"
                      className="product-img-2"
                      alt="product img"
                    />
                  </td>
                  <td>#8304620</td>
                  <td>
                    <span className="badge bg-info text-white shadow-sm">
                      Pending
                    </span>
                  </td>
                  <td>$1500.00</td>
                  <td>05 Feb 2020</td>
                </tr>
                <tr>
                  <td>HD Hand Camera</td>
                  <td>
                    <img
                      src="assets/images/products/03.png"
                      className="product-img-2"
                      alt="product img"
                    />
                  </td>
                  <td>#4736890</td>
                  <td>
                    <span className="badge bg-danger text-white shadow-sm">
                      Failed
                    </span>
                  </td>
                  <td>$1400.00</td>
                  <td>06 Feb 2020</td>
                </tr>
                <tr>
                  <td>Clasic Shoes</td>
                  <td>
                    <img
                      src="assets/images/products/04.png"
                      className="product-img-2"
                      alt="product img"
                    />
                  </td>
                  <td>#8543765</td>
                  <td>
                    <span className="badge bg-success text-white shadow-sm">
                      Paid
                    </span>
                  </td>
                  <td>$1200.00</td>
                  <td>14 Feb 2020</td>
                </tr>
                <tr>
                  <td>Sitting Chair</td>
                  <td>
                    <img
                      src="assets/images/products/06.png"
                      className="product-img-2"
                      alt="product img"
                    />
                  </td>
                  <td>#9629240</td>
                  <td>
                    <span className="badge bg-info text-white shadow-sm">
                      Pending
                    </span>
                  </td>
                  <td>$1500.00</td>
                  <td>18 Feb 2020</td>
                </tr>
                <tr>
                  <td>Hand Watch</td>
                  <td>
                    <img
                      src="assets/images/products/05.png"
                      className="product-img-2"
                      alt="product img"
                    />
                  </td>
                  <td>#8506790</td>
                  <td>
                    <span className="badge bg-danger text-white shadow-sm">
                      Failed
                    </span>
                  </td>
                  <td>$1800.00</td>
                  <td>21 Feb 2020</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div className="card radius-10 w-100">
        <div className="card-header bg-transparent">
          <div className="d-flex align-items-center">
            <div>
              <h6 className="mb-0">World Map</h6>
            </div>
            <div className="dropdown ms-auto">
              <a
                className="dropdown-toggle dropdown-toggle-nocaret"
                href="#"
                data-bs-toggle="dropdown"
              >
                <i className="bx bx-dots-horizontal-rounded font-22 text-option" />
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="javascript:;">
                    Action
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="javascript:;">
                    Another action
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <a className="dropdown-item" href="javascript:;">
                    Something else here
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="card-body">
          <div id="geographic-map-2" />
        </div>
      </div>
    </div>
  </div>
  {/*end page wrapper */}
  {/*start overlay*/}
  <div className="overlay toggle-icon" />
  {/*end overlay*/}
  {/*Start Back To Top Button*/}
  <a href="javaScript:;" className="back-to-top">
    <i className="bx bxs-up-arrow-alt" />
  </a>
  {/*End Back To Top Button*/}

  <Footer/>
</div>
</>
  )
}

export default Home
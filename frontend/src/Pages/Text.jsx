import React from 'react'
import Footer from '../Components/Footer'
import Header from '../Components/Header'
import Sidebar from '../Components/Sidebar'

const Text = () => {
  return (
    <>
    <div className="page-wrapper">
        <Header/>
        <Sidebar/>
  <div className="page-content">
    {/*breadcrumb*/}
    <div className="page-breadcrumb d-none d-sm-flex align-items-center mb-3">
      <div className="breadcrumb-title pe-3">Component</div>
      <div className="ps-3">
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb mb-0 p-0">
            <li className="breadcrumb-item">
              <a href="javascript:;">
                <i className="bx bx-home-alt" />
              </a>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              Text Utilities
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
    <h6 className="mb-0 text-uppercase">Background Colors</h6>
    <hr />
    <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4">
      <div className="col">
        <div className="card bg-primary text-center">
          <div className="card-body">
            <div className="p-4 text-white rounded">.bg-primary</div>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="card bg-secondary text-center">
          <div className="card-body">
            <div className="p-4 text-white rounded">.bg-secondary</div>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="card bg-success text-center">
          <div className="card-body">
            <div className="p-4 text-white rounded">.bg-success</div>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="card bg-danger text-center">
          <div className="card-body">
            <div className="p-4 text-white rounded">.bg-danger</div>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="card bg-warning text-center">
          <div className="card-body">
            <div className="p-4 text-dark rounded">.bg-warning</div>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="card bg-info text-center">
          <div className="card-body">
            <div className="p-4 text-dark rounded">.bg-info</div>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="card bg-light text-center">
          <div className="card-body">
            <div className="p-4 text-dark rounded">.bg-light</div>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="card bg-dark text-center">
          <div className="card-body">
            <div className="p-4 text-white rounded">.bg-dark</div>
          </div>
        </div>
      </div>
    </div>
    {/*end row*/}
    <h6 className="mb-0 text-uppercase">Gradient Background Colors</h6>
    <hr />
    <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4">
      <div className="col">
        <div className="card bg-primary bg-gradient text-center">
          <div className="card-body">
            <div className="p-3 text-white rounded">.bg-primary</div>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="card bg-secondary bg-gradient text-center">
          <div className="card-body">
            <div className="p-3 text-white rounded">.bg-secondary</div>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="card bg-success bg-gradient text-center">
          <div className="card-body">
            <div className="p-3 text-white rounded">.bg-success</div>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="card bg-danger bg-gradient text-center">
          <div className="card-body">
            <div className="p-3 text-white rounded">.bg-danger.bg-gradient</div>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="card bg-warning bg-gradient text-center">
          <div className="card-body">
            <div className="p-3 text-dark rounded">.bg-warning.bg-gradient</div>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="card bg-info bg-gradient text-center">
          <div className="card-body">
            <div className="p-3 text-dark rounded">.bg-info.bg-gradient</div>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="card bg-light bg-gradient text-center">
          <div className="card-body">
            <div className="p-3 text-dark rounded">.bg-light.bg-gradient</div>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="card bg-dark bg-gradient text-center">
          <div className="card-body">
            <div className="p-3 text-white rounded">.bg-dark.bg-gradient</div>
          </div>
        </div>
      </div>
    </div>
    {/*end row*/}
    <h6 className="mb-0 text-uppercase">Text Colors</h6>
    <hr />
    <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4">
      <div className="col">
        <div className="card text-center">
          <div className="card-body">
            <div className="text-primary rounded">.text-primary</div>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="card text-center">
          <div className="card-body">
            <div className="text-secondary rounded">.text-secondary</div>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="card text-center">
          <div className="card-body">
            <div className="text-success rounded">.text-success</div>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="card text-center">
          <div className="card-body">
            <div className="text-danger rounded">.text-danger</div>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="card text-center">
          <div className="card-body">
            <div className="text-warning rounded">.text-warning</div>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="card text-center">
          <div className="card-body">
            <div className="text-info rounded">.text-info</div>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="card text-center bg-dark">
          <div className="card-body">
            <div className="text-light rounded">.text-light</div>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="card text-center">
          <div className="card-body">
            <div className="text-dark rounded">.text-dark</div>
          </div>
        </div>
      </div>
    </div>
    {/*end row*/}
    <h6 className="mb-0 text-uppercase">Border Utilities</h6>
    <hr />
    <div className="card">
      <div className="card-body">
        <div className="row row-cols-auto row-cols-1 row-cols-md-2 row-cols-lg-4 g-3">
          <div className="col">
            <div className="p-4 border text-center rounded bg-light">
              .border
            </div>
          </div>
          <div className="col">
            <div className="p-4 border-top text-center rounded bg-light">
              .border-top
            </div>
          </div>
          <div className="col">
            <div className="p-4 border-bottom text-center rounded bg-light">
              .border-bottom
            </div>
          </div>
          <div className="col">
            <div className="p-4 border-start text-center rounded bg-light">
              .border-start
            </div>
          </div>
          <div className="col">
            <div className="p-4 border-end text-center rounded bg-light">
              .border-end
            </div>
          </div>
          <div className="col">
            <div className="p-4 border-1 border text-center rounded bg-light">
              .border-1
            </div>
          </div>
          <div className="col">
            <div className="p-4 border-2 border text-center rounded bg-light">
              .border-2
            </div>
          </div>
          <div className="col">
            <div className="p-4 border-3 border text-center rounded bg-light">
              .border-3
            </div>
          </div>
          <div className="col">
            <div className="p-4 border-4 border text-center rounded bg-light">
              .border-4
            </div>
          </div>
          <div className="col">
            <div className="p-4 border-5 border text-center rounded bg-light">
              .border-5
            </div>
          </div>
          <div className="col">
            <div className="p-4 border border-3 border-primary text-center rounded bg-light">
              .border-primary
            </div>
          </div>
          <div className="col">
            <div className="p-4 border border-3 border-danger text-center rounded bg-light">
              .border-danger
            </div>
          </div>
          <div className="col">
            <div className="p-4 border border-3 border-success text-center rounded bg-light">
              .border-success
            </div>
          </div>
          <div className="col">
            <div className="p-4 border border-3 border-info text-center rounded bg-light">
              .border-info
            </div>
          </div>
          <div className="col">
            <div className="p-4 border border-3 border-warning text-center rounded bg-light">
              .border-warning
            </div>
          </div>
          <div className="col">
            <div className="p-4 border border-3 border-dark text-center rounded bg-light">
              .border-dark
            </div>
          </div>
        </div>
        {/*end row*/}
      </div>
    </div>
    <h6 className="mb-0 text-uppercase">Border Radius</h6>
    <hr />
    <div className="card">
      <div className="card-body">
        <div className="row row-cols-auto g-3 align-items-center">
          <div className="col">
            <img
              src="https://via.placeholder.com/120x120"
              height={120}
              alt="..."
              className="img-fluid rounded"
            />
          </div>
          <div className="col">
            <img
              src="https://via.placeholder.com/120x120"
              height={120}
              alt="..."
              className="img-fluid rounded-top"
            />
          </div>
          <div className="col">
            <img
              src="https://via.placeholder.com/120x120"
              height={120}
              alt="..."
              className="img-fluid rounded-bottom"
            />
          </div>
          <div className="col">
            <img
              src="https://via.placeholder.com/120x120"
              height={120}
              alt="..."
              className="img-fluid rounded-start"
            />
          </div>
          <div className="col">
            <img
              src="https://via.placeholder.com/120x120"
              height={120}
              alt="..."
              className="img-fluid rounded-end"
            />
          </div>
          <div className="col">
            <img
              src="https://via.placeholder.com/120x120"
              height={120}
              alt="..."
              className="img-fluid rounded-circle"
            />
          </div>
          <div className="col">
            <img
              src="https://via.placeholder.com/150x75"
              height={120}
              alt="..."
              className="img-fluid rounded-pill"
            />
          </div>
        </div>
        {/*end row*/}
      </div>
    </div>
    <h6 className="mb-0 text-uppercase">Shadows Examples</h6>
    <hr />
    <div className="card">
      <div className="card-body">
        <div className="row row-cols-1 row-cols-lg-4 g-3 align-items-center">
          <div className="col">
            <div className="shadow-none p-4 rounded">No shadow</div>
          </div>
          <div className="col">
            <div className="shadow-sm p-4 rounded">Small shadow</div>
          </div>
          <div className="col">
            <div className="shadow p-4 rounded">Regular shadow</div>
          </div>
          <div className="col">
            <div className="shadow-lg p-4 rounded">Larger shadow</div>
          </div>
        </div>
        {/*end row*/}
      </div>
    </div>
  </div>
  <Footer/>
</div>
</>
  )
}

export default Text
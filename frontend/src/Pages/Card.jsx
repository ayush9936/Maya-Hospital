import React from 'react'
import Footer from '../Components/Footer'
import Sidebar from '../Components/Sidebar'
import Header from '../Components/Header'

const Card = () => {
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
              Cards
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
    <h6 className="mb-0 text-uppercase">Card with images</h6>
    <hr />
    <div className="row row-cols-1 row-cols-md-2 row-cols-lg-2 row-cols-xl-2">
      <div className="col">
        <div className="card border-primary border-bottom border-3 border-0">
          <img
            src="assets/images/gallery/01.png"
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title text-primary">Card title</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <hr />
            <div className="d-flex align-items-center gap-2">
              <a href="javascript:;" className="btn btn-inverse-primary">
                <i className="bx bx-star" />
                Button
              </a>
              <a href="javascript:;" className="btn btn-primary">
                <i className="bx bx-microphone" />
                Button
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="card border-danger border-bottom border-3 border-0">
          <img
            src="assets/images/gallery/02.png"
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title text-danger">Card title</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <hr />
            <div className="d-flex align-items-center gap-2">
              <a href="javascript:;" className="btn btn-inverse-danger">
                <i className="bx bx-star" />
                Button
              </a>
              <a href="javascript:;" className="btn btn-danger">
                <i className="bx bx-microphone" />
                Button
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/*end row*/}
    <h6 className="mb-0 text-uppercase">Card with list group</h6>
    <hr />
    <div className="row row-cols-1 row-cols-md-1 row-cols-lg-3 row-cols-xl-3">
      <div className="col">
        <div className="card">
          <img
            src="assets/images/gallery/05.png"
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
          </div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">Cras justo odio</li>
            <li className="list-group-item">Dapibus ac facilisis in</li>
            <li className="list-group-item">Vestibulum at eros</li>
          </ul>
          <div className="card-body">
            {" "}
            <a href="#" className="card-link">
              Card link
            </a>
            <a href="#" className="card-link">
              Another link
            </a>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="card">
          <img
            src="assets/images/gallery/06.png"
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
          </div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">Cras justo odio</li>
            <li className="list-group-item">Dapibus ac facilisis in</li>
            <li className="list-group-item">Vestibulum at eros</li>
          </ul>
          <div className="card-body">
            {" "}
            <a href="#" className="card-link">
              Card link
            </a>
            <a href="#" className="card-link">
              Another link
            </a>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="card">
          <img
            src="assets/images/gallery/07.png"
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
          </div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">Cras justo odio</li>
            <li className="list-group-item">Dapibus ac facilisis in</li>
            <li className="list-group-item">Vestibulum at eros</li>
          </ul>
          <div className="card-body">
            {" "}
            <a href="#" className="card-link">
              Card link
            </a>
            <a href="#" className="card-link">
              Another link
            </a>
          </div>
        </div>
      </div>
    </div>
    {/*end row*/}
    <h6 className="mb-0 text-uppercase">Image caps Card</h6>
    <hr />
    <div className="row row-cols-1 row-cols-md-1 row-cols-lg-2 row-cols-xl-2">
      <div className="col">
        <div className="card mb-3">
          <img
            src="assets/images/gallery/08.png"
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </p>
            <p className="card-text">
              <small className="text-muted">Last updated 3 mins ago</small>
            </p>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </p>
            <p className="card-text">
              <small className="text-muted">Last updated 3 mins ago</small>
            </p>
          </div>
          <img
            src="assets/images/gallery/09.png"
            className="card-img-bottom"
            alt="..."
          />
        </div>
      </div>
    </div>
    {/*end row*/}
    <h6 className="mb-0 text-uppercase">Card with text</h6>
    <hr />
    <div className="row row-cols-1 row-cols-md-3 row-cols-lg-3 row-cols-xl-3">
      <div className="col">
        <div className="card bg-primary text-white">
          <div className="card-body">
            <h5 className="card-title text-white">Special title treatment</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="card bg-danger text-white">
          <div className="card-body">
            <h5 className="card-title text-white">Special title treatment</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="card bg-success text-white">
          <div className="card-body">
            <h5 className="card-title text-white">Special title treatment</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="card bg-dark text-white">
          <div className="card-body">
            <h5 className="card-title text-white">Special title treatment</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="card bg-warning">
          <div className="card-body">
            <h5 className="card-title text-dark">Special title treatment</h5>
            <p className="card-text text-dark">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="card bg-info">
          <div className="card-body">
            <h5 className="card-title text-dark">Special title treatment</h5>
            <p className="card-text text-dark">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
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

export default Card
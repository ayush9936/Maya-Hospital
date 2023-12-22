import React from 'react'
import Header from '../Components/Header'
import Sidebar from '../Components/Sidebar'
import Footer from '../Components/Footer'

const Grid = () => {
  return (
   <>
   <div className="page-wrapper">
    <Header/>
    <Sidebar/>
  <div className="page-content">
    {/*breadcrumb*/}
    <div className="page-breadcrumb d-none d-sm-flex align-items-center mb-3">
      <div className="breadcrumb-title pe-3">Content</div>
      <div className="ps-3">
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb mb-0 p-0">
            <li className="breadcrumb-item">
              <a href="javascript:;">
                <i className="bx bx-home-alt" />
              </a>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              Grid System
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
    <div className="card">
      <div className="card-body">
        <div className="card-title">
          <h5 className="mb-0">Available breakpoints</h5>
        </div>
        <hr />
        <div className="table-responsive">
          <table className="table">
            <thead>
              <tr>
                <th>Breakpoint</th>
                <th>Class infix</th>
                <th>Dimensions</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>X-Small</td>
                <td>
                  <em>None</em>
                </td>
                <td>&lt;576px</td>
              </tr>
              <tr>
                <td>Small</td>
                <td>
                  <code>sm</code>
                </td>
                <td>≥576px</td>
              </tr>
              <tr>
                <td>Medium</td>
                <td>
                  <code>md</code>
                </td>
                <td>≥768px</td>
              </tr>
              <tr>
                <td>Large</td>
                <td>
                  <code>lg</code>
                </td>
                <td>≥992px</td>
              </tr>
              <tr>
                <td>Extra large</td>
                <td>
                  <code>xl</code>
                </td>
                <td>≥1200px</td>
              </tr>
              <tr>
                <td>Extra extra large</td>
                <td>
                  <code>xxl</code>
                </td>
                <td>≥1400px</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
    <div className="card">
      <div className="card-body">
        <div className="card-title">
          <h5 className="mb-0">Containers</h5>
        </div>
        <hr />
        <div className="table-responsive">
          <table className="table">
            <thead>
              <tr>
                <td className="border-dark" />
                <th scope="col">
                  Extra small
                  <br /> <span className="fw-normal">&lt;576px</span>
                </th>
                <th scope="col">
                  Small
                  <br /> <span className="fw-normal">≥576px</span>
                </th>
                <th scope="col">
                  Medium
                  <br /> <span className="fw-normal">≥768px</span>
                </th>
                <th scope="col">
                  Large
                  <br /> <span className="fw-normal">≥992px</span>
                </th>
                <th scope="col">
                  X-Large
                  <br /> <span className="fw-normal">≥1200px</span>
                </th>
                <th scope="col">
                  XX-Large
                  <br /> <span className="fw-normal">≥1400px</span>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="fw-normal">
                  <code>.container</code>
                </th>
                <td className="text-muted">100%</td>
                <td>540px</td>
                <td>720px</td>
                <td>960px</td>
                <td>1140px</td>
                <td>1320px</td>
              </tr>
              <tr>
                <th scope="row" className="fw-normal">
                  <code>.container-sm</code>
                </th>
                <td className="text-muted">100%</td>
                <td>540px</td>
                <td>720px</td>
                <td>960px</td>
                <td>1140px</td>
                <td>1320px</td>
              </tr>
              <tr>
                <th scope="row" className="fw-normal">
                  <code>.container-md</code>
                </th>
                <td className="text-muted">100%</td>
                <td className="text-muted">100%</td>
                <td>720px</td>
                <td>960px</td>
                <td>1140px</td>
                <td>1320px</td>
              </tr>
              <tr>
                <th scope="row" className="fw-normal">
                  <code>.container-lg</code>
                </th>
                <td className="text-muted">100%</td>
                <td className="text-muted">100%</td>
                <td className="text-muted">100%</td>
                <td>960px</td>
                <td>1140px</td>
                <td>1320px</td>
              </tr>
              <tr>
                <th scope="row" className="fw-normal">
                  <code>.container-xl</code>
                </th>
                <td className="text-muted">100%</td>
                <td className="text-muted">100%</td>
                <td className="text-muted">100%</td>
                <td className="text-muted">100%</td>
                <td>1140px</td>
                <td>1320px</td>
              </tr>
              <tr>
                <th scope="row" className="fw-normal">
                  <code>.container-xxl</code>
                </th>
                <td className="text-muted">100%</td>
                <td className="text-muted">100%</td>
                <td className="text-muted">100%</td>
                <td className="text-muted">100%</td>
                <td className="text-muted">100%</td>
                <td>1320px</td>
              </tr>
              <tr>
                <th scope="row" className="fw-normal">
                  <code>.container-fluid</code>
                </th>
                <td className="text-muted">100%</td>
                <td className="text-muted">100%</td>
                <td className="text-muted">100%</td>
                <td className="text-muted">100%</td>
                <td className="text-muted">100%</td>
                <td className="text-muted">100%</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
    <div className="card">
      <div className="card-body">
        <div className="card-title">
          <h5 className="mb-0">Grid options</h5>
        </div>
        <hr />
        <div className="table-responsive">
          <table className="table">
            <thead>
              <tr>
                <th scope="col" />
                <th scope="col">
                  xs
                  <br /> <span className="fw-normal">&lt;576px</span>
                </th>
                <th scope="col">
                  sm
                  <br /> <span className="fw-normal">≥576px</span>
                </th>
                <th scope="col">
                  md
                  <br /> <span className="fw-normal">≥768px</span>
                </th>
                <th scope="col">
                  lg
                  <br /> <span className="fw-normal">≥992px</span>
                </th>
                <th scope="col">
                  xl
                  <br /> <span className="fw-normal">≥1200px</span>
                </th>
                <th scope="col">
                  xxl
                  <br /> <span className="fw-normal">≥1400px</span>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th className="text-nowrap" scope="row">
                  Container <code className="fw-normal">max-width</code>
                </th>
                <td>None (auto)</td>
                <td>540px</td>
                <td>720px</td>
                <td>960px</td>
                <td>1140px</td>
                <td>1320px</td>
              </tr>
              <tr>
                <th className="text-nowrap" scope="row">
                  Class prefix
                </th>
                <td>
                  <code>.col-</code>
                </td>
                <td>
                  <code>.col-sm-</code>
                </td>
                <td>
                  <code>.col-md-</code>
                </td>
                <td>
                  <code>.col-lg-</code>
                </td>
                <td>
                  <code>.col-xl-</code>
                </td>
                <td>
                  <code>.col-xxl-</code>
                </td>
              </tr>
              <tr>
                <th className="text-nowrap" scope="row">
                  # of columns
                </th>
                <td colSpan={6}>12</td>
              </tr>
              <tr>
                <th className="text-nowrap" scope="row">
                  Gutter width
                </th>
                <td colSpan={6}>1.5rem (.75rem on left and right)</td>
              </tr>
              <tr>
                <th className="text-nowrap" scope="row">
                  Custom gutters
                </th>
                <td colSpan={6}>
                  <a href="/docs/5.0/layout/gutters/">Yes</a>
                </td>
              </tr>
              <tr>
                <th className="text-nowrap" scope="row">
                  Nestable
                </th>
                <td colSpan={6}>
                  <a href="#nesting">Yes</a>
                </td>
              </tr>
              <tr>
                <th className="text-nowrap" scope="row">
                  Column ordering
                </th>
                <td colSpan={6}>
                  <a href="/docs/5.0/layout/columns/#reordering">Yes</a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
  <Footer/>
</div>
</>
  )
}

export default Grid
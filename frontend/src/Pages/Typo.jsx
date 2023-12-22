import React from 'react'
import Header from '../Components/Header'
import Sidebar from '../Components/Sidebar'
import Footer from '../Components/Footer'

const Typo = () => {
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
              Typography
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
      <div className="col-12 col-lg-9 mx-auto">
        <h6 className="mb-0 text-uppercase">Headings</h6>
        <hr />
        <div className="card">
          <div className="card-body">
            <h1>h1. Bootstrap heading</h1>
            <hr />
            <h2>h2. Bootstrap heading</h2>
            <hr />
            <h3>h3. Bootstrap heading</h3>
            <hr />
            <h4>h4. Bootstrap heading</h4>
            <hr />
            <h5>h5. Bootstrap heading</h5>
            <hr />
            <h6>h6. Bootstrap heading</h6>
          </div>
        </div>
        <h6 className="mb-0 text-uppercase">Display headings</h6>
        <hr />
        <div className="card">
          <div className="card-body">
            <h1 className="display-1">Display 1</h1>
            <hr />
            <h1 className="display-2">Display 2</h1>
            <hr />
            <h1 className="display-3">Display 3</h1>
            <hr />
            <h1 className="display-4">Display 4</h1>
            <hr />
            <h1 className="display-5">Display 5</h1>
            <hr />
            <h1 className="display-6">Display 6</h1>
          </div>
        </div>
        <h6 className="mb-0 text-uppercase">Inline text elements</h6>
        <hr />
        <div className="card">
          <div className="card-body">
            <p>
              You can use the mark tag to
              <mark>highlight</mark>text.
            </p>
            <p>
              <del>
                This line of text is meant to be treated as deleted text.
              </del>
            </p>
            <p>
              <s>
                This line of text is meant to be treated as no longer accurate.
              </s>
            </p>
            <p>
              <ins>
                This line of text is meant to be treated as an addition to the
                document.
              </ins>
            </p>
            <p>
              <u>This line of text will render as underlined.</u>
            </p>
            <p>
              <small>
                This line of text is meant to be treated as fine print.
              </small>
            </p>
            <p>
              <strong>This line rendered as bold text.</strong>
            </p>
            <p>
              <em>This line rendered as italicized text.</em>
            </p>
          </div>
        </div>
        <h6 className="mb-0 text-uppercase">Naming a source</h6>
        <hr />
        <div className="card">
          <div className="card-body">
            <figure>
              <blockquote className="blockquote">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Integer posuere erat a ante.
                </p>
              </blockquote>
              <figcaption className="blockquote-footer">
                Someone famous in <cite title="Source Title">Source Title</cite>
              </figcaption>
            </figure>
            <hr />
            <figure className="text-center">
              <blockquote className="blockquote">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Integer posuere erat a ante.
                </p>
              </blockquote>
              <figcaption className="blockquote-footer">
                Someone famous in <cite title="Source Title">Source Title</cite>
              </figcaption>
            </figure>
            <hr />
            <figure className="text-end">
              <blockquote className="blockquote">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Integer posuere erat a ante.
                </p>
              </blockquote>
              <figcaption className="blockquote-footer">
                Someone famous in <cite title="Source Title">Source Title</cite>
              </figcaption>
            </figure>
          </div>
        </div>
        <h6 className="mb-0 text-uppercase">Inline</h6>
        <hr />
        <div className="card">
          <div className="card-body">
            <ul className="list-inline mb-0">
              <li className="list-inline-item">Lorem ipsum</li>
              <li className="list-inline-item">Phasellus iaculis</li>
              <li className="list-inline-item">Nulla volutpat</li>
            </ul>
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

export default Typo
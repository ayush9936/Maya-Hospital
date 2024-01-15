import React, { useState, useEffect } from "react";
import Header from "../Components/Header";
import Sidebar from "../Components/Sidebar";
import Footer from "../Components/Footer";
import Dforms from "./forms/Dforms";

const Ward = () => {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);

  useEffect(() => {
    fetch("https://hospitalapi.projectupdate.in/api/getWardDetails")
      .then((response) => response.json())
      .then((json) => setData(json));
    // console.log(data);
  }, []);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  const handleItemsPerPageChange = (e) => {
    setItemsPerPage(parseInt(e.target.value, 10));
    setCurrentPage(1); // Reset to the first page when changing items per page
  };

  // Calculate pagination values
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <>
      <div className="page-wrapper">
        <Header />
        <Sidebar />
        <div className="page-content">
          <div className="page-breadcrumb d-none d-sm-flex  mb-3">
            <div className="ps-3">
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb mb-0 p-0">
                  <li
                    className="breadcrumb-item"
                    style={{ color: "#7163bafc" }}
                  >
                    <i className="bx bx-home-alt" />
                  </li>
                  <li
                    className="breadcrumb-item active"
                    aria-current="page"
                    style={{ color: "#7163bafc" }}
                  >
                    Ward Master
                  </li>
                </ol>
              </nav>
            </div>
          </div>

          <Dforms />

          <div className="row m-4">
            <div className="card radius-10 ">
              <div className="card-body">
                <div className="d-flex align-items-center">
                  <div>
                    <h6 className=" " style={{ color: "#7163bafc" }}>
                      Ward Details
                    </h6>
                  </div>
                </div>
                <div className="table-responsive">
                  <table className="table align-middle mb-0 table-hover table-bordered  ">
                    <thead
                      className=""
                      style={{ backgroundColor: "#7163bafc", color: "white" }}
                    >
                      <tr className="text-center">
                        <th>Serial No.</th>
                        <th>Ward_Name</th>
                        <th>No. of Room</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody className="text-center ">
                      {currentItems.map((item) => (
                        <tr key={item.wards_id}>
                          <td>{1}</td>
                          <td>{item.ward_name}</td>
                          <td>{item.no_of_room}</td>

                          <td>
                            <div class="d-grid gap-2 d-md-flex justify-content-md-center">
                              <button className="btn btn-light btn-sm me-md-2 border-primary rounded">
                                Bed Record
                              </button>
                              <button className=" btn btn-light border-success rounded">
                                Edit
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                  <div
                    className="d-flex align-item-center justify-content-center "
                    style={{ backgroundColor: "#7163bafc", color: "white" }}
                  >
                    <label className="my-2">
                      Items per page:
                      <select
                        onChange={handleItemsPerPageChange}
                        value={itemsPerPage}
                      >
                        <option value={10}>10</option>
                        <option value={20}>20</option>
                      </select>
                    </label>

                    <div>
                      {/* Generate pagination buttons */}
                      {Array.from(
                        { length: Math.ceil(data.length / itemsPerPage) },
                        (_, index) => (
                          <button
                            key={index + 1}
                            onClick={() => handlePageChange(index + 1)}
                            className=" my-2 mx-2 border-dark rounded"
                          >
                            {index + 1}
                          </button>
                        )
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Ward;

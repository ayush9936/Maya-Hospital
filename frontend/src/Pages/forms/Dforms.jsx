import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import * as yup from "yup";

const schema = yup
  .object({
    doctor_name: yup.string().required(),
    phone_number: yup.string().required(),
  })
  .required();

const Dforms = () => {
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [formPosition, setFormPosition] = useState({ top: 0, left: 0 });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) }); //its react hook form with validation

  const header = { "Access-Control-Allow_origin": "*" };
  const handlerSubmit = async (data) => {
    // console.log({data});

    try {
      var key = {
        doctor_name: data.doctor_name,
        speciality: data.speciality,
        phone_number: data.phone_number,
        charges: data.charges,
      };
      const response = await fetch(
        "https://hospitalapi.projectupdate.in/api/saveDoctorDetails",
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({key}),
        }
      );
      const result = await response.json();
      console.log(result, "submitted");
    } catch (error) {
      console.error("error", error);
    }

    reset();
  };

  const handlePlusButtonClick = (event) => {
    // Get the position of the plus button relative to the document
    const buttonRect = event.target.getBoundingClientRect();
    const position = {
      top: buttonRect.bottom + window.scrollY,
      left: buttonRect.left + window.scrollX,
    };

    // Toggle the visibility of the form
    setIsFormVisible((prevIsFormVisible) => !prevIsFormVisible);

    // Set the form position
    setFormPosition(position);
  };

  return (
    <>
      <div className="wrapper">
        <button
          onClick={handlePlusButtonClick}
          style={{
            top: "10px",
            left: "20px",
            fontSize: "40px",
            cursor: "pointer",
            color:"#ffff",
            background:"#7163bafc",
          border:"#ffff"
          }}
        >
          +
        </button>

        {isFormVisible && (
          <div
            style={{
              top: formPosition.top,
              left: formPosition.left,
              padding: "10px",

              borderRadius: "10px",
              zIndex: 999,
              width: "50%",
            }}
          >
            <div className="col-12 col-lg-4 w-100  ">
              <div className="card radius-10">
                <div className="card-header">
                  <div className="d-flex align-items-center">
                    <div>
                      <h6 className="mb-0">Doctor's Registration</h6>
                    </div>
                  </div>
                </div>
                <div className="card-body">
                  <div className="chart-container ">
                    <form
                      className="row g-3"
                      onSubmit={handleSubmit(handlerSubmit)}
                    >
                      <div className="col-12">
                        <label htmlFor="inputDoctorName" className="form-label">
                          Doctor Name
                        </label>
                        <input
                          {...register("doctor_name")}
                          className="form-control"
                          type="text"
                          placeHolder="Doctor name"
                        />
                        <p>{errors.doctor_name?.message}</p>
                      </div>
                      <div className="col-12">
                        <label
                          htmlFor="input Speciality"
                          className="form-label"
                        >
                          Speciality
                        </label>
                        <input
                          {...register(" speciality")}
                          className="form-control"
                          type="text"
                          placeHolder=" Speciality"
                        />
                      </div>
                      <div className="col-12">
                        <label htmlFor="input Charges" className="form-label">
                          Charges
                        </label>
                        <input
                          {...register(" charges")}
                          className="form-control"
                          type="text"
                          placeHolder=" Charges"
                        />
                      </div>
                      <div className="col-12">
                        <label htmlFor="inputPhone" className="form-label">
                          Phone
                        </label>
                        <div className="input-group" id="show_hide_password">
                          <input
                            {...register("phone_number")}
                            className="form-control border-end-0"
                            type="text"
                            placeHolder="Enter Phonenumber"
                          />
                          <p>{errors.phone_number?.message}</p>
                        </div>
                      </div>

                      <div className="col-12">
                        <div className="d-grid">
                          <button type="submit" className="btn btn-primary">
                            submit
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Dforms;




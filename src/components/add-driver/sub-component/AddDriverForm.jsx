import React from "react";
import Select from "react-select";
import { ImageUploaderCodemeg } from "../../image-uploder";
const AddDriverForm = () => {
  const options = [
    { value: "Male", label: "Male" },
    { value: "Female", label: "Female" },
  ];

  return (
    <>
      <div className="form-main">
        <div className="form-flex">
        <div className="form-inner-flx">
            <div className="form-inputs">
              <label className="form-label">
                First Name<i>*</i>
              </label>
              <input
                type="text"
                name="fullname"
                className="form-control"
                placeholder="Enter first name here"
              />
            </div>
          </div>
          <div className="form-inner-flx">
            <div className="form-inputs">
              <label className="form-label">
                Last Name<i>*</i>
              </label>
              <input
                type="text"
                name="lastname"
                className="form-control"
                placeholder="Enter last name here"
              />
            </div>
          </div>
          <div className="form-inner-flx">
            <div className="form-inputs">
              <label className="form-label">Select Gender</label>
              <div className="select-box">
                <Select options={options} />
              </div>
            </div>
          </div>
          <div className="form-inner-flx">
            <div className="form-inputs">
              <label className="form-label">
                Phone No.<i>*</i>
              </label>
              <input
                type="num"
                name="lastname"
                className="form-control"
                placeholder="Enter phone no. here"
              />
            </div>
          </div>
          <div className="form-inner-flx">
            <div className="form-inputs">
              <label className="form-label">
                Email<i>*</i>
              </label>
              <input
                type="email"
                name="lastname"
                className="form-control"
                placeholder="Enter email name here"
              />
            </div>
          </div>
          <div className="form-inner-flx">
            <div className="form-inputs">
              <label className="form-label">
                Address<i>*</i>
              </label>
              <input
                type="text"
                name="lastname"
                className="form-control"
                placeholder="Enter address here"
              />
            </div>
          </div>
         
          <div className="form-inner-flx-100">
            <div className="form-inputs">
              <label className="form-label">
                Description<i>*</i>
              </label>
          <textarea name="" placeholder="Message..." id="" cols="0" rows="4"></textarea>
          </div>
          </div>
          <div className="form-inner-flx-100">
            <div className="form-inputs">
              <label className="form-label">Image</label>
              <ImageUploaderCodemeg />
            </div>
          </div>
        </div>

        <div className="form-btn">
           <button type="button" className="btn secondary-btn">
            Cancel
          </button>
          <button type="button" className="btn primary-btn">
            Save
          </button>
        </div>
      </div>
    </>
  );
};

export default AddDriverForm
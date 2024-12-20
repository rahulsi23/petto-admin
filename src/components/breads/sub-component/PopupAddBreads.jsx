import React from 'react'
import Select from "react-select";

const PopupAddBreads = ({handlePopup}) => {
  const options = [
    { value: "Default", label: "Default" },
    { value: "Dog", label: "Dog" },
    { value: "Cat", label: "Cat" },
  ];
  return (
    <>
      <div className="main-popup">
        <div className="lm-outer">
          <div className="lm-inner">
            <div className="popup-inner">
              <div className="popup-header">
                <div className="popup-heading">
                  <h3>Add Pets Bread</h3>
                </div>
              </div>
              <div className="popup-body">
                <div className="form-main">
                <div className="form-inputs">
                    <label className="form-label">
                     Pets Category
                    </label>
                   <div className="select-box">
                  <Select options={options} /> 
                   </div>
                  </div>
                  <div className="form-inputs">
                    <label className="form-label">
                   Pet Bread<i>*</i>
                    </label>
                    <input type="text" name="fullname" className="form-control" placeholder="Enter Pets Bread" />
                  </div>
                  <div className="form-btn">
                    <button type="button" className="btn secondary-btn" onClick={handlePopup}>Cancel</button>
                    <button type="button"  className="btn primary-btn">Submit</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="overlay" onClick={handlePopup}></div>
      </div>
    </>
  );
};


export default PopupAddBreads
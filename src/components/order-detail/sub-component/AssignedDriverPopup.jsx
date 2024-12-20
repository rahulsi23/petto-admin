import React, { useEffect, useState } from "react";
import Select from "react-select";

const AssignedDriverPopup = ({
  statePopupDriverInitialize,
  setStatePopupDriverInitialize,
  currentOrderDetails,
  setCurrentOrderDetails,
  handlePopup
}) => {

  const options = [
    { value: "Ravi Patel", label: "Ravi Patel" },
    { value: "Kunal Rastogi", label: "Kunal Rastogi" },
    { value: "Asif Khan", label: "Asif Khan" },
  ];

  const [selectedDriverValue, setSelectedDriverValue] = useState(null);

  const handleCancel= () => {
    handlePopup()
    setSelectedDriverValue(null)
    setSelectedDriverValue(null)
    setCurrentOrderDetails((p)=>({...p,driver:null}))
  }
  
  const handleSubmit= () => {
    setCurrentOrderDetails((p)=>({...p,driver:selectedDriverValue}))
  }

  return (
    <>
      <div className="main-popup">
        <div className="lm-outer">
          <div className="lm-inner">
            <div className="popup-inner">
              <div className="popup-header">
                <div className="popup-heading">
                  <h3>Assigned Driver</h3>
                </div>
              </div>
              <div className="popup-body">
                <div className="form-main">
                  <div className="form-inputs">
                    <label className="form-label">
                      Select Driver<i>*</i>
                    </label>
                    <div className="select-box">
                      <Select
                        value={options.find(
                          (item) => item.value === selectedDriverValue
                        )}
                        onChange={(e) => {
                          setSelectedDriverValue(e.value);
                        }}
                        options={options}
                      />
                    </div>
                  </div>
                  <div className="form-btn">
                    <button
                      disabled={!selectedDriverValue}
                      onClick={handleSubmit}
                      type="button"
                      className="btn primary-btn"
                    >
                      Submit
                    </button>
                    <button
                      type="button"
                      className="btn secondary-btn"
                      onClick={handleCancel}
                    >
                      Cancel
                    </button>
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

export default AssignedDriverPopup;

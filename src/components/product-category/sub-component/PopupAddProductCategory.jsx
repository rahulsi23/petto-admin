import React from "react";

const PopupAddProductCategory = ({ handlePopup }) => {
 
  return (
    <>
      <div className="main-popup">
        <div className="lm-outer">
          <div className="lm-inner">
            <div className="popup-inner">
              <div className="popup-header">
                <div className="popup-heading">
                  <h3>Add Product Category</h3>
                </div>
              </div>
              <div className="popup-body">
                <div className="form-main">
                  <div className="form-inputs">
                    <label className="form-label">
                      Product Category<i>*</i>
                    </label>
                    <input
                      type="text"
                      name="fullname"
                      className="form-control"
                      placeholder="Enter product category here"
                    />
                  </div>
                  <div className="form-inputs">
                    <label className="form-label">
                      Description<i>*</i>
                    </label>
                    <textarea
                      name=""
                      placeholder="Message..."
                      id=""
                      cols="0"
                      rows="4"
                    ></textarea>
                  </div>
                  <div className="form-btn">
                    <button
                      type="button"
                      className="btn secondary-btn"
                      onClick={handlePopup}
                    >
                      Cancel
                    </button>
                    
                    <button type="button" className="btn primary-btn">
                      Submit
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

export default PopupAddProductCategory;

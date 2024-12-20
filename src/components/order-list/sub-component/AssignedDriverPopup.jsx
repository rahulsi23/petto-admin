import React, { useEffect, useState } from "react";
import Select from "react-select";

const AssignedDriverPopup = ({
  handlePopup,
  acceptedOrderDetails,
  setAcceptedOrderDetails,
  setOrderList,
  orderList,
}) => {
  const options = [
    { value: "Ravi Patel", label: "Ravi Patel" },
    { value: "Kunal Rastogi", label: "Kunal Rastogi" },
    { value: "Asif Khan", label: "Asif Khan" },
  ];

  const [selectedDriverValue, setSelectedDriverValue] = useState(null);

  const handleSubmit = () => {
    const orderIndex = orderList.findIndex(
      (order) => order.id === acceptedOrderDetails.id
    );
    
    if(orderIndex !== -1){
        const updatedOrderList = [...orderList];

    updatedOrderList[orderIndex] = {
      ...updatedOrderList[orderIndex],
      driver: selectedDriverValue,
    };

    setOrderList(updatedOrderList);

    handlePopup()

    }
    else{
        alert('cant find the find of order to assign the driver too!')
    }
  };

  const handleCancel = () => {
    // setAcceptedOrderDetails(null);
    setSelectedDriverValue(null);
    handlePopup()
  
    setOrderList((prevOrderList) => {
      const findIdx = prevOrderList.findIndex(
        (item) => item.id === acceptedOrderDetails?.id
      );
  
      if (findIdx !== -1) {
        const updatedOrderList = [...prevOrderList];
        updatedOrderList[findIdx] = {
          ...updatedOrderList[findIdx],
          driver: null,
        };
        return updatedOrderList;
      } else {
        console.log("Order not found");
        return prevOrderList;
      }
    });
  };
  

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
                      type="button"
                      className="btn secondary-btn"
                      onClick={handleCancel}
                    >
                      Cancel
                    </button>
                    <button
                      disabled={!selectedDriverValue}
                      onClick={handleSubmit}
                      type="button"
                      className="btn primary-btn"
                    >
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

export default AssignedDriverPopup;

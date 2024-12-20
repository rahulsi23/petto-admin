import React, { useState } from "react";
import { AssignedDriverModal } from "./index";
const OrderInformation = ({currentOrderDetails,setCurrentOrderDetails}) => {

  const [statePopupDriverInitialize,setStatePopupDriverInitialize] = useState({showModal:false,settingDriverState:false})

  console.log(statePopupDriverInitialize)

  return (
    <>
      <div className="card">
        <div className="card-body">
          <div className="userinfo-head ordrinfo-head">
            <h2>Order Information</h2>
            <div className="ordrdtl-staus">

                        {!statePopupDriverInitialize.settingDriverState && 
                        <div className="ordrstats-acprjct">
                        <span onClick={()=>{setStatePopupDriverInitialize((p)=>({...p,settingDriverState:true}))}} className="ordrstats-icon acept-icon">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            fill="currentColor"
                            class="bi bi-check"
                            viewBox="0 0 16 16"
                            opacity="0.8"
                          >
                            <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z"></path>
                          </svg>
                        </span>
                        <span className="ordrstats-icon rejct-icon">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 16 16"
                            fill="currentColor"
                            opacity="0.8"
                          >
                            <path
                              d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"
                              fill="red"
                            ></path>
                          </svg>
                        </span>
                      </div>
                        }

                          {statePopupDriverInitialize.settingDriverState && !statePopupDriverInitialize.showModal &&
                          <div 
                          onClick={()=>{
                            setStatePopupDriverInitialize((p)=>({...p,showModal:true}))
                          }}
                          className="asigneddrvr-main">
                          <span
                            className="asigneddrvr-btn">
                            Assign Driver
                          </span>
                          </div>
                          }
            </div>
          </div>
          <div className="ordr-infrmtion">
            <div className="userdtl-card">
              <div className="brnd-vndrnmbr">
                <p>Order By</p>
                <h4>Rahul Singh</h4>
              </div>
              <div className="brnd-vndrnmbr">
                <p>Order Id</p>
                <h4>#12458</h4>
              </div>
              <div className="brnd-vndrnmbr">
                <p>Order Date</p>
                <h4>12/06/2023</h4>
              </div>
              <div className="brnd-vndrnmbr">
                <p>Order Staus</p>
                <h4>
                  <span class="badge badge-primary">{currentOrderDetails.driver ? 'On the way' : 'Pending'}</span>
                  {/* <span class="badge badge-success">Delivered</span> */}
                </h4>
              </div>
              <div className="brnd-vndrnmbr">
                <p>Delivery Date</p>
                <h4>12/06/2023</h4>
              </div>
              <div className="brnd-vndrnmbr">
                <p>Payment Mode</p>
                <h4>UPI</h4>
              </div>
              <div className="brnd-vndrnmbr">
                <p>Payment Staus</p>
                <h4>
                  {/* <span className='text-success'>Paid</span> */}
                  <span className="text-warning">Pending</span>
                </h4>
              </div>
              <div className="brnd-vndrnmbr">
                <p>User Contact</p>
                <h4>9200380648</h4>
              </div>
              <div className="brnd-vndrnmbr">
                <p>Driver Name</p>
                <h4>{currentOrderDetails.driver ? currentOrderDetails.driver : 'Not Assigned'}</h4>
              </div>
              <div className="brnd-vndrnmbr">
                <p>Driver Contact</p>
                <h4>9200380648</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
      {statePopupDriverInitialize.settingDriverState && statePopupDriverInitialize.showModal && !currentOrderDetails.driver &&
      <AssignedDriverModal
      setStatePopupDriverInitialize={setStatePopupDriverInitialize}
      statePopupDriverInitialize={statePopupDriverInitialize}
      currentOrderDetails={currentOrderDetails}
      setCurrentOrderDetails={setCurrentOrderDetails}
      handlePopup={()=>{setStatePopupDriverInitialize({showModal:false,settingDriverState:false})}}
      />
      }
    </>
  );
};

export default OrderInformation;

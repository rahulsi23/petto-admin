import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Product1 } from "../../../assets/images";

const OrderItemList = () => {
    
  return (
    <>
      <div className="responsive-table">
        <table className="table table-row-dashed">
          <thead>
            <tr className="fw-bolder text-muted">
              <th className="w-10px">#</th>
              <th className="w-250px">Products Detail</th>
              <th className="w-100px text-center">Quantity</th>
              <th className="w-100px text-center">Price</th>
              <th className="w-100px text-center">Total Price</th>
            </tr>
          </thead>
          <tbody className="">
            {Array(3).fill(1).map((item, index) => {
                return (
                  <tr key={item.orderId} className="">
                    <td className="w-10px">{index + 1}</td>
                    <td className="">
                      <div className="main-sbctgry">
                        <span class="brndimg-main">
                          <img src={Product1} class="" alt="" />
                        </span>
                        <div className="prd-descrp">
                          <span className="d-block fw-bold titl-view">HUFT Raincoat</span>
                          <span className="d-block fw-normal dtl-view">Kit Cat Snow Peas is a 100% eco-friendly 
                          cat litter that is a healthier for both cats and owners.</span>
                        </div>
                      </div>
                    </td>
                    <td className="text-center">2</td>
                    <td className="text-center">₹150/</td>
                    <td className="text-center">₹300.00</td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
     
    </>
  );
};




export default OrderItemList
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import {PopupAddProductCategory } from "./index";
const Breadcrumb = () => {
  const [showAddProductCategoryPop, setshowAddProductCategoryPop] = useState(false);

  const handlePopup = () => {
    setshowAddProductCategoryPop((p) => !p);
  };
  return (
    <>
    <div className='home-top'>
        <div className='page-title'>
            <h3>Product Category List</h3>
        </div>
        <div className='btns-evnts'>
              <div className='btns-evnts-inner'>
                <Link to="" className="btn primary-btn" onClick={handlePopup}>Add Product Category</Link>
              </div>
        </div> 
    </div>
    {showAddProductCategoryPop && <PopupAddProductCategory handlePopup={handlePopup}/>}
    </>
  )
}

export default Breadcrumb
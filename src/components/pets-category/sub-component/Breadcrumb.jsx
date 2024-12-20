import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import {PopupAddCategory } from "./index";
const Breadcrumb = () => {
  const [showAddCategoryPop, setshowAddCategoryPop] = useState(false);

  const handlePopup = () => {
    setshowAddCategoryPop((p) => !p);
  };
  return (
    <>
    <div className='home-top'>
        <div className='page-title'>
            <h3>Pets Category List</h3>
        </div>
        <div className='btns-evnts'>
              <div className='btns-evnts-inner'>
                <Link to="" className="btn primary-btn" onClick={handlePopup}>Add Pets Category</Link>
              </div>
        </div> 
    </div>
    {showAddCategoryPop && <PopupAddCategory handlePopup={handlePopup}/>}
    </>
  )
}

export default Breadcrumb
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import {PopupAddBreads } from "./index";
const Breadcrumb = () => {
  const [showAddPopCategory, setshowAddPopCategory] = useState(false);

  const handlePopup = () => {
    setshowAddPopCategory((p) => !p);
  };
  return (
    <>
    <div className='home-top'>
        <div className='page-title'>
            <h3>Bread List</h3>
        </div>
        <div className='btns-evnts'>
              <div className='btns-evnts-inner'>
                <Link to="" className="btn primary-btn" onClick={handlePopup}>Add Pet Breads</Link>
              </div>
        </div> 
    </div>
    {showAddPopCategory && <PopupAddBreads handlePopup={handlePopup}/>}
    </>
  )
}

export default Breadcrumb
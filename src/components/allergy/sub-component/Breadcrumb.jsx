import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import {PopupAddAllergy } from "./index";
const Breadcrumb = () => {
  const [showAddAllergyPop, setshowAddAllergyPop] = useState(false);

  const handlePopup = () => {
    setshowAddAllergyPop((p) => !p);
  };
  return (
    <>
    <div className='home-top'>
        <div className='page-title'>
            <h3>Pets Allergy List</h3>
        </div>
        <div className='btns-evnts'>
              <div className='btns-evnts-inner'>
                <Link to="" className="btn primary-btn" onClick={handlePopup}>Add Pets Allergy</Link>
              </div>
        </div> 
    </div>
    {showAddAllergyPop && <PopupAddAllergy handlePopup={handlePopup}/>}
    </>
  )
}

export default Breadcrumb
import React from 'react'
import { Link } from 'react-router-dom'

const Breadcrumb = () => {
  return (
    <>
    <div className='home-top'>
        <div className='page-title'>
            <h3>Driver List</h3>
        </div>
        <div className='btns-evnts'>
              <div className='btns-evnts-inner'>
                <Link to="/driver/add-driver" className="btn primary-btn">Add Driver</Link>
              </div>
        </div> 
    </div>
    </>
  )
}

export default Breadcrumb
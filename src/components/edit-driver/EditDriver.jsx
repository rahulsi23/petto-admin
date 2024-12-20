import React from 'react'
import { Breadcrumb, EditDriverForm } from './sub-component'

const EditDriver = () => {
  return (
    <>
    <div className='main-wrapper'>
        <Breadcrumb />
        <div className='card'>
        <div className="card-body">
        <EditDriverForm />
        </div>
       </div>
     </div>
    </>
  )
}

export default EditDriver
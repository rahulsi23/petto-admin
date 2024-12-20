import React from 'react'
import { AddDriverForm, Breadcrumb } from './sub-component'

const AddDriver = () => {
  return (
    <>
    <div className='main-wrapper'>
        <Breadcrumb />
        <div className='card'>
        <div className="card-body">
        <AddDriverForm />
        </div>
       </div>
     </div>
    </>
  )
}

export default AddDriver
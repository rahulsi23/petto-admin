import React from 'react'
import { Breadcrumb, ProfileForm } from './sub-component'

const Profile = () => {
  return (
    <>
     <div className='main-wrapper'>
        <Breadcrumb />
        <div className='card'>
        <div className="card-body">
        <ProfileForm />
        </div>
       </div>
     </div>
    </>
  )
}

export default Profile
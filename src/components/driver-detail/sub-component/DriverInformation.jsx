import React from 'react'
import { UserImage } from '../../../assets/images'

const DriverInformation = () => {
  return (
    <>
 <div className="card">
		<div className="card-body">
        <div className="userinfo-head">
			<h2>Driver Information</h2>
		</div>
        
        <div className="ordr-infrmtion">
            <div className='usrprfl-srcen'>
                <div className="userprfl-frame">
                <span style={{ backgroundImage: `url(${UserImage})` }}></span>
                </div>
            </div>
			<div className="userdtl-card">
				<div className="brnd-vndrnmbr">
					<p>Name</p>
					<h4>Rahul Singh</h4>
				</div>
				<div className="brnd-vndrnmbr">
					<p>Driver Id</p>
					<h4>12458</h4>
				</div>
				<div className="brnd-vndrnmbr">
					<p>Gender</p>
					<h4>Male</h4>
				</div>
				<div className="brnd-vndrnmbr">
					<p>Email</p>
					<h4>rahul@gmail.com</h4>
				</div>
				<div className="brnd-vndrnmbr">
					<p>Mobile Number</p>
					<h4>9200380648</h4>
				</div>
				<div className="brnd-vndrnmbr">
					<p>Reg. Date</p>
					<h4>12/06/2023</h4>
				</div>
				<div className="brnd-vndrnmbr">
					<p>Address</p>
					<h4>Pune</h4>
				</div>
			</div>
            </div>
		</div>
	</div>
    </>
  )
}

export default DriverInformation
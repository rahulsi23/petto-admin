import React from 'react'
const ProfileForm = () => {
  return (
    <>
 <div className="form-main">
        <div className="form-flex">
        <div className="form-inner-flx">
            <div className="form-inputs">
              <label className="form-label">
                Full Name<i>*</i>
              </label>
              <input
                type="text"
                name="fullname"
                className="form-control"
                placeholder="Enter full name here" value="Rahul Singh"
              />
            </div>
          </div>
          <div className="form-inner-flx">
            <div className="form-inputs">
              <label className="form-label">
                Phone No.<i>*</i>
              </label>
              <input
                type="num"
                name="lastname"
                className="form-control"
                placeholder="Enter phone no. here" value="9858598654"
              />
            </div>
          </div>
          <div className="form-inner-flx">
            <div className="form-inputs">
              <label className="form-label">
                Email<i>*</i>
              </label>
              <input
                type="email"
                name="lastname"
                className="form-control"
                placeholder="Enter email name here" value="rahul@gmail.com"
              />
            </div>
          </div>

          <div className="form-inner-flx-100">
            <div className="form-inputs">
              <label className="form-label">
                Password<i>*</i>
              </label>
              <div className="oldpassword-flx">
                <div className="pwdinpu-cmn pwdinpu-bx">
              <input
                type="password"
                name="password"
                className="form-control"
                placeholder="**********"
              />
              </div>
              <div class="pwdinpu-cmn chngepwd-btn">
                                                                    <button type="submit" class="btn primary-btn">
                                                                      Change Password
                                                                    </button>
                                                                </div>
              </div>
            </div>
          </div>
          <div className="form-inner-flx">
            <div className="form-inputs">
              <label className="form-label">
              New Password<i>*</i>
              </label>
              <input
                type="password"
                name="newpassword"
                className="form-control"
                placeholder="**********" 
              />
            </div>
          </div>
          <div className="form-inner-flx">
            <div className="form-inputs">
              <label className="form-label">
              Confirm Password<i>*</i>
              </label>
              <input
                type="password"
                name="confirmpassword"
                className="form-control"
                placeholder="**********" 
              />
            </div>
          </div>
         
         
          <div className="form-inner-flx-100">
            <div className="form-inputs">
              <label className="form-label">
                Description<i>*</i>
              </label>
          <textarea name="" placeholder="Message..." id="" cols="0" rows="4"></textarea>
          </div>
          </div>
        </div>

        <div className="form-btn">
          <button type="button" className="btn secondary-btn">
            Cancel
          </button>
          <button type="button" className="btn primary-btn">
            Update
          </button>
        </div>
      </div>
    </>
  )
}

export default ProfileForm
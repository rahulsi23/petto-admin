import React from 'react'
import { LoginBg, Logo } from '../../../assets/images'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <>
    <div class="login-bg" style={{ backgroundImage: `url(${LoginBg})` }}>
      <div className="auth-wraper">
        <div className="auth-wraper-inner">
            <div className="auth-card">
            <div class="auth-top">
         <div class="login-logo">
            <img alt="Logo" src={Logo} />
            </div>
            <h3>Admin Panel</h3>
      </div>
      <div className='auth-main'>
      <div className="form-inputs">
              <label className="form-label">
              Email<i>*</i>
              </label>
              <input
                type="email"
                name="email"
                className="form-control"
                placeholder="Enter email here" 
              />
            </div>
            <div className="form-inputs">
              <label className="form-label">
             Password<i>*</i>
              </label>
              <input
                type="password"
                name="newpassword"
                className="form-control"
                placeholder="**********" 
              />
            </div>
            <div className="auth-btn">
                <Link to="/" className="btn primary-btn">Login</Link>
            </div>
      </div>
            </div>
        </div>
      </div>
   </div>
    </>
  )
}

export default Login
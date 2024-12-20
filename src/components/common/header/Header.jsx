import React, { useState } from 'react'
import { Link } from 'react-router-dom';

function Header() {
  const [showProfile, setShowProfile] = useState(false)
  const [showNotify, setShowNotify] = useState(false)
  const addClass =() =>{
    document.body.classList.toggle("open-sidebar")
  }
  return (
    <>
        <header className='header'>
        <div className="main-header">
          <div className='lft-hdr'>
            <div className="navmenu-hdr">
            <div class="navbar-icon" onClick={addClass}>
                    <span></span>
                </div>
                </div>
          </div>
          <div className='rght-hdr'>
            <div className='hdrmr-main'>
            <div className="notification-main">
              <div className="notification-icon" onClick={() => setShowNotify(p => !p)}>
                <span><i class="fa-solid fa-bell"></i></span>
              </div>
              {showNotify && <div className="hdrnoti-drpdwn">
                <div className='noti-head'>
                  <h3>Notification</h3>
                  {/* <p>View all</p> */}
                  </div>
                <ul>
                  <li>
                    <div className="notihstry-dtls">
                      <h3>New Order Added</h3>
                      <p>Rahul Recently placed new order.</p>
                    </div>
                  </li>
                  <li>
                    <div className="notihstry-dtls">
                      <h3>New Order Added</h3>
                      <p>Rahul Recently placed new order.</p>
                    </div>
                  </li>
                  <li>
                    <div className="notihstry-dtls">
                      <h3>New Order Added</h3>
                      <p>Rahul Recently placed new order.</p>
                    </div>
                  </li>
                  <li>
                    <div className="notihstry-dtls">
                      <h3>New Order Added</h3>
                      <p>Rahul Recently placed new order.</p>
                    </div>
                  </li>
                </ul>
              </div>}
            </div>
            <div className="admin-prflsec">
              <div className="admnprfl-tbmain">
                <div className="admin-name" onClick={() => setShowProfile(p => !p)}>
                  <p className="">admin<em><i class="fa fa-angle-down" aria-hidden="true"></i></em></p>
                </div>
              </div>
              {showProfile && <div className="hdrmenu-drpdwn">
                <ul>
                  <li>
                    <Link to={'/settings/my-profile'}>
                      <span>
                      <i class="fa-solid fa-user"></i>
                      </span>
                      Profile Update
                    </Link>
                  </li>
                  <li>
                    <Link to={'/order/order-list'}>
                      <span>
                      <i class="fa-solid fa-file-lines"></i>
                      </span>
                     Order List
                    </Link>
                  </li>
                  <li>
                    <Link to={'/login'}>
                      <span>
                        <i className="fa-solid fa-right-to-bracket" aria-hidden="true"></i>
                      </span>
                      Log Out
                    </Link>
                  </li>
                </ul>
              </div>}

            </div>
          </div>
        </div>
        </div>
      </header>
    </>
  )
}

export default Header
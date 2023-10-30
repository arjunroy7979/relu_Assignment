import React from 'react'
import { signOut } from 'firebase/auth'
import { Link, useNavigate } from 'react-router-dom'
import { database } from '../../firebase/FirebaseConfig';
import home from '../../Images/home.png'
import notification from '../../Images/notification.png'
import heart from '../../Images/heart.png'
import message from '../../Images/message.png'
import profile from '../../Images/profile.png'
import favorite from '../../Images/favorite.png'
import setting from '../../Images/setting.png'
import logout from '../../Images/logout.png'
const Side = () => {

    const history = useNavigate();
    const handleClick = () => {
        signOut(database).then(val => {
            history('/')
        })
    }
    return (
        <div>
            <div className="bar_nav">
                <div className="d-flex align-items-start bar_txt">
                    <div className="nav flex-column nav-pills me-3 nv_br" id="v-pills-tab" role="tablist"
                        aria-orientation="vertical">
                        <Link className="nav-link ln_nv active" id="v-pills-home-tab" data-bs-toggle="pill"
                            data-bs-target="#v-pills-home" role="tab" aria-controls="v-pills-home"
                            aria-selected="true"><img src={home} alt="" className="nav_img" /> Home</Link>
                        <Link className="nav-link ln_nv" id="v-pills-profile-tab" data-bs-toggle="pill"
                            data-bs-target="#v-pills-profile" role="tab" aria-controls="v-pills-profile"
                            aria-selected="false"><img src={notification} alt="" className="nav_img" />Notification</Link>
                        <Link className="nav-link ln_nv" id="v-pills-messages-tab" data-bs-toggle="pill"
                            data-bs-target="#v-pills-messages" role="tab" aria-controls="v-pills-messages"
                            aria-selected="false"><img src={heart} alt="" className="nav_img" />Shop</Link>
                        <Link className="nav-link ln_nv" id="v-pills-settings-tab" data-bs-toggle="pill"
                            data-bs-target="#v-pills-settings" role="tab" aria-controls="v-pills-settings"
                            aria-selected="false"><img src={message} alt="" className="nav_img" />Conversation</Link>
                        <Link className="nav-link ln_nv" id="v-pills-settings-tab" data-bs-toggle="pill"
                            data-bs-target="#v-pills-settings" role="tab" aria-controls="v-pills-settings"
                            aria-selected="false"><img src={profile} alt="" className="nav_img" />Wallet</Link>
                        <Link className="nav-link ln_nv" id="v-pills-settings-tab" data-bs-toggle="pill"
                            data-bs-target="#v-pills-settings" role="tab" aria-controls="v-pills-settings"
                            aria-selected="false"><img src={favorite} alt="" className="nav_img" />Subsciption</Link>
                        <Link className="nav-link ln_nv" id="v-pills-settings-tab" data-bs-toggle="pill"
                            data-bs-target="#v-pills-settings" role="tab" aria-controls="v-pills-settings"
                            aria-selected="false"><img src={profile} alt="" className="nav_img" />My profile</Link>
                        <Link className="nav-link ln_nv" id="v-pills-settings-tab" data-bs-toggle="pill"
                            data-bs-target="#v-pills-settings" role="tab" aria-controls="v-pills-settings"
                            aria-selected="false"><img src={setting} alt="" className="nav_img" />Setting</Link>
                        <Link className="nav-link ln_nv" id="v-pills-settings-tab " data-bs-toggle="pill"
                            data-bs-target="#v-pills-settings" role="tab" aria-controls="v-pills-settings"
                            aria-selected="false" onClick={handleClick} ><img src={logout} alt="" className="nav_img" onClick={handleClick} />Logout</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Side

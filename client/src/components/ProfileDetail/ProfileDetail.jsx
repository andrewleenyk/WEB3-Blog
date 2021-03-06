import React from 'react';
import './ProfileDetail.css'

export default function ProfileDetail({ currentUser}) {
return (
        <div className="profile-detail">

            <img className="profile-pic" src={currentUser.profile_pic} alt="profile-pic"></img>
            <h1 className="username">{currentUser.username}</h1>
            <h3 className="bio">{currentUser.bio}</h3>
        </div>


)
}
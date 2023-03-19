import React from "react";
import profile from '../../../assets/icons/profile.svg';
import {useNavigate} from "react-router-dom";


const ProfileNav: React.FC = () => {
    const navigate = useNavigate();
    return (
        <button><img src={profile} alt="profile" onClick={() => navigate("/")} /></button>
    )
}

export default ProfileNav
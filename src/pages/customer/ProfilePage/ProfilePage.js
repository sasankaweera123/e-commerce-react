import React, {useContext, useEffect, useState} from "react";
import useAuthHeader from "react-auth-kit/hooks/useAuthHeader";
import axios from "axios";
import {ResourcePath} from "../../../constants/ResourcePath";
import {AdminContext} from "../../../context/AdminContext";

const ProfilePage = () => {

    const {loggedInUser} = useContext(AdminContext);


    return (
        <div>
            <h1>Profile</h1>
            <img src={loggedInUser.avatar} alt="avatar" />
            <p>Email: {loggedInUser.email}</p>
            <p>Name: {loggedInUser.name}</p>
            <p>Role: {loggedInUser.role}</p>
        </div>
    );
}

export default ProfilePage;
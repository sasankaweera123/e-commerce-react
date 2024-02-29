import React, {useEffect, useState} from "react";
import useAuthHeader from "react-auth-kit/hooks/useAuthHeader";
import axios from "axios";
import {ResourcePath} from "../../../constants/ResourcePath";

const ProfilePage = () => {

    const authHeader = useAuthHeader();

    const [user, setUser] = useState({
        avatar: '',
        email: '',
        name: '',
        role: ''
    });

    useEffect(() => {
        axios.get(ResourcePath.GET_USER, {headers: {Authorization: authHeader}})
            .then(response => {
                setUser(response.data);
                console.log(response);
            })
            .catch(error => {
                console.log(error);
            });
    },[authHeader])

    return (
        <div>
            <h1>Profile</h1>
            <img src={user.avatar} alt="avatar" />
            <p>Email: {user.email}</p>
            <p>Name: {user.name}</p>
            <p>Role: {user.role}</p>
        </div>
    );
}

export default ProfilePage;
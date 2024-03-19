import React, {useContext, useState} from "react";
import axios from "axios";
import {ResourcePath} from "../../constants/ResourcePath";
import useSignIn from "react-auth-kit/hooks/useSignIn";
import {AdminContext} from "../../context/AdminContext";

import "./ProjectForm.css";
import Button from "react-bootstrap/Button";
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";

const SignInForm = () => {

    const {loggedUserDetails} = useContext(AdminContext);

    const [isPasswordVisible, setIsPasswordVisible] = useState(false);

    const [user, setUser] = useState({
        email: '',
        password: ''
    });

    const signIn = useSignIn();

    const showPassword = () => {
        if (document.getElementById('loginPassword').type === 'password') {
            document.getElementById('loginPassword').type = 'text';
            setIsPasswordVisible(true);
        } else {
            document.getElementById('loginPassword').type = 'password';
            setIsPasswordVisible(false);
        }
    }

    const handleChange = (e) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post(ResourcePath.LOGIN, user)
            .then(response => {
                console.log(response);
                signIn({
                    auth: {
                        token: response.data['access_token'],
                        type: 'Bearer'
                    },
                    userState: {
                        email: user.email
                    }
                });

                axios.get(ResourcePath.GET_USER, {headers: {Authorization: `Bearer ${response.data['access_token']}`}})
                    .then(response => {
                        console.log(response.data);
                        loggedUserDetails(response.data);
                        if (response.data.role === 'admin') {
                            window.location.href = ResourcePath.ADMIN_HOME;
                        } else {
                            window.location.href = ResourcePath.HOME;
                        }
                    })
                    .catch(error => {
                        console.log(error);
                    });

            })
            .catch(error => {
                console.log(error);
            });
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <table className="project-form">
                    <tbody>
                    <tr>
                    <td colSpan="3"><h1>Sign In</h1></td>
                    </tr>
                    <tr className="form-field">
                        <td><label htmlFor="loginEmail">Email</label></td>
                        <td colSpan="2"><input id="loginEmail" type="email" name="email" value={user.email} onChange={handleChange}/></td>
                    </tr>
                    <tr className="form-field">
                        <td><label htmlFor="loginPassword">Password</label></td>
                        <td><input id="loginPassword" type="password" name="password" value={user.password}
                               onChange={handleChange}/></td>
                        <td><div onClick={showPassword}>{isPasswordVisible ?
                            <RemoveRedEyeOutlinedIcon/> : <VisibilityOffOutlinedIcon/>}</div></td>
                    </tr>
                    <tr>
                        <td colSpan="3">
                    <Button type="submit">Sign In</Button>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </form>
        </div>
    );
}

export default SignInForm;
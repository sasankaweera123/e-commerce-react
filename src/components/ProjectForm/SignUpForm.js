import React, {useState} from "react";
import axios from "axios";
import {ResourcePath} from "../../constants/ResourcePath";

import "./ProjectForm.css";
import Button from "react-bootstrap/Button";
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined';

const SignUpForm = () => {

    const [user, setUser] = useState({
        email: '',
        password: '',
        confirmPassword: ''
    });

    const [isSignPasswordVisible, setIsSignPasswordVisible] = useState(false);
    const [isConfirmPasswordVisible, setIsConfirmPasswordVisible] = useState(false);

    const handleChange = (e) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        })
    }

    const showPassword = (inputId) => {
        const passwordInput = document.getElementById(inputId);
        if (passwordInput.type === 'password') {
            passwordInput.type = 'text';
            if (inputId === 'SignPassword') {
                setIsSignPasswordVisible(true);
            }
            if (inputId === 'confirm-password') {
                setIsConfirmPasswordVisible(true);
            }
        } else {
            passwordInput.type = 'password';
            if (inputId === 'SignPassword') {
                setIsSignPasswordVisible(false);
            }
            if (inputId === 'confirm-password') {
                setIsConfirmPasswordVisible(false);
            }
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (user.password !== user.confirmPassword) {
            alert('Passwords do not match');
            return;
        }
        axios.post(ResourcePath.SIGN_UP, user)
            .then(response => {
                console.log(response);
                alert('User created');
                document.getElementById('Signemail').value = '';
                document.getElementById('SignPassword').value = '';
                document.getElementById('confirm-password').value = '';
            })
            .catch(error => {
                console.log(error);
            });
        console.log(user);

    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <table>
                    <tbody>
                    <tr>
                        <td colSpan="3"><h2>Sign Up</h2></td>
                    </tr>
                    <tr className="form-field">
                        <td><label htmlFor="Signemail">Email</label></td>
                        <td colSpan="2"><input id="Signemail" type="email" name="email" value={user.email}
                                               onChange={handleChange} required/></td>
                    </tr>
                    <tr className="form-field">
                        <td><label htmlFor="SignPassword">Password</label></td>
                        <td><input id="SignPassword" type="password" name="password" value={user.password}
                                   onChange={handleChange} required/></td>
                        <td>
                            <div onClick={() => showPassword('SignPassword')}>{isSignPasswordVisible ?
                                <RemoveRedEyeOutlinedIcon/> : <VisibilityOffOutlinedIcon/>}</div>
                        </td>
                    </tr>
                    <tr className="form-field">
                        <td><label htmlFor="confirm-password">Confirm Password</label></td>
                        <td><input id="confirm-password" type="password" name="confirmPassword"
                                   value={user.confirmPassword}
                                   onChange={handleChange} required/></td>
                        <td>
                            <div onClick={() => showPassword('confirm-password')}>{isConfirmPasswordVisible ?
                                <RemoveRedEyeOutlinedIcon/> : <VisibilityOffOutlinedIcon/>}</div>
                        </td>
                    </tr>
                    <tr>
                        <td colSpan="3"><Button type="submit">Sign Up</Button></td>
                    </tr>
                    </tbody>
                </table>
            </form>
        </div>
    );
}

export default SignUpForm;
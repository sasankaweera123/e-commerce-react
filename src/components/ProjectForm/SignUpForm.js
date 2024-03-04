import React, {useState} from "react";
import axios from "axios";
import {ResourcePath} from "../../constants/ResourcePath";

const SignUpForm = () => {

    const [user, setUser] = useState({
        email: '',
        password: '',
        confirmPassword: ''
    });

    const handleChange = (e) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        })
    }

    const showPassword = (inputId) => {
        const passwordInput = document.getElementById(inputId);
        if(passwordInput.type === 'password') {
            passwordInput.type = 'text';
        }
        else {
            passwordInput.type = 'password';
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if(user.password !== user.confirmPassword){
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
                <h1>Sign Up</h1>
                <div className="form-field">
                    <label htmlFor="Signemail">Email</label>
                    <input id="Signemail" type="email" name="email" value={user.email} onChange={handleChange}/>
                </div>
                <div className="form-field">
                    <label htmlFor="SignPassword">Password</label>
                    <input id="SignPassword" type="password" name="password" value={user.password} onChange={handleChange}/>
                    <button type="button" onClick={() => showPassword('SignPassword')}>Show</button>
                </div>
                <div className="form-field">
                    <label htmlFor="confirm-password">Confirm Password</label>
                    <input id="confirm-password" type="password" name="confirmPassword" value={user.confirmPassword}
                           onChange={handleChange}/>
                    <button type="button" onClick={() => showPassword('confirm-password')}>Show</button>
                </div>
                <button type="submit">Sign Up</button>
            </form>
        </div>
    );
}

export default SignUpForm;
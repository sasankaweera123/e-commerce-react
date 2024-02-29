import React, {useState} from "react";
import axios from "axios";
import {ResourcePath} from "../../constants/ResourcePath";
import useSignIn from "react-auth-kit/hooks/useSignIn";

const SignInForm = () => {

    const [user, setUser] = useState({
        email: '',
        password: ''
    });

    const signIn = useSignIn();

    const showPassword = () => {
        if(document.getElementById('loginPassword').type === 'password') {
            document.getElementById('loginPassword').type = 'text';
        }
        else {
            document.getElementById('loginPassword').type = 'password';
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
                // if(response.data['user']===true){}
                window.location.href = ResourcePath.HOME;
            })
            .catch(error => {
                console.log(error);
            });
        console.log(user);
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <h1>Sign In</h1>
                <div className="form-field">
                    <label htmlFor="loginEmail">Email</label>
                    <input id="loginEmail" type="email" name="email" value={user.email} onChange={handleChange}/>
                </div>
                <div className="form-field" >
                    <label htmlFor="loginPassword">Password</label>
                    <input id="loginPassword" type="password" name="password" value={user.password} onChange={handleChange}/>
                    <button type="button" onClick={showPassword}>Show</button>
                </div>
                <button type="submit">Sign In</button>
            </form>
        </div>
    );
}

export default SignInForm;
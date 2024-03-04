import React, {useContext, useState} from "react";
import axios from "axios";
import {ResourcePath} from "../../constants/ResourcePath";
import useSignIn from "react-auth-kit/hooks/useSignIn";
import {AdminContext} from "../../context/AdminContext";

const SignInForm = () => {

    const { loggedUserDetails } = useContext(AdminContext);

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

                axios.get(ResourcePath.GET_USER, {headers: {Authorization: `Bearer ${response.data['access_token']}`}})
                    .then(response => {
                        console.log(response.data);
                        loggedUserDetails(response.data);
                        if(response.data.role === 'admin'){
                            window.location.href = ResourcePath.ADMIN_HOME;
                        }else{
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
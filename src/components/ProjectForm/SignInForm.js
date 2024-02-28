import React, {useState} from "react";
import axios from "axios";
import {ResourcePath} from "../../constants/ResourcePath";
import { useNavigate } from "react-router-dom";
const SignInForm = () => {

    const [user, setUser] = useState({
        email: '',
        password: ''
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post(ResourcePath.GET_ALL_PRODUCTS, user)
            .then(response => {
                console.log(response);
                // if(response.data['user']===true){}
                navigate(ResourcePath.HOME);
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
                    <label htmlFor="email">Email</label>
                    <input id="email" type="email" name="email" value={user.email} onChange={handleChange}/>
                </div>
                <div className="form-field">
                    <label htmlFor="password">Password</label>
                    <input id="password" type="password" name="password" value={user.password} onChange={handleChange}/>
                </div>
                <button type="submit">Sign In</button>
            </form>
        </div>
    );
}

export default SignInForm;
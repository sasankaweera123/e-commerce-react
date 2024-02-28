import React from "react";
import SignUpForm from "../../components/ProjectForm/SignUpForm";
import SignInForm from "../../components/ProjectForm/SignInForm";
import './SignInUpPage.css';

const SignInUpPage = () => {
    return (
        <div className="sign-in-up-page">
            <SignUpForm/>
            <SignInForm/>
        </div>
    );
}

export default SignInUpPage;
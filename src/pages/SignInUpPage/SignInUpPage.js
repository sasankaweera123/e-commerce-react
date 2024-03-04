import React from "react";
import SignUpForm from "../../components/ProjectForm/SignUpForm";
import SignInForm from "../../components/ProjectForm/SignInForm";
import './SignInUpPage.css';
import useAuthUser from "react-auth-kit/hooks/useAuthUser";

const SignInUpPage = () => {

    const auth = useAuthUser();
    return (
        <div className={`sign-in-up-page ${auth ? "hidden-sign-in":""}`}>
            <div className={`sign-up`}>
                <SignUpForm/>
            </div>
            <div className={`sign-in`}>
                <SignInForm/>
            </div>
        </div>
    );
}

export default SignInUpPage;
import React from "react";
import ContactForm from "../../../components/ProjectForm/ContactForm";
import GoogleMapLocation from "../../../components/GoogleMapLocation/GoogleMapLocation";

import './ContactUsPage.css';

function ContactUsPage() {
    return (
        <div className="contact-us">
            <GoogleMapLocation/>
            <div className="contact-us-form-page">
                <h1>Contact Us</h1>
                <ContactForm/>
            </div>
        </div>
    );
}

export default ContactUsPage;
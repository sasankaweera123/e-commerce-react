import React from "react";
import ContactForm from "../../../components/ProjectForm/ContactForm";
import './ContactUsPage.css';

function ContactUsPage() {
    return (
        <div className="contact-us">
            <h1>Contact Us</h1>
            <div>
                <ContactForm/>
            </div>
        </div>
    );
}

export default ContactUsPage;
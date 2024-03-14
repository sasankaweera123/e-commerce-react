import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import axios from "axios";
import './ProjectForm.css';
import { ResourcePath } from "../../constants/ResourcePath";
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        // fake post request
        axios.post(ResourcePath.GET_ALL_PRODUCTS, formData)
            .then(response => {
                console.log(response);
            })
            .catch(error => {
                console.log(error);
            });
        console.log(formData);
        alert('Form submitted');
        setFormData({
            name: '',
            email: '',
            message: ''
        });
    }

    return (
        <div>
            <form onSubmit={handleSubmit} className="contact-us-form">
                <table>
                    <tbody>
                    <tr className="form-field">
                        <td><label htmlFor="name">Name</label></td>
                        <td><input id="name" type="text" name="name" value={formData.name} onChange={handleChange} required /></td>
                    </tr>
                    <tr className="form-field">
                        <td><label htmlFor="email">Email</label></td>
                        <td><input id="email" type="email" name="email" value={formData.email} onChange={handleChange} required/></td>
                    </tr>
                    <tr className="form-field">
                        <td><label htmlFor="message">Message</label></td>
                        <td><textarea id="message" name="message" value={formData.message} onChange={handleChange} rows="3" cols="24" required/></td>
                    </tr>
                    <tr>
                        <td colSpan="2"><Button type="submit"><span><SendOutlinedIcon /></span> Submit</Button></td>
                    </tr>
                    </tbody>
                </table>
            </form>
        </div>
    );
}

export default ContactForm;

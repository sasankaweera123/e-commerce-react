import React, {Component} from "react";
import Button from "react-bootstrap/Button";
import axios from "axios";
import './ProjectForm.css';
import {ResourcePath} from "../../constants/ResourcePath";

class ContactForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            message: ''
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        // fake post request
        axios.post(ResourcePath.GET_ALL_PRODUCTS, this.state)
            .then(response => {
                console.log(response);
            })
            .catch(error => {
                console.log(error);
            });
        console.log(this.state);
        alert('Form submitted');
        this.setState({
            name: '',
            email: '',
            message: ''
        })
    }

    render() {
        const {name, email, message} = this.state;

        return (
            <form onSubmit={this.handleSubmit} className="contact-us-form">
                <table>
                    <tbody>
                    <tr className="form-field">
                        <td><label htmlFor="name">Name</label></td>
                        <td><input id="name" type="text" name="name" value={name} onChange={this.handleChange}/>
                        </td>
                    </tr>
                    <tr className="form-field">
                        <td><label htmlFor="email">Email</label></td>
                        <td><input id="email" type="email" name="email" value={email} onChange={this.handleChange}/>
                        </td>
                    </tr>
                    <tr className="form-field">
                        <td><label htmlFor="message">Message</label></td>
                        <td><textarea id="message" name="message" value={message} onChange={this.handleChange}
                                      rows="3"
                                      cols="24"/></td>
                    </tr>
                    <tr>
                        <td colSpan="2"><Button type="submit">Submit</Button></td>
                    </tr>
                    </tbody>
                </table>
            </form>
        );
    }

}

export default ContactForm;
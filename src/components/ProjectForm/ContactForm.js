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
            <div>
                <form onSubmit={this.handleSubmit} className="contact-us-form">
                    <div className="form-field">
                        <label htmlFor="name">Name</label>
                        <input id="name" type="text" name="name" value={name} onChange={this.handleChange}/>
                    </div>
                    <div className="form-field">
                        <label htmlFor="email">Email</label>
                        <input id="email" type="email" name="email" value={email} onChange={this.handleChange}/>
                    </div>
                    <div className="form-field">
                        <label htmlFor="message">Message</label>
                        <textarea id="message" name="message" value={message} onChange={this.handleChange}/>
                    </div>
                    <div>
                        <Button type="submit">Submit</Button>
                    </div>
                </form>
            </div>
        );
    }

}

export default ContactForm;
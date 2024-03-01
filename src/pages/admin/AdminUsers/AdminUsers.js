import React, {useContext, useState} from "react";
import UserCard from "../../../components/admin/UserCard/UserCard";
import axios from "axios";
import {ResourcePath} from "../../../constants/ResourcePath";
import Button from "react-bootstrap/Button";
import {Modal} from "react-bootstrap";
import {AdminContext} from "../../../context/AdminContext";
import "../../pages.css";

const AdminUsers = () => {

    const [newUser, setNewUser] = useState({
        name: '',
        email: '',
        role: ''
    });

    const {isAdmin} = useContext(AdminContext);

    const [showNewUser, setShowNewUser] = useState(false);

    const handleNewUser = () => {
        setShowNewUser(true);
    }

    const handleChange = (e) => {
        setNewUser({
            ...newUser,
            [e.target.name]: e.target.value
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post(ResourcePath.ADD_USER, newUser)
            .then(response => {
                console.log(response);
                alert('User added');
                window.location.reload();
            })
            .catch(error => {
                console.log(error);
            });
    }

    return (
        <div className={!isAdmin?"admin-pages":""}>
            <h1>Admin Users</h1>
            <Button onClick={handleNewUser}>Add User</Button>
            <div className="user-cards container">
                <UserCard/>
            </div>
            <Modal show={showNewUser} onHide={() => setShowNewUser(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Add User</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input type="text" name="name" id="name" className="form-control" value={newUser.name} onChange={handleChange}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input type="email" name="email" id="email" className="form-control" value={newUser.email} onChange={handleChange}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="role">Role</label>
                            <select name="role" id="role" className="form-control" value={newUser.role} onChange={handleChange}>
                                <option value="USER">USER</option>
                                <option value="ADMIN">ADMIN</option>
                            </select>
                        </div>
                        <Button type="submit">Add User</Button>
                    </form>
                </Modal.Body>
            </Modal>
        </div>
    );
}

export default AdminUsers;
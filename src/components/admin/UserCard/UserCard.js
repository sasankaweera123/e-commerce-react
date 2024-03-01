import React, {useContext, useState} from "react";
import {AdminContext} from "../../../context/AdminContext";
import Card from "react-bootstrap/Card";
import {ResourcePath} from "../../../constants/ResourcePath";
import "./UserCard.css";
import Button from "react-bootstrap/Button";
import {Modal} from "react-bootstrap";
import axios from "axios";

const UserCard = () => {

    const {users} = useContext(AdminContext);

    const [showEdit, setShowEdit] = useState(false);

    const [editUser, setEditUser] = useState({
        id: '',
        name: '',
        email: '',
        role: ''
    });

    const handleChange = (e) => {
        setEditUser({
            ...editUser,
            [e.target.name]: e.target.value
        });
    }

    const handleEdit = (id) => {
        setShowEdit(true);
        const user = users.find(e => e.id === id);
        setEditUser({
            id: user.id,
            name: user.name,
            email: user.email,
            role: user.role
        });
    }

    const handleRemove = (id) => {
        axios.delete(ResourcePath.DELETE_USER + id)
            .then(response => {
                console.log(response);
                alert('User removed');
                document.getElementById(`user-${id}`).remove();
            })
            .catch(error => {
                console.log(error);
            });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const updatedUser = {
            id: editUser.id,
            name: editUser.name,
            email: editUser.email,
            role: editUser.role
        }
        axios.put(`${ResourcePath.UPDATE_USER}${editUser.id}`, updatedUser)
            .then(response => {
                console.log(response);
                alert('User updated');
                setShowEdit(false);
            })
            .catch(error => {
                console.log(error);
            });
    }


    return (
        <div>
            <div className="user-cards">
                {
                    users.map((user) => {
                        return (
                            <div key={user.id} className={`user-${user.id}`} id={`user-${user.id}`}>
                                <Card style={{width: '18rem'}}>
                                    <Card.Img variant="top"
                                              src={user.avatar ? user.avatar : ResourcePath.PLACEHOLDER_IMAGE}/>
                                    <Card.Body>
                                        <Card.Title>{user.name}</Card.Title>
                                        <Card.Text>
                                            {user.email}
                                        </Card.Text>
                                        <Card.Text>
                                            {user.role}
                                        </Card.Text>
                                        <Button variant={"primary"} onClick={() => handleEdit(user.id)}>Edit</Button>
                                        <Button variant={"danger"} onClick={() => handleRemove(user.id)}>Remove</Button>
                                    </Card.Body>
                                </Card>
                            </div>
                        )
                    })
                }
            </div>
            <Modal show={showEdit} onHide={() => setShowEdit(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Edit User</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input type="text" className="form-control" id="name" value={editUser.name} onChange={handleChange}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input type="email" className="form-control" id="email" value={editUser.email} onChange={handleChange}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="role">Role</label>
                            <input type="text" className="form-control" id="role" value={editUser.role} onChange={handleChange}/>
                        </div>
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </form>
                </Modal.Body>
            </Modal>
        </div>
    );
}

export default UserCard;
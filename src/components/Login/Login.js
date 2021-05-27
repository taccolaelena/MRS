import React, { useEffect, useState } from 'react';
import './Login.scss';
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import nurse from '../../images/nurse.png';


export default function Login() {
    const [userName, setUserName] = useState(null);
    const [password, setPassword] = useState(null);

    function validateForm() {
        return userName?.length > 0 && password?.length > 0;
    }

    function handleSubmit(event) {
        event.preventDefault();
    }

    return (
        <div className="Login">
            <img src={nurse} className='Section-Icon' alt='nurse'/>
            <Form onSubmit={handleSubmit}>
                <Form.Group size="lg" controlId="userName">
                    <Form.Label>User Name</Form.Label>
                    <Form.Control
                        autoFocus
                        type="userName"
                        value={userName}
                        onChange={(e) => setUserName(e.target.value)}
                    />
                </Form.Group>
                <Form.Group size="lg" controlId="password">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </Form.Group>
                <Button block size="lg" type="submit" disabled={!validateForm()}>
                    Login
        </Button>
            </Form>
        </div>
    );
}
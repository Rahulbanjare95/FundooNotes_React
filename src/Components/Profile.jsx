import React from 'react';
import { Card, Button } from 'react-bootstrap';
import service from '../services/userservices';

export default function Profile() {

    const logoutCurrentUser = () => {
        service.logout(localStorage.getItem('token'));
    }
    const firstname = localStorage.getItem('firstName');
    const lastname = localStorage.getItem('lastname');
    const email = localStorage.getItem('email');
    return (
        <div>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top"/>
                <Card.Body>
                <Card.Title>{firstname} {lastname}</Card.Title>
                    <Card.Text>
                        {email}
                     </Card.Text>
                    <Button variant="primary" onClick={logoutCurrentUser}>logout</Button>
                </Card.Body>
            </Card>

        </div>
    )
}

import React from 'react';
import { Button, Form } from 'react-bootstrap';

export default ({ onGetInfoButtonClicked, onUserNameChange, onRepoNameChange }) => (
    <div>
        <Form>
            <Form.Group>
                <Form.Label>User name:</Form.Label>
                <Form.Control
                    placeholder="Nico2d"
                    type="text"
                    name="username"
                    onChange={onUserNameChange}
                />
            </Form.Group>
            <Form.Group>
                <Form.Label>Repository name:</Form.Label>
                <Form.Control
                    placeholder="test1"
                    type="text"
                    name="repo"
                    onChange={onRepoNameChange}
                />
            </Form.Group>
        </Form>
        <Button
            onClick={onGetInfoButtonClicked}
        >
            Get Info
        </Button>
    </div>
);
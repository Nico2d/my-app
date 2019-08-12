import React from 'react';
import { Card, ListGroup, } from 'react-bootstrap';
import {Link} from 'react-router-dom';

export default ({ html_url, id, size, default_branch, stargazers_count }) => id === undefined
    ? <div>No info yet </div>
    : (
        <Card>
            <ListGroup variant="flush" >
                <ListGroup.Item>
                    Id: {id}
                </ListGroup.Item>
                <ListGroup.Item>
                    Size: {size}
                </ListGroup.Item>
                <ListGroup.Item>
                    Default branch: {default_branch}
                </ListGroup.Item>
                <ListGroup.Item>
                    Stars: {stargazers_count}
                </ListGroup.Item>
                <ListGroup.Item>
                    Url: <a Link to= {html_url}>{html_url}</a>
                </ListGroup.Item>
            </ListGroup>
        </Card>
    )

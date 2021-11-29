import React from 'react';
import {Row,Col} from 'react-bootstrap'

const Line7 = () => {
    return (
        <React.Fragment>
            <Row >
                <Col className="square light text-light">.</Col>
                <Col className="square dark text-secondary">.</Col>
                <Col className="square light text-light">.</Col>
                <Col className="square dark text-secondary">.</Col>
                <Col className="square light text-light">.</Col>
                <Col className="square dark text-secondary">.</Col>
                <Col className="square light text-light">.</Col>
                <Col className="square dark text-secondary">.</Col>
            </Row>
            
        </React.Fragment>
    );
}

export default Line7;
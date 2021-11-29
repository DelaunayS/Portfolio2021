import React from 'react';
import {Row,Col} from 'react-bootstrap'

const Line8 = () => {
    return (
        <React.Fragment>
            <Row >
                <Col className="square dark text-center">.</Col>
                <Col className="square light text-light">.</Col>
                <Col className="square dark text-secondary">.</Col>
                <Col className="square light text-light">.</Col>
                <Col className="square dark text-secondary">.</Col>
                <Col className="square light text-light">.</Col>
                <Col className="square dark text-secondary">.</Col>
                <Col className="square light text-light">.</Col>             
            </Row>
            
        </React.Fragment>
    );
}

export default Line8;
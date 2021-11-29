import React from 'react';
import {Row,Col} from 'react-bootstrap'
import ContentPerso from '../Perso/contentPerso';

const Line4 = (props) => {
    return (
        <React.Fragment>
            <Row >
                <Col id="bishop" className="square dark text-light cursorPointer"
                    data-toggle="collapse" data-target="#collapseBishop"
                    aria-expanded="true" aria-controls="collapseBishop">
                    {props.dimensionBoard>500 ? 
                        <div style={props.styleFont}>
                            <span className="icomoonregular">b</span>
                            <span > Perso</span>
                        </div>
                        : 
                        <div className="icomoonregular" style={props.styleFontIconeSeul}>b</div>
                    }    
                </Col>
                <Col className="square light text-light">.</Col>
                <Col className="square dark text-secondary">.</Col>
                <Col className="square light text-light">.</Col>
                <Col className="square dark text-secondary">.</Col>
                <Col className="square light text-light">.</Col>
                <Col className="square dark text-secondary">.</Col>
                <Col className="square light text-light">.</Col>               
            </Row>

            <Row>
                <div id="collapseBishop" className="collapse text-light" aria-labelledby="bishopButton" data-parent="#board">
                        <ContentPerso colorText="text-light"/>
                </div>
            </Row>
            
        </React.Fragment>
    );
}

export default Line4;

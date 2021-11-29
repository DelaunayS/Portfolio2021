import React from 'react';
import {Row,Col} from 'react-bootstrap'
import ContentCursus from '../Cursus/contentCursus';

const Line3 = (props) => {
    return (
        <React.Fragment>
            <Row >
                <Col id="queen" className="square light text-secondary cursorPointer"
                    data-toggle="collapse" data-target="#collapseQueen"
                    aria-expanded="true" aria-controls="collapseQueen">
                    {props.dimensionBoard>500 ? 
                        <div style={props.styleFont}>
                            <span className="icomoonregular">q</span>
                            <span > Cursus</span>
                        </div>
                        : 
                        <div className="icomoonregular" style={props.styleFontIconeSeul}>q</div>
                    }                          
                </Col>
                <Col className="square dark text-secondary">.</Col>
                <Col className="square light text-light">.</Col>
                <Col className="square dark text-secondary">.</Col>
                <Col className="square light text-light">.</Col>
                <Col className="square dark text-secondary">.</Col>
                <Col className="square light text-light">.</Col>
                <Col className="square dark text-secondary">.</Col>
            </Row>

            <Row>
                <div id="collapseQueen" className="collapse text-light" aria-labelledby="queenButton" data-parent="#board">
                        <ContentCursus/>
                </div>
            </Row>            
            
        </React.Fragment>
    );
}

export default Line3;
import React from 'react';
import {Row,Col} from 'react-bootstrap'
import Parties from '../Parties'

const Line5 = (props) => {
    return (
        <React.Fragment>
            <Row >
                <Col id="pawn" className="square light text-secondary cursorPointer"
                     data-toggle="collapse" data-target="#collapsePawn"
                     aria-expanded="true" aria-controls="collapsePawn">
                    {props.dimensionBoard>500 ? 
                        <div style={props.styleFont}>
                            <span className="icomoonregular">p</span>
                            <span > Parties</span>
                        </div>
                        : 
                        <div className="icomoonregular" style={props.styleFontIconeSeul}>p</div>
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
                <div id="collapsePawn" className="collapse text-light" aria-labelledby="pawnButton" data-parent="#board">
                        <Parties/>
                </div>
            </Row>             
        </React.Fragment>
    );
}

export default Line5;
import React from 'react';
import {Row,Col} from 'react-bootstrap'
import CarouselProjet from '../Projet/CarouselProjet';

const Line2 = (props) => {
     
    return (
        <React.Fragment>
            <Row >
                <Col id="rook" className="square dark text-light cursorPointer"
                    data-toggle="collapse" data-target="#collapseRook"
                    aria-expanded="true" aria-controls="collapseRook">  
                    {props.dimensionBoard>500 ? 
                        <div style={props.styleFont}>
                            <span className="icomoonregular">r</span>
                            <span > Projets</span>
                        </div>
                        : 
                        <div className="icomoonregular" style={props.styleFontIconeSeul}>r</div>
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
                <div id="collapseRook" className="collapse container_collapse_Rook" aria-labelledby="rookButton" data-parent="#board">
                        <CarouselProjet/>
                </div>
            </Row>
            
        </React.Fragment>
    );
}

export default Line2;

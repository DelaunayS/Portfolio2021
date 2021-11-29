import React from 'react';
import {Row,Col} from 'react-bootstrap'

const Line1 = (props) => {

    return (
        <React.Fragment>
            <Row >
                <Col id="king" className="square light text-secondary cursorPointer"
                    data-toggle="collapse" data-target="#collapseKing"
                    aria-expanded="true" aria-controls="collapseKing">
                    {props.dimensionBoard>500 ? 
                        <div style={props.styleFont}>
                            <span className="icomoonregular">k</span>
                            <span > Accueil</span>
                        </div>
                        : 
                        <div className="icomoonregular" style={props.styleFontIconeSeul}>k</div>
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
                <div id="collapseKing" className="collapse text-light" aria-labelledby="bishopButton" data-parent="#board">
                    <p className="text-center text-warning">Bienvenue !</p>
                    <p className="text-center"> Je vous invite à voyager sur toutes les cases de cet échiquier !! </p> 
                </div>
            </Row>

        </React.Fragment>
    );
}

export default Line1;
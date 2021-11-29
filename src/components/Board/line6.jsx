import React from 'react';
import {Row,Col} from 'react-bootstrap'

/*clic sur le Cavalier*/
const clickKnight= () =>{    
    
    let mail=document.getElementById("mailButton2")
    let linkedin=document.getElementById("linkedin2")
    let github=document.getElementById("github2")
   
    mail.style.display="block"; 
    linkedin.style.display="block";
    github.style.display="block";
}

/*clic sur les éléments dans la zone contact*/
const clickMailButton = () =>{
    window.alert("sebastiendelaunay44@gmail.com")
}

const clickLinkedin =() =>{
    window.location.href="https://www.linkedin.com/in/sebastien-delaunay-5093151a3/"
}

const clickGithub =() =>{
    window.location.href="https://github.com/DelaunayS"
}

const Line6 = (props) => {
    
    return (
        <React.Fragment>
            <Row >
                <Col id="knight" onClick={clickKnight}
                    className="square dark text-light cursorPointer">
                    {props.dimensionBoard>500 ? 
                        <div style={props.styleFont}>
                            <span className="icomoonregular">n</span>
                            <span > Contact</span>
                        </div>
                        : 
                        <div className="icomoonregular" style={props.styleFontIconeSeul}>n</div>
                    }                         
                </Col>
                <Col className="square light text-light">.</Col>
                <Col className="square dark text-secondary">.</Col>
                <Col className="square light text-light">
                    <div id="mailButton2" onClick={clickMailButton} 
                    className="icomoonregular text-center text-danger cursorPointer">
                        I</div>
                </Col>
                <Col className="square dark text-secondary">.</Col>
                <Col className="square light text-light">
                    <div id="linkedin2" onClick= {clickLinkedin}
                        className="icomoonregular text-center text-primary cursorPointer">
                        K
                    </div> 
                </Col>
                <Col className="square dark text-secondary">.</Col>
                <Col className="square light text-light">
                    <div id="github2" onClick= {clickGithub}
                    className="icomoonregular text-center text-dark cursorPointer">
                        J</div>
                </Col>     
            </Row>            
        </React.Fragment>
    );
}

export default Line6;
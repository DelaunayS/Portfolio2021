import React from 'react';
import Button from 'react-bootstrap/Button'

const ContentCursus = () => {
   
    return (
        <div className="container-fluid text-center">
            <h4>Atouts Professionnels</h4>
            
            <div className='text-start'>
                 <span className="text-primary">Travail en équipe <span className="souligne">et</span> polyvalence : </span>
                 Ces deux qualités ont le plus souvent rythmé mon expérience dans l'éducation 
            nationale (plus de quinze ans).
            </div>
           
            <br/>
            
            <h4>Compétences digitales</h4>

            <div className='text-start'> 
                <span className="text-primary">Autonome : </span>
                Toutes mes recherches et formations, c'est en autodidacte que je les ai réalisés.
            </div>
            <br/>
            <Button variant="danger">Certifications</Button>
            <br/>
            <div className='text-start'>
                <p><span id="html_icone" className="icomoonregular">A</span>
                    <span id="css_icone" className="icomoonregular me-1">B</span>
                    Construire des sites web adaptatifs
                </p>
                <p><span id="js_icone" className="icomoonregular me-1">D</span>
                    Programmer en javascript
                </p>
                <p><span id="react_icone" className="icomoonregular me-1">F</span>
                    Réaliser des applications web avec React.js
                    </p>
                <p><span id="d3_icone" className="icomoonregular me-1">M</span>
                    Utilisation de la librairie D3.js
                </p>
                <p><span id="git_icone" className="icomoonregular me-1">C</span>
                Gérer son code avec git
                </p>
                <p><span id="bootstrap_icone" className="icomoonregular me-1">L</span>
                Bootstrap
                </p>
            </div>
            
        </div>
    );
}

export default ContentCursus;

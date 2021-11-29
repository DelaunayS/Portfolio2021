import React from 'react';
import CarouselProjet from './CarouselProjet';
import Accordion from 'react-bootstrap/Accordion'

const Projet = () => {
    return (
        <div id="projet" className=" container-fluid m-2 p-2 border rounded">          
          <Accordion flush>
                <Accordion.Item eventKey="0">
                    <Accordion.Header>Projets</Accordion.Header>
                    <Accordion.Body>
                        Pour accéder à un projet, cliquer sur le bouton rouge sur l'image.                                          
                    </Accordion.Body>
                </Accordion.Item>  
                <CarouselProjet/>                
            </Accordion>
              
        </div>
    );
}

export default Projet;
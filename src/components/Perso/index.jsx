import React from 'react';
import Accordion from 'react-bootstrap/Accordion'
import ContentPerso from './contentPerso';

const Perso = () => {
    return (
        <div id="perso" className="container-fluid m-2 p-2 border rounded">
            <Accordion flush>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>Perso</Accordion.Header>
                    <Accordion.Body>
                        <ContentPerso/>                    
                    </Accordion.Body>
                </Accordion.Item>                
            </Accordion>
        </div>
    )
}

export default Perso;
import React from 'react';
import Accordion from 'react-bootstrap/Accordion'
import ContentCursus from './contentCursus';

import '../Cursus/cursus.scss'

const Cursus = () => {
    return (
        <div id="cursus" className="container-fluid m-2 p-2 border rounded">
            <Accordion flush>
                <Accordion.Item eventKey="2">
                    <Accordion.Header>Cursus</Accordion.Header>
                    <Accordion.Body>
                        <ContentCursus/>                    
                    </Accordion.Body>
                </Accordion.Item>                
            </Accordion>
        </div>
    )
}
export default Cursus;

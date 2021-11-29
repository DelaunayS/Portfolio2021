import React from 'react';
import {Badge,Card,Button,Container} from'react-bootstrap'
import ImgParties from '../../img/ApercuSelectionPartie.webp'

const Parties = () => {
    return (
        <React.Fragment>
            <Container>
                <Card className=" bg-dark m-1">
                    <Card.Img variant="top" src={ImgParties} alt="ImgSelectionParties"/>
                    <Card.Body>
                        <Card.Title className="text-center text-info">
                            Pourquoi une sélection de parties d'échecs analysées et commentées ?   
                        </Card.Title>
                        <Card.Subtitle>
                            <Badge bg="info">Analysées ?</Badge>
                        </Card.Subtitle>
                        <Card.Text>                            
                            L'analyse aux échecs permet de rechercher les erreurs et de prendre du recul pour être le plus objectif possible
                            : c'est un peu comme chercher des bugs !!                      
                        </Card.Text>                        
                        <Card.Subtitle>
                            <Badge bg="info">Commentées ?</Badge>
                        </Card.Subtitle>                        
                        <Card.Text>
                            Les commentaires doivent être suffisamment clairs pour n'importe quel lecteur 
                            : comme les commentaires d'un codage informatique !!
                        </Card.Text>

                        <Button variant="danger">Voir les parties</Button>
                    </Card.Body>
                </Card>
            </Container>      
        </React.Fragment>
    );
}

export default Parties;

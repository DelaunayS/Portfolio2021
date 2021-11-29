import React from 'react';
import Button from'react-bootstrap/Button'
import Badge from 'react-bootstrap/Badge'

const styleIcomoon={
    fontSize:'24px',
    verticalAlign:'sub'
}

const ContentPerso = () => {    
    return (
        <div>
            <p className="text-primary">1.e4 e6 2.d4 d5 3.
                <span className="icomoonregular" style={styleIcomoon}>n</span>
                c3 <span className="icomoonregular" style={styleIcomoon}>b</span>
                b4
            </p>
            <p > Mais c'est quoi ça ??</p>               
              
            <p>Une forme de langage ! Il s'agit de la notation de coups joués au début d'une partie d'échecs.</p> 
            <p>
                <Button variant="outline-danger" href='https://ratings.fide.com/profile/613002'>Mon profil sur la fédération internationale d'échecs</Button>
            </p>
            <p>Pourquoi vous présenter cette passion ?</p>
            <p>On donne de nombreuses vertus au jeu d'échecs et je pense qu'il m'a permis d'en cultiver certaines intéressantes dans la vie quotidienne :</p>
                    
            <ul>
                <li>
                <h4 ><Badge bg="primary">Capacité de décision : </Badge></h4>
                Dans une partie, on est confronté à de nombreux choix.
                Plus il y a de possibilités et plus le nombre de coups et de positions augmentent le risque d'erreurs.
                Il faut donc analyser toutes les données pour pouvoir décider le plus efficacement possible. 
                </li>
                <br/>
                
                <li>
                <h4><Badge bg="primary">Gestion du stress : </Badge></h4>
                La pendule !! Il faut gérer le manque de temps et garder sa lucidité dans le "money-time"
                car les erreurs en fin de partie coûtent de plus en plus cher.
                </li>
                <br/>
                            
                <li>
                <h4><Badge bg="primary">Sens de l'organisation : </Badge></h4>
                On doit planifier des objectifs à moyen/long-terme : c'est la stratégie aux échecs.  
                Souvent, on les découpe en étapes afin de mieux y parvenir. 
                Tout en sachant que cette organisation doit être souple car il faut parfois réévaluer la position si la situation sur l'échiquier a évolué dans un sens qu'on n'avait pas forcément aperçu ou mal évalué.
                </li>
            </ul>
                                       
                    
            <p className="text-end">Delaunay Sébastien</p>
       
               
        </div>
    );
}

export default ContentPerso;

import React from 'react';

import '../TitleBoard/titleBoard.scss'
const signeInférieur='<'
const signeSupérieur='>'
const espace=" "

const TitleBoard = () => {
    return (
        <div className="titleBoard">           
           <div className="container text-light" > {signeInférieur}portfolio{espace} 
               <span className="text-info">id=
               </span><span className="text-warning">"chess"</span>
               /{signeSupérieur}
            </div>
        </div>
    );
}

export default TitleBoard;

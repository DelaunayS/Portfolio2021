import React from 'react';
import Projet from '../Projet';
import Cursus from '../Cursus'
import Perso from '../Perso'

const Main = () => {
    return (
        <div className="container-fluid">
            <Projet/>
            <Cursus/>
            <Perso/>
        </div>
    );
}

export default Main;

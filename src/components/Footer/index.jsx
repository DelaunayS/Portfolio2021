import React from 'react';

import '../Footer/footer.scss'

const Footer = () => {
    return (
        <div className="Footer container-fluid text-light">
           <div id="contact" className='row'>
               <div className='col-4'>
                   © Delaunay Sébastien
               </div>
               <div className='col-2 text-center'>
                   <span  id="mailButton" className="text-danger bg-light">I</span>
               </div>
               <div className='col-2 text-center '>
                   <span id="linkedIn" className="text-primary bg-light">K</span>
               </div>               
               <div className='col-2 text-center'>
                   <span id="github">J</span>
               </div>
               <div className='col-2 text-end'>
                   @2021
               </div>
           </div>
        </div>
    );
}

export default Footer;

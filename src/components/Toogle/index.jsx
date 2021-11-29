import React from 'react';

const Toogle = (props2) => { 
    
    const toogleTheme = () =>{
       props2.modifyTheme()
    }
   
    return (
        <div>
            <div className="ToogleStyle m-2">
                <input onChange={toogleTheme} className="btn-check" type="checkbox" id="btn-check" checked autoComplete="off"/>
                <label className="btn btn-outline-light" htmlFor="btn-check">
                {props2.theme ? <span>🧑‍💻</span> : <span>😎♟️</span> }
                </label>
            </div>            
        </div>
    );
}

export default Toogle;
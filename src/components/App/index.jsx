import React, {useState} from "react";
import Header from "../Header";
import Footer from "../Footer"
import Main from "../Main"
import Board from "../Board"
import {Container} from 'react-bootstrap'

function App() {

  const [theme, setTheme] = useState(true);

  /*Modifie le thème en normal ou échecs*/
  const modifyTheme = () =>{
      setTheme(!theme)
  }

  return (
    <Container>
     <Header theme={theme} modifyTheme={modifyTheme}/>
     {theme ? <Main/> : <Board/>}
     {theme ? <Footer/> : <div/>}     
    </Container>
  );
}

export default App;
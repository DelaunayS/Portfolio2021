import React from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'

const NavbarHeader = () => {
    return (
      <React.Fragment>            
                <Navbar.Brand href="#root">Navbar</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">                    
                    <NavDropdown title="Projet" id="basic-nav-dropdown">
                    <NavDropdown.Item href="https://delaunays.github.io/Meteo/">Météo</NavDropdown.Item>
                    <NavDropdown.Item href="https://delaunays.github.io/VisualiseurWikipedia/">Visualiseur Wikipédia</NavDropdown.Item>
                    <NavDropdown.Item href="https://delaunays.github.io/DonneesD3/">Librairie D3.js</NavDropdown.Item>                   
                    <NavDropdown.Item href="https://delaunays.github.io/WebMaternelle/">Jeux en maternelle</NavDropdown.Item>
                    <NavDropdown.Item href="https://delaunays.github.io/TicTacToe/">Jeux du "Tic Tac Toe"</NavDropdown.Item>
                    <NavDropdown.Item href="https://delaunays.github.io/TP_portfolio/">Travaux Pratiques</NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link href="#cursus">Cursus</Nav.Link>
                    <Nav.Link href="#perso">Perso</Nav.Link>
                    <Nav.Link href="#contact">Contact</Nav.Link>
                </Nav>
                </Navbar.Collapse>               
        </React.Fragment>
    );
}

export default NavbarHeader;

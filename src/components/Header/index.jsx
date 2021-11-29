import React from 'react';
import NavbarHeader from './NavbarHeader';
import Toogle from '../Toogle';
import TitleBoard  from '../TitleBoard';
import '../Header/header.scss'

import {Container,Navbar,Row,Col} from 'react-bootstrap'

const Header = (props1) => {
   
    return (
        <Container>
            <Row className="text-center">
                <Navbar variant="dark"  expand="lg">
                    <Col>
                        {props1.theme ? <NavbarHeader/> : <TitleBoard/>}
                    </Col>   
                    <Col>
                        <Toogle theme={props1.theme} modifyTheme={props1.modifyTheme}/>                   
                    </Col> 
                </Navbar>               
            </Row>             
        </Container>       
    );
}

export default Header;
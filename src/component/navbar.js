import React, { Component, useState } from 'react';
import { Navbar, Nav, NavDropdown, Container, Modal,Button } from 'react-bootstrap';
import Acceuil from './acceuil';
import Cv from './cv';
import Portfolio from './portfolio';

function NavBar(){




    return (
        <div>
        <Navbar expand="lg" style={{paddingTop:'1.2%', fontSize:'110%', textAlign:'center', background:'#DA8471'}} >
        <Container style={{height:65}}>
          <Navbar.Collapse id="basic-navbar-nav" >
            <Nav className="mr-auto" >
                <Nav.Link href="/Acceuil" style={{marginLeft:'110%',marginRight:'35%', fontSize:'110%'}}>Accueil</Nav.Link>
                <Nav.Link href="/Portfolio" style={{marginRight:'35%', fontSize:'110%'}}>Portfolio</Nav.Link>
                <Nav.Link href="/Cv" style={{marginTop:'-5%',fontSize:'110%'}}>Curriculum Vitae</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      </div>
    )
  
}




export default NavBar;
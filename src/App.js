import React from 'react';
import { BrowserRouter as Router, Route,Switch, Redirect } from 'react-router-dom';
//import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';
import Acceuil from './component/acceuil';
import Cv from './component/cv';
import Portfolio from './component/portfolio';
import NavBar from './component/navbar'
import 'bootstrap/dist/css/bootstrap.min.css';

class  App extends React.Component{

  render(){
    return (
      <div>
        <div style={{background:'#E0AEA3',paddingBottom:'1%', textAlign:'center'}}>
          <p style={{fontWeight:'lighter', fontSize:'160%', paddingTop:'1.8%'}}> Florian Degives </p>
          <p style={{fontWeight:'lighter',fontSize:'130%'}}> Portfolio & Curriculum Vitae</p>
        </div>
      <NavBar />
      <Router>
        <Switch>
              <Route exact path='' component={Acceuil}></Route>
              <Route exact path='/Cv' component={Cv}></Route>
              <Route exact path='/Portfolio' component={Portfolio}></Route>
              <Redirect to="" />
            </Switch>
      </Router>
      </div>
    )
  }
}



export default App;
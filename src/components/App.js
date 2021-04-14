import React from 'react';
import { BrowserRouter,  Route, Switch } from "react-router-dom";
import { Container, Row } from "react-bootstrap";


import Menu from './Menu';
import Accueil from './Accueil';
import Carousel from './Carousel';
import Stage from './Stage';
import Stagiaire from './Stagiaire';
import BannerRecherche from './BannerRecherche'
import Footer from './Footer';
import Connexion from './Connexion';
import Apropos from './Apropos';
import Confidentialite from './Confidentialite';
import Contact from './Contact';
import Partenaires from './Partenaires';
import Administration from './Administration';
import AddStage from './AddStage';
import AddStagiaire from './AddStagiaire';
import EditStage from './EditStage';
import EditStagiaire from './EditStagiaire';


export default class App extends React.Component {
  // state={
  //   isLog:false
  // }
  // handleLogin = (isLog) => this.setState({isLog})
  render(){
    // const {isLog} = this.state;
 
    return (
      <Container fluid>
        <BrowserRouter>
          <Row>
            <Menu/>
          </Row>
          <Row>
            <Carousel/>
           
          </Row>
          <Row>
            <Switch>
                
                <Route exact path="/" exact component={Accueil} />
                <Route path="/Stage" component={Stage} />
                <Route path="/Stagiaire" component={Stagiaire} />
                <Route path="/Connexion" component={Connexion} />
                <Route path="/Apropos" component={Apropos}/>
                <Route path="/Confidentialite" component={Confidentialite}/>
                <Route path="/Contact" component={Contact}/>
                <Route path="/Partenaires" component={Partenaires}/>
                <Route path="/Administration" component={Administration} />
                <Route path="/AddStage" component={AddStage} />
                <Route path="/AddStagiaire" component={AddStagiaire} />
                <Route path="/EditStage" component={EditStage}/>
                <Route path="/EditStagiaire" component={EditStagiaire}/>
            </Switch>
          </Row>
          <Row>
          <BannerRecherche/>
          </Row>
          <Row>
            <Footer/>
          </Row>
        </BrowserRouter>
       </Container>
    );
  }
}

// {
//   !isLog ?
//   <Route exact path='/Connexion' render={() => <Connexion isLogin={this.handleLogin}/>}/>
//     :
    
//   <Route path='/' render={() =><Accueil handleLogged={this.handleLogin}/> }/>

// }

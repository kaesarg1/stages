import React from "react";
import Offresvedette from './Offresvedette';

import { Container, Row, Col, Button} from "react-bootstrap";
import '../styles/accueil.css';
import { NavLink } from "react-router-dom";



function Accueil(props) {
  return (
   <Container fluid >
    
      
    <Container fluid className="showcase">
    
     <Row>
        <Offresvedette/>
        
     </Row>
      <Container fluid className="p-0">
        <Row className="no-gutters">
          <Col className="col-lg-6 order-lg-2 text-white showcase-img"></Col>
          <Col className="col-lg-6 bg-light order-lg-1 my-auto showcase-text">
            <h2>Pourquoi publier une offre de stage?</h2>
            <p className="lead mb-0">Pellentesque vehicula fermentum turpis eu cursus. Cras convallis tellus et elit aliquet, 
            vitae dignissim ligula sodales.</p>
            <ul className="mt-2">
              <li>Cras convallis tellus et elit aliquet 20%</li>
              <li>Suspendisse tincidunt vulputate leo in sollicitudin</li>
              <li>Morbi sodales risus quis orci hendrerit semper</li>
            </ul>
            <Col className="col-12 col-md-3">
                <Button type="submit" className="btn btn-block  btn-warning">Recherchez</Button>
            </Col>
          </Col>
        </Row>
      </Container>
    </Container>
       
       

    <Container className="mt-5">
      <Row>
        <Col className="col-lg-4">
          <Container className="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3 text-center">
            <NavLink className="features-icons-icon d-flex justify-content-center" to="/Connexion">
              <i className="fas fa-sign-in-alt fa-lg m-auto"></i>
            </NavLink>
            <h3>Créer votre compte.</h3>
          </Container>
        </Col>
        <Col className="col-lg-4">
          <Container className="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3 text-center">
          <NavLink className="features-icons-icon d-flex justify-content-center" to="/Connexion">
              <i className="fas fa-upload fa-lg m-auto"></i>
            </NavLink>
            <h3>Publier votre offre / demande de stage.</h3>
          </Container>
        </Col>
        <Col className="col-lg-4">
          <Container className="features-icons-item mx-auto mb-0 mb-lg-3 text-center">
          <NavLink className="features-icons-icon d-flex justify-content-center" to="/Connexion">
              <i className="fas fa-user-check fa-lg m-auto"></i>
            </NavLink>
            <h3>Trouvez votre candidat ou stage taillé sur mesure.</h3>

          </Container>
        </Col>
      </Row>
    </Container>
    <Row className="justify-content-center mt-5 mb-5">
        <Col className="col-6 text-center">
              <NavLink type="button" className="btn btn-danger"  to="/Connexion">Inscrivez-vous maintenant</NavLink>
        </Col>
    </Row>
   </Container>
  )
}
 
export default Accueil;
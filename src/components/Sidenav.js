import logo from '../images/logo-white.png';
import { Container, Row } from "react-bootstrap";
import {  Link } from "react-router-dom";
import '../styles/administration.css';

function Sidenav(props)  {
   return (
<Container>
    <Container className="Sidenav flex-column bg-primary" >
        <Row>
            <Link className="Navalign" to="/Administration">
                    <img src={logo} className="App-logo" alt="logo-white"  height="80"></img>
            </Link>
            <Link className="text-light mx-3" ><i class="fas fa-house-user" to="/Administration"></i> Accueil</Link>
            <Link className="text-light mx-3" to="AddStage" ><i class="fas fa-chevron-circle-right" ></i>  Stage</Link>
            <Link className="text-light mx-3" to="AddStagiaires"><i class="fas fa-graduation-cap" ></i>  Stagiaires</Link>
        </Row>
       
    </Container>

</Container>
        )
  }

  export default Sidenav;
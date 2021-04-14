import React from "react";
import { Container, Row, Col,  Card } from "react-bootstrap";
import '../styles/offres.css'



class Offres extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        error: null,
        isLoaded: false,
        items: []
      };
    }


    componentDidMount() {
      fetch(`/offres`)
           
        .then(res => res.json())
        .then(
          (result) => {
              console.log(result);
            this.setState({
              isLoaded: true,
              items: result
            });
          },
       
          (error) => {
            this.setState({
              isLoaded: true,
              error
            });
          }
        )
    }
  
    render() {
      const { error, isLoaded, items } = this.state;
      if (error) {
        return <div>Erreur : {error.message}</div>;
      } else if (!isLoaded) {
        return <div>Chargement…</div>;
      } else {


    return (

      <Container fluid data-testid='Offres-1'>
          <Container fluid className="mt-5 mb-5 " >
            <Container fluid>
              <Row className="justify-content-center">
                  <Col className="col-6 text-center">
                      <h2>Tu es à la recherche de ton stage de fin d'études?</h2>
                      <p>Pellentesque vehicula fermentum turpis eu cursus. Cras convallis 
                        tellus et elit aliquet, vitae dignissim ligula sodales. </p>
                  </Col>
              </Row>
            </Container>
            <Container  className="text-center  bg-light mb-3" >
          
                    <Row className="justify-content-center">
                      {items.map(item => (
                        <Card className="m-2 border-light shadow-sm p-3 mb-5 bg-white rounded" key={item.Titre}  style={{ width: '18rem'}} >
                              <Card.Body className="d-flex flex-column">
                                  <Card.Text className="titre">{item.Titre}</Card.Text>
                                  <hr ></hr>
                                  <Card.Text>Type: {item.Type}</Card.Text>
                                  <Card.Text>Sectuer: {item.Secteur}</Card.Text>
                                  <Card.Text>Ville: {item.Ville}</Card.Text>
                                  <Card.Text>Date de début: {item.Datedebut}</Card.Text>
                                  <Card.Text>Date de fin: {item.Datefin}</Card.Text>
                                  <Card.Text>Description: {item.Description}</Card.Text>
                                  <Card.Text>Heures par semaine: {item.Heures}</Card.Text>
                                  <Card.Text>Competences: {item.Competences}</Card.Text>
                                  <Card.Text>Contact: {item.Contact}</Card.Text>
                              </Card.Body>
                        
                          </Card>
                      ))}
                    </Row>
              
            </Container>
                
          </Container>
      </Container>
    )
  }}}
   
  export default Offres;
 

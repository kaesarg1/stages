import React from "react"
import {Container, Row, Col, Form, Button  } from "react-bootstrap";

class AddStage extends React.Component {
    constructor(props) {
        super(props);
        this.state = { setErrors : {}};
    
        this.handleAdd = this.handleAdd.bind(this);
        this.AddItems = this.AddItems.bind(this);
      }
    
      async AddItems(id, Titre, Type, Secteur, Ville, DateDebut, Datefin, Description, Heures, Competences, Contact, Auteur) { 
        try{ 
          const response = await fetch('https://estagesapi.herokuapp.com/offres',  { 
            method:'POST', 
            headers: {'Content-Type': 'application/json'  }, 
            body:JSON.stringify({
        
              Titre: Titre,
              Type: Type,
              Sectuer: Secteur,
              Ville: Ville,
              DateDebut: DateDebut,
              Datefin: Datefin,
              Description: Description,
              Heures: Heures,
              Competences: Competences,
              Contact: Contact,
              Auteur: Auteur
            }) 
          }); 
          if(response.ok){ 
            const jsonResponse = await response.json(); 
            this.props.history.push("/");
        
    
            return jsonResponse; 
          } 
          throw new Error('Request failed!'); 
      } 
       catch(error){ 
          console.log(error); 
       } 
    }
    
      handleAdd(event){
        event.preventDefault();
        

        const Titre = document.getElementById('Titre').value;
        const Type= document.getElementById('Type').value;
        const Secteur = document.getElementById('Secteur').value;
        const Ville = document.getElementById('Ville').value;
        const DateDebut = document.getElementById('DateDebut').value;
        const Datefin = document.getElementById('Datefin').value;
        const Description = document.getElementById('Description').value;
        const Heures = document.getElementById('Heures').value;
        const Competences = document.getElementById('Competences').value;
        const Contact = document.getElementById('Contact').value;
        const Auteur = document.getElementById('Auteur').value;
       
    
        this.AddItems( Titre, Type, Secteur, Ville, DateDebut, Datefin, Description, Heures, Competences, Contact, Auteur);
      }
    
    
      render() {
        console.log(this.props.history);
        return (
          <>
          <Container className="containermax mx-auto pl-5 ml-5">
              <Row>
                  <h3 className="text-center">Ajoutez une nouvelle offre de Stage</h3>
              </Row>
            <Row>
              <Col className="col-md-6 col-md-offset-3 pb-sm-5 mx-auto pl-5 ml-5">
                <Form className="mt-5">
                  <Form.Group controlId="Titre">
                    <Form.Label>Titre</Form.Label>
                    <Form.Control type="text" placeholder="Titre" />
                  </Form.Group>
                  <Form.Group controlId="Type">
                    <Form.Label>Type</Form.Label>
                    <Form.Control type="text" placeholder="Type"/>
                  </Form.Group>
                  <Form.Group controlId="Secteur">
                    <Form.Label>Secteur</Form.Label>
                    <Form.Control type="text" placeholder="Secteur" />
                  </Form.Group>
                  <Form.Group controlId="Ville">
                    <Form.Label>Ville</Form.Label>
                    <Form.Control type="text" placeholder="Ville" />
                  </Form.Group>
                  <Form.Group controlId="DateDebut">
                    <Form.Label>Date de Début</Form.Label>
                    <Form.Control type="Date" placeholder="Date de Début" />
                  </Form.Group>
                  <Form.Group controlId="Datefin">
                    <Form.Label>Date de fin</Form.Label>
                    <Form.Control type="Date" placeholder="Date de fin" />
                  </Form.Group>
                  <Form.Group controlId="Description">
                    <Form.Label>Description</Form.Label>
                    <Form.Control type="text" placeholder="Description" />
                  </Form.Group>
                  <Form.Group controlId="Heures">
                    <Form.Label>Heures</Form.Label>
                    <Form.Control type="number" placeholder="Heures" />
                  </Form.Group>
                  <Form.Group controlId="Competences">
                    <Form.Label>Competences</Form.Label>
                    <Form.Control type="text" placeholder="Competences" />
                  </Form.Group>
                  <Form.Group controlId="Contact">
                    <Form.Label>Contact</Form.Label>
                    <Form.Control type="text" placeholder="Contact" />
                  </Form.Group>
                  <Form.Group controlId="Auteur">
                    <Form.Label>Auteur</Form.Label>
                    <Form.Control type="text" placeholder="Auteur" />
                  </Form.Group>

                <Row>
                    <Button className="mt-3"variant="primary" type="submit" onClick={this.handleAdd}>
                                Enregistrer
                    </Button>
                </Row>
              
                </Form>  
                </Col>    
              </Row>
            </Container>
          </>
        );
      }
    }

export default AddStage
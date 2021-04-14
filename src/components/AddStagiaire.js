import React from "react"
import {Container, Row, Col, Form, Button  } from "react-bootstrap";

class AddStagiaire extends React.Component {
    constructor(props) {
        super(props);
        this.state = { setErrors : {}};
    
        this.handleAdd = this.handleAdd.bind(this);
        this.AddItems = this.AddItems.bind(this);
      }
    
      async AddItems(id, Nom, Prenom, Adresse, Ville, Courriel, Telephone, SiteWeb, LienCV, Acces) { 
        try{ 
          const response = await fetch("https://estagesapi.herokuapp.com/utilisateur", { 
            method:'POST', 
            headers: {'Content-Type': 'application/json'  }, 
            body:JSON.stringify({
          
              Nom: Nom,
              Prenom: Prenom,
              Adresse: Adresse,
              Ville: Ville,
              Courriel: Courriel,
              Telephone: Telephone,
              SiteWeb: SiteWeb,
              LienCV: LienCV,
              Acces: Acces,
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
        
  
        const Nom = document.getElementById('Nom').value;
        const Prenom = document.getElementById('Prenom').value;
        const Adresse = document.getElementById('Adresse').value;
        const Ville = document.getElementById('Ville').value;
        const Courriel = document.getElementById('Courriel').value;
        const Telephone = document.getElementById('Telephone').value;
        const SiteWeb = document.getElementById('SiteWeb').value;
        const LienCV = document.getElementById('LienCV').value;
        const Acces = document.getElementById('Acces').value;
       
       
    
        this.AddItems( Nom, Prenom, Adresse, Ville, Courriel, Telephone, SiteWeb, LienCV, Acces);
      }
    
    
      render() {
        console.log(this.props.history);
        return (
          <>
          <Container className="containermax mx-auto pl-5 ml-5">
              <Row>
                  <h3 className="text-center">Ajoutez un  nouveau stagiaire</h3>
              </Row>
            <Row>
              <Col className="col-md-6 col-md-offset-3 pb-sm-5 mx-auto pl-5 ml-5">
                <Form className="mt-5">
                  <Form.Group controlId="Nom">
                    <Form.Label>Nom</Form.Label>
                    <Form.Control type="text" placeholder="Nom" />
                  </Form.Group>
                  <Form.Group controlId="Prenom">
                    <Form.Label>Prénom</Form.Label>
                    <Form.Control type="text" placeholder="Prénom"/>
                  </Form.Group>
                  <Form.Group controlId="Adresse">
                    <Form.Label>Adresse</Form.Label>
                    <Form.Control type="text" placeholder="Adresse" />
                  </Form.Group>
                  <Form.Group controlId="Ville">
                    <Form.Label>Ville</Form.Label>
                    <Form.Control type="text" placeholder="Ville" />
                  </Form.Group>
                  <Form.Group controlId="Courriel">
                    <Form.Label>Courriel</Form.Label>
                    <Form.Control type="text" placeholder="Courriel" />
                  </Form.Group>
                  <Form.Group controlId="Telephone">
                    <Form.Label>Téléphone</Form.Label>
                    <Form.Control type="text" placeholder="Téléphone" />
                  </Form.Group>
                  <Form.Group controlId="SiteWeb">
                    <Form.Label>Site Web</Form.Label>
                    <Form.Control type="text" placeholder="Site Web" />
                  </Form.Group>
                  <Form.Group controlId="LienCV">
                    <Form.Label>Lien CV</Form.Label>
                    <Form.Control type="number" placeholder="Lien CV" />
                  </Form.Group>
                  <Form.Group controlId="Acces">
                    <Form.Label>Acces</Form.Label>
                    <Form.Control type="text" placeholder="Acces" />
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
 
export default AddStagiaire;
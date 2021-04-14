import React from "react";
import { Form, Button,  Container, Row, Col } from "react-bootstrap";
import { toast } from "react-toastify"

export class EditStage extends React.Component {

  constructor(props) {
    console.log('opening edititems');
    super(props);
    this.state = {
      donneesRecues: {  Titre: "", Type: "", Secteur: "", Ville: "", DateDebut: "", 
                        Datefin: "", Description: "", Heures: "", Competences: "", Contact: "", Auteur: "" },
  
      setErrors: {}
    };

    this.handleEdit = this.handleEdit.bind(this);
    this.edititem = this.edititem.bind(this);
    this.removeitem = this.removeitem.bind(this);
  }

  //On récupère l'item pour ensuite remplir le formulaire.
  async componentDidMount() {
    try {
      await this.setState({ ItemID: this.props.location.state.id });
      const response = await fetch('https://estagesapi.herokuapp.com/offres' + this.state.Itemid);
      const reponseDeApi = await response.json();
      console.log(this.responseDeApi);
      this.setState({ donneesRecues: reponseDeApi });
      console.log(this.state.donneesRecues);
      if (!response.ok) {
        throw Error(response.statusText);
      }
    } catch (error) {
      console.log(error);
    }
  }



  async edititem( _Titre, _Type, _Secteur, _Ville, _DateDebut, _Datefin, _Description, _Heures, _Competences, _Contact, _Auteur) {
    console.log( _Titre, _Type, _Secteur, _Ville, _DateDebut, _Datefin, _Description, _Heures, _Competences, _Contact, _Auteur);
    try {
      const response = await fetch('https://estagesapi.herokuapp.com/offres' + this.state.Itemid, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
      
        
          Titre: _Titre, 
          Type: _Type, 
          Secteur: _Secteur, 
          Ville: _Ville, 
          DateDebut: _DateDebut, 
          Datefin: _Datefin, 
          Description: _Description, 
          Heures: _Heures, 
          Competences: _Competences, 
          Contact: _Contact, 
          Auteur: _Auteur
        })
      });
      console.log('response');
      if (response.ok) {
        const jsonResponse = await response;
        this.props.history.push("/");
    
        toast.success("Modification " + _Titre);
        toast.success("Modification " + _Type);
        toast.success("Modification " + _Secteur);
        toast.success("Modification " + _Ville);
        toast.success("Modification " + _DateDebut);
        toast.success("Modification " + _Datefin);
        toast.success("Modification " + _Description);
        toast.success("Modification " + _Heures);
        toast.success("Modification " + _Competences);
        toast.success("Modification " + _Contact);
        toast.success("Modification " + _Auteur);

        

        return jsonResponse;
      }
      throw new Error('Request failed!');
    }
    catch (error) {
      console.log(error);
    }
  }

  async removeitem() {
    try {
      const response = await fetch('https://estagesapi.herokuapp.com/offres' + this.state.Itemid, {
        method: 'DELETE',
      });
      if (response.ok) {
        console.log(response);
        console.log("SUPPRESSION!");
        this.props.history.push("/");
        return response;
      }
      throw new Error('Request failed!');
    }
    catch (error) {
      console.log(error);
    }
  }

  handleEdit(event) {
    event.preventDefault();



 
    const Titre = document.getElementById('Titreitem').value;
    const Type = document.getElementById('Typeitem').value;
    const Secteur = document.getElementById('Secteuritem').value;   
    const Ville = document.getElementById('Villeitem').value;
    const DateDebut = document.getElementById('DateDebutitem').value;
    const Datefin = document.getElementById('Datefinitem').value;
    const Description = document.getElementById('Descriptionitem').value;
    const Heures = document.getElementById('Heuresitem').value;
    const Competences = document.getElementById('Competencesitem').value;
    const Contact = document.getElementById('Contactitem').value;
    const Auteur = document.getElementById('Auteuritem').value;

    this.edititem(Titre, Type, Secteur, Ville, DateDebut, Datefin, Description, Heures, Competences, Contact, Auteur
    );
  }


  render() {

    return (
      <>
        <Container className="containermax mx-auto pl-5 ml-5">
        <Row>
                  <h3 className="text-center">Modifier une offre de Stage</h3>
              </Row>
          <Row>
            <Col className="col-md-6 col-md-offset-3 pb-sm-5 mx-auto pl-5 ml-5">
              <Form>
                  <Form.Group controlId="Titreitem">
                      <Form.Label>Titre</Form.Label>
                      <Form.Control type="text" defaultValue={this.state.donneesRecues.Titre} />
                  </Form.Group>
                  <Form.Group controlId="Typeitem">
                      <Form.Label>Type</Form.Label>
                      <Form.Control type="text" defaultValue={this.state.donneesRecues.Type} />
                  </Form.Group>
                  <Form.Group controlId="Secteuritem">
                      <Form.Label>Secteur</Form.Label>
                      <Form.Control type="text" defaultValue={this.state.donneesRecues.Secteur} />
                  </Form.Group>
                  <Form.Group controlId="Villeitem">
                      <Form.Label>Ville</Form.Label>
                      <Form.Control type="text" defaultValue={this.state.donneesRecues.Ville} />
                  </Form.Group>
                  <Form.Group controlId="DateDebutitem">
                      <Form.Label>Date de Début</Form.Label>
                      <Form.Control type="Date" defaultValue={this.state.donneesRecues.DateDebut} />
                  </Form.Group>
                  
                  <Form.Group controlId="Datefinitem">
                    <Form.Label>Date de fin</Form.Label>
                    <Form.Control type="Date" defaultValue={this.state.donneesRecues.Datefin} />
                  </Form.Group>

                  <Form.Group controlId="Descriptionitem">
                    <Form.Label>Description</Form.Label>
                    <Form.Control type="text" defaultValue={this.state.donneesRecues.Description} />
                  </Form.Group>

                  <Form.Group controlId="Heuresitem">
                    <Form.Label>Heures</Form.Label>
                    <Form.Control type="text" defaultValue={this.state.donneesRecues.Heures} />
                  </Form.Group>

                  <Form.Group controlId="Competencesitem">
                    <Form.Label>Competences</Form.Label>
                    <Form.Control type="text" defaultValue={this.state.donneesRecues.Competences} />
                  </Form.Group>

                  <Form.Group controlId="Contactitem">
                    <Form.Label>Contact</Form.Label>
                    <Form.Control type="text" defaultValue={this.state.donneesRecues.Contact} />
                  </Form.Group>

                  <Form.Group controlId="Auteuritem">
                    <Form.Label>Auteur</Form.Label>
                    <Form.Control type="text" defaultValue={this.state.donneesRecues.Auteur} />
                  </Form.Group>
            <Row>
                <Button className="mt-3" variant="primary" type="submit" onClick={this.handleEdit}>
                      Enregistrer
                </Button>
            </Row>
                  
              </Form>
              <Row>
                  <Button className="btn btn-danger mt-5" variant="primary" onClick={this.removeitem}>Supprimer l'item</Button>
              </Row>
            </Col>
          </Row>
          
        </Container>
      </>
    );
  }
}

export default EditStage;
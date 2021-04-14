import React from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import { toast } from "react-toastify"

export class EditStagiaire extends React.Component {

  constructor(props) {
    console.log('opening edititems');
    super(props);
    this.state = {
      donneesRecues: { Nom: "", Prenom: "", Adresse: "", Ville: "", Courriel: "", 
                        Telephone: "", SiteWeb: "", LienCV: "", Acces: "" },
  
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



  async edititem( _Nom, _Prenom, _Adresse, _Ville, _Courriel, _Telephone, _SiteWeb, _LienCV, _Acces) {
    console.log( _Nom, _Prenom, _Adresse, _Ville, _Courriel, _Telephone, _SiteWeb, _LienCV, _Acces);
    try {
      const response = await fetch('https://estagesapi.herokuapp.com/offres' + this.state.Itemid, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
  
        
          Nom: _Nom,
          Prenom: _Prenom, 
          Adresse: _Adresse, 
          Ville: _Ville, 
          Courriel: _Courriel, 
          Telephone: _Telephone, 
          SiteWeb: _SiteWeb, 
          LienCV: _LienCV, 
          Acces: _Acces

        })
      });
      console.log('response');
      if (response.ok) {
        const jsonResponse = await response;
        this.props.history.push("/");

        toast.success("Modification " + _Nom);
        toast.success("Modification " + _Prenom);
        toast.success("Modification " + _Adresse);
        toast.success("Modification " + _Ville);
        toast.success("Modification " + _Courriel);
        toast.success("Modification " + _Telephone);
        toast.success("Modification " + _SiteWeb);
        toast.success("Modification " + _LienCV);
        toast.success("Modification " + _Acces);
     

        

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




    const Nom = document.getElementById('Nomitem').value;
    const Prenom = document.getElementById('Prenomitem').value;
    const Adresse = document.getElementById('Adresseitem').value;   
    const Ville = document.getElementById('Villeitem').value;
    const Courriel = document.getElementById('Courrielitem').value;
    const Telephone = document.getElementById('Telephoneitem').value;
    const SiteWeb = document.getElementById('SiteWebitem').value;
    const LienCV = document.getElementById('LienCVitem').value;
    const Acces = document.getElementById('Accesitem').value;
  

    this.edititem(Nom, Prenom, Adresse, Ville, Courriel, Telephone, SiteWeb, LienCV, Acces
    );
  }


  render() {

    return (
      <>
        <Container className="containermax mx-auto pl-5 ml-5">
        <Row>
                  <h3 className="text-center">Modifier un Stagiaire</h3>
              </Row>
          <Row>
            <Col className="col-md-6 col-md-offset-3 pb-sm-5 mx-auto pl-5 ml-5">
              <Form>
                  <Form.Group controlId="Nomitem">
                      <Form.Label>Nom</Form.Label>
                      <Form.Control type="text" defaultValue={this.state.donneesRecues.Nom} />
                  </Form.Group>
                  <Form.Group controlId="Prenomitem">
                      <Form.Label>Prénom</Form.Label>
                      <Form.Control type="text" defaultValue={this.state.donneesRecues.Prenom} />
                  </Form.Group>
                  <Form.Group controlId="Adresseitem">
                      <Form.Label>Adresse</Form.Label>
                      <Form.Control type="text" defaultValue={this.state.donneesRecues.Adresse} />
                  </Form.Group>
                  <Form.Group controlId="Villeitem">
                      <Form.Label>Ville</Form.Label>
                      <Form.Control type="text" defaultValue={this.state.donneesRecues.Ville} />
                  </Form.Group>
                  <Form.Group controlId="Courrielitem">
                      <Form.Label>Courriel</Form.Label>
                      <Form.Control type="text" defaultValue={this.state.donneesRecues.Courriel} />
                  </Form.Group>
                  
                  <Form.Group controlId="Telephoneitem">
                    <Form.Label>Téléphone</Form.Label>
                    <Form.Control type="text" defaultValue={this.state.donneesRecues.Telephone} />
                  </Form.Group>

                  <Form.Group controlId="SiteWebitem">
                    <Form.Label>Site Web</Form.Label>
                    <Form.Control type="text" defaultValue={this.state.donneesRecues.SiteWeb} />
                  </Form.Group>

                  <Form.Group controlId="LienCVitem">
                    <Form.Label>Lien CV</Form.Label>
                    <Form.Control type="text" defaultValue={this.state.donneesRecues.LienCV} />
                  </Form.Group>

                  <Form.Group controlId="Accesitem">
                    <Form.Label>Acces</Form.Label>
                    <Form.Control type="text" defaultValue={this.state.donneesRecues.Acces} />
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

export default EditStagiaire;
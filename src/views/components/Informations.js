import React from "react";
import { useEffect } from "react";

// reactstrap components
import {
    Button,
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    FormGroup,
    Form,
    Input,
    Row,
    Col,
} from "reactstrap";
import { DataExperienceCV } from "../data/realisation";
import { DataEducationCV } from "../data/realisation";
import axios from "axios";

const Informations = () => {

    const [data, setData] = React.useState([]); 				
    const [nomEx, setNomEx] = React.useState("");
    const [poste, setPoste] = React.useState("");
    const [anneeEx, setAnneeEx] = React.useState("");
    const [tache, setTache] = React.useState("");
    const [diplome, setDiplome] = React.useState("");
    const [nomEd, setNomEd] = React.useState("");
    const [anneeEd, setAnneeEd] = React.useState("");
    const [nomRealisation, setNomRealisation] = React.useState("");
    const [nomComptence, setNomComptence] = React.useState("");
    const [descCompetence, setDescCompetence] = React.useState("");
    const [nomLogiciel, setNomLogiciel] = React.useState("");


  const handleInformation = async (event) => {
    event.preventDefault();

    const experiencePayload = {
        nom:nomEx,
        poste:poste,
        annee:anneeEx,
        tache:tache
    }

    const educationPayload = {
        nom:nomEd,
        diplome:diplome,
        annee:anneeEd
    }

    const RealisationPayload = {
        nom:nomRealisation
    }

    const CompetencePayload = {
        nom:nomComptence,
        description:descCompetence
    }

    const LogicielPayload = {
        nom:nomLogiciel
    }

    axios.post("http://localhost:5000/api/experience/create", experiencePayload)
    .then(response => {
        console.log("test",response);
   
    })
    .catch(err => console.log(err));

    axios.post("http://localhost:5000/api/education/create", educationPayload)
    .then(response => {
        console.log("test",response);
   
    })
    .catch(err => console.log(err));

    axios.post("http://localhost:5000/api/realisation/create", RealisationPayload)
    .then(response => {
        console.log("test",response);
   
    })
    .catch(err => console.log(err));

    axios.post("http://localhost:5000/api/competence/create", CompetencePayload)
    .then(response => {
        console.log("test",response);
   
    })
    .catch(err => console.log(err));

    axios.post("http://localhost:5000/api/logiciel/create", LogicielPayload)
    .then(response => {
        console.log("test",response);
   
    })
    .catch(err => console.log(err));
    
  };

    return (
        <>
            <div className="content">
                <Card>
                    <CardHeader>
                        <h2 className="title">Expérience</h2>
                    </CardHeader>
                    <CardBody>
                        <Form>
                            <Row>
                                <Col md="12">
                                    <FormGroup>
                                        <label>Nom</label>
                                        <Input 
                                        value={nomEx}
                                        onChange={(e) => setNomEx(e.target.value)} 
                                        type="text" />
                                    </FormGroup>
                                </Col>
                            </Row>
                            <Row>
                                <Col md="12">
                                    <FormGroup>
                                        <label>Poste</label>
                                        <Input 
                                        value={poste}
                                        onChange={(e) => setPoste(e.target.value)} 
                                        type="text" />
                                    </FormGroup>
                                </Col>
                            </Row>
                            <Row>
                                <Col md="12">
                                    <FormGroup>
                                        <label>Année</label>
                                        <Input
                                        value={anneeEx}
                                        onChange={(e) => setAnneeEx(e.target.value)} 
                                        type="text" />
                                    </FormGroup>
                                </Col>
                            </Row>
                            <Row>
                                <Col md="12">
                                    <FormGroup>
                                        <label>Taches</label>
                                        <Input 
                                        value={tache}
                                        onChange={(e) => setTache(e.target.value)}
                                        placeholder="Entrer vos taches"
                                        type="textarea" />
                                    </FormGroup>
                                </Col>
                            </Row>

                        </Form>
                    </CardBody>

                    <CardHeader>
                        <h2 className="title">Education</h2>
                    </CardHeader>
                    <CardBody>
                        <Form>
                            <Row>
                                <Col md="12">
                                    <FormGroup>
                                        <label>Nom</label>
                                        <Input 
                                        value={nomEd}
                                        onChange={(e) => setNomEd(e.target.value)} 
                                        type="text" />
                                    </FormGroup>
                                </Col>
                            </Row>
                            <Row>
                                <Col md="12">
                                    <FormGroup>
                                        <label>Diplôme</label>
                                        <Input 
                                            value={diplome}
                                            onChange={(e) => setDiplome(e.target.value)}
                                            placeholder="Entrer vos Diplômes"
                                            type="textarea" />
                                    </FormGroup>
                                </Col>
                            </Row>
                            <Row>
                                <Col md="12">
                                    <FormGroup>
                                        <label>Année</label>
                                        <Input
                                            value={anneeEd}
                                            onChange={(e) => setAnneeEd(e.target.value)}
                                            type="text"
                                        />
                                    </FormGroup>
                                </Col>
                            </Row>

                        </Form>
                    </CardBody>

                    <CardHeader>
                        <h2 className="title">Réalisations</h2>
                    </CardHeader>
                    <CardBody>
                        <Form>
                            <Row>
                                <Col md="12">
                                    <FormGroup>
                                        <label>Nom</label>
                                        <Input 
                                        value={nomRealisation}
                                        onChange={(e) => setNomRealisation(e.target.value)} 
                                        type="text" /> 
                                    </FormGroup>
                                </Col>
                            </Row>

                        </Form>
                    </CardBody>

                    <CardHeader>
                        <h2 className="title">Competences</h2>
                    </CardHeader>
                    <CardBody>
                        <Form>
                            <Row>
                                <Col md="12">
                                    <FormGroup>
                                        <label>Nom</label>
                                        <Input 
                                        value={nomComptence}
                                        onChange={(e) => setNomComptence(e.target.value)}  
                                        type="text" />
                                    </FormGroup>
                                </Col>
                            </Row>
                            <Row>
                                <Col md="12">
                                    <FormGroup>
                                        <label>Description</label>
                                        <Input 
                                        value={descCompetence}
                                        onChange={(e) => setDescCompetence(e.target.value)}  
                                        type="text" />
                                    </FormGroup>
                                </Col>
                            </Row>
                        </Form>
                    </CardBody>

                    <CardHeader>
                        <h2 className="title">Logiciels et applications</h2>
                    </CardHeader>
                    <CardBody>
                        <Form>
                            <Row>
                                <Col md="12">
                                    <FormGroup>
                                        <label>Nom</label>
                                        <Input 
                                        value={nomLogiciel}
                                        onChange={(e) => setNomLogiciel(e.target.value)}  
                                        type="text" />
                                    </FormGroup>
                                </Col>
                            </Row>
                        </Form>
                    </CardBody>
                    <CardFooter>
                        <Button className="btn-fill" color="primary" onClick={handleInformation}>
                            Enregistrer
                        </Button>
                    </CardFooter>
                </Card>
            </div>
        </>
    );
};

export default Informations;

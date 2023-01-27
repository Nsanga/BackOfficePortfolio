/*!

=========================================================
* Black Dashboard PRO React - v1.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/black-dashboard-pro-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";

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


const Informations = () => {
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
                                        <Input value={DataExperienceCV.nom} type="text" />
                                    </FormGroup>
                                </Col>
                            </Row>
                            <Row>
                                <Col md="12">
                                    <FormGroup>
                                        <label>Poste</label>
                                        <Input value={DataExperienceCV.poste} type="text" />
                                    </FormGroup>
                                </Col>
                            </Row>
                            <Row>
                                <Col md="12">
                                    <FormGroup>
                                        <label>Année</label>
                                        <Input
                                        value={DataExperienceCV.annee} type="text" />
                                    </FormGroup>
                                </Col>
                            </Row>
                            <Row>
                                <Col md="12">
                                    <FormGroup>
                                        <label>Taches</label>
                                        <Input 
                                        value={DataExperienceCV.tache}
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
                                        <Input value={DataEducationCV.nom} type="text" />
                                    </FormGroup>
                                </Col>
                            </Row>
                            <Row>
                                <Col md="12">
                                    <FormGroup>
                                        <label>Diplôme</label>
                                        <Input 
                                            value={DataEducationCV.diplome}
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
                                            value={DataEducationCV.annee}
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
                                        <Input value={DataEducationCV.realisation} type="text" /> 
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
                                        <Input value={DataEducationCV.competence} type="text" />
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
                                        <Input value={DataEducationCV.logiciel} type="text" />
                                    </FormGroup>
                                </Col>
                            </Row>
                        </Form>
                    </CardBody>
                    <CardFooter>
                        <Button className="btn-fill" color="primary" type="submit">
                            Enregistrer
                        </Button>
                    </CardFooter>
                </Card>
            </div>
        </>
    );
};

export default Informations;

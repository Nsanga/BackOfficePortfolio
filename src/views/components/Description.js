
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
import ImageUpload from "components/CustomUpload/ImageUpload.js";
import { DataProfileCV } from "../data/realisation";

const Description = () => {
    return (
        <>
            <div className="content">
                <Card>
                    <CardHeader>
                        <h2 className="title">Profile</h2>
                    </CardHeader>
                    <CardBody>
                        <Form>
                            <Row>
                                <Col md="12">
                                    <FormGroup>
                                        <label>Nom</label>
                                        <Input value={DataProfileCV.nom} type="text" />
                                    </FormGroup>
                                </Col>
                                </Row>
                                <Row>
                                <Col md="12">
                                    <FormGroup>
                                        <label>Metier</label>
                                        <Input value={DataProfileCV.metier} type="text" />
                                    </FormGroup>
                                </Col>
                            </Row>
                            <FormGroup>
                                <Row>
                                    <Col md="8">
                                        <label>Description</label>
                                        <Input
                                            value={DataProfileCV.description}
                                            cols="80"
                                            placeholder="Entrer votre description"
                                            type="textarea"
                                        />
                                    </Col>
                                    <Col>
                                        <ImageUpload
                                            addBtnColor="default"
                                            changeBtnColor="default"
                                        />
                                    </Col>
                                </Row>
                            </FormGroup>
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

export default Description;

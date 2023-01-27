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
import { useState, useEffect } from "react";

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
import {DataProfile, DataAbout} from "../data/realisation.js"

const User = () => {
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
                    <Col className="pr-md-1" md="6">
                      <FormGroup>
                        <label>Nom</label>
                        <Input type="text" value={DataProfile.nom}/>
                      </FormGroup>
                    </Col>
                    <Col className="pl-md-1" md="6">
                      <FormGroup>
                        <label>Metier</label>
                        <Input type="text" value={DataProfile.metier}/>
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col md="12">
                      <FormGroup>
                        <label>Description</label>
                        <Input
                          placeholder="Decrivez-vous"
                          type="textarea"
                          value={DataProfile.description}
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                    <ImageUpload
                      addBtnColor="default"
                      changeBtnColor="default"
                    />
                    </Col>
                    </Row>
                </Form>
              </CardBody>
              
              <CardHeader>
                <h2 className="title">A propos de moi</h2>
              </CardHeader>
              <CardBody>
                  <FormGroup>
                    <Row>
                    <Col>
                    <ImageUpload
                      addBtnColor="default"
                      changeBtnColor="default"
                    />
                    </Col>
                    <Col md="8">
                    <label>Description</label>
                    <Input
                    value={DataAbout.description}
                      cols="80"
                      placeholder="Entrer votre description"
                      type="textarea"
                    />
                    </Col>
                    </Row>
                  </FormGroup>
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

export default User;

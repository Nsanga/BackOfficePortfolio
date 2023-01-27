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
  Input,
  Row,
  Col,
} from "reactstrap";
import ImageUpload from "components/CustomUpload/ImageUpload.js";
import {Data} from "../data/realisation.js"


const Users = () => {
    
  return (
    <>
      <div className="content">

            <Card>
              <CardHeader>
                <h2 className="title">Aperçue</h2>
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
                      value={Data.description}
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

export default Users;

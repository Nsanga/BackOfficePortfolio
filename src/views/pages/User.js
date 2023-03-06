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
import axios from "axios";

const User = () => {
  const [data, setData] = React.useState([]);
  const [nom, setNom] = React.useState("");
  const [metier, setMetier] = React.useState("");
  const [description, setDescription] = React.useState("");
  const [about_description, setAboutDescription] = React.useState("");

  useEffect(() => {
    axios.get("http://localhost:5000/api/auth/profile")
    .then(response => {
      console.log("get List ::", response.data);
      setData(response.data.data)
      setNom(response.data.data.nom)
      setMetier(response.data.data.metier)
      setDescription(response.data.data.description)
      setAboutDescription(response.data.data.about_description)
 
  })
  .catch(err => console.log(err));
  
  }, [])

  const handleProfil = async (event) => {
    event.preventDefault();

    const profilePayload = {
      nom: nom,
      metier: metier,
      description: description,
      about_description: about_description
    }

    axios.put("http://localhost:5000/api/auth/update/1", profilePayload)
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
                <h2 className="title">Profile</h2>
              </CardHeader>
              <CardBody>
                <Form >
                  <Row>
                    <Col className="pr-md-1" md="6">
                      <FormGroup>
                        <label>Nom</label>
                        <Input type="text" 
                        value={nom}
                        onChange={(e) => setNom(e.target.value)}/>
                      </FormGroup>
                    </Col>
                    <Col className="pl-md-1" md="6">
                      <FormGroup>
                        <label>Metier</label>
                        <Input type="text" 
                        value={metier}
                        onChange={(e) => setMetier(e.target.value)}/>
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
                          value={description}
                          onChange={(e) => setDescription(e.target.value)}
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
                      value={about_description}
                      onChange={(e) => setAboutDescription(e.target.value)}
                      cols="80"
                      placeholder="Entrer votre description"
                      type="textarea"
                    />
                    </Col>
                    </Row>
                  </FormGroup>
            </CardBody>
              <CardFooter>
                <Button onClick={handleProfil} className="btn-fill" color="primary" >
                  Enregistrer
                </Button>
              </CardFooter>
            </Card>
      </div>
    </>
  );
};

export default User;

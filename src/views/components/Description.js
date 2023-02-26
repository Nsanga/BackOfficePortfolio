
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
import { DataProfileCV } from "../data/realisation";
import axios from "axios";

const Description = () => {
    const [data, setData] = React.useState([]);
    const [nom, setNom] = React.useState("");
    const [metier, setMetier] = React.useState("");
    const [description, setDescription] = React.useState("");

  useEffect(() => {
    axios.get("http://localhost:5000/api/realisation/1")
    .then(response => {
      console.log("get List ::", response);
      setData(response.data)
 
  })
  .catch(err => console.log(err));
  
  }, [])

  const handleProfil = async (event) => {
    event.preventDefault();

    const RealisationPayload = {
        nom:nom,
        metier:metier,
        description:description,
        id_User: await localStorage.getItem("id user")
    }

    axios.put("http://localhost:5000/api/realisation/1", RealisationPayload)
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
                        <Form>
                            <Row>
                                <Col md="12">
                                    <FormGroup>
                                        <label>Nom</label>
                                        <Input 
                                        value={nom}
                                        onChange={(e) => setNom(e.target.value)}
                                        type="text" />
                                    </FormGroup>
                                </Col>
                                </Row>
                                <Row>
                                <Col md="12">
                                    <FormGroup>
                                        <label>Metier</label>
                                        <Input 
                                        value={metier}
                                        onChange={(e) => setMetier(e.target.value)} 
                                        type="text" />
                                    </FormGroup>
                                </Col>
                            </Row>
                            <FormGroup>
                                <Row>
                                    <Col md="8">
                                        <label>Description</label>
                                        <Input
                                            vvalue={description}
                                            onChange={(e) => setDescription(e.target.value)}
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
                        <Button className="btn-fill" color="primary" onClick={handleProfil}>
                            Enregistrer
                        </Button>
                    </CardFooter>
                </Card>
            </div>
        </>
    );
};

export default Description;

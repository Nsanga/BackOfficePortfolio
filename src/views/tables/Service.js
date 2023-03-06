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

const Service = () => {
    const [data, setData] = React.useState([]);
    const [nom, setNom] = React.useState("");
    const [description, setDescription] = React.useState("");

    useEffect(() => {
        axios.get("http://localhost:5000/api/service/1")
        .then(response => {
          console.log("get List ::", response);
          setData(response.data.data);
          setNom(response.data.data.nom);
          setDescription(response.data.data.description)
     
      })
      .catch(err => console.log(err));
      
      }, [])
    
      const handleProfil = async (event) => {
        event.preventDefault();
    
        const profilePayload = {
          nom: nom,
          description: description
        }
    
        axios.put("http://localhost:5000/api/service/1", profilePayload)
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
                                <Col className="pr-md-1" md="12">
                                    <FormGroup>
                                        <label>Nom</label>
                                        <Input type="text"
                                            value={nom}
                                            onChange={(e) => setNom(e.target.value)} />
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

export default Service;

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
import axios from "axios";


const Users = () => {
  const [data, setData] = React.useState([]);
  const [descRealisation, setDescRealisation] = React.useState("");

  useEffect(() => {
    axios.get("http://localhost:5000/api/auth/profile")
    .then(response => {
      const user = response.data.data.id_User
      console.log("get List ::", response);
      localStorage.setItem("id user", user);
      setData(response.data)
 
  })
  .catch(err => console.log(err));
  
  }, [])

  const handleProfil = async (event) => {
    event.preventDefault();

    const profilePayload = {
      desc_realisation : descRealisation
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
                      value={descRealisation}
                      onChange={(e) => setDescRealisation(e.target.value)}
                      cols="80"
                      placeholder="Entrer votre description"
                      type="textarea"
                    /> 
                    </Col>
                    </Row>
                  </FormGroup>
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

export default Users;

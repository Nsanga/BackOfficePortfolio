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
  const [file, setFile] = useState(null)
  const [desc_file, setDescFile] = useState(null)
  const [about_file, setAboutFile] = useState(null)
  const [desc_realisation, setDescRealisation] = React.useState("");
  const [message, setMessage] = React.useState("");

  function handleInputChange(event) {
    setAboutDescription(event.target.value);
  }

  useEffect(() => {
    axios.get("http://localhost:5000/api/auth/profile")
      .then(response => {
        console.log("get List1 ::", response.data);
        setData(response.data.data)
        setNom(response.data.data.nom)
        setMetier(response.data.data.metier)
        setDescription(response.data.data.description)
        setAboutDescription(response.data.data.about_description)
        setDescRealisation(response.data.data.desc_realisation)
        setFile(response.data.data.file)
        setDescFile(response.data.data.desc_file)
        setAboutFile(response.data.data.about_file)

      })
      .catch(err => console.log(err));

  }, [])

  async function putImage(userId, fileData) {
    const formData = new FormData();
    console.log("okkk:::", formData)
    fileData.forEach((image) => {
      formData.append('image', image);
    });

    formData.append('nom', nom);
    formData.append('metier', metier);
    formData.append('description', description);
    formData.append('about_description', about_description);
    formData.append('desc_realisation', desc_realisation);

    try {
      if (formData.nom != "" || formData.metier != "" || formData.description != "" || formData.about_description != "" || formData.desc_realisation != "") {
        const response = await axios.put(`http://localhost:5000/api/auth/update/${userId}`, formData, {
          headers: { "Content-Type": "multipart/form-data" }
        });
        console.log("list", response);
        setMessage(response.data.message)
        return response.data.message;
      }
    } catch (error) {
      console.log(error);
    }
  }



  const handleProfil = async (event) => {
    event.preventDefault();

    const values = about_description.split('\n').map(value => value.trim());
    console.log(values);

    const fileData = [file, about_file, desc_file ]
    console.log("données::", fileData)

    const result = await putImage(1, fileData);
    return result;
  };

  const paragraph = <p style={{ color: 'red', textAlign: 'center' }}>{message}</p>;

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
                      onChange={(e) => setNom(e.target.value)} />
                  </FormGroup>
                </Col>
                <Col className="pl-md-1" md="6">
                  <FormGroup>
                    <label>Metier</label>
                    <Input type="textarea"
                      value={metier}
                      onChange={(e) => setMetier(e.target.value)} />
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
                    type="file"
                    onChange={(file) => setFile(file)}
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
                    type="file"
                    onChange={(file) => setAboutFile(file)}
                    addBtnColor="default"
                    changeBtnColor="default"
                  />
                </Col>
                <Col md="8">
                  <label>Description</label>
                  <Input
                    id="multiLineInput"
                    value={about_description}
                    onChange={handleInputChange}
                    cols="80"
                    placeholder="Entrer votre description"
                    type="textarea"
                  />
                </Col>
              </Row>
            </FormGroup>
          </CardBody>

          <CardHeader>
            <h2 className="title">Aperçue</h2>
          </CardHeader>
          <CardBody>
            <FormGroup>
              <Row>
                <Col>
                  <ImageUpload
                    type="file"
                    onChange={(file) => setDescFile(file)}
                    addBtnColor="default"
                    changeBtnColor="default"
                  />
                </Col>
                <Col md="8">
                  <label>Description</label>
                  <Input
                    id="multiLineInput"
                    value={desc_realisation}
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
            <Button onClick={handleProfil} className="btn-fill" color="primary" >
              Enregistrer
            </Button>
          </CardFooter>
        </Card>
        {paragraph}
      </div>
    </>
  );
};

export default User;

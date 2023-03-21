
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
import {url} from "../../urlLoader"

const Description = () => {
    const [data, setData] = React.useState([]);
    const [nom, setNom] = React.useState("");
    const [metier, setMetier] = React.useState("");
    const [description, setDescription] = React.useState("");
    const [file, setFile] = useState(null)
    const [isEmpty, setIsEmpty] = useState(true)
    const [message, setMessage] = React.useState("");

    useEffect( () => {
        axios.get(`${url}/api/realisation/getAll`)
            .then(response => {
                console.log("get List ::", response.data.data.length);
                if(response.data.data.length > 0)
                {
                    setIsEmpty(true)
                    setData(response.data.data)
                    setNom(response.data.data.nom);
                    setMetier(response.data.data.metier);
                    setDescription(response.data.data.description);
                }else 
                {
                    setIsEmpty(false)
                    
                }
                

            })
    }, []);
    

    async function postImage({ image, nom, metier, description }) {
        const formData = new FormData();

        formData.append('image', image);
        formData.append('nom', nom);
        formData.append('description', description);
        formData.append('metier', metier);

        // Vérifier si des données existent déjà
        try {
            let response;
            if (isEmpty) {
                // Les données existent : mettre à jour l'entrée existante
                response = axios.put(`${url}/api/realisation/1`, 
                    formData,
                    { headers: { "Content-Type": "multipart/form-data" } }
                )
                    .then(response => {
                        console.log("test", response);
                        setMessage(response.data.message)
                        return response.data.message;
                    })
                    .catch(err => console.log(err));
            }else{
                // Les données n'existent pas : créer une nouvelle entrée
                response = axios.post(`${url}/api/realisation/create`,
                    formData,
                    { headers: { "Content-Type": "multipart/form-data" } }
                )
                    .then(response => {
                        console.log("cv", response);
                        setMessage(response.data.message)
                        return response.data.message;
                    })
                    .catch(err => console.log(err));
            }
        } catch (error) {
            console.error(error);
        }
    }

    const handleProfil = async (event) => {
        event.preventDefault();

        const result = await postImage({ image: file, nom, description, metier })
        return result;

    };
    const handleImageChange = (file) => {
        console.log('bonjour::', file)
        setFile(file)
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
                                            value={description}
                                            onChange={(e) => setDescription(e.target.value)}
                                            cols="80"
                                            placeholder="Entrer votre description"
                                            type="textarea"
                                        />
                                    </Col>
                                    <Col>
                                        <ImageUpload
                                            type="file"
                                            onChange={handleImageChange}
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
                {paragraph}
            </div>
        </>
    );
};

export default Description;

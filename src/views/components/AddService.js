import ImageUploadService from "components/CustomUpload/ImageUploadService";
import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

// reactstrap components
import {
    Label,
    Form,
    Button,
    Modal,
    ModalBody,
    Row,
    Col,
    FormGroup,
    Input
} from "reactstrap";
//import ImageUploadService from "components/CustomUpload/ImageUploadService.js";

const AddService = () => {
    const [modalMini, setModalMini] = React.useState(false);
    const [data, setData] = React.useState([]);
    const [nom, setNom] = React.useState("");
    const [description, setDescription] = React.useState("");
    const [file, setFile] = useState(null)
    const [message, setMessage] = React.useState("");
    

    async function postImage({ image, nom, description }) {
        const formData = new FormData();
    
        formData.append('image', image);
        formData.append('nom', nom);
        formData.append('description', description);

        axios.post("http://localhost:5000/api/service/create",
                formData,
                { headers: { "Content-Type": "multipart/form-data" } }
            )
                .then(response => {
                    console.log("service", response);
                    console.log("service1:::", formData)
                    setMessage(response.data.message)
                    return response.data.message;
    
                })
                .catch(err => console.log(err));
                
            
    }

    const handleProfil = async (event) => {
        event.preventDefault();

        const result = await postImage({ image: file, nom, description })
        return result;

    };
    const handleImageChange = (file) => {
        console.log('bonjour::', file)
        setFile(file)
    };

    const toggleModalMini = () => {
        setModalMini(!modalMini);
    };

    // type validation form
  const [required, setrequired] = React.useState("");
  const [requiredState, setrequiredState] = React.useState("");
  const stateFunctions = {
    // type validation form
    setrequired: (value) => setrequired(value),
    setrequiredState: (value) => setrequiredState(value),
  };
  
  
  const paragraph = <p style={{ color: 'red', textAlign: 'center' }}>{message}</p>;
  
    return (
        <>
            <Button size="sm" color="primary" onClick={toggleModalMini}>
                <i className="tim-icons icon-simple-add" />
            </Button>

            {/* Classic Modal */}
            <Modal isOpen={modalMini} toggle={toggleModalMini}  modalClassName="modal-info">
                <div className="modal-header justify-content-center">
                    <button
                        aria-hidden={true}
                        className="close"
                        data-dismiss="modal"
                        type="button"
                        onClick={toggleModalMini}
                    >
                        <i className="tim-icons icon-simple-remove" />
                    </button>
                    <h3 className="title title-up">Ajouter un service</h3>
                </div>
                <ModalBody className="text-center">
                    <Form >
                    <Row>
                    <Label sm="2">Nom</Label>
                    <Col sm="7">
                      <FormGroup className={requiredState}>
                    <Input type="text"
                      value={nom}
                      onChange={(e) => setNom(e.target.value)} />
                        {requiredState === "has-danger" ? (
                          <label className="error">
                            This field is required.
                          </label>
                        ) : null}
                      </FormGroup>
                    </Col>
                    <Col className="label-on-right" tag="label" sm="3">
                      <code>required</code>
                    </Col>
                  </Row>
                  <Row>
                    <Label sm="2">Description</Label>
                    <Col sm="7">
                      <FormGroup className={requiredState}>
                    <Input
                      placeholder="Decrivez-vous"
                      type="textarea"
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                    />
                        {requiredState === "has-danger" ? (
                          <label className="error">
                            This field is required.
                          </label>
                        ) : null}
                      </FormGroup>
                    </Col>
                    <Col className="label-on-right" tag="label" sm="3">
                      <code>required</code>
                    </Col>
                  </Row>
                  <Row>
                    <Label sm="2">Image</Label>
                    <Col sm="7">
                  <ImageUploadService
                    type="file"
                    onChange={handleImageChange}
                    addBtnColor="default"
                    changeBtnColor="default"
                  />
                    </Col>
                  </Row>
                        <div>
                            <Button color="primary" onClick={handleProfil}>
                                Ajouter
                            </Button>
                            <Button
                                color="danger"
                                data-dismiss="modal"
                                type="button"
                                onClick={toggleModalMini}
                            >
                                Close
                            </Button>
                        </div>
                    </Form>
                    {paragraph}

                </ModalBody>

            </Modal>
            {/* End Classic Modal */}

        </>
    );
};

export default AddService;

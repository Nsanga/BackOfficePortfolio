import ImageUpload from "components/CustomUpload/ImageUpload";
import { useState } from "react";
import React from "react";

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
import axios from "axios";


const Add = () => {
    const [modalMini, setModalMini] = useState(false);
    const [data, setData] = useState([])
    const [nom, setNom] = useState("");
    const [description, setDescription] = useState("");
    const [link, setLink] = useState("");
    const [type, setType] = useState("");
    const [file, setFile] = useState(null);
    const [message, setMessage] = React.useState("");

    const handleImageChange = (file) => {
      console.log('bonjour::',file)
      setFile(file)
    };

    async function postImage({image,nom, description, type, lien}) {
      const formData = new FormData();
          
          formData.append('image', image);
          formData.append('nom', nom);
          formData.append('description', description);
          formData.append('type', type);
          formData.append('lien', lien);
    
          axios.post("http://localhost:5000/api/projet/create", 
            formData,
            {headers: { "Content-Type": "multipart/form-data" }}
          )
          .then(response => {
              console.log("test",response);
              console.log("test1:::", formData)
              setMessage(response.data.message)
              return response.data.message;
         
          })
          .catch(err => console.log(err));
    }

    const handleProfil = async (event) => {
      event.preventDefault();

      const result = await postImage({image: file, nom, description, type, link})
      return result;
      
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
                    <h3 className="title title-up">Ajouter une réalisation</h3>
                </div>
                <ModalBody className="text-center">
                    <Form onSubmit={handleProfil} encType="multipart/form-data">
                    <Row>
                    <Label sm="2">Nom</Label>
                    <Col sm="7">
                      <FormGroup className={requiredState}>
                        <Input
                          name="required"
                          type="text"
                          value={nom}
                          onChange={(e) => setNom(e.target.value)}
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
                    <Label sm="2">Description</Label>
                    <Col sm="7">
                      <FormGroup className={requiredState}>
                        <Input
                          value={description}
                          onChange={(e) => setDescription(e.target.value)}
                          name="required"
                          type="textarea"
                          placeholder="Entrer une description de la réalisation"
                          // onChange={(e) => change(e, "required", "length", 1)}
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
                    <Label sm="2">Type</Label>
                    <Col sm="7">
                      <FormGroup className={requiredState}>
                        <Input
                          value={type}
                          onChange={(e) => setType(e.target.value)}
                          name="required"
                          type="text"
                          //onChange={(e) => change(e, "required", "length", 1)}
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
                    <Label sm="2">Lien</Label>
                    <Col sm="7">
                      <FormGroup className={requiredState}>
                        <Input
                          value={link}
                          onChange={(e) => setLink(e.target.value)}
                          name="required"
                          type="textarea"
                          placeholder="Entrer le lien de la réalisation"
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
                    <ImageUpload
                      type="file" 
                      onChange={handleImageChange}
                      addBtnColor="default"
                      changeBtnColor="default"
                    />
                    </Col>
                  </Row>
                        <div>
                            <Button color="primary" type="submit">
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

export default Add;

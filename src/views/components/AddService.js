import ImageUpload from "components/CustomUpload/ImageUpload";
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
//import ImageUpload from "components/CustomUpload/ImageUpload.js";

const AddService = () => {
    const [modalMini, setModalMini] = React.useState(false);
    const [data, setData] = React.useState([])
    const [nom, setNom] = React.useState("");
    const [description, setDescription] = React.useState("");

    useEffect(() => {
      axios.get("http://localhost:5000/api/service/getAll")
      .then(response => {
        console.log("get List ::", response);
        setData(response.data)
   
    })
    .catch(err => console.log(err));
    
    }, [])
  
    const handleProfil = async (event) => {
      event.preventDefault();
  
      const profilePayload = {
        nom: nom,
        description: description,
        id_User: await localStorage.getItem("id user")
      }
  
      axios.post("http://localhost:5000/api/service/create", profilePayload)
      .then(response => {
          console.log("test",response);
     
      })
      .catch(err => console.log(err));
      
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
  
  // function that verifies if a string has a given length or not
  const verifyLength = (value, length) => {
    if (value.length >= length) {
      return true;
    }
    return false;
  };
  
  const change = (event, stateName, type, stateNameEqualTo, maxValue) => {
    switch (type) {
      
      case "length":
        if (verifyLength(event.target.value, stateNameEqualTo)) {
          stateFunctions["set" + stateName + "State"]("has-success");
        } else {
          stateFunctions["set" + stateName + "State"]("has-danger");
        }
        break;
      
      default:
        break;
    }
    stateFunctions["set" + stateName](event.target.value);
  };
  
  const typeClick = () => {
    if (requiredState === "") {
      setrequiredState("has-danger");
    }
  };
  
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
                        <Input
                          value={nom}
                          onChange={(e) => setNom(e.target.value)}
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
                    <Label sm="2">Description</Label>
                    <Col sm="7">
                      <FormGroup className={requiredState}>
                        <Input
                          value={description}
                          onChange={(e) => setDescription(e.target.value)}
                          name="required"
                          type="textarea"
                          placeholder="Description de la réalisation"
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
                    <Label sm="2">Image</Label>
                    <Col sm="7">
                    <ImageUpload
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

                </ModalBody>

            </Modal>
            {/* End Classic Modal */}

        </>
    );
};

export default AddService;

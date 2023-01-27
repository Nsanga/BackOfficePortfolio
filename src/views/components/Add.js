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
import ImageUpload from "components/CustomUpload/ImageUpload";
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
//import ImageUpload from "components/CustomUpload/ImageUpload.js";

const Add = () => {
    const [modalMini, setModalMini] = React.useState(false);
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
                    <h3 className="title title-up">Ajouter une réalisation</h3>
                </div>
                <ModalBody className="text-center">
                    <Form >
                    <Row>
                    <Label sm="2">Nom</Label>
                    <Col sm="7">
                      <FormGroup className={requiredState}>
                        <Input
                          name="required"
                          type="text"
                          onChange={(e) => change(e, "required", "length", 1)}
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
                          name="required"
                          type="textarea"
                          placeholder="Entrer une description de la réalisation"
                          onChange={(e) => change(e, "required", "length", 1)}
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
                          name="required"
                          type="text"
                          onChange={(e) => change(e, "required", "length", 1)}
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
                            <Button color="primary" onClick={typeClick}>
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

export default Add;

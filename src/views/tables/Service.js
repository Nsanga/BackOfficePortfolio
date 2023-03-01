import React from "react";
import { useState, useEffect } from "react";
import classNames from "classnames";
import {
  Card,
  CardBody,
  CardHeader,
  Row,
  Col,
  Button,
} from "reactstrap";

import ServiceTable from "components/ReactTable/ServiceTable.js";
import AddService from "views/components/AddService";
import {DataAbout} from "../data/realisation.js"

const dataTable = [
  
];

const Service = () => {
  const [dataR, setDataR] = useState(DataAbout.service);
  const [data, setData] = React.useState(
    dataR?.map((prop, key) => {
      return {
        id: key,
        nom: prop[0],
        description: prop[1],
        image: prop[2],
        actions: (
          // we've added some custom button actions
          <div className="actions-right">
            {/* use this button to add a like kind of action */}
            <Button
              onClick={() => {
                let obj = data.find((o) => o.id === key);
                alert(
                  "You've clicked LIKE button on \n{ \nNom: " +
                    obj.nom +
                    ", \ndescription: " +
                    obj.description +
                    ", \nimage: " +
                    obj.image +
                    "\n}."
                );
              }}
              color="info"
              size="sm"
              className={classNames("btn-icon btn-link like", {
                "btn-neutral": key < 5,
              })}
            >
              <i className="tim-icons icon-heart-2" />
            </Button>{" "}
            {/* use this button to add a edit kind of action */}
            <Button
              onClick={() => {
                let obj = data.find((o) => o.id === key);
                alert(
                  "You've clicked EDIT button on \n{ \nNom: " +
                    obj.nom +
                    ", \ndescription: " +
                    obj.description +
                    ", \nimage: " +
                    obj.image +
                    "\n}."
                );
              }}
              color="warning"
              size="sm"
              className={classNames("btn-icon btn-link like", {
                "btn-neutral": key < 5,
              })}
            >
              <i className="tim-icons icon-pencil" />
            </Button>{" "}
            {/* use this button to remove the data row */}
            <Button
              onClick={() => {
                var newdata = data;
                newdata.find((o, i) => {
                  if (o.id === key) {
                    // here you should add some custom code so you can delete the data
                    // from this component and from your server as well
                    data.splice(i, 1);
                    console.log(data);
                    return true;
                  }
                  return false;
                });
                setData(newdata);
              }}
              color="danger"
              size="sm"
              className={classNames("btn-icon btn-link like", {
                "btn-neutral": key < 5,
              })}
            >
              <i className="tim-icons icon-simple-remove" />
            </Button>{" "}
          </div>
        ),
      };
    })
  );
  return (
    <>
      <div className="content">
        
        <Row>
          <Col xs={12} md={12}>
            <Card>
              <CardHeader>
                <h2 className="title">Services</h2>
              </CardHeader>
              <CardBody>
                <AddService></AddService>
                <ServiceTable
                  data={data}
                  filterable
                  resizable={false}
                  columns={[
                    {
                      Header: "Nom",
                      accessor: "nom",
                    },
                    {
                      Header: "Description",
                      accessor: "description",
                    },
                    {
                      Header: "Image",
                      accessor: "image",
                    },
                    {
                      Header: "Actions",
                      accessor: "actions",
                      sortable: false,
                      filterable: false,
                    },
                  ]}
                  defaultPageSize={10}
                  showPaginationTop
                  showPaginationBottom={false}
                  className="-striped -highlight"
                />
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default Service;

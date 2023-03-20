import React from "react";
import classNames from "classnames";
import { useState, useEffect } from "react";
import {
  Card,
  CardBody,
  CardHeader,
  Row,
  Col,
  Button,
} from "reactstrap";
import AddService from "views/components/AddService";
import ServiceTable from "components/ReactTable/ServiceTable.js";
import axios from "axios";
import { Data } from "../data/realisation.js";


const Projets = () => {
  const [dataR, setDataR] = useState(Data.projet);
  const [dataService, setDataService] = useState([[]]);

  const transformDataProject = (tableauObjets) => {
    const tableauValeurs = [];
    for (let objet of tableauObjets) {
      const valeursObjet = [];
      for (let cle in objet) {
        valeursObjet.push(objet[cle]);
      }
      tableauValeurs.push(valeursObjet);
    }
    // setDataService(tableauValeurs);
    return tableauValeurs;
  }

  useEffect(async () => {
    const newData = await getListService();
    console.log("newData:",newData)

  }, []);

  const getListService = async () => {
    const response = await axios.get("http://localhost:7000/api/service/getAll")
    const newData = transformDataProject(response.data.data);
    setDataService(response.data.data)
    // setDataService(newData)
    return newData;
  }

  const [data, setData] = React.useState(
    dataService?.map((prop, key) => {
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
                  "You've clicked EDIT button on \n{ \nNom: " +
                  obj.nom +
                  ", \nimage: " +
                  obj.image +
                  ", \ndescription: " +
                  obj.description +
                  ", \ntype: " +
                  obj.type +
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

              <AddService setData={setData} />

                <ServiceTable
                  data={dataService}
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

export default Projets;

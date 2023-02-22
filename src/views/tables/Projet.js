
import React from "react";
import classNames from "classnames";
import { useState, useEffect } from "react";
import { Data } from "../data/realisation.js";
import {
  Card,
  CardBody,
  CardHeader,
  Row,
  Col,
  Button,
} from "reactstrap";
import Add from "views/components/Add";
import ReactTable from "components/ReactTable/ReactTable.js";
import axios from "axios";


const Projets = () => {
  const [dataR, setDataR] = useState(Data.projet);
  const [dataProject, setDataProject] = useState([])
  

  useEffect(() => {

  }, [])

  function transformDataProject(tableauObjets) {
    // Créer un tableau vide pour stocker les tableaux de valeurs
    const tableauValeurs = [];
  
    // Boucler à travers chaque objet du tableau d'objets
    for (let objet of tableauObjets) {
      // Créer un tableau vide pour stocker les valeurs de l'objet
      const valeursObjet = [];
  
      // Boucler à travers chaque clé de l'objet
      for (let cle in objet) {
        // Ajouter la valeur correspondante au tableau de valeurs de l'objet
        valeursObjet.push(objet[cle]);
      }
  
      // Ajouter le tableau de valeurs de l'objet au tableau de tableaux
      tableauValeurs.push(valeursObjet);
    }
    console.log ("test ::", tableauValeurs);

    // Renvoyer le tableau de tableaux
    return tableauValeurs;
  }
  
  const [data, setData] = React.useState(
    dataR?.map((prop, key) => {

      axios.get("http://localhost:5000/api/projet/getAll")
      .then(response => {
        console.log("get List ::", response.data);
        
    transformDataProject(response.data.data);

      })
      .catch(err => console.log(err));

      return {
        id: key,
        nom: prop[0],
        image: prop[1],
        description: prop[2],
        type: prop[3],
        actions: (
          // we've added some custom button actions
          <div className="actions-right">
            {/* use this button to add a like kind of action */}
            <Button
              onClick={() => {
                let obj = data.find((o) => o.id === key);
                alert(
                  "You've clicked LIKE button on \n{ \nName: " +
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
                <h2 className="title">Projets</h2>
              </CardHeader>
              <CardBody>

                <Add></Add>

                <ReactTable
                  data={data}
                  filterable
                  resizable={false}
                  columns={[
                    {
                      Header: "Nom",
                      accessor: "nom",
                    },
                    {
                      Header: "Image",
                      accessor: "image",
                    },
                    {
                      Header: "Description",
                      accessor: "description",
                    },
                    {
                      Header: "Type",
                      accessor: "type",
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

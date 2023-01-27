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
import React from "react";

// reactstrap components
import {
  CardBody,
  NavItem,
  NavLink,
  Nav,
  TabContent,
  TabPane,
  Row,
  Col,
} from "reactstrap";
import Projet from "views/tables/Projet.js";
import Users from "views/components/Users";

const Realisation = () => {
  const [verticalTabs, setverticalTabs] = React.useState("apercue");
  // with this function we change the active tab for all the tabs in this page
  const changeActiveTab = (e, tabState, tabName) => {
    e.preventDefault();
    switch (tabState) {
      case "verticalTabs":
        setverticalTabs(tabName);
        break;
      default:
        break;
    }
  };
  return (
    <>
      <div className="content">
            <Col>
              <CardBody>
                <Row>
                  <Col md="2">
                    <Nav className="nav-pills-info flex-column" pills>
                      <NavItem>
                        <NavLink
                          data-toggle="tab"
                          href="#pablo"
                          className={verticalTabs === "apercue" ? "active" : ""}
                          onClick={(e) =>
                            changeActiveTab(e, "verticalTabs", "apercue")
                          }
                        >
                          Aperçue
                        </NavLink>
                      </NavItem>
                      <NavItem>
                        <NavLink
                          data-toggle="tab"
                          href="#pablo"
                          className={
                            verticalTabs === "projets" ? "active" : ""
                          }
                          onClick={(e) =>
                            changeActiveTab(e, "verticalTabs", "projets")
                          }
                        >
                          Projets
                        </NavLink>
                      </NavItem>
                      
                    </Nav>
                  </Col>
                  <Col md="10">
                    <TabContent activeTab={verticalTabs}>
                      <TabPane tabId="apercue">
                        <Users></Users>
                      </TabPane>
                      <TabPane tabId="projets">
                        <Projet></Projet>
                      </TabPane>
                    </TabContent>
                  </Col>
                </Row>
              </CardBody>
            </Col>
          
        
      </div>
    </>
  );
};

export default Realisation;

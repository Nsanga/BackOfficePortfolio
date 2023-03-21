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
import Service from "views/tables/Service";
import User from "./User";

const Accueil = () => {
  const [verticalTabs, setverticalTabs] = React.useState("profile");
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
                          className={verticalTabs === "profile" ? "active" : ""}
                          onClick={(e) =>
                            changeActiveTab(e, "verticalTabs", "profile")
                          }
                        >
                          Profile
                        </NavLink>
                      </NavItem>
                      <NavItem>
                        <NavLink
                          data-toggle="tab"
                          href="#pablo"
                          className={
                            verticalTabs === "services" ? "active" : ""
                          }
                          onClick={(e) =>
                            changeActiveTab(e, "verticalTabs", "services")
                          }
                        >
                          Services
                        </NavLink>
                      </NavItem>
                      
                    </Nav>
                  </Col>
                  <Col md="10">
                    <TabContent activeTab={verticalTabs}>
                      <TabPane tabId="profile">
                        <User></User>
                      </TabPane>
                      <TabPane tabId="services">
                        <Service></Service>
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

export default Accueil;

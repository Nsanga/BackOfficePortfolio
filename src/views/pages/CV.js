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
import Informations from "views/components/Informations";
import Description from "views/components/Description";

const CV = () => {
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
                          Description
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
                          Informations
                        </NavLink>
                      </NavItem>
                      
                    </Nav>
                  </Col>
                  <Col md="10">
                    <TabContent activeTab={verticalTabs}>
                      <TabPane tabId="profile">
                        <Description></Description>
                      </TabPane>
                      <TabPane tabId="services">
                        <Informations></Informations>
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

export default CV;

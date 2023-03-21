
import React from "react";
import classnames from "classnames";
import { Route, Switch, Redirect, Link } from "react-router-dom";

// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
  Form,
  FormGroup,
  Label,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Col,
} from "reactstrap";
import {url} from "../../urlLoader"

const Registrer = () => {
  const [state, setState] = React.useState({});
  const [showPassword, setShowPassword] = React.useState(false);
  const [password, setPassword] = React.useState("");
  const [username, setUsername] = React.useState("");
  const [message, setMessage] = React.useState("");


  const handleSignUp = async (event) => {
    event.preventDefault();

    const response = await fetch(`${url}/api/auth/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    });
    const result = await response.json();
    console.log("tet result ::",result.data);
    if (result.data.status === true) {
      setMessage(result.data.message);
      setUsername("");
      setPassword("");
    } else{
      setMessage(result.data.message)
    }

    
  };

  React.useEffect(() => {
    document.body.classList.toggle("login-page");
    return function cleanup() {
      document.body.classList.toggle("login-page");
    };
  });

  const paragraph = <p style={{ color: 'red', textAlign: 'center' }}>{message}</p>;
  
  return (
    <>
      <div className="content">
        <Container>
          <Col className="ml-auto mr-auto" lg="4" md="6">
            <Form className="form" onSubmit={handleSignUp}>
              <Card className="card-login card-white">
                <CardHeader>
                  <img
                    alt="..."
                    src={require("assets/img/card-primary.png").default}
                  />
                  <CardTitle tag="h1" style={{ color: "#1e1e2f"}}>registrer</CardTitle>
                </CardHeader>
                <CardBody>
                  <Form className="form">
                    <InputGroup
                      className={classnames({
                        "input-group-focus": state.nameFocus,
                      })}
                    >
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="tim-icons icon-single-02" />
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input
                        placeholder="Username"
                        type="text"
                        value={username}
                        onChange={(event) => setUsername(event.target.value)}
                        onFocus={(e) => setState({ ...state, nameFocus: true })}
                        onBlur={(e) => setState({ ...state, nameFocus: false })}
                      />
                    </InputGroup>

                    <InputGroup
                      className={classnames({
                        "input-group-focus": state.passFocus,
                      })}
                    >
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="tim-icons icon-lock-circle" />
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input
                        placeholder="Password"
                        type={showPassword ? "text" : "password"}
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}
                        onFocus={(e) => setState({ ...state, passFocus: true })}
                        onBlur={(e) => setState({ ...state, passFocus: false })}
                        require
                      />
                        <InputGroupText>
                        <i className={`fa fa-${showPassword ? "eye-slash" : "eye"}`} onClick={() => setShowPassword(!showPassword)}/>
                        </InputGroupText>
                    </InputGroup>
                    
                  </Form>
                </CardBody>
                <CardFooter>
                  <Button type="submit"
                    block
                    className="mb-3"
                    color="primary"
                    size="lg" onPress={() => handleSignUp()} 
                  >
                    Sign in
                  </Button>
                  <div align = "center" >  

                      <Link
                        className="link footer-link"
                         to="/auth/login"
                      >
                        You have an account? login here 😃
                      </Link>
                    
                  </div>

                </CardFooter>
              </Card>
            </Form>
            {paragraph}
          </Col>
        </Container>
      </div>
    </>
  );
};

export default Registrer;

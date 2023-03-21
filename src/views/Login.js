import React from "react";
import classnames from "classnames";
// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Col,
} from "reactstrap";

import {setAuthToken} from "./components/setAuthToken";
import axios from "axios";
import {url} from "../urlLoader"

const Login = () => {
  const [state, setState] = React.useState({});
  const [showPassword, setShowPassword] = React.useState(false);
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [message, setMessage] = React.useState("");

  const handleLogin = async (event) => {
    event.preventDefault();

    const loginPayload = {
      username: username,
      password: password
    }

    axios.post(`${url}/api/auth/login`, loginPayload)
    .then(response => {
        const token  =  response.data.token;
        console.log(response);
        if(response.data.status){
          localStorage.setItem("token", token);
        }
        
   
        setAuthToken(token);
        setMessage(response.data.message)
        window.location.href = "/admin/dashboard"
  
        return(response.data.message)
   
    })
    .catch(err => console.log(err));
    
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
            <Form className="form" onSubmit={handleLogin}>
              <Card className="card-login card-white">
                <CardHeader>
                  <img
                    alt="..."
                    src={require("assets/img/card-primary.png").default}
                  />
                  <CardTitle tag="h1">Log in</CardTitle>
                </CardHeader>
                <CardBody>
                  <InputGroup
                    className={classnames({
                      "input-group-focus": state.emailFocus,
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
                      onChange={(e) => setUsername(e.target.value)}
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
                      onChange={(e) => setPassword(e.target.value)}
                      maxLength={8}
                    />
                    <InputGroupText>
                      <i className={`fa fa-${showPassword ? "eye-slash" : "eye"}`} onClick={() => setShowPassword(!showPassword)} />
                    </InputGroupText>
                  </InputGroup>
                </CardBody>
                <CardFooter>
                  <Button type="submit"
                    block
                    className="mb-3"
                    color="primary"
                    size="lg"
                  >
                    Login
                  </Button>
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

export default Login;

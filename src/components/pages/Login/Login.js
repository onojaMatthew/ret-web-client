import React from "react";
import { Row, Col, Card, CardBody, Input } from "reactstrap";
import { Button, Divider } from "antd";
import { 
  FacebookLoginButton,
  GoogleLoginButton,
} from "react-social-login-buttons";
import Logo from "../../../assets/logo.png";
import { AppleFilled } from "@ant-design/icons";
import "./Login.css";

const Login = () => {
  return (
    <div className="reg-container">
      <Row className="justify-content-center">
        <Col xs="11" xl="3">
          <div className="text-center mb-4">
            <img src={Logo} alt="site-logo" />
          </div>
          <Card>
            <CardBody>
              <GoogleLoginButton className="google-button" onClick={() => alert("Hello")} />
              <FacebookLoginButton className="facebook-button" onClick={() => alert("Hello")} />
              <Button className="apple-button"><AppleFilled className="icon" /> Continue with Apple</Button>
              <Divider>Or</Divider>
              
              <Row className="mt-4">
                <Col xs="12" xl="12">
                  <label htmlFor="email">Email Address</label>
                  <Input id="email" type="email" className="form-control" placeholder="example@mail.com" />
                </Col>
              </Row>
              <Row className="mt-4">
                <Col xs="12" xl="12">
                  <label htmlFor="password">Password</label> <span className="forgot-password">Forgot password?</span>
                  <Input id="password" type="password" className="form-control" placeholder="********" />
                </Col>
              </Row>
              <Row className="mt-4">
                <Col xs="12" xl="12">
                  <Button className="signup-button">sign in</Button>
                </Col>
              </Row>
              <Row className="mt-4">
                <Col xs="12" xl="12">
                  <Button onClick={() => window.location.href="/"} className="signin-button">sign up</Button>
                </Col>
              </Row>
              <p className="mt-4 mb-4">By signin up, you agree to our <span className="terms">Terms of use</span> & <span className="terms">Privacy Policy</span></p>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default Login;
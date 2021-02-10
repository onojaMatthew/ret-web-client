import React from "react";
import { Row, Col, Card, CardBody, Input } from "reactstrap";
import { Button, Divider } from "antd";
import { 
  FacebookLoginButton,
  GoogleLoginButton,
} from "react-social-login-buttons";
import Logo from "../../../assets/logo.png";
import "./Registration.css";
import { AppleFilled } from "@ant-design/icons";

const Registration = () => {
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
                  <label htmlFor="name">Full Name</label>
                  <Input id="name" className="form-control" placeholder="Full Name" />
                </Col>
              </Row>
              <Row className="mt-4">
                <Col xs="12" xl="12">
                  <label htmlFor="phone">Phone Number</label>
                  <Input id="phone" className="form-control" placeholder="+2348034562767" />
                </Col>
              </Row>
              <Row className="mt-4">
                <Col xs="12" xl="12">
                  <label htmlFor="email">Email Address</label>
                  <Input id="email" type="email" className="form-control" placeholder="example@mail.com" />
                </Col>
              </Row>
              <Row className="mt-4">
                <Col xs="12" xl="12">
                  <label htmlFor="password">Password</label>
                  <Input id="password" type="password" className="form-control" placeholder="********" />
                </Col>
              </Row>
              <Row className="mt-4">
                <Col xs="12" xl="12">
                  <Button className="signup-button">sign up</Button>
                </Col>
              </Row>
              <Row className="mt-4">
                <Col xs="12" xl="12">
                  <Button onClick={() => window.location.href="/login"} className="signin-button">sign in</Button>
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

export default Registration;
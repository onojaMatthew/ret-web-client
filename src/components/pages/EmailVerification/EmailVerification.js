import React from "react";
import { Row, Col, Card, CardBody, Input } from "reactstrap";
import { Button } from "antd";

import "./EmailVerification.css";

const EmailVerification = () => {
  return (
    <div className="verification-container">
      <Row className="justify-content-center">
        <Col xs="11" xl="3">
          
          <Card>
            <CardBody>
              <h3 className="mt-5"><strong>Enter verification code</strong></h3>
              <p>A 6 digits verification code has been sent to your email. Enter code to continue</p>
              <Row className="mt-5">
                <Col xs="2" xl="2">
                  <Input className="form-control" />
                </Col>
                <Col xs="2" xl="2">
                  <Input className="form-control" />
                </Col>
                <Col xs="2" xl="2">
                  <Input className="form-control" />
                </Col>
                <Col xs="2" xl="2">
                  <Input className="form-control" />
                </Col>
                <Col xs="2" xl="2">
                  <Input className="form-control" />
                </Col>
                <Col xs="2" xl="2">
                  <Input className="form-control" />
                </Col>
              </Row>
              <Row className="mt-4">
                <Col xs="12" xl="12">
                  <Button className="verify-button mt-4">Continue</Button>
                </Col>
              </Row>
              <p className="mt-4 mb-4 text-center p">Resend</p>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </div>
  )
}

export default EmailVerification;
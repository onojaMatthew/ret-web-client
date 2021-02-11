import React from "react";
import { Row, Col, Card, CardBody, Input } from "reactstrap";
import { Button } from "antd";

import "./AccountPlan.css";
import { CheckOutlined } from "@ant-design/icons";

const AccountPlan = () => {
  return (
    <div className="plan-container">
      <Row className="justify-content-center">
        <Col xs="11" xl="3">
          <Card>
            <CardBody className="card-body">
              <h3 className="mt-5"><strong>Enter verification code</strong></h3>
              <p className="description">The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz prog.</p>
              <Row className="mt-4 pl-3 pr-3">
                <Col xs="3" xl="3" className="text-center basic">
                  <p className="basic-p mt-5"><strong>Basic</strong></p>
                  <p className="amount-p">N2,500</p>
                </Col>
                <Col xs="9" xl="9" className="p-3 basic-2">
                  <p><CheckOutlined style={{ color: "#F05366"}} /> 30 days unlimited plan</p>
                  <p><CheckOutlined style={{ color: "#F05366"}} /> 420p, 720p, 1080p, 4k res</p>
                  <p><CheckOutlined style={{ color: "#F05366"}} /> 420p, 720p, 1080p, 4k res</p>
                </Col>
              </Row>

              <Row className="mt-3 pl-3 pr-3">
                <Col xs="3" xl="3" className="text-center standard">
                  <p className="standard-p mt-5"><strong>Standard</strong></p>
                  <p className="amount-p">N2,500</p>
                </Col>
                <Col xs="9" xl="9" className="p-3 standard-2">
                  <p><CheckOutlined style={{ color: "#F05366"}} /> 30 days unlimited plan</p>
                  <p><CheckOutlined style={{ color: "#F05366"}} /> 420p, 720p, 1080p, 4k res</p>
                  <p><CheckOutlined style={{ color: "#F05366"}} /> 420p, 720p, 1080p, 4k res</p>
                </Col>
              </Row>

              <Row className="mt-3 pl-3 pr-3">
                <Col xs="3" xl="3" className="text-center premium">
                  <p className="premium-p mt-5"><strong>Premium</strong></p>
                  <p className="amount-p">N2,500</p>
                </Col>
                <Col xs="9" xl="9" className="p-3 premium-2">
                  <p><CheckOutlined style={{ color: "#F05366"}} /> 30 days unlimited plan</p>
                  <p><CheckOutlined style={{ color: "#F05366"}} /> 420p, 720p, 1080p, 4k res</p>
                  <p><CheckOutlined style={{ color: "#F05366"}} /> 420p, 720p, 1080p, 4k res</p>
                </Col>
              </Row>
              <Row className="mt-4">
                <Col xs="12" xl="12">
                  <Button className="verify-button mt-4">Continue</Button>
                </Col>
              </Row>
              <p className="mt-4 mb-4 text-center p">I'll do this later</p>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </div>
  )
}

export default AccountPlan;
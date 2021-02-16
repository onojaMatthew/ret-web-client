import React, { useState } from "react";
import { Row, Col, Card, CardBody } from "reactstrap";
import { usePaymentInputs } from 'react-payment-inputs';
import { Button } from "antd";

import "./Card.css";
import { CheckOutlined } from "@ant-design/icons";
import images from 'react-payment-inputs/images';

const Cards = () => {
  // const [ submitting, setSubmitting ] = useState(false);
  const [ cvc, setCvc ] = useState("");
  const [ cardNumber, setCardNumber ] = useState("");
  const [ expiryDate, setExpiryDate ] = useState("");
  
  const { 
    meta, 
    getCardNumberProps, 
    getExpiryDateProps, 
    getCVCProps, 
    wrapperProps,
    getCardImageProps, 
  } = usePaymentInputs();
  
  // const handleSubmit = () => {

  // }

  const handleChangeExpiryDate = (e) => {
    setExpiryDate(e.target.value)
  }
  const handleChangeCVC = (e) => {
    setCvc(e.target.value)
  }
  const handleChangeCardNumber = (e) => {
    setCardNumber(e.target.value)
  }

  return (
    <div className="card-container">
      <Row className="justify-content-center">
        <Col xs="11" xl="3">
          <Card>
            <CardBody className="card-body">
              <h3 className="mt-5"><strong>Add Card</strong></h3>
              <p className="description">The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz prog.</p>
              <Row className="mt-4 pl-3 pr-3">
                <Col xs="12" xl="12">
                  <div {...wrapperProps}>
                    <label htmlFor="cardNumber">Card Number</label>
                    <svg {...getCardImageProps({ images })} style={{ float: "right"}} />
                    <input className="p-3" style={{ width: "100%"}} {...getCardNumberProps({ onChange: handleChangeCardNumber })} value={cardNumber} />
                    {meta.isTouched && meta.error && <span>Error: {meta.error}</span>}
                  </div>
                </Col>
              </Row>

              <Row className="mt-4 pl-3 pr-3">
                <Col xs="12" xl="6">
                  <div>
                  <label htmlFor="expiryDate">Expiry date</label>
                    <input className="p-3" id="expiryDate" style={{ width: "100%"}} {...getExpiryDateProps({ onChange: handleChangeExpiryDate })} value={expiryDate} />
                    {meta.isTouched && meta.error && <span>Error: {meta.error}</span>}
                  </div>
                </Col>

                <Col xs="12" xl="6">
                  
                  <div>
                    <label htmlFor="cvv">CVV</label>
                    <input className="p-3" id="cvv" style={{ width: "100%"}} {...getCVCProps({ onChange: handleChangeCVC })} value={cvc} />
                    {meta.isTouched && meta.error && <span>Error: {meta.error}</span>}
                  </div>
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

export default Cards;
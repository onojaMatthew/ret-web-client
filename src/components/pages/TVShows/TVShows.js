import React from "react";
import { Row, Col, Container } from "reactstrap";
import { Input } from "antd";
import Header from "../Header/Header";
import "./TVShows.css";
import { SearchOutlined } from "@ant-design/icons";

const TVShows = () => {
  return (
    <div className="image-background">
      <Row className="tv-show-container">
        <Col xs="12" xl="12">
        <Header />
        <div className="dark-section">
          <Row>
            <Col xs="12" xl="6" className="description-box">
              <h3>The Men's Club</h3>
              <p className="movie-summary">
                Drama <span>|</span> 2019 <span>|</span> Rated 18+ <span>|</span> 
              </p>
              <p className="RET-description">
                REDTV is a fast-paced lifestyle channel that puts Africa on the global stage. 
                Proudly associated with the United Bank for Africa, REDTV is here to entertain 
                and inform with content that features the very best in entertainment, fashion, 
                news, design, music, sport, movies and travel. REDTV collaborates with the most 
                talented visionaries, creative minds daring to believe in a New Africa, putting 
                together content that reflects it. Feel the Heat on REDTV.
              </p>
            </Col>
          </Row>
          <Row className="justify-content-center">
            <Col xs="12" xl="3" style={{ paddingTop: "250px"}}>
              <Input id="lower-search-box" placeholder="Search for TV movies or series" prefix={<SearchOutlined />} />
            </Col>
          </Row>
        </div>
        </Col>
      </Row>
      
    </div>
  );
}

export default TVShows;
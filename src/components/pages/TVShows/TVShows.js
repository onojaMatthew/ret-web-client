import React from "react";
import { Container, Row, Col,  } from "reactstrap";
import { Button,Input, Tabs } from "antd";
import Header from "../Header/Header";
import "./TVShows.css";
import { CaretRightFilled, SearchOutlined } from "@ant-design/icons";
import Acquaman from "../../../assets/acquaman.jpeg";
import War from "../../../assets/war.jpeg";
import Horror from "../../../assets/horror.jpeg";
import Cool from "../../../assets/cool-movie.jpeg";

const { TabPane } = Tabs

const TVShows = () => {
  const tabExtraContent = "";
  

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
                <Row>
                  <Col xs="6" xl="3">
                    <Button className="watch-button">Watch</Button>
                  </Col>
                  <Col xs="6" xl="3">
                    <Button className="more-info-button">More Info</Button>
                  </Col>
                </Row>
              </Col>
            </Row>
            <Row className="justify-content-center search-container">
              <Col xs="12" xl="3" >
                <Input id="lower-search-box" placeholder="Search for TV movies or series" prefix={<SearchOutlined />} />
              </Col>
            </Row>
          </div>
        </Col>
      </Row>
      <div className="justify-content-center movie-search-container">
        <div className="flex-movie-container">
          <Row className="mb-3">
            <Col xs="12" xl="3">
              <p className="movie-name">The Hobbit</p>
            </Col>
            <Col xs="12" xl="3">
              <p className="movie-name">Money Heist</p>
            </Col>
            <Col xs="12" xl="3">
              <p className="movie-name">A Man called God</p>
            </Col>
            <Col xs="12" xl="3">
              <p className="movie-name">The Originals</p>
            </Col>
          </Row>
        </div>
      </div>
      <div id="genre-container">
        <Row className="justify-content-center">
          <Col xs="11" xl="10">
            <Row className="mb-5">
              <Col xs="12" xl="12">
                <Tabs defaultActiveKey="1" centered tabBarExtraContent={tabExtraContent}>
                  <TabPane tab="TV Shows" key="1">
                    <Container>
                      <Row>
                        <Col xs="12" xl="3" className="p-1">
                          <div className="movie-list">
                            <img src={Horror} alt="acquaman movie" />
                          </div>
                        </Col>
                        <Col xs="12" xl="3" className="p-1">
                          <div className="movie-list">
                            <img src={Acquaman} alt="acquaman movie" />
                          </div>
                        </Col>
                        <Col xs="12" xl="3" className="p-1">
                          <div className="movie-list">
                            <img src={Cool} alt="acquaman movie" />
                          </div>
                        </Col>
                        <Col xs="12" xl="3" className="p-1">
                          <div className="movie-list">
                            <img src={War} alt="acquaman movie" />
                          </div>
                        </Col>
                      </Row>

                      <Row>
                        <Col xs="12" xl="3" className="p-1">
                          <div className="movie-list">
                            <img src={War} alt="acquaman movie" />
                          </div>
                        </Col>
                        <Col xs="12" xl="3" className="p-1">
                          <div className="movie-list">
                            <img src={Cool} alt="acquaman movie" />
                          </div>
                        </Col>
                        <Col xs="12" xl="3" className="p-1">
                          <div className="movie-list">
                            <img src={Horror} alt="acquaman movie" />
                          </div>
                        </Col>
                        <Col xs="12" xl="3" className="p-1">
                          <div className="movie-list">
                            <img src={Acquaman} alt="acquaman movie" />
                          </div>
                        </Col>
                      </Row>

                      <Row>
                        <Col xs="12" xl="3" className="p-1">
                          <div className="movie-list">
                            <img src={Cool} alt="acquaman movie" />
                          </div>
                        </Col>
                        <Col xs="12" xl="3" className="p-1">
                          <div className="movie-list">
                            <img src={Acquaman} alt="acquaman movie" />
                          </div>
                        </Col>
                        <Col xs="12" xl="3" className="p-1">
                          <div className="movie-list">
                            <img src={War} alt="acquaman movie" />
                          </div>
                        </Col>
                        <Col xs="12" xl="3" className="p-1">
                          <div className="movie-list">
                            <img src={Horror} alt="acquaman movie" />
                          </div>
                        </Col>
                      </Row>

                      <Row>
                        <Col xs="12" xl="3" className="p-1">
                          <div className="movie-list">
                            <img src={War} alt="acquaman movie" />
                          </div>
                        </Col>
                        <Col xs="12" xl="3" className="p-1">
                          <div className="movie-list">
                            <img src={Cool} alt="acquaman movie" />
                          </div>
                        </Col>
                        <Col xs="12" xl="3" className="p-1">
                          <div className="movie-list">
                            <img src={Horror} alt="acquaman movie" />
                          </div>
                        </Col>
                        <Col xs="12" xl="3" className="p-1">
                          <div className="movie-list">
                            <img src={Acquaman} alt="acquaman movie" />
                          </div>
                        </Col>
                      </Row>

                      <Row className="mt-5">
                        <Col xs="12" xl="12">
                          <h4 className="recommended-movies"><strong>Recommended for you</strong></h4>
                        </Col>
                      </Row>

                      <Row>
                        <Col xs="12" xl="3" className="p-1">
                          <div className="movie-list">
                            <img src={War} alt="acquaman movie" />
                          </div>
                        </Col>
                        <Col xs="12" xl="3" className="p-1">
                          <div className="movie-list">
                            <img src={Cool} alt="acquaman movie" />
                          </div>
                        </Col>
                        <Col xs="12" xl="3" className="p-1">
                          <div className="movie-list">
                            <img src={Horror} alt="acquaman movie" />
                          </div>
                        </Col>
                        <Col xs="12" xl="3" className="p-1">
                          <div className="movie-list">
                            <img src={Acquaman} alt="acquaman movie" />
                          </div>
                        </Col>
                      </Row>

                      <Row>
                        <Col xs="12" xl="3" className="p-1">
                          <div className="movie-list">
                            <img src={War} alt="acquaman movie" />
                          </div>
                        </Col>
                        <Col xs="12" xl="3" className="p-1">
                          <div className="movie-list">
                            <img src={Cool} alt="acquaman movie" />
                          </div>
                        </Col>
                        <Col xs="12" xl="3" className="p-1">
                          <div className="movie-list">
                            <img src={Horror} alt="acquaman movie" />
                          </div>
                        </Col>
                        <Col xs="12" xl="3" className="p-1">
                          <div className="movie-list">
                            <img src={Acquaman} alt="acquaman movie" />
                          </div>
                        </Col>
                      </Row>

                      <Row>
                        <Col xs="12" xl="3" className="p-1">
                          <div className="movie-list">
                            <img src={War} alt="acquaman movie" />
                          </div>
                        </Col>
                        <Col xs="12" xl="3" className="p-1">
                          <div className="movie-list">
                            <img src={Cool} alt="acquaman movie" />
                          </div>
                        </Col>
                        <Col xs="12" xl="3" className="p-1">
                          <div className="movie-list">
                            <img src={Horror} alt="acquaman movie" />
                          </div>
                        </Col>
                        <Col xs="12" xl="3" className="p-1">
                          <div className="movie-list">
                            <img src={Acquaman} alt="acquaman movie" />
                          </div>
                        </Col>
                      </Row>
                      <Row className="justify-content-center mt-5">
                        <Col xs="3" xl="2">
                          <Button className="see-more-button">See More</Button>
                        </Col>
                      </Row>
                    </Container>
                  </TabPane>
                  <TabPane tab="Reality Shows" key="2">
                  <Container>
                      <Row>
                        <Col xs="12" xl="3" className="p-1">
                          <div className="movie-list">
                            <img src={Horror} alt="acquaman movie" />
                          </div>
                        </Col>
                        <Col xs="12" xl="3" className="p-1">
                          <div className="movie-list">
                            <img src={Acquaman} alt="acquaman movie" />
                          </div>
                        </Col>
                        <Col xs="12" xl="3" className="p-1">
                          <div className="movie-list">
                            <img src={Cool} alt="acquaman movie" />
                          </div>
                        </Col>
                        <Col xs="12" xl="3" className="p-1">
                          <div className="movie-list">
                            <img src={War} alt="acquaman movie" />
                          </div>
                        </Col>
                      </Row>

                      <Row>
                        <Col xs="12" xl="3" className="p-1">
                          <div className="movie-list">
                            <img src={War} alt="acquaman movie" />
                          </div>
                        </Col>
                        <Col xs="12" xl="3" className="p-1">
                          <div className="movie-list">
                            <img src={Cool} alt="acquaman movie" />
                          </div>
                        </Col>
                        <Col xs="12" xl="3" className="p-1">
                          <div className="movie-list">
                            <img src={Horror} alt="acquaman movie" />
                          </div>
                        </Col>
                        <Col xs="12" xl="3" className="p-1">
                          <div className="movie-list">
                            <img src={Acquaman} alt="acquaman movie" />
                          </div>
                        </Col>
                      </Row>

                      <Row>
                        <Col xs="12" xl="3" className="p-1">
                          <div className="movie-list">
                            <img src={Cool} alt="acquaman movie" />
                          </div>
                        </Col>
                        <Col xs="12" xl="3" className="p-1">
                          <div className="movie-list">
                            <img src={Acquaman} alt="acquaman movie" />
                          </div>
                        </Col>
                        <Col xs="12" xl="3" className="p-1">
                          <div className="movie-list">
                            <img src={War} alt="acquaman movie" />
                          </div>
                        </Col>
                        <Col xs="12" xl="3" className="p-1">
                          <div className="movie-list">
                            <img src={Horror} alt="acquaman movie" />
                          </div>
                        </Col>
                      </Row>

                      <Row>
                        <Col xs="12" xl="3" className="p-1">
                          <div className="movie-list">
                            <img src={War} alt="acquaman movie" />
                          </div>
                        </Col>
                        <Col xs="12" xl="3" className="p-1">
                          <div className="movie-list">
                            <img src={Cool} alt="acquaman movie" />
                          </div>
                        </Col>
                        <Col xs="12" xl="3" className="p-1">
                          <div className="movie-list">
                            <img src={Horror} alt="acquaman movie" />
                          </div>
                        </Col>
                        <Col xs="12" xl="3" className="p-1">
                          <div className="movie-list">
                            <img src={Acquaman} alt="acquaman movie" />
                          </div>
                        </Col>
                      </Row>

                      <Row className="mt-5">
                        <Col xs="12" xl="12">
                          <h4 className="recommended-movies"><strong>Recommended for you</strong></h4>
                        </Col>
                      </Row>

                      <Row>
                        <Col xs="12" xl="3" className="p-1">
                          <div className="movie-list">
                            <img src={War} alt="acquaman movie" />
                          </div>
                        </Col>
                        <Col xs="12" xl="3" className="p-1">
                          <div className="movie-list">
                            <img src={Cool} alt="acquaman movie" />
                          </div>
                        </Col>
                        <Col xs="12" xl="3" className="p-1">
                          <div className="movie-list">
                            <img src={Horror} alt="acquaman movie" />
                          </div>
                        </Col>
                        <Col xs="12" xl="3" className="p-1">
                          <div className="movie-list">
                            <img src={Acquaman} alt="acquaman movie" />
                          </div>
                        </Col>
                      </Row>

                      <Row>
                        <Col xs="12" xl="3" className="p-1">
                          <div className="movie-list">
                            <img src={War} alt="acquaman movie" />
                          </div>
                        </Col>
                        <Col xs="12" xl="3" className="p-1">
                          <div className="movie-list">
                            <img src={Cool} alt="acquaman movie" />
                          </div>
                        </Col>
                        <Col xs="12" xl="3" className="p-1">
                          <div className="movie-list">
                            <img src={Horror} alt="acquaman movie" />
                          </div>
                        </Col>
                        <Col xs="12" xl="3" className="p-1">
                          <div className="movie-list">
                            <img src={Acquaman} alt="acquaman movie" />
                          </div>
                        </Col>
                      </Row>

                      <Row>
                        <Col xs="12" xl="3" className="p-1">
                          <div className="movie-list">
                            <img src={War} alt="acquaman movie" />
                          </div>
                        </Col>
                        <Col xs="12" xl="3" className="p-1">
                          <div className="movie-list">
                            <img src={Cool} alt="acquaman movie" />
                          </div>
                        </Col>
                        <Col xs="12" xl="3" className="p-1">
                          <div className="movie-list">
                            <img src={Horror} alt="acquaman movie" />
                          </div>
                        </Col>
                        <Col xs="12" xl="3" className="p-1">
                          <div className="movie-list">
                            <img src={Acquaman} alt="acquaman movie" />
                          </div>
                        </Col>
                      </Row>
                      <Row className="justify-content-center mt-5">
                        <Col xs="3" xl="2">
                          <Button className="see-more-button">See More</Button>
                        </Col>
                      </Row>
                    </Container>
                  </TabPane>
                  <TabPane tab="TV Series" key="3">
                  <Container>
                      <Row>
                        <Col xs="12" xl="3" className="p-1">
                          <div className="movie-list">
                            <img src={Horror} alt="acquaman movie" />
                          </div>
                        </Col>
                        <Col xs="12" xl="3" className="p-1">
                          <div className="movie-list">
                            <img src={Acquaman} alt="acquaman movie" />
                          </div>
                        </Col>
                        <Col xs="12" xl="3" className="p-1">
                          <div className="movie-list">
                            <img src={Cool} alt="acquaman movie" />
                          </div>
                        </Col>
                        <Col xs="12" xl="3" className="p-1">
                          <div className="movie-list">
                            <img src={War} alt="acquaman movie" />
                          </div>
                        </Col>
                      </Row>

                      <Row>
                        <Col xs="12" xl="3" className="p-1">
                          <div className="movie-list">
                            <img src={War} alt="acquaman movie" />
                          </div>
                        </Col>
                        <Col xs="12" xl="3" className="p-1">
                          <div className="movie-list">
                            <img src={Cool} alt="acquaman movie" />
                          </div>
                        </Col>
                        <Col xs="12" xl="3" className="p-1">
                          <div className="movie-list">
                            <img src={Horror} alt="acquaman movie" />
                          </div>
                        </Col>
                        <Col xs="12" xl="3" className="p-1">
                          <div className="movie-list">
                            <img src={Acquaman} alt="acquaman movie" />
                          </div>
                        </Col>
                      </Row>

                      <Row>
                        <Col xs="12" xl="3" className="p-1">
                          <div className="movie-list">
                            <img src={Cool} alt="acquaman movie" />
                          </div>
                        </Col>
                        <Col xs="12" xl="3" className="p-1">
                          <div className="movie-list">
                            <img src={Acquaman} alt="acquaman movie" />
                          </div>
                        </Col>
                        <Col xs="12" xl="3" className="p-1">
                          <div className="movie-list">
                            <img src={War} alt="acquaman movie" />
                          </div>
                        </Col>
                        <Col xs="12" xl="3" className="p-1">
                          <div className="movie-list">
                            <img src={Horror} alt="acquaman movie" />
                          </div>
                        </Col>
                      </Row>

                      <Row>
                        <Col xs="12" xl="3" className="p-1">
                          <div className="movie-list">
                            <img src={War} alt="acquaman movie" />
                          </div>
                        </Col>
                        <Col xs="12" xl="3" className="p-1">
                          <div className="movie-list">
                            <img src={Cool} alt="acquaman movie" />
                          </div>
                        </Col>
                        <Col xs="12" xl="3" className="p-1">
                          <div className="movie-list">
                            <img src={Horror} alt="acquaman movie" />
                          </div>
                        </Col>
                        <Col xs="12" xl="3" className="p-1">
                          <div className="movie-list">
                            <img src={Acquaman} alt="acquaman movie" />
                          </div>
                        </Col>
                      </Row>

                      <Row className="mt-5">
                        <Col xs="12" xl="12">
                          <h4 className="recommended-movies"><strong>Recommended for you</strong></h4>
                        </Col>
                      </Row>

                      <Row>
                        <Col xs="12" xl="3" className="p-1">
                          <div className="movie-list">
                            <img src={War} alt="acquaman movie" />
                          </div>
                        </Col>
                        <Col xs="12" xl="3" className="p-1">
                          <div className="movie-list">
                            <img src={Cool} alt="acquaman movie" />
                          </div>
                        </Col>
                        <Col xs="12" xl="3" className="p-1">
                          <div className="movie-list">
                            <img src={Horror} alt="acquaman movie" />
                          </div>
                        </Col>
                        <Col xs="12" xl="3" className="p-1">
                          <div className="movie-list">
                            <img src={Acquaman} alt="acquaman movie" />
                          </div>
                        </Col>
                      </Row>

                      <Row>
                        <Col xs="12" xl="3" className="p-1">
                          <div className="movie-list">
                            <img src={War} alt="acquaman movie" />
                          </div>
                        </Col>
                        <Col xs="12" xl="3" className="p-1">
                          <div className="movie-list">
                            <img src={Cool} alt="acquaman movie" />
                          </div>
                        </Col>
                        <Col xs="12" xl="3" className="p-1">
                          <div className="movie-list">
                            <img src={Horror} alt="acquaman movie" />
                          </div>
                        </Col>
                        <Col xs="12" xl="3" className="p-1">
                          <div className="movie-list">
                            <img src={Acquaman} alt="acquaman movie" />
                          </div>
                        </Col>
                      </Row>

                      <Row>
                        <Col xs="12" xl="3" className="p-1">
                          <div className="movie-list">
                            <img src={War} alt="acquaman movie" />
                          </div>
                        </Col>
                        <Col xs="12" xl="3" className="p-1">
                          <div className="movie-list">
                            <img src={Cool} alt="acquaman movie" />
                          </div>
                        </Col>
                        <Col xs="12" xl="3" className="p-1">
                          <div className="movie-list">
                            <img src={Horror} alt="acquaman movie" />
                          </div>
                        </Col>
                        <Col xs="12" xl="3" className="p-1">
                          <div className="movie-list">
                            <img src={Acquaman} alt="acquaman movie" />
                          </div>
                        </Col>
                      </Row>
                      <Row className="justify-content-center mt-5">
                        <Col xs="3" xl="2">
                          <Button className="see-more-button">See More</Button>
                        </Col>
                      </Row>
                    </Container>
                  </TabPane>
                  <TabPane tab="Movies" key="4">
                  <Container>
                      <Row>
                        <Col xs="12" xl="3" className="p-1">
                          <div className="movie-list">
                            <img src={Horror} alt="acquaman movie" />
                          </div>
                        </Col>
                        <Col xs="12" xl="3" className="p-1">
                          <div className="movie-list">
                            <img src={Acquaman} alt="acquaman movie" />
                          </div>
                        </Col>
                        <Col xs="12" xl="3" className="p-1">
                          <div className="movie-list">
                            <img src={Cool} alt="acquaman movie" />
                          </div>
                        </Col>
                        <Col xs="12" xl="3" className="p-1">
                          <div className="movie-list">
                            <img src={War} alt="acquaman movie" />
                          </div>
                        </Col>
                      </Row>

                      <Row>
                        <Col xs="12" xl="3" className="p-1">
                          <div className="movie-list">
                            <img src={War} alt="acquaman movie" />
                          </div>
                        </Col>
                        <Col xs="12" xl="3" className="p-1">
                          <div className="movie-list">
                            <img src={Cool} alt="acquaman movie" />
                          </div>
                        </Col>
                        <Col xs="12" xl="3" className="p-1">
                          <div className="movie-list">
                            <img src={Horror} alt="acquaman movie" />
                          </div>
                        </Col>
                        <Col xs="12" xl="3" className="p-1">
                          <div className="movie-list">
                            <img src={Acquaman} alt="acquaman movie" />
                          </div>
                        </Col>
                      </Row>

                      <Row>
                        <Col xs="12" xl="3" className="p-1">
                          <div className="movie-list">
                            <img src={Cool} alt="acquaman movie" />
                          </div>
                        </Col>
                        <Col xs="12" xl="3" className="p-1">
                          <div className="movie-list">
                            <img src={Acquaman} alt="acquaman movie" />
                          </div>
                        </Col>
                        <Col xs="12" xl="3" className="p-1">
                          <div className="movie-list">
                            <img src={War} alt="acquaman movie" />
                          </div>
                        </Col>
                        <Col xs="12" xl="3" className="p-1">
                          <div className="movie-list">
                            <img src={Horror} alt="acquaman movie" />
                          </div>
                        </Col>
                      </Row>

                      <Row>
                        <Col xs="12" xl="3" className="p-1">
                          <div className="movie-list">
                            <img src={War} alt="acquaman movie" />
                          </div>
                        </Col>
                        <Col xs="12" xl="3" className="p-1">
                          <div className="movie-list">
                            <img src={Cool} alt="acquaman movie" />
                          </div>
                        </Col>
                        <Col xs="12" xl="3" className="p-1">
                          <div className="movie-list">
                            <img src={Horror} alt="acquaman movie" />
                          </div>
                        </Col>
                        <Col xs="12" xl="3" className="p-1">
                          <div className="movie-list">
                            <img src={Acquaman} alt="acquaman movie" />
                          </div>
                        </Col>
                      </Row>

                      <Row className="mt-5">
                        <Col xs="12" xl="12">
                          <h4 className="recommended-movies"><strong>Recommended for you</strong></h4>
                        </Col>
                      </Row>

                      <Row>
                        <Col xs="12" xl="3" className="p-1">
                          <div className="movie-list">
                            <img src={War} alt="acquaman movie" />
                          </div>
                        </Col>
                        <Col xs="12" xl="3" className="p-1">
                          <div className="movie-list">
                            <img src={Cool} alt="acquaman movie" />
                          </div>
                        </Col>
                        <Col xs="12" xl="3" className="p-1">
                          <div className="movie-list">
                            <img src={Horror} alt="acquaman movie" />
                          </div>
                        </Col>
                        <Col xs="12" xl="3" className="p-1">
                          <div className="movie-list">
                            <img src={Acquaman} alt="acquaman movie" />
                          </div>
                        </Col>
                      </Row>

                      <Row>
                        <Col xs="12" xl="3" className="p-1">
                          <div className="movie-list">
                            <img src={War} alt="acquaman movie" />
                          </div>
                        </Col>
                        <Col xs="12" xl="3" className="p-1">
                          <div className="movie-list">
                            <img src={Cool} alt="acquaman movie" />
                          </div>
                        </Col>
                        <Col xs="12" xl="3" className="p-1">
                          <div className="movie-list">
                            <img src={Horror} alt="acquaman movie" />
                          </div>
                        </Col>
                        <Col xs="12" xl="3" className="p-1">
                          <div className="movie-list">
                            <img src={Acquaman} alt="acquaman movie" />
                          </div>
                        </Col>
                      </Row>

                      <Row>
                        <Col xs="12" xl="3" className="p-1">
                          <div className="movie-list">
                            <img src={War} alt="acquaman movie" />
                          </div>
                        </Col>
                        <Col xs="12" xl="3" className="p-1">
                          <div className="movie-list">
                            <img src={Cool} alt="acquaman movie" />
                          </div>
                        </Col>
                        <Col xs="12" xl="3" className="p-1">
                          <div className="movie-list">
                            <img src={Horror} alt="acquaman movie" />
                          </div>
                        </Col>
                        <Col xs="12" xl="3" className="p-1">
                          <div className="movie-list">
                            <img src={Acquaman} alt="acquaman movie" />
                          </div>
                        </Col>
                      </Row>
                      <Row className="justify-content-center mt-5">
                        <Col xs="3" xl="2">
                          <Button className="see-more-button">See More</Button>
                        </Col>
                      </Row>
                    </Container>
                  </TabPane>
                  <TabPane tab="Originals" key="5">
                  <Container>
                      <Row>
                        <Col xs="12" xl="3" className="p-1">
                          <div className="movie-list">
                            <img src={Horror} alt="acquaman movie" />
                          </div>
                        </Col>
                        <Col xs="12" xl="3" className="p-1">
                          <div className="movie-list">
                            <img src={Acquaman} alt="acquaman movie" />
                          </div>
                        </Col>
                        <Col xs="12" xl="3" className="p-1">
                          <div className="movie-list">
                            <img src={Cool} alt="acquaman movie" />
                          </div>
                        </Col>
                        <Col xs="12" xl="3" className="p-1">
                          <div className="movie-list">
                            <img src={War} alt="acquaman movie" />
                          </div>
                        </Col>
                      </Row>

                      <Row>
                        <Col xs="12" xl="3" className="p-1">
                          <div className="movie-list">
                            <img src={War} alt="acquaman movie" />
                          </div>
                        </Col>
                        <Col xs="12" xl="3" className="p-1">
                          <div className="movie-list">
                            <img src={Cool} alt="acquaman movie" />
                          </div>
                        </Col>
                        <Col xs="12" xl="3" className="p-1">
                          <div className="movie-list">
                            <img src={Horror} alt="acquaman movie" />
                          </div>
                        </Col>
                        <Col xs="12" xl="3" className="p-1">
                          <div className="movie-list">
                            <img src={Acquaman} alt="acquaman movie" />
                          </div>
                        </Col>
                      </Row>

                      <Row>
                        <Col xs="12" xl="3" className="p-1">
                          <div className="movie-list">
                            <img src={Cool} alt="acquaman movie" />
                          </div>
                        </Col>
                        <Col xs="12" xl="3" className="p-1">
                          <div className="movie-list">
                            <img src={Acquaman} alt="acquaman movie" />
                          </div>
                        </Col>
                        <Col xs="12" xl="3" className="p-1">
                          <div className="movie-list">
                            <img src={War} alt="acquaman movie" />
                          </div>
                        </Col>
                        <Col xs="12" xl="3" className="p-1">
                          <div className="movie-list">
                            <img src={Horror} alt="acquaman movie" />
                          </div>
                        </Col>
                      </Row>

                      <Row>
                        <Col xs="12" xl="3" className="p-1">
                          <div className="movie-list">
                            <img src={War} alt="acquaman movie" />
                          </div>
                        </Col>
                        <Col xs="12" xl="3" className="p-1">
                          <div className="movie-list">
                            <img src={Cool} alt="acquaman movie" />
                          </div>
                        </Col>
                        <Col xs="12" xl="3" className="p-1">
                          <div className="movie-list">
                            <img src={Horror} alt="acquaman movie" />
                          </div>
                        </Col>
                        <Col xs="12" xl="3" className="p-1">
                          <div className="movie-list">
                            <img src={Acquaman} alt="acquaman movie" />
                            <div className="play-div">
                              <Row>
                                <Col xs="6" xl="">Movie name</Col>
                                <Col xs="6" xl="6">
                                  <p>1h 29m</p>
                                </Col>
                              </Row>
                            </div>
                          </div>
                        </Col>
                      </Row>

                      <Row>
                        <Col xs="12" xl="12">
                          <h4 className="recommended-movies">Recommended for you</h4>
                        </Col>
                      </Row>

                      <Row>
                        <Col xs="12" xl="3" className="p-1">
                          <div className="movie-list">
                            <img src={War} alt="acquaman movie" />
                            <div className="play-div">
                              <Row>
                                <Col xs="6" xl="">Movie name</Col>
                                <Col xs="6" xl="6">
                                  <p>1h 29m</p>
                                </Col>
                              </Row>
                            </div>
                          </div>
                        </Col>
                        <Col xs="12" xl="3" className="p-1">
                          <div className="movie-list">
                            <img src={Cool} alt="acquaman movie" />
                            <div className="play-div">
                              <Row>
                                <Col xs="6" xl="">Movie name</Col>
                                <Col xs="6" xl="6">
                                  <p>1h 29m</p>
                                </Col>
                              </Row>
                            </div>
                          </div>
                        </Col>
                        <Col xs="12" xl="3" className="p-1">
                          <div className="movie-list">
                            <img src={Horror} alt="acquaman movie" />
                            <div className="play-div">
                              <Row>
                                <Col xs="6" xl="">Movie name</Col>
                                <Col xs="6" xl="6">
                                  <p>1h 29m</p>
                                </Col>
                              </Row>
                            </div>
                          </div>
                        </Col>
                        <Col xs="12" xl="3" className="p-1">
                          <div className="movie-list">
                            <img src={Acquaman} alt="acquaman movie" />
                            <div className="play-div">
                              <Row>
                                <Col xs="6" xl="">Movie name</Col>
                                <Col xs="6" xl="6">
                                  <p>1h 29m</p>
                                </Col>
                              </Row>
                            </div>
                          </div>
                        </Col>
                      </Row>

                      <Row>
                        <Col xs="12" xl="3" className="p-1">
                          <div className="movie-list">
                            <img src={War} alt="acquaman movie" />
                            <div className="play-div">
                              <Row>
                                <Col xs="6" xl="">Movie name</Col>
                                <Col xs="6" xl="6">
                                  <p>1h 29m</p>
                                </Col>
                              </Row>
                            </div>
                          </div>
                        </Col>
                        <Col xs="12" xl="3" className="p-1">
                          <div className="movie-list">
                            <img src={Cool} alt="acquaman movie" />
                            <div className="play-div">
                              <Row>
                                <Col xs="6" xl="">Movie name</Col>
                                <Col xs="6" xl="6">
                                  <p>1h 29m</p>
                                </Col>
                              </Row>
                            </div>
                          </div>
                        </Col>
                        <Col xs="12" xl="3" className="p-1">
                          <div className="movie-list">
                            <img src={Horror} alt="acquaman movie" />
                            <div className="play-div">
                              <Row>
                                <Col xs="6" xl="">Movie name</Col>
                                <Col xs="6" xl="6">
                                  <p>1h 29m</p>
                                </Col>
                              </Row>
                            </div>
                          </div>
                        </Col>
                        <Col xs="12" xl="3" className="p-1">
                          <div className="movie-list">
                            <img src={Acquaman} alt="acquaman movie" />
                            <div className="play-div">
                              <Row>
                                <Col xs="6" xl="">Movie name</Col>
                                <Col xs="6" xl="6">
                                  <p>1h 29m</p>
                                </Col>
                              </Row>
                            </div>
                          </div>
                        </Col>
                      </Row>

                      <Row>
                        <Col xs="12" xl="3" className="p-1">
                          <div className="movie-list">
                            <img src={War} alt="acquaman movie" />
                            <div className="play-div">
                              <Row>
                                <Col xs="6" xl="">Movie name</Col>
                                <Col xs="6" xl="6">
                                  <p>1h 29m</p>
                                </Col>
                              </Row>
                            </div>
                          </div>
                        </Col>
                        <Col xs="12" xl="3" className="p-1">
                          <div className="movie-list">
                            <img src={Cool} alt="acquaman movie" />
                            <div className="play-div">
                              <Row>
                                <Col xs="6" xl="">Movie name</Col>
                                <Col xs="6" xl="6">
                                  <p>1h 29m</p>
                                </Col>
                              </Row>
                            </div>
                          </div>
                        </Col>
                        <Col xs="12" xl="3" className="p-1">
                          <div className="movie-list">
                            <img src={Horror} alt="acquaman movie" />
                          </div>
                          <div className="play-div">
                            <Row>
                              <Col xs="6" xl="">Movie name</Col>
                              <Col xs="6" xl="6">
                                <p>1h 29m</p>
                              </Col>
                            </Row>
                          </div>
                        </Col>
                        <Col xs="12" xl="3" className="p-1">
                          <div className="movie-list">
                            <img src={Acquaman} alt="acquaman movie" />
                          </div>
                          <div className="play-div">
                            <Row>
                              <Col xs="6" xl="">Movie name</Col>
                              <Col xs="6" xl="6">
                                <p>1h 29m</p>
                              </Col>
                            </Row>
                            <Row>
                              <Col xs="12" xl="12">
                                <span className="pg-span">18+</span> <span className="movie-category">Drama, Sex, Relationship, Dating</span>
                              </Col>
                            </Row>
                            <Row>
                              <Col xs="8" xl="8">
                                <Row>jskdksjdskds</Row>
                                <Row>jskdsjdsk</Row>
                              </Col>
                              <Col xs="4" xl="4">
                                <div>
                                  <CaretRightFilled />
                                </div>
                              </Col>
                            </Row>
                          </div>
                        </Col>
                      </Row>
                      <Row className="justify-content-center mt-5">
                        <Col xs="3" xl="2">
                          <Button className="see-more-button">See More</Button>
                        </Col>
                      </Row>
                    </Container>
                  </TabPane>
                </Tabs>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default TVShows;
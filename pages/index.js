import React from "react";
import Typed from "react-typed";
import BaseLayout from "../components/layouts/BaseLayout";

import { Row, Col, Container } from "reactstrap";

class Index extends React.Component {
  constructor(props) {
    super(props);
    this.roles = [
      "PeopleSoft HCM & SCFM",
      "React.js with Next.js",
      "Node.js with Express.js",
      "HTML, CSS, JavaScript & PHP",
      "Visual Foxpro",
      "Visual Basic",
      "Tosca TestSuite",
      "Unified Functional Testing"
    ];
  }
  render() {
    return (
      <BaseLayout className="cover">
        <div className="main-section">
          <div className="background-image">
            <img src="/static/images/background-index.png" />
          </div>
          <Container>
            <Row>
              <Col md="6">
                <div className="hero-section">
                  <div className={`flipper`}>
                    <div className="back">
                      <div className="hero-section-content">
                        <h2> Full Stack Web Developer </h2>
                        <div className="hero-section-content-intro">
                          Have a look at my portfolio and job history.
                        </div>
                      </div>
                      <img
                        className="image"
                        src="/static/images/section-1.png"
                      />
                      <div className="shadow-custom">
                        <div className="shadow-inner"> </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Col>
              <Col md="6" className="hero-welcome-wrapper">
                <div className="hero-welcome-text">
                  <h1>
                    Welcome to the portfolio website of Junnel Teves. Get
                    informed, collaborate and discover projects I was working on
                    through the years!
                  </h1>
                </div>
                <Typed
                  loop
                  typeSpeed={70}
                  backSpeed={70}
                  strings={this.roles}
                  // smartBackspace
                  // shuffle={false}
                  backDelay={1000}
                  fadeOut={false}
                  fadeOutDelay={100}
                  loopCount={0}
                  showCursor
                  cursorChar="|"
                  className="self-typed"
                />
                <div className="hero-welcome-bio">
                  <h1>Let's take a look on my portfolios.</h1>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </BaseLayout>
    );
  }
}

export default Index;

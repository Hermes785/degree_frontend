import React from "react";
import { Container, Row, Col } from "reactstrap";
const Company = () => {
    return<section>
     <Container>
        <Row>

            <Col lg="2" md="3">
                <h2 className="d-flex align-item-center gap-1">
                    <i style={{ color: "#17bf92" }} className="ri-vimeo-line" ></i>Vimeo
                </h2>
            </Col>
            <Col lg="2" md="3">
                <h2 className="d-flex align-item-center gap-1">
                    <i style={{ color: "#17bf92" }}  className="ri-pinterest-line"></i>Pinterest
                </h2>
            </Col>
            <Col lg="2" md="3">
                <h2 className="d-flex align-item-center gap-1">
                    <i  style={{ color: "#17bf92" }} className="ri-dribbble-line"></i>Dribble
                </h2>
            </Col>
            <Col lg="2" md="3">
                <h2 className="d-flex align-item-center gap-1">
                    <i  style={{ color: "#17bf92" }} className="ri-apple-fill"></i>Apple
                </h2>

            </Col>
            <Col lg="2" md="3">
                <h2 className="d-flex align-item-center gap-1">
                    <i style={{ color: "#17bf92" }}  className="ri-finder-fill"></i>Finder
                </h2>
            </Col>
            <Col lg="2" md="3">
                <h2 className="d-flex align-item-center gap-1">
                    <i   style={{ color: "#17bf92" }} className="ri-google-fill"></i>Google</h2>
            </Col>

        </Row>

    </Container>
    </section>
}

export default Company;
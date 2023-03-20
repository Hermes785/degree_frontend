import React from "react";
import { Container, Row, Col } from "reactstrap";
import heroImg from '../../assests/images/hero-img1.png'

const HeroSection = () => {
    return <section>
        <Container>
            <Row>
                <Col lg='6' md='6'>
                    <div className="hero__content">
                        <h2 className="mb-4" >
                            Anytime Anywhere,<br /> Learn on your suitable Schedule
                        </h2>
                        <p className="mb-4"> Lorem ipsum dolor sit amet consecteur <br /> adipiscing elit.
                            Aut saepe voluptatum earum delectus <br /> deserunt id iste, quas officis
                            et repellat!
                        </p>

                        <div className="search">
                            <input type="text" placeholder="Search" />
                            <button  className="btn btn-success">Search</button>
                        </div>

                    </div>
                </Col>

                <Col lg='6' md='6'>
                    <img src={heroImg} alt="" className="w-100" />
                 
                </Col>
            </Row>
        </Container>
    </section>



};
export default HeroSection;
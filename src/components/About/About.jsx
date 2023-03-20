import React from "react";
import { Col, Container, Row } from "reactstrap";
import aboutimg from '../../assests/images/about-us.png'
import CountUp from 'react-countup';

const About = () => {

    return <section>
        <Container>
            <Row>
                <Col lg="6" md="6">
                    <div className="about__img">
                        <img src={aboutimg} alt="" className="w-100" />
                    </div>
                </Col>
                <Col lg='6' md='6'>
                    <div className="about__content">
                        <h2>About Us</h2>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Aperiam est beatae quas illum sapiente saepe iure hic atque enim deleniti?
                        </p>

                        <div className="about__center">

                            <div className="d-flex  gap-5 align-items-center">
                                <div className="single__counter">
                                    <div>
                                        <span className="counter">

                                            <CountUp start={0} end={25} duration={80} suffix="M" />

                                        </span>
                                        <p className="counter__title">completed Project</p>

                                    </div>

                                </div>
                        
                                <div className="single__counter">
                                    <div>
                                        <span className="counter">

                                            <CountUp start={0} end={12} duration={80} suffix="K" />

                                        </span>
                                        <p className="counter__title">Patient Around World</p>

                                    </div>

                                </div>

                            </div>
                            <div className="d-flex  gap-5 align-items-center">
                                <div className="single__counter">
                                    <div>
                                        <span className="counter">

                                            <CountUp start={0} end={25} duration={80} suffix="M" />

                                        </span>
                                        <p className="counter__title">completed Project</p>

                                    </div>

                                </div>
                        
                                <div className="single__counter">
                                    <div>
                                        <span className="counter">

                                            <CountUp start={0} end={12} duration={80} suffix="K" />

                                        </span>
                                        <p className="counter__title">Patient Around World</p>

                                    </div>

                                </div>

                            </div>

                            

                        </div>

                    </div>
                </Col>

            </Row>
        </Container>
    </section>
}

export default About
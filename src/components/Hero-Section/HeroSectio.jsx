import React from "react";
import { Container, Row, Col } from "reactstrap";
import heroImg from '../../assests/images/hero-img1.png'

const HeroSection = () => {
    return (
        <section>
            <Container>
                <Row>
                    <Col lg='6' md='6'>
                        <div className="hero__content">
                            <h2 className="mb-4">
                                Trouvez une <br /> formation IT  idéale en France
                            </h2>
                            <p className="mb-4">
                                Découvrez une large sélection de formations proposées <br /> par des écoles et universités prestigieuses.
                                Consultez notre catalogue en ligne pour trouver la <br /> formation qui correspond à vos aspirations et
                                boostez votre carrière. Inscrivez-vous dès maintenant et apprenez à votre propre rythme, où que vous soyez.
                            </p>


                        </div>
                    </Col>

                    <Col lg="6" md="6">
                        <img src={heroImg} alt="" className="w-100 hero__img" />
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default HeroSection;

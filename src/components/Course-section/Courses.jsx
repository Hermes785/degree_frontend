import React, { useState, useEffect } from "react";
import axios from "axios";
import { Container, Row, Col } from "reactstrap";
import img from "../../assests/images/seo.png";
//import CourseCard from "./CourseCard";
const Courses = () => {
  const [pictures, setPicture] = useState([]);

  useEffect(() => {
    const url =
      process.env.NODE_ENV === "production"
        ? "http://degree-backend-release-dev.eu-west-1.elasticbeanstalk.com/formation"
        : "http://127.0.0.1:5000/formation";

    axios
      .get(url)
      .then((res) => {
        setPicture(res.data);
      })
      .catch((error) => {
        console.log(error.response);
      });
  }, []);

  return (
    <section>
      <Container>
        <Row>
          <Col lg="12" className="mb-5">
            <div className="course__top d-flex justify-content-between align-items-center">
              <div className="course__top__left w-50">
                <h2>Les formations les plus populaires</h2>
                <p>
                  Découvrez dès maintenant notre catalogue de formations proposées par des
                  écoles et universités de renom. Consultez notre catalogue en ligne pour trouver
                  la formation qui correspond à vos aspirations et boostez votre carrière !
                </p>
              </div>
              <div className="w-50 text-end">
                <button className="btn btn-success">Voir tout</button>
              </div>
            </div>
          </Col>

          {pictures.map((picture) => (
            <Col lg="4" md="6" key={picture.id}>
              <div className="single__course__item">
                <div className="course__img">
                  <img src={img} alt="web design" className="w-100" />
                </div>
                <div className="course__details">
                  <h6 className="course__title mb-4">{picture.title}</h6>
                  <div className="">
                    <p className="d-flex align-items-center gap-1">
                      <i style={{ color: "#17bf92" }} className="ri-user-line"></i>
                      Localisation : {picture.ville}
                    </p>
                  </div>
                  <div className="d-flex justify-content-between">
                    <p className="lesson d-flex align-items-center gap-1">
                      <i style={{ color: "#17bf92" }} className="ri-star-fill"></i>
                      Coût de la formation : {picture.price}€
                    </p>
                  </div>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Courses;

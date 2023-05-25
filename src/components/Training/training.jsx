import React, { useState, useEffect } from "react";
import axios from "axios";
import { Container, Row, Col } from "reactstrap";
import img from "../../assests/images/seo.png";
import Config from "../Settings/config.jsx";
import { useParams } from "react-router-dom";
import Header from "../header/Header";

const Training = () => {
  const { id } = useParams();
  const [picture, setPicture] = useState('');

  useEffect(() => {
    axios
      .get(`${Config.url_by_training_id}/${id}`)
      .then((res) => {
        setPicture(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

  return (
    <section>
      <Header /> <br /> <br />
      <Container>
        <Row>
          <Col lg="4" md="6">
            <div className="single__course__item">
              <div className="course__img">
                <img src={img} alt="web design" className="w-100" />
              </div>
              <div className="course__details">
                <h6 className="course__title mb-4">{picture.title}</h6>
                <div className="course__description">
                  <p>{picture.description}</p>
                </div>
                <div className="d-flex align-items-center gap-1">
                  <i style={{ color: "#17bf92" }} className="ri-user-line"></i>
                  <span className="ms-1">Localisation : {picture.city}</span>
                </div>
                <div className="d-flex justify-content-between">
                  <p className="lesson d-flex align-items-center gap-1">
                    <i style={{ color: "#17bf92" }} className="ri-star-fill"></i>
                    <span className="ms-1">Coût de la formation : {picture.price}€</span>
                  </p>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Training;

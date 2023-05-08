import React, { useState, useEffect } from "react";
import axios from "axios";
import { Container, Row, Col } from "reactstrap";
import img from "../../assests/images/seo.png"

import CourseCard from "./CourseCard";
/*
const coursesData = [
  {
    id: "01",
    title: "Web Design BootCamp-2022 for Beginners",
    lesson: 12,
    students: 12.5,
    rating: 5.9,
    imgUrl: courseImg1,
  },

  {
    id: "02",
    title: "Professional Graphics Design, PhotoShop, Adobe XD, Figma",
    lesson: 12,
    students: 12.5,
    rating: 5.9,
    imgUrl: courseImg2,
  },

  {
    id: "03",
    title: "UI/UX BootCamp for Beginners in 2022",
    lesson: 12,
    students: 12.5,
    rating: 5.9,
    imgUrl: courseImg3,
  },
];
*/


const Courses = () => {
  const [pictures, setPicture] = useState([]);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:5000/formation")
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
                <h2>Les formation les plus  </h2>
                <p>
                Découvrez dès maintenant notre catalogue de formations proposées par des
                 écoles et universités de renom, consultez notre catalogue en ligne pour trouver 
                 la formation qui correspond à vos aspirations et boostez votre carrière.!
                </p>
              </div>

              <div className="w-50 text-end">
                <button className="btn btn-success">See All</button>
              </div>
            </div>
          </Col>
          <Col lg='4' md='9' className="mb-4 d-flex  ">
            {pictures.map((picture) => (
              <div className="single__course__item   row justify-content-between">
                
                <div className="course__img">
                  <img src={img} alt="web design" className='w-100' />
                </div>
                <div className="course__details">
                  <h6 className="course__title mb-4">
                    {picture.title}
                  </h6>


                  <div className="">
                    <p className=" d-flex align-items-center gap-1">
                      <i style={{ color: "#17bf92" }} className="ri-user-line">Localisation</i>{picture.ville}
                    </p>
                  </div>

                  <div className="d-flex justify-content-between">
                    <p className="lesson d-flex align-items-center gap-1">
                      <i style={{ color: "#17bf92" }} className="ri-star-fill">Cout de la formation:</i>{picture.price}€
                    </p>
                  </div>
                  
                </div>
              </div>
            ))}
          </Col>

        </Row>
      </Container>
    </section>
  );
};

export default Courses;

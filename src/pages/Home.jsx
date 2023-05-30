import React, { Fragment } from "react";
import About from "../components/About/About";
import Company from "../components/Company-section/Company";
import Header from "../components/header/Header"
import HeroSection from "../components/Hero-Section/HeroSectio";
import Courses from '../components/Course-section/Courses'
import ChooseUs from '../components/Choose-us/ChooseUs'
import Features from "../components/Feature-section/Features";
import FreeCourse from "../components/Free-course-sction/FreeCourse";
import Testimonials from '../components/Testimonial/Testimonials';
import Newsletter from "../components/Newsletter/Newsletter"




const Home = () => {
  return (<Fragment>
    <Header />
    <HeroSection />
    <Courses /> <br />
    <Company />  <br />
    <About />  <br />
    <ChooseUs /> <br />
    <Features /> <br />
    <FreeCourse /> <br />
    <Testimonials /> <br />
    <Newsletter /> <br />
  </Fragment>)
}

export default Home;
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.css';
import 'remixicon/fonts/remixicon.css'
import './components/header/header.css'
import './components/Hero-Section/hero-section.css'
import './components/About/about.css'
import './components/Course-section/course.css'
import './components/Choose-us/chooseus.css'
import './components/Free-course-sction/freecourse.css'
import './components/Feature-section/feature.css'
import './components/Testimonial/testimonial.css'
import './components/Newsletter/newsletter.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "animate.css/animate.min.css";

< script src=" https://code.jquery.com/jquery-3.6.4.min.js " > </ script >
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

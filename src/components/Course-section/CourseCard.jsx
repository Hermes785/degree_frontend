import React from 'react'

const CourseCard = (props) => {

    const {imgUrl, title,lesson,students,rating} = props.item
  return (
    <div className="single__course__item">
    <div className="course__img">
      <img src={imgUrl} alt="web design" className='w-100' />
    </div>

    <div className="course__details">
      <h6 className="course__title mb-4">
        {title}
      </h6>

      <div className="d-flex justify-content-between">

        <p className="lesson d-flex align-items-center gap-1">
          <i style={{ color: "#17bf92" }} className="ri-book-open-line"></i>{lesson}
        </p>


        <p className="students d-flex align-items-center gap-1">
          <i style={{ color: "#17bf92" }}className="ri-user-line"></i>{students}
        </p>


      </div>



      <div className="d-flex justify-content-between">

        <p className="lesson d-flex align-items-center gap-1">
          <i style={{ color: "#17bf92" }}className="ri-star-fill"></i>{rating}
        </p>


        <p className="enroll d-flex align-items-center gap-1">
         <a href="/">Enroll Now</a>
        </p>


      </div>


    </div>

  </div>
  )
}

export default CourseCard

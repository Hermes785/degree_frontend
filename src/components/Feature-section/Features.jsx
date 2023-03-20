import React from 'react'
import { Container, Row, Col } from 'reactstrap'



const FeatureData = [
    {
        title: 'Quick Learning',
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit Exercitationem quisquam veniam repellendus amet vero numquam   voluptates odit debitis necessitatibus tempora eaque praesentium Lorem ipsum, dolor sit amet consectetur adipisicing elit.    orporis deleniti odio fugit,cum quas optio nostrum.",
        icon: 'ri-draft-line',
    },
    {
        title: 'Quick Learning',
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit Exercitationem quisquam veniam repellendus amet vero numquam   voluptates odit debitis necessitatibus tempora eaque praesentium Lorem ipsum, dolor sit amet consectetur adipisicing elit.    orporis deleniti odio fugit,cum quas optio nostrum.",
        icon: 'ri-discuss-line'
    },
    {
        title: 'Quick Learning',
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit Exercitationem quisquam veniam repellendus amet vero numquam   voluptates odit debitis necessitatibus tempora eaque praesentium Lorem ipsum, dolor sit amet consectetur adipisicing elit.    orporis deleniti odio fugit,cum quas optio nostrum.",
        icon: "ri-contacts-line",
    }
]


const Features = () => {
    return (
        <section>
            <Container>
                <Row>
                 {
                    FeatureData.map((item,index)=>
                    <Col lg='4' md='6' key={index}>
                    <div className="single__feature text-center px-4">
                        <h2 className='mb-3'>
                            <i style={{ color: "#17bf92" }} className={item.icon}></i></h2>
                        <h6>{item.title}</h6>
                        <p>
                           {item.description}
                        </p>
                    </div>

                </Col>)
                 }

                   
                </Row>
            </Container>


        </section>
    )
}

export default Features
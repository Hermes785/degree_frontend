import React, {useState} from  'react'
import { Container, Row, Col } from 'reactstrap'
import chooseImg from '../../assests/images/why-choose-us.png'
import ReactPlayer from 'react-player'
const ChooseUs = ()=>{
    const [showVideo,setShoVideo]=useState(false);
    return(<section>
        <Container>
            <Row>
                <Col lg='6'>
                      <div  className="choose__content">
                        <h2>
                            Why Choose Us
                        </h2>
                        <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Aperiam est beatae quas illum sapiente saepe iure hic atque enim deleniti?
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                           Aperiam est beatae quas illum sapiente saepe iure hic atque enim deleniti?
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Aperiam est beatae quas illum sapiente saepe iure hic atque enim deleniti?
                        </p>
                      </div>
                      </Col>
                        <Col lg="6">
                             <div className="choose__img">
                                {
                                  showVideo ? <ReactPlayer url='https://www.youtube.com/watch?v=qFp27TR4Yew
                                  controls'
                                  width="100%"
                                  height="350px"
                                  />
        
                                  : <img src={chooseImg}alt="" className="w-100"/>
                                }
                                <span className="play__icon">
                                         <i className="ri-play-circle-line" onClick={()=>setShoVideo(!showVideo)}></i>       
                                </span>

                             </div>
                        
                        </Col>
               
            </Row>
        </Container>
    </section>)
    
    ;
}
export default ChooseUs;
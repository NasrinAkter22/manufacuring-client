import React, { Fragment } from 'react';
import { Col, Row } from 'react-bootstrap';
import laptop from '../../images/laptop.png'
import './About.css'

const About = () => {
    return (
        <Fragment>
           <div className="about">
               <div className="container">
                   <Row>
                       <Col sm={12}md ={12}lg={6}>
                     <img className='size' src={laptop} alt="logo" />
                       </Col>
                       <Col sm={12}md ={12}lg={6}>
                           <h1>A laptop computer is a small personal comput</h1>
                       <p>
                       The laptop computers are portable due to light weight. They have many features when they are compared with desktop computers. Laptop computers are operated using built in batteries. These batteries are made for long life. The laptop computer has a built in touch pad so that it can be operated without a mouse 
                       </p>
                       <button className='btn btn-primary text-uppercase mt-2'>read more</button>
                       </Col>
                   </Row>

        
               </div>
               
               </div> 
        </Fragment>
    );
};

export default About;
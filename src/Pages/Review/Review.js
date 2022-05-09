import React, { Fragment } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Review.css'
import hplaptop from '../../images/-HP-laptops--removebg-preview.png'
import macbook from '../../images/macbook-removebg-preview.png'
import dellaptop from '../../images/hdell-removebg-preview.png'






const Review = () => {
    return (
        <Fragment>
            <div className="sevicearea">
            <Container className="text-center">
                <h1 className="serviceMainTitle">MY SERVICES</h1>
                <Row>
                    <Col lg={4} md={6} sm={12}>
                        <div className="serviceCard text-center">
                            <img className="laptop" src={macbook} />
                            <h2 className="serviceName">
                                MacBook Pro

                            </h2>
                            <p className="serviceDescription">
                                The MacBook is Apple's third laptop computer family, introduced in 2006. Prior laptops were the PowerBook and iBook. In 2015, new MacBooks featured Apple's Retina Display 
                            </p>


                        </div>
                    </Col>

                    <Col lg={4} md={6} sm={12}>
                        <div className="serviceCard text-center " >
                            <img className="laptop" src={hplaptop} />
                            <h2 className="serviceName">
                                Hp</h2>
                            <p className="serviceDescription"> HP, Inc. focuses on technology and print production, while Hewlett Packard Enterprise (or HPE) has expanded to software, the cloud, and data storage. HP is known for  </p>
                        </div>
                    </Col>

                    <Col lg={4} md={6} sm={12}>
                        <div className="serviceCard text-center">
                            <img className="laptop" src={dellaptop } />
                            <h2 className="serviceName">
                                Dell</h2>
                            <p className="serviceDescription">I Dell is an American company that develops, sells, repairs, and supports computers and related products and services, and is owned </p>


                        </div>
                    </Col>


                </Row>
            </Container>
            </div>
        </Fragment>
    );
};

export default Review;
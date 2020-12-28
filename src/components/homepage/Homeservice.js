import React, { Component } from 'react'
import { Row, Col } from 'antd';


export default class Homeservice extends Component {
    render() {
        return (
            <>
                <div class="main-services-area pt-50 ptb-200">
                    <div class="container">
                        <div class="section-title">
                            <span>Main Features</span>
                            <h2>Our Main Services</h2>
                            <p>-------</p>
                        </div>
                        <Row style={{  marginLeft: '-59px'}}>
                        
                             <Col span={6}>
                                <div class="col-lg-3 col-md-6 col-sm-6">
                                    <div class="main-services-box">
                                        <div class="icon">
                                            <i class="flaticon-doctor"></i>
                                        </div>
                                        <h3><a href="#Ano-rectal">BK Kidney Care</a></h3>
                                        <p>BK Kidney Care is the core unit of BK Arogyam Ayurvedic Multispeciality.</p>
                                    </div>
                                </div>
                            </Col>

                            <Col span={6}>
                                <div class="col-lg-3 col-md-6 col-sm-6">
                                    <div class="main-services-box">
                                        <div class="icon">
                                            <i class="flaticon-dental-chair"></i>
                                        </div>
                                        <h3><a href="#Ano-rectal">BK Neuro Care</a></h3>
                                        <p>BK Neuro Care is first Ayurveda based Neuro Hospital and Research Centre in Purvanchal.</p>
                                    </div>
                                </div>
                            </Col>
                            <Col span={6}>
                                <div class="col-lg-3 col-md-6 col-sm-6">
                                    <div class="main-services-box">
                                        <div class="icon">
                                            <i class="flaticon-care"></i>
                                        </div>
                                        <h3><a href="#Ano-rectal">Ayurvedic medicine</a></h3>
                                        <p>We have our organic farmhouse, where herbs are grown and manufacture
                                            in modern way.</p>
                                    </div>
                                </div>

                            </Col>
                            <Col span={6}>
                                <div class="col-lg-3 col-md-6 col-sm-6">
                                    <div class="main-services-box">
                                        <div class="icon">
                                            <i class="flaticon-brain"></i>
                                        </div>
                                        <h3><a href="#Ano-rectal">Ano-rectal</a></h3>
                                        <p>BK Ano-Rectal Care unit of BK Arogyam deals with all types of
                                        Anorectal disorders.
                                       
                                        </p>
                                    </div>
                                </div></Col>

                        </Row>
                        <div class="row">
                            <div class="greencard">




                            </div>
                        </div>
                    </div>

                    <div class="shape2"><img src="assets/img/shape/2.png" alt="image" />


                    </div>
                </div>

                {/* healthcare service area */}
                <div id="Ano-rectal" class="services-area ptb-350 bg-f4f9fd">
                    <div class="container">
                        <div class="section-title">
                            <span>Our Services</span>
                            <h2>Our Healthcare Services</h2>
                            <p>Specialties of BK Arogyam Ayurvedic Multispeciality Hospital
                                 and Research Centre are following:</p>
                        </div>

                        <div style={{ width: '900px', marginLeft: '100px' }} class="row">
                            <div class="col-lg-4 col-md-6 col-sm-6">
                                <div class="single-services-box bg-1">
                                    <div class="icon">
                                        <i class="flaticon-cancer"></i>
                                    </div>
                                    <h3><a href="https://bkneurology.com/">BK Neuro Care</a></h3>
                                    <p>BK Neuro Care is first Ayurveda based Neuro
                                         Hospital and Research Centre in Purvanchal
                                          dealing with all types of Neuro problems 
                                          and diseases. </p>

                                    <a href="https://bkneurology.com/" class="read-more-btn">Read more <i class="fas fa-arrow-right"></i></a>
                                </div>
                            </div>

                            <div class="col-lg-4 col-md-6 col-sm-6">
                                <div class="single-services-box bg-2">
                                    <div class="icon">
                                        <i class="flaticon-liver"></i>
                                    </div>
                                    <h3><a href="#">BK Obesity Care</a></h3>
                                    <p>BK Obesity Care unit has relieved thousands of 
                                        patients from obesity. As we all know that in 
                                        today's life, obesity has become a curse.
                                         </p>

                                    <a href="#" class="read-more-btn">Read more <i class="fas fa-arrow-right"></i></a>
                                </div>
                            </div>

                            <div class="col-lg-4 col-md-6 col-sm-6">
                                <div class="single-services-box bg-3">
                                    <div class="icon">
                                        <i class="flaticon-kidney"></i>
                                    </div>
                                    <h3><a href="https://www.bkkidneycare.com/">BK Kidney Care</a></h3>
                                    <p>BK Kidney Care is the core unit of BK Arogyam 
                                        Ayurvedic Multispeciality Hospital and Research 
                                        Centre. It has been engaged in treatment.
                                         </p>

                                    <a href="https://www.bkkidneycare.com/" class="read-more-btn">Read more <i class="fas fa-arrow-right"></i></a>
                                </div>
                            </div>

                            <div class="col-lg-4 col-md-6 col-sm-6">
                                <div class="single-services-box bg-4">
                                    <div class="icon">
                                        <i class="flaticon-ekg"></i>
                                    </div>
                                    <h3><a href="#">BK Heart Care</a></h3>
                                    <p>In BK Heart Care, complete Ayurvedic treatment of all 
                                        heart diseases are doen which help the patients to get
                                         relief from the problem soon and also protects from 
                                         harmful.</p>

                                    <a href="#" class="read-more-btn">Read more <i class="fas fa-arrow-right"></i></a>
                                </div>
                            </div>

                            <div class="col-lg-4 col-md-6 col-sm-6">
                                <div class="single-services-box bg-5">
                                    <div class="icon">
                                        <i class="flaticon-tooth"></i>
                                    </div>
                                    <h3><a href="#">BK Diabetes Care</a></h3>
                                    <p>BK Diabetes Care unit of BK Arogyam has treated tousands 
                                        of diabetes patients who were fed up with their disease
                                         and now they are living healthy and happy lives today.  </p>

                                    <a href="#" class="read-more-btn">Read more <i class="fas fa-arrow-right"></i></a>
                                </div>
                            </div>

                            <div class="col-lg-4 col-md-6 col-sm-6">
                                <div class="single-services-box bg-6">
                                    <div class="icon">
                                        <i class="flaticon-radiation"></i>
                                    </div>
                                    <h3><a href="bkksharsutra.com">BK Ano-rectal Care</a></h3>
                                    <p>BK Ano-Rectal Care unit of BK Arogyam deals with all
                                         types of Ano-rectal diseases with total ayurvedic
                                          solutions. Our Ano-Rectal Care unit is known for
                                           successfully treating </p>

                                    <a href="bkksharsutra.com" class="read-more-btn">Read more <i class="fas fa-arrow-right"></i></a>
                                </div>
                            </div>

                            <div class="col-lg-12 col-md-12 col-sm-12">
                                <div class="more-services-btn">
                                    <a href="#" class="btn btn-primary">More Services <i class="flaticon-right-chevron"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* End of healthcare service area */}
            </>

        )
    }
}

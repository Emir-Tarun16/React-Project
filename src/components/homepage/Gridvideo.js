import React, { Component } from 'react'
// import { Row, Col } from 'antd';

export default class Gridvideo extends Component {
    render() {
        return (

            <div class="about-area">
                <div class="container-fluid ">
                    <div style={{ width: '900px', marginLeft:'135px' }} class="row">
                        {/* <Row>
                        <Col span={12}> */}
                        <div class="col-lg-6 col-md-12 pt-30">
                            {/* <br />
                            <br />
                            <br /> */}
                            <div class="section-title">
                                <span>Our Video</span>
                                <h3>B.K.Arogyam Kidney Research Center</h3>
                                <iframe width="560" height="315" src="https://www.youtube.com/embed/exF7600zfcg" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                            </div>
                        </div>
                        {/*                 
                        </Col>
                        
                        <Col span={12}> */}
                        <div class="col-lg-6 col-md-12 pl-200">
                            <div style={{ marginLeft: '100px' ,width: '600px' }}  class="about-content">
                                <span><h1>About Us</h1></span>
                                <h2>WHO WE ARE</h2>
                                <p>BK Arogyam is the first Ayurvedic Multispeciality Hospital and Research
                                Centre in Purvanchal and the most reputed name in the Ayurvedic Medical Sector
                                in all over the world. BK Arogyam has been known for its successful and enriched
                                     ayurvedic treatments of millions of patients. </p>

                                <ul>
                                    <li><i class="flaticon-check-mark"></i> Scientific Skills For getting a better result</li>
                                    <li><i class="flaticon-check-mark"></i> Communication Skills to getting in touch</li>
                                    <li><i class="flaticon-check-mark"></i> A Career Overview opportunity Available</li>
                                    <li><i class="flaticon-check-mark"></i> A good Work Environment For work</li>
                                </ul>

                                <a href="about.php" class="btn btn-primary">Learn More <i class="flaticon-right-chevron"></i></a>
                            </div>
                        </div>

                        {/* </Col>
                    </Row> */}
                    </div>
                </div>
            </div>

        )
    }
}





import React, { Component } from 'react'

export default class AppFooter extends Component {
    render() {
        return (
           
            <div class="footer-area">
                <div class="container">
                    <div style={{ marginLeft: '-30px',marginTop: '35px' }} class="row">
                        <div class="col-lg-4 col-md-6 col-sm-6">
                            <div class="single-footer-widget">
                                <div class="logo">
                                    <a href="#"><img  style={{ marginLeft: '-30px',marginTop: '35px' }} class="footerlogo" src="assets/img/footerlogo.png" alt="image" /></a>
                                    {/* <p >BK Arogyam is the first Ayurvedic Multispeciality Hospital
                                         and Research Centre in Purvanchal and the most reputed
                                          name in the Ayurvedic Medical Sector in all over the 
                                          world. </p> */}
                                </div>
    
                                {/* <ul style={{ marginLeft: '-30px',marginTop: '35px' }} class="social">
                                    <li><a href="#"><i class="fab fa-facebook-f"></i></a></li>
                                    <li><a href="#"><i class="fab fa-twitter"></i></a></li>
                                    <li><a href="#"><i class="fab fa-linkedin-in"></i></a></li>
                                    <li><a href="#"><i class="fab fa-instagram"></i></a></li>
                                </ul> */}
                            </div>
                        </div>
    
                        <div class="col-lg-2 col-md-6 col-sm-6">
                            <div class="single-footer-widget pl-5">
                                <h3>Service</h3>
    
                                <ul class="departments-list">
                                    <li><a href="#">Nephrologist</a></li>
                                    <li><a href="#">Departments</a></li>
                                    <li><a href="#">Family</a></li>
                                    <li><a href="#">Our Doctors</a></li>
                                    <li><a href="#">Woman's Health</a></li>
                                    <li><a href="#">Blog</a></li>
                                </ul>
                            </div>
                        </div>
    
                        <div class="col-lg-3 col-md-6 col-sm-6">
                            <div class="single-footer-widget pl-5">
                                <h3>Links</h3>
    
                                <ul class="links-list">
                                    <li><a href="#">Ano-rectal</a></li>
                                    <li><a href="#">BK Neuro Care</a></li>
                                    <li><a href="#">BK Diabetes Care</a></li>
                                    <li><a href="#">BK Heart Care</a></li>
                                    <li><a href="#">BK Kidney Care</a></li>
                                </ul>
                            </div>
                        </div>
    
                        <div class="col-lg-3 col-md-6 col-sm-6">
                            <div class="single-footer-widget">
                                <h3>Opening Hours</h3>
    
                                <ul class="opening-hours">
                                    <li>Mon - Tues <span>10.00AM - 19.00PM</span></li>
                                    <li>Wednesday <span>10.00AM - 19.00PM</span></li>
                                    <li>Thursday <span>10.00AM - 19.00PM</span></li>
                                    <li>Friday <span>10.00AM - 19.00PM</span></li>
                                    <li>Saturday <span>10.00AM - 19.00PM</span></li>
                                </ul>
                            </div>
                        </div>
                    </div>
    
                    <div class="copyright-area">
                        <p><i class="far fa-copyright"></i> Bk Arogyam & Research Pvt. Ltd. <a href="#" ></a></p>
                    </div>
                </div>
            </div>
             
           
        )
    }
}

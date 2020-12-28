import React, { Component } from 'react'

export default class Navdocter extends Component {
    render() {
        return (
            <>
                <section  style={{ marginTop: '36px' }} class="page-title-area page-title-bg4">
                    <div class="d-table">
                        <div class="d-table-cell">
                            <div class="container">
                                <div class="page-title-content">
                                    <h2>Doctor Details</h2>
                                    <ul>
                                        <li><a href="index.html">Home</a></li>
                                        <li>Dr. Brijesh Chaurasia</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section class="doctor-details-area ptb-100">
                    <div class="container">
                        <div class="row align-items-center">
                            <div class="col-lg-5 col-md-12">
                                <div class="doctor-details-image">
                                    <img src="assets/img/doctor/bksirji.jpg" alt="image" />

                                    <h3>Dr.Brijesh Chaurasia</h3>

                                   
                                </div>
                            </div>

                            <div class="col-lg-7 col-md-12">
                                <div class="doctor-details-desc">
                                    <h2>Dr. Brijesh Chaurasia</h2>

                                    <p>Dr. B.K. Chaurasia, an internationally acclaimed physician and researcher, worked in the field of Kidney & Diabetes disease treatment by ayurveda for 20 years and produced brilliant results for numerous types of malignancies at all stages. He has been a forerunner in treating Kidney disease by ayurveda. With an uncommon knack towards research and medicine, Dr. B.K. Chaurasia is a true promoter and Kidney curer through science or ayurvedic medicine. Always valuing honesty, commitment, accountability, integrity, uprightness and dedication, his one dream is to make Kidney Care Medicine available to as many people as possible, at an affordable cost.He then undertook his post-graduation in Ayurveda in 2006 and later finished his Diploma in Medico-Legal Systems from Symbiosis Center of Health Care, Pune. It was during this time that he invented the Kidney care center.</p>
                                </div>
                            </div>
                        </div>


                        <section class="doctor-area ptb-100 bg-fefefe">
                            <div class="container">
                                <div class="section-title">
                                    <span>Doctors</span>
                                    <h2>Meet Our Qualified Doctors</h2>
                                    <p>We are the first Ayurvedic research centre in India, who also has an online panel of specialist doctors, who can provide advice on diabetes and other problems through online.</p>
                                </div>

                                <div class="doctor-slides owl-carousel owl-theme">
                                    <div class="single-doctor-box">
                                        <div class="doctor-image">
                                            <img src="assets/img/doctor/do-1.jpg" alt="image" />

                                            <a href="#" class="details-btn"><i class="fas fa-plus"></i></a>
                                        </div>

                                        <div class="doctor-content">
                                            <h3><a href="#">Dr. Brijesh Chaurasia</a></h3>
                                            <span>Co-Founder and physician</span>

                                            
                                        </div>
                                    </div>

                                    <div class="single-doctor-box">
                                        <div class="doctor-image">
                                            <img src="assets/img/doctor/do-2.jpg" alt="image" />

                                            <a href="#" class="details-btn"><i class="fas fa-plus"></i></a>
                                        </div>

                                        <div class="doctor-content">
                                            <h3><a href="#">Dr. Ritesh Chaursia</a></h3>
                                            <span>Ayurveda specialist and Urologist</span>

                                            
                                        </div>
                                    </div>

                                    <div class="single-doctor-box">
                                        <div class="doctor-image">
                                            <img src="assets/img/doctor/do-3.jpg" alt="image" />

                                            <a href="#" class="details-btn"><i class="fas fa-plus"></i></a>
                                        </div>

                                        <div class="doctor-content">
                                            <h3><a href="#">Dr. Shashi Chaurasia</a></h3>
                                            <span>Ayurveda Expert</span>

                                            
                                        </div>
                                    </div>

                                    <div class="single-doctor-box">
                                        <div class="doctor-image">
                                            <img src="assets/img/doctor/do-4.jpg" alt="image" />

                                            <a href="#" class="details-btn"><i class="fas fa-plus"></i></a>
                                        </div>

                                        <div class="doctor-content">
                                            <h3><a href="#">Mrs. Shimaili Chaurasia</a></h3>
                                            <span>Pharmacist</span>

                                            
                                        </div>
                                    </div>

                                    <div class="single-doctor-box">
                                        <div class="doctor-image">
                                            <img src="assets/img/doctor/do-5.jpg" alt="image" />

                                            <a href="#" class="details-btn"><i class="fas fa-plus"></i></a>
                                        </div>

                                        <div class="doctor-content">
                                            <h3><a href="#">Dr. Jitendra kumar</a></h3>
                                            <span>Senior Consultant</span>

                                            
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>

                    </div>

                    <div class="shape3"><img src="assets/img/shape/3.png" class="wow fadeInLeft" alt="image" />
                    </div>
                </section>

            </>
        )
    }
}

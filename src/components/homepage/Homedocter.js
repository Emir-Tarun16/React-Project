import React, { Component } from 'react'

export default class Homedocter extends Component {
    render() {
        return (
              
      
        <div class="doctor-area ptb-400 bg-fefefe">
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
                            <span> Ayurveda specialist and Urologist</span>

                            
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
                            <span>Senior consultant</span>

                          
                        </div>
                    </div>
                </div>
            </div>
        </div>
     
        )
    }
}

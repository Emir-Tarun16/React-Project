import React, { Component } from 'react'

export default class Homefunfacts extends Component {
    render() {
        return (
           
            <section class="fun-facts-area ptb-100">
                <div class="container">
                    <div style={{ width: '900px', marginLeft:'100px' }} class="row">
                        <div class="col-lg-3 col-md-3 col-sm-3 col-6">
                            <div class="single-fun-facts">
                                <div class="icon">
                                    <i class="flaticon-doctor-1"></i>
                                </div>
                                <h3>
                                    <span class="odometer" data-count="540"></span>
                                    <span class="optional-icon">+</span>
                                </h3>
                                <p>Expert Doctors</p>
                            </div>
                        </div>
    
                        <div class="col-lg-3 col-md-3 col-sm-3 col-6">
                            <div class="single-fun-facts">
                                <div class="icon">
                                    <i class="flaticon-light-bulb"></i>
                                </div>
                                <h3>
                                    <span class="odometer" data-count="899"></span>
                                    <span class="optional-icon">K</span>
                                </h3>
                                <p>Problem Solve</p>
                            </div>
                        </div>
    
                        <div class="col-lg-3 col-md-3 col-sm-3 col-6">
                            <div class="single-fun-facts">
                                <div class="icon">
                                    <i class="flaticon-science"></i>
                                </div>
                                <h3>
                                    <span class="odometer" data-count="100"></span>
                                    <span class="optional-icon">+</span>
                                </h3>
                                <p>Award Winning</p>
                            </div>
                        </div>
    
                        <div class="col-lg-3 col-md-3 col-sm-3 col-6">
                            <div class="single-fun-facts">
                                <div class="icon">
                                    <i class="flaticon-trophy"></i>
                                </div>
                                <h3>
                                    <span class="odometer" data-count="56"></span>
                                    <span class="optional-icon">K</span>
                                </h3>
                                <p>Experiences</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            
    
        )
    }
}

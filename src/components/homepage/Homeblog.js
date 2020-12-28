import React, { Component } from 'react'

export default class Homeblog extends Component {
    render() {
        return (

            <div class="blog-area ptb-500">
                <div class="container">
                    <div class="section-title">
                        <span>News & Blog</span>
                        <h2>Our Blogs</h2>
                        <p>
                            Ayurveda is here to make ancient science easy to understand, relatable and totally
                            possible for
                            you to apply into your modern day life so that you can be your healthiest, most
                            vibrant self.

                        </p>
                    </div>

                    <div style={{ width: '900px', marginLeft:'100px' }} class="row">
                        <div class="col-lg-4 col-md-6">
                            <div class="single-blog-post">
                                <div class="post-image">
                                    <a href="#"><img src="blog1.jpg" alt="image" /></a>
                                </div>

                                <div class="post-content">
                                    <div class="post-meta">
                                        <ul>
                                            <li>By: <a href="#">BKArogyam</a></li>
                                            <li>June 19, 2019</li>
                                        </ul>
                                    </div>

                                    <h3><a href="#"> How long does kidney stone pain last after passing ?</a></h3>
                                    <p>
                                    Kidneys are the most essential organ in the human body that is responsible for performing
                                     some important functions
                                   </p>
                                    <a href="https://www.bkkidneycare.com/" class="read-more-btn">Read more <i class="fas fa-arrow-right"></i></a>

                                </div>
                            </div>
                        </div>

                        <div class="col-lg-4 col-md-6">
                            <div class="single-blog-post">
                                <div class="post-image">
                                    <a href="#"><img src="blog222.jpg" alt="image" /></a>
                                </div>

                                <div class="post-content">
                                    <div class="post-meta">
                                        <ul>
                                            <li>By: <a href="#">BKKidneyCare</a></li>
                                            <li>June 10, 2019</li>
                                        </ul>
                                    </div>

                                    <h3><a href="#">Catheter-Associated Urinary Tract Infection</a></h3>
                                    <p>
                                    According to survey of national Healthcare, safety gets work this
                                     catheter-associated
                                     urinary tract infection is one of the most common types.
            
                                    </p>
                                    <a href="https://www.bkkidneycare.com/" class="read-more-btn">Read more <i class="fas fa-arrow-right"></i></a>

                                </div>
                            </div>
                        </div>

                        <div class="col-lg-4 col-md-6">
                            <div class="single-blog-post">
                                <div class="post-image">
                                    <a href="#"><img src="blog3.jpg" alt="image" /></a>
                                </div>

                                <div class="post-content">
                                    <div class="post-meta">
                                        <ul>
                                            <li>By: <a href="#">BKKidneyCare</a></li>
                                            <li>June 24, 2020</li>
                                        </ul>
                                    </div>

                                    <h3><a href="#">Kidney stones in pregnancy symptoms</a></h3>
                                    <p>
                                    Most of the females do not know that the most common cause of time during
                                     pregnancy is the creation of urinary stones which is also known as urolithiasis. 
                                        </p>
                                    <a href="https://www.bkkidneycare.com/" class="read-more-btn">Read more <i class="fas fa-arrow-right"></i></a>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}

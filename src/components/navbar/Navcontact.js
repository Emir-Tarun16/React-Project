import React, { Component } from 'react'

export default class Navcontact extends Component {
    render() {
        return (
            <>
              <section style={{ marginTop: '36px' }} class="page-title-area page-title-bg4">
            <div class="d-table">
                <div class="d-table-cell">
                    <div class="container">
                        <div class="page-title-content">
                            <h2>Contact</h2>
                            <ul>
                                <li><a href="index.php">Home</a></li>
                                <li>Contact</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        
        <section class="contact-area ptb-100">
            <div class="container">
                <div style={{ marginTop: '-10px' }} class="section-title">
                    <span>Send Your Valuable Feedback !!</span>
                    <h2>Drop us message for any query</h2>
                    <p>If you have an idea, we would love to hear about it.</p>
                </div>

                <div class="row">
                    <div class="col-lg-7 col-md-12">
                        <div class="contact-form">
                            <form id="" action="addContact.php" method="POST">
                                <input type="hidden" name="type" value="INSERT" />
                                <div style={{ width: '650px', marginLeft:'-50px' }} class="row">
                                    <div class="col-lg-6 col-md-6">
                                        <div class="form-group">
                                            <input type="text" name="name" id="name" class="form-control" required data-error="Please enter your name" placeholder="Enter Your Name" />
                                            <div class="help-block with-errors"></div>
                                        </div>
                                    </div>

                                    <div class="col-lg-6 col-md-6">
                                        <div class="form-group">
                                            <input type="email" name="email" id="email" class="form-control" required data-error="Please enter your email" placeholder="Enter Your Email" />
                                            <div class="help-block with-errors"></div>
                                        </div>
                                    </div>

                                    <div class="col-lg-6 col-md-6">
                                        <div class="form-group">
                                            <input type="text" name="phone_number" id="phone_number" required data-error="Please enter your number" class="form-control" placeholder="Enter Phone Number" />
                                            <div class="help-block with-errors"></div>
                                        </div>
                                    </div>

                                    <div class="col-lg-6 col-md-6">
                                        <div class="form-group">
                                            <input type="text" name="msg_subject" id="msg_subject" class="form-control" required data-error="Please enter your subject" placeholder="Enter Subject" />
                                            <div class="help-block with-errors"></div>
                                        </div>
                                    </div>

                                    <div class="col-lg-12 col-md-12">
                                        <div class="form-group">
                                            <textarea name="message" class="form-control" id="message" cols="30" rows="6" required data-error="Write your message" placeholder="Enter Your Message" ></textarea>
                                            <div class="help-block with-errors"></div>
                                        </div>
                                    </div>

                                    <div class="col-lg-12 col-md-12">
                                        <button type="submit" class="btn btn-primary">Submit Message <i class="flaticon-right-chevron"></i></button>
                                        <div class="clearfix"></div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>

                    <div class="col-lg-5 col-md-12">
                        <div style={{ width: '900px', marginLeft:'10px' }} class="contact-info">
                            <ul>
                                <li>
                                    <div class="icon">
                                        <i class="fas fa-map-marker-alt"></i>
                                    </div>
                                    <span>Address</span>
                                    D 59/103-Q6 Opp Sheetla Mata Mandir, Sigra, Varanasi, Uttar Pradesh 221002
                                </li>

                                <li>
                                    <div class="icon">
                                        <i class="fas fa-envelope"></i>
                                    </div>
                                    <span>Email</span>
                                    <a href="#">doctor@bkarogyam.com</a>
                                    
                                </li>

                                <li>
                                    <div class="icon">
                                        <i class="fas fa-phone-volume"></i>
                                    </div>
                                    <span>Phone</span>
                                    <a href="#">+(91)8081222333</a>
                                    <a href="#">+(91)9161617272</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="bg-map">
                <img src="assets/img/bg-map.png" alt="image" />
                </div>
        </section>
       
        
            </>
        )
    }
}

import React, { Component } from 'react'

export default class Homeappointment extends Component {
    render() {
        return (
            
        <div class="appointment-area ptb-100 jarallax" data-jarallax='{"speed": 0.3}'>
            <div class="container">
                <div style={{ width: '900px', marginLeft:'200px' }} class="appointment-content">
                    <span class="sub-title">Book Appointment</span>
                    <h2>We are here for you</h2>

                    <form>
                        <div style={{ width: '900px', marginLeft:'15px' }} class="row">
                            <div class="col-lg-4 col-md-4">
                                <div class="form-group">
                                    <div class="icon">
                                        <i class="flaticon-user"></i>
                                    </div>
                                    <label>Your Name</label>
                                    <input type="text" class="form-control" placeholder="Enter Your Name" id="name" name="name" />
                                </div>
                            </div>

                            <div class="col-lg-6 col-md-6">
                                <div class="form-group">
                                    <div class="icon">
                                        <i class="flaticon-envelope"></i>
                                    </div>
                                    <label>Your Email</label>
                                    <input type="email" class="form-control" placeholder="Enter Email Address" id="email" name="email" />
                                </div>
                            </div>

                            <div class="col-lg-4 col-md-4">
                                <div class="form-group">
                                    <div class="icon">
                                        <i class="flaticon-support"></i>
                                    </div>
                                    <label>Select Your Services</label>

                                    <select>
                                        <option>Cardiology</option>
                                        <option>Urologic Oncology</option>
                                        <option>Neurology</option>
                                        <option>Medicine</option>
                                        <option>Surgery</option>
                                        <option>Urology</option>
                                        <option>Radiology</option>
                                        <option>Neurosurgery</option>
                                        <option>Bariatric Surgery</option>
                                    </select>
                                </div>
                            </div>

                            <div class="col-lg-6 col-md-6">
                                <div class="form-group">
                                    <div class="icon">
                                        <i class="flaticon-phone-call"></i>
                                    </div>
                                    <label>Your Phone</label>
                                    <input type="text" class="form-control" placeholder="Enter Your Phone" id="text" name="text" />
                                </div>
                            </div>

                            <div class="col-lg-12 col-md-12">
                                <div class="submit-btn">
                                    <button class="btn btn-primary">Make Appointment <i class="flaticon-right-chevron"></i></button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
      

        )
    }
}

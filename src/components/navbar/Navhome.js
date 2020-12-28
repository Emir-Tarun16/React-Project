import React, { Component } from 'react'
import { Carousel } from 'antd';

const contentStyle = {
    height: '600px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
    marginTop:'35px',
};

export default class Navhome extends Component {
    render() {
        return (
           
                <Carousel autoplay>
                    <div>
                        <h3 style={contentStyle}>
                            <img src="missionBanner.jpg" />
                        </h3>
                    </div>
                    <div>
                        <h3 style={contentStyle}>
                        <img src="carsoul_immunity.jpg" />
                        </h3>
                    </div>
                    <div>
                        <h3 style={contentStyle}>
                        <img src="carsoul_skin.jpg" />
                        </h3>
                    </div>
                    <div>
                        <h3 style={contentStyle}>
                        <img src="carsoull_sliders.jpg" />
                        </h3>
                    </div>
                    <div>
                        <h3 style={contentStyle}>
                        <img src="missionBanner.jpg" />
                        </h3>
                    </div>
                    <div>
                        <h3 style={contentStyle}>
                        <img src="shirodhara.jpg" />
                        </h3>
                    </div>
                </Carousel>


                    
        )
    }
}

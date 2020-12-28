import React, { Component } from 'react'
import Navhome from '../navbar/Navhome'
import Gridvideo from './Gridvideo'
import Homeappointment from './Homeappointment'
import Homeblog from './Homeblog'
import Homebrands from './Homebrands'
import Homedocter from './Homedocter'
import Homefeedback from './Homefeedback'
import Homefunfacts from './Homefunfacts'
import Homeservice from './Homeservice'


export default class Home extends Component {
    render() {
        return (

            <>
             <Navhome />
            <Homeservice />   
            <Gridvideo />
            <Homefunfacts />
            <Homedocter/>
            <Homeappointment />
            <Homefeedback />
            <Homebrands />
            <Homeblog />
            </>
        )
    }
}

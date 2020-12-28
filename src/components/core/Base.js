import React, { Component } from 'react'
import AppHeader from './AppHeader'
import { Layout } from 'antd';
import Navservice from '../navbar/Navservice';
import { Route, Switch } from 'react-router-dom';
import Navabout from '../navbar/Navabout';
import Navdocter from '../navbar/Navdocter';
import Navblog from '../navbar/Navblog';
import Navcontact from '../navbar/Navcontact';
import Home from '../homepage/Home';
import Apppheaderr from './Apppheaderr';
import AppFooter from './AppFooter';


const { Content } = Layout;

export default class Base extends Component {
    render() {
        return (
            <Layout className="layout">

                            <Apppheaderr />
                            <AppHeader />
                            <Switch>
                                <Route path="/" render={route => (<Home {...route} />)} exact />
                                <Route path="/about" render={route => (<Navabout {...route} />)} exact />
                                <Route path="/service" render={route => (<Navservice {...route} />)} exact />
                                <Route path="/docter" render={route => (<Navdocter {...route} />)} exact />
                                <Route path="/blog" render={route => (<Navblog {...route} />)} exact />
                                <Route path="/contact" render={route => (<Navcontact {...route} />)} exact />

                            </Switch>

                           
                            <AppFooter />
                    
            </Layout>
        )
    }
}

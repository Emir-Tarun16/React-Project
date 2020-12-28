import React, { Component } from 'react'
import { Layout, Menu } from 'antd';
import {
    HomeOutlined, PhoneOutlined,
    BookOutlined, SettingOutlined,
    UserOutlined, ReconciliationOutlined
} from '@ant-design/icons';
import { Link } from 'react-router-dom';
const { Header } = Layout;

export default class AppHeader extends Component {
    render() {
        return (
            <Header>
                <div className="navitem" />
                <Menu style={{ marginLeft: '0px' }} mode="horizontal" defaultSelectedKeys={['1']}>
                    <img className="bklogo" src="arogyam.png" />
                    <Menu.Item key="1"><Link to="/"><strong><HomeOutlined />Home</strong></Link></Menu.Item>
                    <Menu.Item key="2"><Link to="/about"><strong><UserOutlined />About Us</strong></Link></Menu.Item>
                    <Menu.Item key="3"><Link to="/service"><strong><SettingOutlined />Our Services</strong></Link></Menu.Item>
                    <Menu.Item key="4"><Link to="/docter"><strong><ReconciliationOutlined />Docters</strong></Link></Menu.Item>
                    <Menu.Item key="5"><Link to="/blog"><strong><BookOutlined />Blog</strong></Link></Menu.Item>
                    <Menu.Item key="6"><Link to="/contact"><strong><PhoneOutlined />Contact Us</strong></Link></Menu.Item>
                    {/* <Menu.Item key="7"><Link to="/download"><strong>Downloads</strong></Link></Menu.Item> */}

                </Menu>
            </Header>

        )
    }
}

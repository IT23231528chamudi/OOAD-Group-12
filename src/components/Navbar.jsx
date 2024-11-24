import React from 'react';
import { Layout, Menu, Badge } from 'antd';
import { ShoppingCartOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import ProfileIcon from './ProfileIcon';


const { Header } = Layout;

const Navbar = () => {
    return (
        <Header style={{ position: 'fixed', zIndex: 1, width: '100%', height: '64px', display: 'flex', alignItems: 'center', backgroundColor: '#001529' }}>
            {/* Logo */}
            <div className="logo" style={{ color: 'white', fontSize: '1.5rem', fontWeight: 'bold', marginRight: 'auto' }}>
                BedStore
            </div>

            {/* Centered Menu Links */}
            <Menu
                theme="dark"
                mode="horizontal"
                defaultSelectedKeys={['1']}
                style={{ display: 'flex', justifyContent: 'center', flexGrow: 1 }}
            >
                <Menu.Item key="1">
                    <Link to="/">Home</Link>
                </Menu.Item>
                <Menu.Item key="2">
                    <Link to="/shop">Shop</Link>
                </Menu.Item>
                <Menu.Item key="3">
                    <Link to="/about">About</Link>
                </Menu.Item>
                <Menu.Item key="4">
                    <Link to="/contact">Contact</Link>
                </Menu.Item>

            </Menu>

            {/* Cart Icon with Badge */}
            <Badge count={5} offset={[10, 0]}>
                <ShoppingCartOutlined style={{ fontSize: '1.5rem', color: 'white' ,marginRight: '16px' }} />

                {/* Profile Icon */}
                <ProfileIcon />

            </Badge>
        </Header>
    );
};

export default Navbar;

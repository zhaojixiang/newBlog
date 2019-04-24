import React, { Component } from 'react';
import style from './index.less';
import { Menu, Icon } from 'antd';
// const MenuItemGroup = Menu.ItemGroup;
class Menus extends Component {
    state = {
        current: 'mail',
    }
    
    handleClick = (e) => {
        console.log('click ', e);
        this.setState({
            current: e.key,
        });
    }
    
    render() {
        return (
            <div className={style.container}>
                <h1 className={style.myName}>I SMILE AT LIFE</h1>  
                <Menu
                    onClick={this.handleClick}
                    selectedKeys={[this.state.current]}
                    mode="horizontal"
                >
                    <Menu.Item key="mail">
                        <Icon type="home" />H O M E
                    </Menu.Item>
                    <Menu.Item key="app">
                        <Icon type="appstore" />F O O T P R I N T
                    </Menu.Item>
                    <Menu.Item key="alipay">
                        <Icon type="message" />M E S S A G E
                    </Menu.Item>
                </Menu>
            </div>
        )
    }
}
export default Menus;
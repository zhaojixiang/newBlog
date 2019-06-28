import React, { Component } from 'react';
import style from './index.less';
import { Menu, Icon } from 'antd';
import { Link } from 'dva/router'
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

  render () {
    return (
      <div className={style.container}>
        <h1 className={style.myName}>I SMILE AT LIFE</h1>
        <Menu
          onClick={this.handleClick}
          selectedKeys={[this.state.current]}
          mode="horizontal"
        >
          <Menu.Item key="mail">
            <Link to='/'>
              <Icon type="home" />H O M E
            </Link>
          </Menu.Item>
          <Menu.Item key="app">
            <Link to='/activity'>
              <Icon type="appstore" />F O O T P R I N T
            </Link>
          </Menu.Item>
          <Menu.Item key="alipay">
            <Link to='/message'>
              <Icon type="message" />M E S S A G E
            </Link>
          </Menu.Item>
        </Menu>
      </div>
    )
  }
}
export default Menus;
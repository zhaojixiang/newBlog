import React, { Component } from 'react';
import style from './index.less';
import { Menu, Icon, Button, Popover } from 'antd';
import { Link } from 'dva/router'
// import '../../../assets/style/animate.less'

// const MenuItemGroup = Menu.ItemGroup;
// const text = <span>Title</span>;
// const content = (
//   <div>
//     <p>Content</p>
//     <p>Content</p>
//   </div>
// );

class Menus extends Component {
  state = {
    current: 'mail',
  }

  handleClick = (e) => {
    // console.log('click ', e);
    this.setState({
      current: e.key,
    });
  }

  render () {
    // const content = <Menu
    //   onClick={this.handleClick}
    //   selectedKeys={[this.state.current]}
    //   mode="vertical"
    // >
    //   <Menu.Item key="mail">
    //     <Link to='/'>
    //       <Icon type="home" />H O M E
    // </Link>
    //   </Menu.Item>
    //   <Menu.Item key="poem">
    //     <Link to='/poem'>
    //       <Icon type="appstore" />P O E M
    //     </Link>
    //   </Menu.Item>
    //   <Menu.Item key="app">
    //     <Link to='/activity'>
    //       <Icon type="appstore" />F O O T P R I N T
    // </Link>
    //   </Menu.Item>
    //   <Menu.Item key="alipay">
    //     <Link to='/message'>
    //       <Icon type="message" />M E S S A G E
    // </Link>
    //   </Menu.Item>
    //   <Menu.Item key="writing">
    //     <Link to='/writing'>
    //       <Icon type="message" />写 作
    // </Link>
    //   </Menu.Item>
    // </Menu>
    return (
      <div className={style.menuBox}>
        <div className={style.container}>
          <h1 className={style.myName}>
            <span className='animated fadeInUp'>w世说心语</span>
          </h1>
          <div className={style.pcMenu}>
            <Menu
              onClick={this.handleClick}
              selectedKeys={[this.state.current]}
              mode="vertical"
            >
              <Menu.Item key="mail">
                <Link to='/main'>
                  <Icon type="home" />H O M E
            </Link>
              </Menu.Item>
              <Menu.Item key="poem">
                <Link to='/poem'>
                  <Icon type="appstore" />P O E M
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
          {/* <div className={style.mobileMenu}>
            <Popover placement="bottomRight" content={content} trigger="click">
              <Button className={style.menuZoom}><Icon type="menu-unfold" /></Button>
            </Popover>
          </div> */}
        </div>
        <div className={style.routeBox}>
          {this.props.children}
        </div>
      </div>
    )
  }
}
export default Menus;
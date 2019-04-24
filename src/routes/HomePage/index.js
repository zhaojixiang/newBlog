import React, { Component } from 'react';
import TopMenu from '../../components/Menu'
import { Carousel, Icon } from 'antd';


import style from './index.less';

class HomePage extends Component {
    constructor(props){
        super(props);
        this.state = {
            
        }
        this.carousel = null;
    }
    render() {
        return (
            <div className={style.container}>
                <TopMenu/>
                <div className={style.banner}>
                    <Icon onClick={this.goLeft} type="left" className={[style.left, style.icon]}/>
                    <Carousel autoplay ref={e=>{this.carousel = e}}>
                        <div><h3>1</h3></div>
                        <div><h3>2</h3></div>
                        <div><h3>3</h3></div>
                        <div><h3>4</h3></div>
                    </Carousel>
                    <Icon onClick={this.goRight} type="right" className={[style.right, style.icon]}/>
                </div>
            </div>
        )
    }
    goLeft=()=>{
        this.carousel.prev()
    }
    goRight=()=>{
        this.carousel.next()
    }
}
export default HomePage;
import React, { Component } from 'react'
// import { Map } from 'react-amap'
import style from './index.less'
/*global AMap*/
export default class idnex extends Component {
  constructor(props) {
    super(props)
    this.state = {
      map: null
    }
  }
  componentDidMount () {
    this.initMap()
  }
  // 初始化地图
  initMap = () => {
    this.setState(() => {
      return {
        map: new AMap.Map('map', {
          zoom: 11,
          resizeEnable: true
        })
      }
    }, () => {
      // 获取当前位置
      this.getCUrrentLocation()
      //设置地图显示要素: 区域面 兴趣点 建筑物 道路及道路标注
      this.state.map.setFeatures(['bg', 'point', 'building', 'road']);
    })
    // let marker = new AMap.Marker({
    //   position: new AMap.LngLat(116.39, 39.9),   // 经纬度对象，也可以是经纬度构成的一维数组[116.39, 39.9]
    //   title: '北京'
    // });
    // map.add(marker)
  }
  getCUrrentLocation = () => {
    const { map } = this.state
    // 获取用户当前位置
    let geolocation
    map.plugin('AMap.Geolocation', function () {
      geolocation = new AMap.Geolocation({
        enableHighAccuracy: true, //是否使用高精度定位，默认:true
        timeout: 10000, //超过10秒后停止定位，默认：无穷大
        buttonOffset: new AMap.Pixel(10, 20), //定位按钮与设置的停靠位置的偏移量，默认：Pixel(10, 20)
        zoomToAccuracy: true, //定位成功后调整地图视野范围使定位位置及精度范围视野内可见，默认：false
        buttonPosition: 'RB'
      });
      map.addControl(geolocation);
      geolocation.getCurrentPosition();
      AMap.event.addListener(geolocation, 'complete', onComplete); //返回定位信息
      AMap.event.addListener(geolocation, 'error', onError); //返回定位出错信息
    });
    //解析定位结果
    function onComplete (data) {
      var str = [];
      str.push(data.position.getLat());
      str.push(data.position.getLng());
      console.log(str, 's');
    }
    //解析定位错误信息
    function onError (data) {
      console.log('定位失败', 'f');
    }
  }
  render () {
    return (
      <div className={style.mapBox} id='map'>
      </div >
    )
  }
}

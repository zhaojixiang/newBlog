/* eslint no-underscore-dangle: 0 */
import React, { PureComponent } from 'react'
import { notification, Button } from 'antd';

// import ControlBar from './ControlBar'
import L from 'leaflet'
// import 'leaflet/dist/leaflet.css'
// import '../../../assets/js/leaflet/leaflet.js'
import '../../../assets/js/leaflet/leaflet.less'

import '../../../assets/js/leaflet/SelfGroup'
// import 'leaflet-choropleth' // 画等值线图插件
// import HeatmapOverlay from '@/assets/leafletJS/leaflet-heatmap'
// import '@/assets/leafletJS/heatmap'
// import '@/assets/leafletJS/leaflet-heat'
//
// import 'leaflet-groupedlayercontrol'
// import "@/assets/leafletJS/groupControlLayer/leaflet.groupedlayercontrol"
// import "@/assets/leafletJS/groupControlLayer/leaflet.groupedlayercontrol.less"

// //


// import "@/assets/leafletJS/SelfCanvas"
// import '@/assets/leafletJS/fullcanvas'
// import '@/assets/leafletJS/leaflet.fullcanvas.downsample'

// import '@/assets/leafletJS/leaflet.markercluster'
// import '@/assets/leafletJS/MarkerCluster.css'
// import '@/assets/leafletJS/MarkerCluster.Default.css'

// import '@/assets/leafletJS/Control.MiniMap.less'
// import '@/assets/leafletJS/Control.MiniMap'

// import '@/assets/leafletJS/leaflet-html-legend/L.Control.HtmlLegend'
// import '@/assets/leafletJS/leaflet-html-legend/L.Control.HtmlLegend.less'
// import 'leaflet-html-legend'

// import '@/assets/leafletJS/leaflet.draw-src'
// import '@/assets/leafletJS/leaflet.draw.less'
//
import coordtransform from '../../../assets/js/leaflet/coordtransform'
import * as colorScale from '../../../assets/js/leaflet/colorScale'
import LatLon from '../../../assets/js/leaflet/geodesyTools'

import testData from '../../../../mock/json/freqJson.json'
import energyData from '../../../../mock/json/energyJson.json'
import gridData from '../../../../mock/json/gridJson.json'

import style from './index.less'

// 图片引入
// import online from '@/assets/images/vehicle/online.png'
// import offline from '@/assets/images/vehicle/offline.png'
// import stop from '@/assets/images/vehicle/stop.png'
// import rest from '@/assets/images/vehicle/rest.png'
const mapUrl = '//webrd0{s}.is.autonavi.com/appmaptile?lang=zh_cn&size=1&scale=1&style=8&x={x}&y={y}&z={z}'; // 在线地图(普通)
const satelliteMapUrl = 'http://webst04.is.autonavi.com/appmaptile?x={x}&y={y}&z={z}&lang=zh_cn&size=1&scale=1&style=6'; // 在线地图(卫星)
const mapUrl2 = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
let map;
// const { L } = window;
class Leaflet extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      // map: null,
      mapSou: null,
      frequencyMapLayer: new L.LayerGroup(),
      // groupControlLayer: L.control.groupedLayers({}, {}, {}), // 图层
      groupControlLayer: L.control.layers({}, {}, {}), // 图层
      // energyCircleLayer: new L.LayerGroup(),
      energyCircleLayer: new L.SelfGroup(),
      energyRetangleLayer: new L.LayerGroup(),
      energyRetanglePop: L.popup({}).setContent(''),

      // vehicleLayer: new L.MarkerClusterGroup(),
      vehicleLayer: new L.Marker(),
      // normalVehicleLayer: new L.MarkerClusterGroup(),

      // legendLayer: L.control.htmllegend({
      //   position: 'topleft',
      //   legend: [], // array of legend entries. see below for the structure
      //   collapseSimple: false, // if true, legend entries that are from a simple renderer will use compact presentation
      //   detectStretched: false, // if true, will test to see if legend entries look stretched.  These are usually in sets of 3 with the middle element having no label.
      //   collapsedOnInit: false, // if true, legends will be collapsed when a new instance is initialized.
      //   // defaultOpacity: 1, // default opacity for layers in specified in legends.
      //   // visibleIcon: 'leaflet-html-legend-icon-eye',  // css class for the visible icon on opacity slider
      //   hiddenIcon: 'leaflet-html-legend-icon-eye-slash', // css class for the hidden icon on opacity slider
      //   toggleIcon: 'leaflet-html-legend-icon-eye-slash'
      // }),
    }
    this.mapBox = React.createRef();
  }

  componentDidMount () {
    // 获取leaflet盒子
    // const { mapBox } = this;
    let mapB = this.mapBox.current
    console.log(mapB, 'mapBox');
    map = L.map(mapB).setView([51.505, -0.09], 13);

    L.tileLayer(mapUrl2, {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    L.marker([51.5, -0.09]).addTo(map)
      .bindPopup('A pretty CSS3 popup.<br> Easily customizable.')
      .openPopup();
    // return

    // const mapUrl = '//webrd0{s}.is.autonavi.com/appmaptile?lang=zh_cn&size=1&scale=1&style=7&x={x}&y={y}&z={z}';
    // var mapUrl = 'http://webst04.is.autonavi.com/appmaptile?x={x}&y={y}&z={z}&lang=zh_cn&size=1&scale=1&style=6';
    // map = null
    // if (map == null) {
    //   // 初始化一个地图
    //   map = L.map(mapBox.current, {
    //     preferCanvas: true,
    //     fullscreenControl: true, // 加载全屏插件配置
    //     zoomControl: false, // 地图缩放控制按钮
    //     doubleClickZoom: false, // 双击缩放地图
    //     dragging: true, // 拖拽地图
    //     keyboard: true, // 使用键盘左右键移动地图
    //     // drawControl: true,
    //     scrollWheelZoom: true, // 用滚轮控制住缩放
    //     inertia: false, // 拖动惯性
    //     zoomAnimation: true, // 缩放动画
    //     // renderer: new L.SelfCanvas(),
    //   }).setView([30.572262, 104.066513], 6);
    //   const mapSou = L.tileLayer(mapUrl2, {
    //     maxZoom: 18,
    //     minZoom: 6,
    //     subdomains: [1, 2, 3, 4]
    //   }).addTo(map);

    //   this.setState({
    //     mapSou
    //   })
    //   // minimap
    //   // const gaodeMini = new L.TileLayer(mapUrl, {
    //   //   maxZoom: 13,
    //   //   minZoom: 3,
    //   //   subdomains: [1, 2, 3, 4]
    //   // });
    //   // 比例尺
    //   L.control.scale({
    //     imperial: false
    //   }).addTo(map);
    //   // 缩放按钮
    //   L.control.zoom({
    //     position: 'bottomright'
    //   }).addTo(map)
    // }

    // leaflet-draw
    // const editableLayers = new L.FeatureGroup();
    // map.addLayer(editableLayers);
    // const bounds = map.getBounds()
    // console.log(bounds, 'bounds')
    // map.on('zoomend', (e) => {
    //   console.log(e.target._zoom, 'zoomend')
    //   console.log(e.target._lastCenter, 'zoomend')
    // })
    // map.on('moveend', (e) => {
    //   console.log(e, 'moveend')
    // })
    // const { groupControlLayer } = this.state;
    // groupControlLayer.addTo(map);
    // groupControlLayer.addOverlay(editableLayers, '绘制图层');
    // const { onRef } = this.props;
    // if (onRef) {
    //   onRef(this);
    // }
  }

  // 切换卫星地图
  selectMap = (val) => {
    const { mapSou } = this.state;
    const Url = val ? satelliteMapUrl : mapUrl
    mapSou.setUrl(Url)
  }

  // 显示频谱地图，能量轨迹，网格占用度
  showMapElement = async (val, all) => {
    const { getSpectrumMap, getTrace } = this.props;
    switch (val) {
      case 'a':
        if (all.includes('a')) {
          const spectrumMapData = await getSpectrumMap();
          const { datas, max, min, maxPosition } = spectrumMapData;
          this.frequencyMap({
            data: datas,
            maxPower: max,
            minPower: min,
            maxPosition,
            steps: 10
          })
        } else {
          this.frequencyMap({ show: false })
        }
        break;
      case 'b':
        if (all.includes('b')) {
          const traceData = await getTrace();
          const { maxIndex, maxPos, maxPower, minPower, position_Powers } = traceData
          const data = {
            data: position_Powers,
            maxPower,
            minPower
          }
          this.energyCircle(data)
        } else {
          this.energyCircle({ show: false })
        }
        break;
      case 'c':
        if (all.includes('c')) {
          const { position_NetOccuys } = gridData.data;
          this.energyRetangle({ 'data': position_NetOccuys })
        } else {
          this.energyRetangle({ 'show': false })
        }
        break;
      default:
        break;
    }

    console.log(val, all);
  }

  // 返回当前位置
  setMapView = (latlng, zoom = 0) => {
    if (!(latlng instanceof Array)) {
      return
    }
    let zoomSize = 0;
    if (!zoom) {
      zoomSize = map.getZoom();
    }
    if (map) {
      map.setView(latlng, zoomSize);
    }
  }
  // 频谱地图
  frequencyMap = ({
    data = [],
    maxPower = 120,
    minPower = 0,
    maxPosition = {},
    show = true,
    clickShow = true,
    popupAlertShow = false,
    steps = 1
  } = {}) => {
    const { frequencyMapLayer, groupControlLayer } = this.state;
    // 再次点击传入show=false则清除layer
    if (!show) {
      if (frequencyMapLayer) {
        frequencyMapLayer.clearLazyers();
        frequencyMapLayer.removeFrom(map);
      }
      groupControlLayer.removeLayer(frequencyMapLayer);
      // this.legend({ show, 'layer': frequencyMapLayer, 'legendName': '频谱', });
      return
    }
    if ((typeof data.features) === 'undefined' || !data.features.length) {
      notification.warning({
        message: '无数据',
        description: '频谱地图未查询到数据!',
        duration: 1.5
      })
      return
    }
    // 频谱地图数据
    const grid = data;
    // 计算最大值最小值
    const min = Math.floor(minPower);
    const max = Math.ceil(maxPower);
    colorScale.calcColorScale(max - min + 1);
    const colorGradient = [];
    for (let i = min; i <= max; i += steps) {
      colorGradient.push(colorScale.getColor(minPower, maxPower, i));
    }
    if (!map.getBounds().contains([maxPosition.x, maxPosition.y])) {
      const p = coordtransform.wgs84togcj02(maxPosition.x, maxPosition.y);
      this.setMapView([p[1], p[0]], 8);
    }
    const choroplethLayer = L.choropleth(grid, {
      valueProperty: "power",
      colors: colorGradient,
      steps: (max - min + 1),
      mode: 'k',
      style: {
        color: '#fff',
        weight: 0,
        fillOpacity: 0.6
      }
    });
    const popup = L.popup({
      minWidth: 240,
      className: 'leaf-alert'
    });
    const that = this;
    // 暂时注释掉
    choroplethLayer.on('click', (e) => {
      const popupContent = `<span style='color:#686868;'>当前功率：${e.layer.feature.properties.power.toFixed(2)}dBuV</span>`
      popup.setLatLng(e.latlng)
      popup.setContent(popupContent);
      popup.openOn(map);

    });
    // 经纬度
    frequencyMapLayer.addLayer(choroplethLayer);
    frequencyMapLayer.addTo(map);

    // 添加到图层控制器
    that.state.groupControlLayer.addOverlay(that.state.frequencyMapLayer, "频谱地图").addTo(map);
  }

  // 网格化占用度-矩形
  energyRetangle = ({ data, show = true, switchOver = true, rectangle = '网格化占用度' } = {}) => {
    const { energyRetangleLayer, groupControlLayer, energyRetanglePop } = this.state;
    // 再次点击传入show=false则清除layer
    if (!show) {
      energyRetangleLayer.clearLayers();
      energyRetangleLayer.removeFrom(map);
      groupControlLayer.removeLayer(energyRetangleLayer);
      if (energyRetanglePop.isOpen()) {
        energyRetanglePop.removeFrom(map);
      }
      // this.legend({ show, 'layer': energyRetangleLayer, 'legendName': '网格占用度', });
      return
    }
    const data_ = [];
    const datasArr = Object.entries(data);
    datasArr.forEach(item => {
      let tmp = item[0].replace(/=/g, ':');
      tmp = tmp.replace(/X/g, '"X"');
      tmp = tmp.replace(/Y/g, '"Y"');
      tmp = JSON.parse(tmp);
      data_.push({
        Lng: tmp.X,
        Lat: tmp.Y,
        Value: item[1]
      });
    });
    const energy = data_;
    let minPower;
    let maxPower;
    // 点击色柱中的切换进行判断
    if (!switchOver) {
      minPower = 0;
      maxPower = 120;
    } else {
      minPower = energy[0] ? energy[0].Value : 0;
      maxPower = minPower;
      for (let i = 0; i < data_.length; i++) {
        const value = Number(energy[i].Value);
        if (value > maxPower) {
          maxPower = value;
        }
        if (value <= minPower) {
          minPower = value;
        }
      }
    }
    // if (arguments[3] === '系统覆盖情况') {
    // 	maxPower = 100;
    // 	minPower = 0;
    // }
    colorScale.calcColorScale(Math.ceil(maxPower) - Math.floor(minPower) + 1);
    const len = energy.length;
    for (let i = 0; i < len; i++) {
      const p = coordtransform.wgs84togcj02(energy[i].Lng, energy[i].Lat);
      const pCentre = new LatLon(p[1], p[0]);
      const p1 = pCentre.rhumbDestinationPoint(125, 270);
      const p2 = pCentre.rhumbDestinationPoint(125, 180);
      const d = map.distance([pCentre.lat, pCentre.lon], [p1.lat, p1.lon]);
      const c = colorScale.getColor(minPower, maxPower, energy[i].Value);
      const bounds = [
        [pCentre.lat * 2 - p2.lat, p1.lon],
        [p2.lat, pCentre.lon * 2 - p1.lon]
      ];

      const energy1 = L.rectangle(bounds, {
        color: c,
        fillOpacity: 0.6,
        weight: 0
      });
      energy1.occupy = energy[i].Value;
      energyRetangleLayer.addLayer(energy1);
      // energy1.on('click', () => {
      //   const occupy = energy1.occupy;
      //   const str = `<span style='color:#fff;'>${rectangle}：${occupy}%</span>`
      //   energyRetanglePop.setLatLng(energy1.getCenter())
      //   energyRetanglePop.setContent(str);
      //   energyRetanglePop.openOn(map);
      //   this.$emit('gridOccupyClick', this)
      // });
    }
    if (!map.getBounds().contains([data_[0].Lng, data_[0].Lat])) {
      this.setMapView([data_[0].Lat, data_[0].Lng], 10);
    }
    energyRetangleLayer.addTo(map);
    groupControlLayer.addOverlay(energyRetangleLayer, rectangle);
  }

  // 能量轨迹
  energyCircle ({ data = [], maxPower = 120, minPower = 0, show = true } = {}) {
    const { energyCircleLayer, groupControlLayer } = this.state;
    const { handleClickTrace } = this.props;
    if (!show) {
      if (energyCircleLayer) {
        energyCircleLayer.clearLayers();
        energyCircleLayer.removeFrom(map);
      }
      groupControlLayer.removeLayer(energyCircleLayer);
      return
    }
    if (!data.length) {
      notification.warning({
        message: '无数据',
        description: '能量轨迹未查询到数据!',
        duration: 1.5
      })
      return
    }
    // 再次点击传入show=false则清除layer
    // const that = this;
    const max = Math.ceil(maxPower);
    const min = Math.floor(minPower);
    colorScale.calcColorScale(max - min + 1);
    const centerIndex = Math.ceil(data.length / 2);
    data.sort((a, b) => a.power > b.power);
    for (let i = 0; i < data.length; i++) {
      if (isNaN(data[i].position.x) || isNaN(data[i].position.y)) {
        continue;
      }
      const p = coordtransform.wgs84togcj02(data[i].position.x, data[i].position.y);
      if (i === centerIndex && !map.getBounds().contains([p[1], p[0]])) {
        this.setMapView([p[1], p[0]], 8);
      }
      const c = colorScale.getColor(minPower, maxPower, data[i].power);
      const circlePoint = L.circleMarker([p[1], p[0]], {
        color: c,
        radius: 5,
        fillOpacity: 1,
        isEnergy: true,
        power: data[i].power,
      });
      energyCircleLayer.addLayer(circlePoint);
      // 点击能量轨迹点
      circlePoint.on('click', (e) => {
        const { latlng: { lat, lng } } = e;
        const point = {
          lat: lat.toFixed(5),
          lon: lng.toFixed(5)
        }
        handleClickTrace(point);
      })
    }
    // add the energy circle's layer to the map
    energyCircleLayer.addTo(map);
    // add the group control layer for the energy circle to the map
    groupControlLayer.addOverlay(energyCircleLayer, "能量轨迹").addTo(map);
  }

  // 显示频谱地图
  showPinpu = () => {
    const { data } = testData
    const { datas, max, min, maxPosition } = data;
    this.frequencyMap({
      data: datas,
      maxPower: max,
      minPower: min,
      maxPosition,
      steps: 10
    })
  }
  // 显示能量轨迹
  showNengliang = () => {
    const { data } = energyData
    const { maxIndex, maxPos, maxPower, minPower, position_Powers } = data
    const param = {
      data: position_Powers,
      maxPower,
      minPower
    }
    this.energyCircle(param)
  }
  // ================================================================================================================
  render () {
    // const { cityList } = this.props;
    return (
      <div className={style.leafletMap}>
        <div ref={this.mapBox} className={style.maps}></div>
        <div>
          <Button onClick={this.showPinpu}>频谱地图</Button>
          <Button onClick={this.showNengliang}>能量轨迹</Button>
        </div>
        {/* <div className={style.bar}>
        </div> */}
      </div>

    )
  }
}
export default Leaflet

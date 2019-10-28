import React, { Component } from 'react'
import RecentNews from '../../components/HomePage/RecentNews'
import Hobby from '../../components/HomePage/Hobby'
import HomeFooter from '../../components/HomePage/HomeFooter'
// import RightContent from '../../components/HomePage/RightContent'
// import ArticleOverviewR from '../../components/HomePage/ArticleOverviewR'
// import ArticleOverviewL from '../../components/HomePage/ArticleOverviewL'
// import GaodeMap from '../../components/Common/GaodeMap'
import { Carousel, Icon, Pagination } from 'antd';
import ScrollReveal from 'scrollreveal'
import style from './index.less';
// import '../../assets/style/animate.less'

import banner1 from '../../assets/images/new1.jpg'
import banner2 from '../../assets/images/new2.jpg'
import banner3 from '../../assets/images/new3.jpg'
function onShowSizeChange (current, pageSize) {
  console.log(current, pageSize);
}

export const { Provider, Consumer } = React.createContext()

// 最近四条新博客
const recentNewsData = [{
  title: "Europe Street beat",
  description: "www.instagram.com",
  img: banner1
},
{
  title: "Europe Street beat",
  description: "www.instagram.com",
  img: banner2
},
{
  title: "Europe Street beat",
  description: "www.instagram.com",
  img: banner3
}, {
  title: "Europe Street beat",
  description: "www.instagram.com",
  img: banner1
}
]
var config = {
  reset: true, // 滚动鼠标时，动画开关（如果为true, 动画可以执行n次）
  origin: 'top', // 动画开始的方向
  duration: 1000, // 动画持续时间
  distance: '50%',
  // container: document.getElementById('bigBox'),
  delay: 50, // 延迟
  // rotate: { x: 0, y: 0, z: 0 }, // 过度到0的初始角度
  opacity: 0, // 初始透明度
  // scale: 0.9, //缩放
  easing: 'ease', // 动画效果'ease', 'ease-in-out'，'linear'...
};
var config1 = {
  reset: true, // 滚动鼠标时，动画开关（如果为true, 动画可以执行n次）
  origin: 'left', // 动画开始的方向
  duration: 1000, // 动画持续时间
  distance: '20%',
  // container: document.getElementById('bigBox'),
  delay: 50, // 延迟
  interval: 300,
  // rotate: { x: 0, y: 0, z: 0 }, // 过度到0的初始角度
  opacity: 0, // 初始透明度
  // scale: 0.9, //缩放
  easing: 'ease', // 动画效果'ease', 'ease-in-out'，'linear'...
};


class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      theme: 'light',
      poemData: {
        title: '临江仙',
        poemWord: "———— 点滴芭蕉心欲碎，声声催忆当初。欲眠还展旧时书。鸳鸯小字，犹记手生疏。倦眼乍低缃帙乱，重看一半模糊。幽窗冷雨一灯孤。料应情尽，还道有情无？",
      }
    }
    this.carousel = null;
  }
  // 切换banner添加动画
  beforeChange = (from, to) => {
    let element = document.querySelectorAll('.animateBox')
    element[from].classList.remove('fadeInUp')
    element[to].classList.add('fadeInUp')
  }
  componentDidMount () {
    const scrollReveal = ScrollReveal()
    let box = document.getElementById('bigBox')
    scrollReveal.reveal('.animate', { ...config, container: box });
    scrollReveal.reveal('.animateLeft', { ...config1, container: box, delay: 50 });
  }
  render () {
    const { poemData } = this.state
    return (
      <Provider value={this.state}>
        <div className={style.container} id='bigBox'>
          {/* <div>
            <GaodeMap />
          </div> */}
          <div className={style.mainBox}>
            {/* banner */}
            <div className={style.banner}>
              <Carousel effect="fade" ref={e => { this.carousel = e }} beforeChange={this.beforeChange}>
                <div>
                  <div className={`${style.bannerText} animated fadeInUp animateBox`}>
                    The road is blocked and long, the line will come
                  </div>
                  <img style={{ height: '100%', width: '100%' }} src={banner1} alt="" />
                </div>
                <div>
                  <div className={`${style.bannerText} animated animateBox`}>
                    The road is blocked and long, the line will come
                  </div>
                  <img style={{ height: '100%', width: '100%' }} src={banner2} alt="" />
                </div>
                <div>
                  <div className={`${style.bannerText} animated animateBox`}>
                    The road is blocked and long, the line will come
                  </div>
                  <img style={{ height: '100%', width: '100%' }} src={banner3} alt="" />
                </div>
              </Carousel>
            </div>

            <div className={style.contentBox}>
              <div className={style.leftContent}>
                {/* 爱好 */}
                <Hobby />
                {/* 最近动态 */}
                <RecentNews history={this.props.history} recentNewsData={recentNewsData} />
                {/* home footer */}
                <HomeFooter poemData={poemData} />
              </div>
              {/* 动态列表 */}
              {/* <div className={style.articalList}>
                  <div className={style.articalItem, 'animate'} >
                    <ArticleOverviewR />
                  </div>
                  <div className={style.articalItem, 'animate'} >
                    <ArticleOverviewL />
                  </div>
                  <div className={style.articalItem, 'animate'} >
                    <ArticleOverviewR />
                  </div>
                  <div className={style.articalItem, 'animate'} >
                    <ArticleOverviewL />
                  </div>
                </div> */}
              {/* 分页组件 */}
              {/* <div className={style.paging}>

                  <Pagination
                    showSizeChanger
                    onShowSizeChange={onShowSizeChange}
                    defaultCurrent={3}
                    total={50}
                  />
                </div> */}

              {/* 右侧内容 */}
              {/* <div className={style.rightContent}>

                <RightContent />
              </div> */}
            </div>
          </div>

        </div>
      </Provider >
    )
  }
  goLeft = () => {
    this.carousel.prev()
  }
  goRight = () => {
    this.carousel.next()
  }
}
export default HomePage;

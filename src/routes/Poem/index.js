import React, { Component } from 'react'
import BlogList from '../../components/HomePage/RecentNews'
import Footer from '../../components/HomePage/HomeFooter'
import ScrollReveal from 'scrollreveal'
import { getBlogList } from '../../utils/api'

import style from './index.less'
import banner1 from '../../assets/images/new1.jpg'
import banner2 from '../../assets/images/new2.jpg'
import banner3 from '../../assets/images/new3.jpg'

// const scrollReveal = ScrollReveal()
// 最近四条新博客
const recentNewsData = [{
  title: "Europe Street beat",
  description: "www.instagram.com",
  img: banner1
}, {
  title: "Europe Street beat",
  description: "www.instagram.com",
  img: banner2
}, {
  title: "Europe Street beat",
  description: "www.instagram.com",
  img: banner3
}, {
  title: "Europe Street beat",
  description: "www.instagram.com",
  img: banner1
}, {
  title: "Europe Street beat",
  description: "www.instagram.com",
  img: banner1
}, {
  title: "Europe Street beat",
  description: "www.instagram.com",
  img: banner2
}, {
  title: "Europe Street beat",
  description: "www.instagram.com",
  img: banner3
}, {
  title: "Europe Street beat",
  description: "www.instagram.com",
  img: banner1
}, {
  title: "Europe Street beat",
  description: "www.instagram.com",
  img: banner1
}, {
  title: "Europe Street beat",
  description: "www.instagram.com",
  img: banner2
}, {
  title: "Europe Street beat",
  description: "www.instagram.com",
  img: banner3
}, {
  title: "Europe Street beat",
  description: "www.instagram.com",
  img: banner1
}]
var config = {
  reset: false, // 滚动鼠标时，动画开关（如果为true, 动画可以执行n次）
  origin: 'left', // 动画开始的方向
  duration: 1000, // 动画持续时间
  distance: '20%',
  // container: document.getElementById('bigBox'),
  // delay: 150, // 延迟
  // rotate: { x: 0, y: 0, z: 0 }, // 过度到0的初始角度
  // opacity: 0, // 初始透明度
  interval: 200,
  // scale: 0.9, //缩放
  easing: 'ease', // 动画效果'ease', 'ease-in-out'，'linear'...
};
// const scrollReveal = ScrollReveal()
export default class Poem extends Component {
  constructor(props) {
    super(props)
    this.state = {
      scrollReveal: ScrollReveal(),
      poemData: {
        title: '菩萨蛮',
        poemWord: "———— 萧萧几叶风兼雨，离人偏识长更苦。欹枕数秋天，蟾蜍下早弦。夜寒惊被薄，泪与灯花落。无处不伤心，轻尘在玉琴。",
      },
      poem: "把叹息藏在心里面，成小小的核。\n把慌乱丢进泥土，再掩盖一些尘沙。\n也许心疼会慢慢发芽，长出枝叶。\n光浸润着树冠，影带走流年。\n我喜欢在苹果树下度过这个晨昏。\n我自说自话，高傲又怯弱。\n是梦呓还是禅语，痛也能结痂。\n青涩就要长成甜蜜，你在另一个地方能否听见。\n飞鸟曾来此歇息，又惊飞。\n一定有河流经过，我感觉到它汹涌的忧伤。\n盛夏过去苹果就成熟，结平安的果，斟满孤独的甜浆。\n树叶在哗哗的笑，这么开心。\n你可以放心地一饮而尽，起伏不已的只是一阵风啊！\n让香醇伴你，星子传递我温热的感伤。\n无论平静还是喧嚣，曾落花如雨，入你怀抱。\n我喜欢这寂寞的果园，在苹果树下，让你回首来时路，\n再把波动和缤纷轻轻怀想。"
    }
  }
  componentDidMount () {
    getBlogList().then(res => {
      console.log(res);

    })
    const { scrollReveal } = this.state
    let box = document.getElementById('bigBox')
    scrollReveal.reveal('.animateLeft', {
      ...config,
      container: box,
    });
  }
  render () {
    const { poem, poemData } = this.state
    return (
      <div className={style.poem} id='bigBox'>
        <div className={style.topBox}>
          <h1 className={style.title}>苹果树下</h1>
          <div className={style.content}>
            {poem}
          </div>
        </div>
        <div className={style.contentBox}>
          <BlogList history={this.props.history} recentNewsData={recentNewsData} />
          <Footer poemData={poemData} />
        </div>
      </div>
    )
  }
}

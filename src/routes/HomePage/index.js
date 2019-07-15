import React, { Component } from 'react'
import RecentNews from '../../components/HomePage/RecentNews'
import RightContent from '../../components/HomePage/RightContent'
import ArticleOverviewR from '../../components/HomePage/ArticleOverviewR'
import ArticleOverviewL from '../../components/HomePage/ArticleOverviewL'
import { Carousel, Icon, Pagination } from 'antd';
import style from './index.less';

function onShowSizeChange (current,pageSize) {
  console.log(current, pageSize);
}
class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
    this.carousel = null;
  }
  render () {
    return (
      <div className={style.container}>
        <div className={style.mainBox}>
          {/* banner */}
          <div className={style.banner}>
            <Icon onClick={this.goLeft} type="left" className={[style.left, style.icon]} />
            <Carousel autoplay ref={e => { this.carousel = e }}>
              <div><h3>1</h3></div>
              <div><h3>2</h3></div>
              <div><h3>3</h3></div>
              <div><h3>4</h3></div>
            </Carousel>
            <Icon onClick={this.goRight} type="right" className={[style.right, style.icon]} />
          </div>

          <div className={style.contentBox}>
            <div className={style.leftContent}>
              {/* 最近三个动态 */}
              <RecentNews />
              {/* 动态列表 */}
              <div className={style.articalList} >
                <div className={style.articalItem} >
                  <ArticleOverviewR />
                </div>
                <div className={style.articalItem} >
                  <ArticleOverviewL />
                </div>
                <div className={style.articalItem} >
                  <ArticleOverviewR />
                </div>
                <div className={style.articalItem} >
                  <ArticleOverviewL />
                </div>
              </div>
              {/* 分页组件 */}
              <div className={style.paging}>

                <Pagination
                  showSizeChanger
                  onShowSizeChange={onShowSizeChange}
                  defaultCurrent={3}
                  total={50}
                />
              </div>
            </div>
            {/* 右侧内容 */}
            <div className={style.rightContent}>
              <RightContent />
            </div>
          </div>
        </div>
      </div>
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

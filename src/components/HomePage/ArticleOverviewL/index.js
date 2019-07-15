import React, { Component } from 'react'
import style from './index.less'
import new2 from '../../../assets/images/new2.jpg'
export default class ArticleOverviewL extends Component {
  render () {
    return (
      <div className={style.articleOverviewL}>
        <div className={style.title}>
          赤壁
          </div>
        <div className={style.right}>
          折戟沉沙铁未销，自将磨洗认前朝。东风不与周郎便，铜雀春森锁二乔。
        </div>
        <div className={style.left}>
          <img src={new2} alt="" />
        </div>
      </div>
    )
  }
}

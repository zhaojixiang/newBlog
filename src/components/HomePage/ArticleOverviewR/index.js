import React, { Component } from 'react'
import style from './index.less'
import new2 from '../../../assets/images/new2.jpg'
export default class ArticleOverviewR extends Component {
  render () {
    return (
      <div className={style.articleOverviewR}>
        <div className={style.left}>
          <img src={new2} alt="" />
        </div>
        <div className={style.title}>
          qwewqeq
          </div>
        <div className={style.right}>
          qwewqe
        </div>
      </div>
    )
  }
}

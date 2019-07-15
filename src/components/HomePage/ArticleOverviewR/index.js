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
          相思
          </div>
        <div className={style.right}>
          红豆生南国，春来发几枝。愿君多采颉，此物最相思。
        </div>
      </div>
    )
  }
}

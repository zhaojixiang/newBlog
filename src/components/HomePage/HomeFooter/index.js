import React, { Component } from 'react'
import style from './index.less'
export default class HomeFooter extends Component {
  render () {
    const { poemData } = this.props
    const { poemWord, title } = poemData
    return (
      <div className={style.homeFooter}>
        <h1 className={style.homeTitle}>
          {title}
        </h1>
        <div>
          {poemWord}
        </div>
      </div>
    )
  }
}

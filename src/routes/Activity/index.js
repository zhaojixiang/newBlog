import React, { Component } from 'react'
import MakeAFortune from '../../components/Common/MakeAFortune'
import style from './index.less'
export default class Activity extends Component {

  render () {
    return (
      <div className={style.Activity}>
        <MakeAFortune />
      </div>
    )
  }

}

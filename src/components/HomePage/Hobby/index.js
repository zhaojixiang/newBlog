import React, { Component } from 'react'
import { Icon } from 'antd'
import Zoom from 'react-reveal/Zoom'
import style from './index.less'

export default class Hobby extends Component {
  render () {
    return (
      <div className={style.hobby}>
        <h1 className={style.hobbyTitle}>HOBBY</h1>
        <div className={style.hobbyContent}>

          <div className={style.itemHobby}>
            {/* <Zoom delay='500'> */}
            <div className={`${style.icon} animate`}>
              <Icon type="apple" />
            </div>
            {/* </Zoom> */}
            <div className={style.content}>
              <h2 className={style.title}>APPLE</h2>
              <div className={style.text}>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</div>
            </div>
          </div>

          <div className={style.itemHobby}>
            {/* <Zoom delay='500'> */}
            <div className={`${style.icon} animate`}>
              <Icon type="camera" />
            </div>
            {/* </Zoom> */}
            <div className={style.content}>
              <h2 className={style.title}>APPLE</h2>
              <div className={style.text}>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</div>
            </div>
          </div>
          <div className={style.itemHobby}>
            <div className={`${style.icon} animate`}>
              <Icon type="dribbble" />
            </div>
            <div className={style.content}>
              <h2 className={style.title}>APPLE</h2>
              <div className={style.text}>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</div>
            </div>
          </div>
          <div className={style.itemHobby}>
            <div className={`${style.icon} animate`}>
              <Icon type="sketch" />
            </div>
            <div className={style.content}>
              <h2 className={style.title}>MONEY</h2>
              <div className={style.text}>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

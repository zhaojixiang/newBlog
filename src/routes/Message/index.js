import React, { Component } from 'react'
import { Card, Row, Col } from 'antd';
import style from './index.less'

import wanju from '../../assets/images/哑铃弯举.webp'
import chuishi from '../../assets/images/锤式弯举.webp'
import jiaoti from '../../assets/images/交替弯举.webp'
import jingdianL from '../../assets/images/经典弯举L.webp'
import swotui from '../../assets/images/水平卧推.webp'
import sfeiniao from '../../assets/images/水平飞鸟.webp'
import twotui from '../../assets/images/臀桥卧推.webp'
import tfeiniao from '../../assets/images/臀桥飞鸟.webp'
import fhuachuan from '../../assets/images/俯卧撑划船.webp'

const { Meta } = Card;
const fitness = [
  {
    title: '星期一 肱二头肌',
    data: [
      {
        title: '哑铃弯举',
        link: 'https://www.hiyd.com/dongzuo/1544/',
        image: wanju
      },
      {
        title: '锤式弯举',
        link: 'https://www.hiyd.com/dongzuo/1545/',
        image: chuishi
      },
      {
        title: '交替弯举',
        link: 'https://www.hiyd.com/dongzuo/1546/',
        image: jiaoti
      },
      {
        title: '经典弯举',
        link: 'https://www.hiyd.com/dongzuo/1547/',
        image: jingdianL
      },
    ]
  },
  {
    title: '星期三 胸肌',
    data: [
      {
        title: '水平卧推',
        link: 'https://www.hiyd.com/dongzuo/1501/',
        image: swotui
      },
      {
        title: '水平飞鸟',
        link: 'https://www.hiyd.com/dongzuo/1503/',
        image: sfeiniao
      },
      {
        title: '臀桥卧推',
        link: 'https://www.hiyd.com/dongzuo/1502/',
        image: twotui
      },
      {
        title: '臀桥飞鸟',
        link: 'https://www.hiyd.com/dongzuo/1505/',
        image: tfeiniao
      },
      {
        title: '俯卧撑划船',
        link: 'https://www.hiyd.com/dongzuo/1504/',
        image: fhuachuan
      },
    ]
  }
]
export default class Message extends Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }
  render () {
    return (
      <div className={style.message}>
        <h1 className={style.fitnessTitle}>健身计划</h1>
        {
          fitness.map(item => {
            return (
              <div key={item.title}>
                <h2>{item.title}</h2>
                <Row>
                  {
                    item.data.map(it => {
                      return <Col span={6} key={it.title}>
                        <Card
                          hoverable
                          style={{ width: 240 }}
                          cover={<img alt="example" src={it.image} />}
                        >
                          <Meta title={it.title} description={it.link} />
                        </Card>
                      </Col>
                    })
                  }
                </Row>
              </div>
            )
          })
        }
      </div>
    )
  }
}

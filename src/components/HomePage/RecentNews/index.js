import React, { Component } from 'react'
import { Card } from 'antd';
import style from './index.less'
import new1 from '../../../assets/images/new1.jpg'
import new2 from '../../../assets/images/new2.jpg'
import new3 from '../../../assets/images/new3.jpg'

const { Meta } = Card;

export default class RecentNews extends Component {
  render () {
    return (
      <div className={style.RecentNews}>
        <Card
          hoverable
          style={{ width: '30%' }}
          cover={<img alt="example" src={new1} />}
        >
          <Meta title="Europe Street beat" description="www.instagram.com" />
        </Card>
        <Card
          hoverable
          style={{ width: '30%' }}
          cover={<img alt="example" src={new2} />}
        >
          <Meta title="Europe Street beat" description="www.instagram.com" />
        </Card>
        <Card
          hoverable
          style={{ width: '30%' }}
          cover={<img alt="example" src={new3} />}
        >
          <Meta title="Europe Street beat" description="www.instagram.com" />
        </Card>
      </div>
    )
  }
}

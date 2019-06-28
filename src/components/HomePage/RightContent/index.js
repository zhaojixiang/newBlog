import React, { Component } from 'react'
import style from './index.less'
import new1 from '../../../assets/images/new1.jpg'
import { Card } from 'antd';
const { Meta } = Card;

export default class RightContent extends Component {
  render () {
    return (
      <div>
        <Card
          hoverable
          style={{ width: '200px' }}
          cover={<img alt="example" src={new1} />}
        >
          <Meta title="Europe Street beat" description="www.instagram.com" />
        </Card>
        <Card
          hoverable
          style={{ width: '200px' }}
          cover={<img alt="example" src={new1} />}
        >
          <Meta title="Europe Street beat" description="www.instagram.com" />
        </Card>
        <Card
          hoverable
          style={{ width: '200px' }}
          cover={<img alt="example" src={new1} />}
        >
          <Meta title="Europe Street beat" description="www.instagram.com" />
        </Card>
        <Card
          hoverable
          style={{ width: '200px' }}
          cover={<img alt="example" src={new1} />}
        >
          <Meta title="Europe Street beat" description="www.instagram.com" />
        </Card>
      </div>
    )
  }
}

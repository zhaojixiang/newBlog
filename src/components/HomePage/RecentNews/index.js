import React, { Component } from 'react'
import { Card } from 'antd';
import style from './index.less'
import new1 from '../../../assets/images/new1.jpg'
import new2 from '../../../assets/images/new2.jpg'
import new3 from '../../../assets/images/new3.jpg'

const { Meta } = Card;

export default class RecentNews extends Component {
  constructor(props) {
    super(props)
    this.state = {
      recentNewsData: [{
        title: "Europe Street beat",
        description: "www.instagram.com",
        img: new1
      },
      {
        title: "Europe Street beat",
        description: "www.instagram.com",
        img: new2
      },
      {
        title: "Europe Street beat",
        description: "www.instagram.com",
        img: new3
      }
      ]
    }
  }
  render () {
    return (
      <div className={style.RecentNews}>
        {
          this.state.recentNewsData.map(item =>
            <Card
              className={style.cardBox}
              hoverable
              cover={<img alt="example" src={item.img} />}
            >
              <Meta title={item.title} description={item.description} />
            </Card>
          )
        }
      </div>
    )
  }
}

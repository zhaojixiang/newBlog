import React, { Component } from 'react'
import { Card } from 'antd';
import style from './index.less'

const { Meta } = Card;

class RecentNews extends Component {
  constructor(props) {
    super(props)
  }
  jumpToBlogDetail = (item) => {
    this.props.history.push({
      pathname: '/main/blogdetail',
      state: {
        ...item
      }
    })
  }
  render () {
    const { recentNewsData } = this.props
    return (
      <div className={style.RecentNews}>

        <h1 className={style.recentTitle}>RECENT BLOG</h1>
        <div className={style.recentList}>
          {/* // className={`${style.cardBox} animateLeft${index}`} */}
          {
            recentNewsData ? recentNewsData.map((item, index) =>
              <Card
                onClick={() => this.jumpToBlogDetail(item)}
                key={index}
                className={`${style.cardBox} animateLeft`}
                hoverable
                cover={<img alt="example" src={item.img} className={style.topimg} />}
              >
                <Meta title={item.title} description={item.description} />
              </Card>
            ) : null
          }
        </div>
      </div >
    )
  }
}
export default RecentNews
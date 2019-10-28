import React, { Component } from 'react'
import style from './index.less'
export default class BlogDetail extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currentBlog: null
    }
  }
  componentDidMount () {
    // console.log(this.props.location.state);
    const { state } = this.props.location
    this.setState({
      currentBlog: state
    })
  }
  render () {
    const { currentBlog } = this.state
    return (
      <div className={style.blogDetail}>
        {
          currentBlog ? <div className={style.contentBox}>
            <img className={`${style.blgImg} animated rotateInDownLeft`} src={currentBlog.img} alt="" />
            <div className={style.content}>
              <h2 className={style.title}>ABOUT COMPANY</h2>
              <div>
                Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Quisque sit amet efficitur nih. Interdum et malesuada fames ac ante ipsum primis in faucibus interda et malesuada parturient.Quisque sit amet efficitur nih. Interdum et malesuada fames ac ante ipsum primis in faucibus interda et malesuada parturient.
              </div>
            </div>
          </div> : null

        }

      </div>
    )
  }
}

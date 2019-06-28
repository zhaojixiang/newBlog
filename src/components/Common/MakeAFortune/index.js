import React, { Component } from 'react'
import { Button } from 'antd'

export default class MakeAFortune extends Component {
  constructor(props) {
    super(props)
    this.state = {
      moneyArr: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31', '32', '33'],
      lastNum: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16'],
      backupArr: [],
      temporary: '',
      money: [],
      shuangseqiu: {
        shuangseqiu0: '',
        shuangseqiu1: '',
        shuangseqiu2: '',
        shuangseqiu3: '',
        shuangseqiu4: '',
        shuangseqiu5: '',
        shuangseqiu6: '',
        shuangseqiu7: '',
      }
    }
  }
  // 取随机数方法
  sendNum = (arr) => {
    return arr[Math.floor(Math.random() * arr.length)]
  }
  removeItem = (val) => {
    const { backupArr } = this.state
    const index = backupArr.indexOf(val);
    if (index > -1) {
      backupArr.splice(index, 1);
    }
  }
  // 摇号
  addMoney = () => {
    this.setState({
      shuangseqiu: {}
    })
    this.start()
  }
  // 尾号
  getLast = (num) => {
    let timer = setInterval(() => {
      const a = this.sendNum(this.state.lastNum)
      console.log(a, 'ppp');

      let name = 'shuangseqiu' + num
      this.setState((preState) => ({
        shuangseqiu: {
          ...preState.shuangseqiu,
          [name]: a,
        }
      }))
    }, 200)
    setTimeout(() => {
      clearInterval(timer)
    }, 3000)
  }
  // 开始摇号
  start = async (num = 0) => {
    console.log(num, ';;;')
    let timer, timeout;
    clearInterval(timer)
    clearTimeout(timeout)
    const { moneyArr, backupArr } = this.state
    // 备份大数组
    await this.setState({
      backupArr: [...moneyArr]
    })
    timer = setInterval(() => {
      const a = this.sendNum(this.state.backupArr)
      let name = 'shuangseqiu' + num
      this.setState((preState) => ({
        shuangseqiu: {
          ...preState.shuangseqiu,
          [name]: a,
        }
      }))
    }, 200)
    timeout = setTimeout(() => {
      clearInterval(timer)
      if (num == 6) {
        this.getLast(num)
        return
      }
      this.start(++num)
    }, 1000)
  }
  componentDidMount () {
    const money = this.sendNum(this.state.moneyArr);
    console.log(money)
  }
  render () {
    return (
      <div>
        <Button onClick={this.addMoney}>摇号</Button>
        <div>{this.state.shuangseqiu.shuangseqiu0}</div>
        <div>{this.state.shuangseqiu.shuangseqiu1}</div>
        <div>{this.state.shuangseqiu.shuangseqiu2}</div>
        <div>{this.state.shuangseqiu.shuangseqiu3}</div>
        <div>{this.state.shuangseqiu.shuangseqiu4}</div>
        <div>{this.state.shuangseqiu.shuangseqiu5}</div>
        <div>{this.state.shuangseqiu.shuangseqiu6}</div>
      </div>
    )
  }
}

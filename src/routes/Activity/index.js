import React, { Component } from 'react'
// import MakeAFortune from '../../components/Common/MakeAFortune'
// import LeafletMap from '../../components/Common/Leaflet'
import { getFitnessProgram } from '../../utils/api'
import style from './index.less'

export default class Activity extends Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 9
    }
  }
  componentDidMount () {
    this.GetFitnessProgramData()
  }
  GetFitnessProgramData = async () => {
    const param = {
      name: 'zjx'
    }
    const res = await getFitnessProgram(param)
    console.log(res, '[pp');

  }
  render () {
    return (
      <div className={style.Activity}>
        {/* <LeafletMap /> */}
      </div>
    )
  }
}

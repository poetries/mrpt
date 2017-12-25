import React, { Component } from 'react'
import ReactEcharts from 'echarts-for-react'; 
import {chartOptions} from '@/config/chart'
export default class Chart extends Component {
  
  render() {
    return (
      <div style={{'margin': '-20px 0 0 10px'}}>
        <ReactEcharts 
          option={chartOptions} 
          style={{height: '350px', width: '100%'}}  
          className='react_for_echarts' />
      </div>
    )
  }
}

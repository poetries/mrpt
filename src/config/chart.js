import moment from 'moment'

export const chartOptions = {
    tooltip: {
        trigger: 'axis'
    },
    xAxis: {
        boundaryGap: false,
        data: [moment(new Date()).format('MM-DD'),'周二','周三','周四','周五','周六','周日']
	},
	legend: {
        data:['曝光']
    },
    yAxis : [
		{
			type : 'value',
			axisLine:{show : false},
			axisLabel:{textStyle:{color:'#000'}},
			axisTick : {length: 0}
		},
		{
			type : 'value',
			axisLine:{show : false},
			axisLabel:{textStyle:{color:'#000'}},
			axisTick : {length: 0},
			splitLine : {
				show : false
			}
		}
	],
    series: [
        {
			name:'曝光',
            type:'line',
            data:[1200, 1302, 1010, 1034, 190, 8230, 4520]
        }
    ]
};
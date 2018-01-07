import moment from 'moment'

export const chartOptions = {
    tooltip: {
        trigger: 'axis'
    },
    xAxis: {
        boundaryGap: false,
        axisLabel:{
            formatter:function (value){
                return moment(value).format('MM-DD')
            }
        },
		axisPointer: {
            snap: true,
            lineStyle: {
                color: '#004E52',
                opacity: 0.5,
                width: 1
            },
            label: {
                show: true,
                formatter: function (params) {
                    return moment(params.value).format('YYYYY-MM-DD').substr(1);
                },
                backgroundColor: '#004E52'
            },
            handle: {
                show: true,
				color: '#004E52',
				size:[22,22],
				margin:40
            }
        }
	},
    yAxis :{
        type : 'value',
        axisLine:{show : false},
        axisLabel:{textStyle:{color:'#000'}},
        axisTick : {length: 0},
        splitLine : {
            show : false
        }
	}
};
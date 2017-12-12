const formatDate = (val) =>{
    // 格式化时间
    let start = new Date(val)
    let y = start.getFullYear()
    let m = (start.getMonth() + 1) > 10 ? (start.getMonth() + 1) : '0' + (start.getMonth() + 1)
    let d = start.getDate() > 10 ? start.getDate() : '0' + start.getDate()
    return y + '-' + m + '-' + d
}
  
const mistiming = (sDate1, sDate2) =>{
    // 计算开始和结束的时间差
    let aDate, oDate1, oDate2, iDays
    aDate = sDate1.split('-')
    oDate1 = new Date(aDate[1] + '-' + aDate[2] + '-' + aDate[0])
    aDate = sDate2.split('-')
    oDate2 = new Date(aDate[1] + '-' + aDate[2] + '-' + aDate[0])
    iDays = parseInt(Math.abs(oDate1 - oDate2) / 1000 / 60 / 60 / 24)
    return iDays + 1
}
  
const countDate = (start, end) =>{
    // 判断开始和结束之间的时间差是否在90天内
    let days = mistiming(start, end)
    let stateT = days > 90 ? Boolean(0) : Boolean(1)
    return {
      state: stateT,
      day: days
    }
}

const timeForMat = (count) =>{
    // 拼接时间
    let time1 = new Date()
    time1.setTime(time1.getTime() - (24 * 60 * 60 * 1000))
    let Y1 = time1.getFullYear()
    let M1 = ((time1.getMonth() + 1) > 10 ? (time1.getMonth() + 1) : '0' + (time1.getMonth() + 1))
    let D1 = (time1.getDate() > 10 ? time1.getDate() : '0' + time1.getDate())
    let timer1 = Y1 + '' + M1 + '' + D1 // 当前时间
    let time2 = new Date()
    time2.setTime(time2.getTime() - (24 * 60 * 60 * 1000 * count))
    let Y2 = time2.getFullYear()
    let M2 = ((time2.getMonth() + 1) > 10 ? (time2.getMonth() + 1) : '0' + (time2.getMonth() + 1))
    let D2 = (time2.getDate() > 10 ? time2.getDate() : '0' + time2.getDate())
    let timer2 = Y2 + '' + M2 + '' + D2 // 之前的7天或者30天
    return {
        b: timer2,
        e: timer1
    }
}
  
const yesterday = (start, end) =>{
    // 校验是不是选择的昨天
    let timer = timeForMat(1)
    return timer
}
const getYesterday = () =>{ 
    var dd = new Date(); 
    dd.setDate(dd.getDate()-1);//获取AddDayCount天后的日期 
    var y = dd.getFullYear(); 
    var m = dd.getMonth()+1;//获取当前月份的日期 
    var d = dd.getDate(); 
    var time = y+""+m+""+d;
    return  {
        b:time,
        e:time
    }
}   
const getSevenDays = () =>{
    // 获取最近7天
    let timer = timeForMat(7)
    return timer
}
  
const getThirtyDays = () =>{
    // 获取最近30天
    let timer = timeForMat(30)
    return timer
}
  
export {
    getYesterday,
    getSevenDays,
    getThirtyDays
}
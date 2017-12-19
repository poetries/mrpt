import React, { Component } from 'react'
import { NavBar, Icon,Calendar,List,Switch} from 'antd-mobile';
import Chart from '@/components/Chart'

const now = new Date();
const extra = {
  '2017/07/15': { info: 'Disable', disable: true },
};
extra[+new Date(now.getFullYear(), now.getMonth(), now.getDate() + 5)] = { info: 'Disable', disable: true };
extra[+new Date(now.getFullYear(), now.getMonth(), now.getDate() + 6)] = { info: 'Disable', disable: true };
extra[+new Date(now.getFullYear(), now.getMonth(), now.getDate() + 7)] = { info: 'Disable', disable: true };
extra[+new Date(now.getFullYear(), now.getMonth(), now.getDate() + 8)] = { info: 'Disable', disable: true };
Object.keys(extra).forEach((key) => {
  const info = extra[key];
  const date = new Date(key);
  if (!Number.isNaN(+date) && !extra[+date]) {
    extra[+date] = info;
  }
});
export default class CustomerDetail extends Component {
  state = {
    show: false
  }
  renderBtn() {
    return (
      <List.Item arrow="horizontal"
        onClick={() => {
          document.getElementsByTagName('body')[0].style.overflowY = 'hidden';
          this.setState({
            show: true
          });
        }}
      >
        日期选择
      </List.Item>
    );
  }


  onConfirm = (startTime, endTime) => {
    document.getElementsByTagName('body')[0].style.overflowY = this.originbodyScrollY;
    this.setState({
      show: false,
      startTime,
      endTime,
    });
  }

  onCancel = () => {
    document.getElementsByTagName('body')[0].style.overflowY = this.originbodyScrollY;
    this.setState({
      show: false,
      startTime: undefined,
      endTime: undefined,
    });
  }
  render() {
    return (
      <div>
            <NavBar
                mode="dark"
                icon={<Icon type="left" />}
                onLeftClick={() => this.props.history.push(`/dashboard`)}
                rightContent='广点通'
                >{this.props.match.params.id}</NavBar>
            
            {/* <Chart /> */}

            <List className="calendar-list" style={{ backgroundColor: 'white' }}>
          {this.renderBtn('选择日期时间区间(快捷)', 'Select DateTime Range (Shortcut)', { pickTime: true, showShortcut: true })}
         
         
          {this.state.startTime &&
            <List.Item>Time1: {this.state.startTime.toLocaleString()}</List.Item>
          }
          {this.state.endTime &&
            <List.Item>Time2: {this.state.endTime.toLocaleString()}</List.Item>
          }
        </List>
        <Calendar
          visible={this.state.show}
          onCancel={this.onCancel}
          onConfirm={this.onConfirm}
        />
      </div>
    )
  }
}


/*
 * @Author: poetryxie 
 * @Date: 2017-12-05 10:35:06 
 * @Last Modified by: poetryxie
 * @Last Modified time: 2017-12-06 14:35:09
 */

import React from 'react'
import { Button, WhiteSpace, List, InputItem, WingBlank} from 'antd-mobile';
// import {Col, Modal, Row,Button as Butt} from 'react-bootstrap'
import {withRouter} from 'react-router-dom';

@withRouter
export default  class LoginModal extends React.Component {
	constructor(props) {
		super(props)
		this.refreshCode = this.refreshCode.bind(this)
		// const {isOpen, accountId} = props
		this.state = {
			// isOpen,
			// accountId,
			email: 'test@yesdat.com',
			password: ''
		}
		this.onConfirm = this.onConfirm.bind(this)
	}

	refreshCode() {
		this.props.loadCode().then((captchaUrl) => {
			let host = 'http://' + window.location.host
			if(window && window.Y && window.Y.vars && window.Y.vars.apiDomain){
				// host = 'http://api.o.yesdat.com'
			}
			const url = host + captchaUrl
			this.setState({captchaUrl: url})
		})
	}

	onConfirm() {
		const {email, password, code} = this.state
		this.props.doLogin(email, password, code).then((res) => {
			if(res.user_id){
				// window.location.reload()
				console.log(res)
				this.props.history.push('/dashboard')
			}
		}).catch( (error) => {
			this.refreshCode()
			alert(error.message)
		})

	}
	handleChange(key,val){
		this.setState({   
			[key]:val
		})
	}
	// componentWillReceiveProps(nProps) {
	// 	const {isOpen, accountId} = nProps
	// 	this.setState({
	// 		isOpen,
	// 		accountId
	// 	})
	// 	if(isOpen){
	// 		this.refreshCode()
	// 	}
	// }

	componentDidMount() {
		this.refreshCode()
	}

	render() {
		return (
			<div>
				{/* <Modal
					show={true}
					onHide={() => {
						this.setState({isOpen: false})
					}}
				>
					<Modal.Header closeButton>
						<Modal.Title>登陆</Modal.Title>
					</Modal.Header>
					<Modal.Body style={{
						height: 120,
					}}>
						<Row >
							<Col xs={10} xsOffset={1}>
								<input placeholder="邮箱"
									type="text"
									value={this.state.email}
									onChange={e => this.setState({email: e.target.value})}
								/>
							</Col>
						</Row>
						<Row style={{marginTop:8,marginBottom:8}}>
							<Col xs={10} xsOffset={1}>
								<input placeholder="密码"
									type="password"
									value={this.state.password}
									onChange={e => this.setState({password: e.target.value})}
								/>
							</Col>
						</Row>
						<Row>
							<Col xs={7} xsOffset={1}>
								<input placeholder="验证码"
									value={this.state.code}
									onChange={e => this.setState({code: e.target.value})}
								/>
								<img onClick={this.refreshCode} style={{width: 80}} src={this.state.captchaUrl}/>
							</Col>
						</Row>
					</Modal.Body>
					<Modal.Footer>
						<Button onClick={() => {
							this.setState({isOpen: false})
						}}>取消</Button>
						<Button
							onClick={this.onConfirm}
							bsStyle="primary">登陆</Button>
					</Modal.Footer>
				</Modal> */}


				<WhiteSpace />
				<h2>登录</h2>
				<WhiteSpace />
				<WingBlank>
					<List>
						<InputItem
							placeholder="邮箱"
							value={this.state.email}
							onChange={v=>this.handleChange('email',v)}
						/>
						<WhiteSpace />
						<InputItem
							type='password'
							placeholder="密码"
							onChange={v=>this.handleChange('password',v)}
						/>
						<WhiteSpace />
						<InputItem
							placeholder="验证码"
							onChange={v=>this.handleChange('code',v)}
							extra={<img onClick={this.refreshCode} style={{width:70,height:40}} src={this.state.captchaUrl}/>}
						/>
						<WhiteSpace />
					</List>
					<WhiteSpace />
					<Button 
						type='primary'
						onClick={this.onConfirm}
					>登录</Button>
					<WhiteSpace />
				</WingBlank>
			</div>
		)
	}
}

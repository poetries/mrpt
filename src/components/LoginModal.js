/**
 * Created by zorochen on 2017/7/27.
 */
/**
 * Created by zorochen on 2017/5/9.
 */
import React from 'react'
import {Button, FontAwesome} from './StyledComponents'
import {Col, Modal, Row} from 'react-bootstrap'
import {doLogin, loadCode} from './OpenLogin'

const customStyles = {
	content: {
		height: '200px',
		top: '50%',
		left: '50%',
		right: 'auto',
		bottom: 'auto',
		marginRight: '-50%',
		transform: 'translate(-50%, -50%)',
		overflow: 'visible'
	}
};
export default  class LoginModal extends React.Component {

	constructor(props) {
		super(props)
		this.refreshCode = this.refreshCode.bind(this)
		const {isOpen, accountId} = props
		this.state = {
			isOpen,
			accountId,
			email: 'test@yesdat.com',
			password: ''
		}
		this.onConfirm = this.onConfirm.bind(this)
	}

	refreshCode() {
		loadCode().then((captchaUrl) => {
			let host = 'http://' + location.host
			if(window && window.Y && window.Y.vars && window.Y.vars.apiDomain){
				// host = 'http://api.o.yesdat.com'
			}
			const url = host + captchaUrl
			this.setState({captchaUrl: url})
		})
	}

	onConfirm() {
		const {email, password, code, accountId} = this.state
		doLogin(email, password, code, accountId).then((res) => {
			if(res.user_id){
				location.reload()
			}
		}).catch( (error) => {
			this.refreshCode()
			// alert(error.message)

		})

	}

	componentWillReceiveProps(nProps) {
		const {isOpen, accountId} = nProps
		this.setState({
			isOpen,
			accountId
		})
		if(isOpen){
			this.refreshCode()
		}
	}

	componentDidMount() {
		// this.refreshCode()
	}

	render() {
		return (
			<Modal
				show={this.state.isOpen}
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
			</Modal>
		)
	}
}

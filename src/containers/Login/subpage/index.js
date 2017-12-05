/*
 * @Author: poetryxie 
 * @Date: 2017-12-05 10:34:53 
 * @Last Modified by: poetryxie
 * @Last Modified time: 2017-12-05 17:01:32
 */

import axios from 'axios'
// import crypro from 'crypto-js'
import md5 from 'md5'
import {JSEncrypt} from 'jsencrypt'
import base64 from 'js-base64'
const PKEY = `-----BEGIN PUBLIC KEY-----
MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQDGx3BPOc6T4mHV3syeLKL92DjK
n7W//w4wjXH+F/CP0S8SEuJ/JLYoo79/DgPz7i6odx+OxmWQO2WPK7aDLauJLczn
m3Xp/Ek31PDcsEZWJvLyAEgP8wfWnLD7CGsAXhE0b50PMZ5C8/zoN3j+wop6e/Rv
ww8+cvkfYTCdLzugLQIDAQAB
-----END PUBLIC KEY-----`
const host =  window.location.host;//'localhost:3000'
const OAUTH_API = `http://${host}/v1`
const APP_API = `http://${host}`
export const loadCode = () => {
	return new Promise((resolve, reject) => {
		axios.get(`${OAUTH_API}/logins/captcha?refresh=1&q=${encodeURIComponent(JSON.stringify({"refresh": 1}))}&user_id=&account_id=&sign=&access_token=`,
			{
				withCredentials: false
			}
		).then(response => {
			if (response.status === 200) {
				const r = response.data
				if (r.code === 0) {
					resolve(r.data.url)
				} else {
					reject(r)
				}
			}
		})
	})
}

export const doLogin = (email, password, code, account_id) => {
	account_id=9990001
	const pt = `${md5(password)},${(new Date()).getTime() / 1000},${Math.random()}`
	const encrypt = new JSEncrypt()
	const withCredentials = false
	encrypt.setPublicKey(PKEY)
	const data = {
		email : "test@yesdat.com",
		password: "hjlrrUF41RRv%2FvNy2m66uCHbaUVqqiR03a7e6jp81NUv%2FmwRufzciINAbM3P6nTZD98PVyUqJiYOQghXHC3mvu5jidsQETq7zaGaLdOjz1EwudlxuumdhFLYlFXay%2BpJCLF6Gf6d%2BdorVRawtcRuGF%2BJN%2BSDuFzi0QDBcthBDk4%3D"
		,//"WGSLGi0Yaj0Sw%2B3qZoy7f8dx5SktVpIK2jt%2FlmGrZuidvuaNNlH9KvH5p8n98jUL28BiP%2FDDOAaKnC%2BHKmnUJtuoCQv4iWsJkXMhfaSTmFKGn4LOD5Z0VDz77hEmJAJTpx2qTVPGo%2Fjy1gqVHbWR5CbwuPSr1g32EFwfoHTQS50%3D" ,//nencodeURIComponent(encrypt.encrypt(pt)),
		captcha: code,
		client_id: '6',
		login_type: 1,
		redirect_uri: "http%3A%2F%2Fbosslite.yesdat.com%2Fauth%2Fconnect",//'http%3A%2F%2Fe.yesdat.com%2Fauth%2Fconnect',
		sms_code: '',
		state: 'aHR0cDovL2UueWVzZGF0LmNvbS9hdXRoL2Nvbm5lY3Q%3D'
	}
	return new Promise((resolve, reject) => {
		let user_id, access_token
		axios.post(`${OAUTH_API}/logins`, data).then(response => {
			if (response.status !== 200 || response.data.code !== 0) {
				return reject(response.data)
			}
			const redirect_uri = response.data.data.redirect_uri.replace(/bosslite\.yesdat\.com/,host)
			return axios.get(redirect_uri, {
				maxRedirects: 0,
				withCredentials: true
			})
		}).then(re => {


		// },error => {
			const cookie = document.cookie
			if (cookie) {
				cookie.split(';').forEach(v => {
					if (v.indexOf('user_id') !== -1) {
						user_id = v.replace(/user_id=/, '')
					} else if (v.indexOf('access_token') !== -1) {
						access_token = v.replace(/access_token=/, '').trim()
					}

				})
				if (account_id) {
					return axios.put(`${APP_API}/account/user-accounts/${account_id}?user_id=${user_id}&account_id=${account_id}&sign=&access_token=${access_token}`,
						{
							user_id,
							account_id,
							sign:''
						}
					)
				} else {
					return axios.get(`${APP_API}/account/user-accounts?user_id=${user_id}&q=${encodeURIComponent(JSON.stringify({"user_id": user_id}))}&page_size=1000&account_id=&sign=&access_token=${access_token}`,
					)
				}
			}
			return reject()
		}).then(res => {
			if (!res || res.status !== 200 || !res.data) {
				return reject()
			} else {
				const d = res.data
				if (d.code === 0) {
					if (account_id) {
						const obj = {
							sign: d.data.sign,
							user_id,
							account_id,
							access_token

						}
						window.localStorage.setItem('auth', JSON.stringify({
							data: {
								id: user_id,
								token: access_token
							}
						}))
						window.localStorage.setItem(`userAccount|${user_id}|${account_id}`, JSON.stringify({
							data: {
								accountName: d.data.account_name,
								sign: obj.sign
							}
						}))
						return resolve(obj)
					} else {
						const lst = d.data.list
					}

				} else {
					return reject(d)
				}
			}
		})

	})
}


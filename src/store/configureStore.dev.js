import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import {createLogger } from 'redux-logger'
import api from '../middleware/api'
import { routerMiddleware } from 'react-router-redux'
import createHistory from 'history/createBrowserHistory'
import rootReducer from '../reducers'
import {loginAfter} from '../actions'

const middleware = routerMiddleware(createHistory())

const configureStore = preloadedState => {
	
	// 安装 Redux-DevTools Chrome 插件后可用 composeEnhancers()
	const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
	const store = createStore(
		rootReducer,
		preloadedState,
		composeEnhancers(
			applyMiddleware(thunk,api,middleware, createLogger())
		)
	)    

	store.dispatch(loginAfter({accountId:9990001}))

	if (module.hot) {
		// Enable Webpack hot module replacement for reducers
		module.hot.accept('../reducers', () => {
			const nextRootReducer = require('../reducers').default
			store.replaceReducer(nextRootReducer)
		})
	}

	return store
}

export default configureStore
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import {createLogger } from 'redux-logger'
import rootReducer from '../reducers'
import api from '../middleware/api'
import createHistory from 'history/createBrowserHistory'

const middleware = routerMiddleware(createHistory())

const configureStore = preloadedState => createStore(
  rootReducer,
  preloadedState,
  applyMiddleware(thunk, api,middleware)
)

export default configureStore

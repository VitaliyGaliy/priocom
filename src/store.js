import { createStore, applyMiddleware, compose, combineReducers } from 'redux'
import { routerMiddleware } from 'react-router-redux'
import thunk from 'redux-thunk'
import createHistory from 'history/createBrowserHistory'
import { reducer as formReducer } from 'redux-form'
import Squares from '../src/modules'

export const history = createHistory()

const initialState = {}
const enhancers = []
const middleware = [
  thunk,
  routerMiddleware(history)
]

if (process.env.NODE_ENV === 'development') {
  const devToolsExtension = window.devToolsExtension

  if (typeof devToolsExtension === 'function') {
    enhancers.push(devToolsExtension())
  }
}

const composedEnhancers = compose(
  applyMiddleware(...middleware),
  ...enhancers
)

export default createStore(
  combineReducers({
    form: formReducer,
    [Squares.consts.KEY]: Squares.reducers,
  }),
  initialState,
  composedEnhancers
)

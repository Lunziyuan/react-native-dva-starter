import React from 'react'
import { AppRegistry } from 'react-native'

import dva from './utils/dva'
import Router, { routerMiddleware, routerReducer } from './router'
import {name as appName} from '../app.json'
import * as models from './models'

const app = dva({
  initialState: {},
  models: [...Object.values(models)],
  extraReducers: { router: routerReducer },
  onAction: [routerMiddleware],
  onError(e) {
    console.log('onError', e)
  },
})

const App = app.start(<Router />)

AppRegistry.registerComponent(appName, () => App)

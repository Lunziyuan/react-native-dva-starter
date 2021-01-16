
import { testEnv, prodEnv } from '../config/env'
import { Storage } from "."

let appEnv = process.env.NODE_ENV || 'prod'

const envReady = new Promise(resolve => {
  Storage.get('appEnv').then(res => {
    appEnv = res || appEnv
    resolve()
  })
})

const getEnv = () => appEnv === 'test' ? testEnv : prodEnv

const changeEnv = (value) => {
  appEnv = value === 'test' ? 'test' : 'prod'
  Storage.set('appEnv', appEnv)
}

export default {
  envReady,
  getEnv,
  changeEnv,
}

// build 
// new webpack.DefinePlugin({
//   'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
// })
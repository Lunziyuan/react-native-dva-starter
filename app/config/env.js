
// testEnv
const testEnv = {
  env: 'test',
  apiBase: 'http://test-micro-magasin.jiyutech.net/api',
  apiBaseShort: 'http://test-micro-magasin.jiyutech.net',
  // CountryCode.js
  imageBase: 'https://jinjie-test-bucket.oss-cn-hangzhou.aliyuncs.com',
  // ImageUploader.js
  ossEndPoint: 'oss-cn-hangzhou.aliyuncs.com',
  // PayPalWebview.js
  paypalEnv: 'sandbox'
}

// prodEnv
const prodEnv = {
  env: 'prod',
  apiBase: 'https://v2.microstore.app/api',
  apiBaseShort: 'https://v2.microstore.app',
  imageBase: 'https://micro-store-bucket.oss-eu-central-1.aliyuncs.com',
  ossEndPoint: 'oss-eu-central-1.aliyuncs.com',
  paypalEnv: 'production'
}

export {
  testEnv,
  prodEnv
}
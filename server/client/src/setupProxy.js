const proxy = require('http-proxy-middleware')
 
module.exports = function(app) {
  app.use(proxy('/rpc', { target: 'http://localhost:3001/' }))
  app.use(proxy('/proxies', { target: 'http://localhost:3001/' }))
}
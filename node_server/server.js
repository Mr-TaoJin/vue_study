var connectHistoryApiFallback = require('connect-history-api-fallback')
var express = require('express')
 
var app = require('express')()
var server = require('http').createServer(app)
 
server.listen(8888, function () {
  var host = server.address().address
  var port = server.address().port
 
  console.log('应用实例，访问地址为 http://%s:%s', host, port)
})
// 由js控制路由，一定要写在express.static前面！！！
app.use('/', connectHistoryApiFallback())
app.use(express.static('./dist'))
 
app.get('/', function (req, res) {
  // eslint-disable-next-line no-path-concat
  res.sendFile(__dirname + '/index.html')
})
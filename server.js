var express = require('express')
var webpack = require('webpack')
var config = require('./webpack.config.js')
var webpackDevMiddleware = require('webpack-dev-middleware')
var webpackHotMiddleware = require('webpack-hot-middleware')
var app = express()

var env = process.env.NODE_ENV ? process.env.NODE_ENV : 'development'

if (env === 'development'){
  var compiler = webpack(config)
  app.use(webpackDevMiddleware(compiler, {
    publicPath: config.output.publicPath,
    stats: {chunks: false, errors: true}
  }))
  app.use(webpackHotMiddleware(compiler))
}else{
  app.use(express.static('assets'))
}

app.use('/time', (req, res)=>{
  res.json({
    time: new Date().getTime()
  })
})

app.use(express.static('static'))

app.use('*', (req, res)=>{
  res.sendFile(__dirname + '/static/index.html')
})

app.listen(3000, function(err){
  if (err) {
    console.log(err);
    return;
  }
  console.log('Listening at http://localhost:3000');
})

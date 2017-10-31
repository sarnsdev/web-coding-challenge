var express = require('express')
var app = express()
// var api_caller = require('javascript/github_api_manager')

app.set('port', (process.env.PORT || 5000))
app.use(express.static("public"))
app.use('/twbs', express.static(__dirname + '/node_modules/bootstrap/dist/'))

// Routes
app.get('/', function(request, response) {
  response.render('index.ejs')
})

// Listener
app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'))
})

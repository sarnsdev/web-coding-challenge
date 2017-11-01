var express = require('express')
var app = express()
var bodyParser = require("body-parser")

app.set('port', (process.env.PORT || 5000))
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"))
app.use('/twbs', express.static(__dirname + '/node_modules/bootstrap/dist'))
app.use('/twbs-helpers', express.static(__dirname + '/node_modules/bootstrap'))

// Routes
app.get('/', function(request, response) {
  response.render('index.ejs')
})

app.post("/search", function(req, res) {
	var query = req.body.query
   data = //something that pulls from github
	res.render("search-page.ejs", {
		data: data
	})
})

app.get('*', function(request, response) {
  response.render('404.ejs')
})

// Listener
app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'))
})

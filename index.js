var express = require('express')
var app = express()
var bodyParser = require("body-parser")
var GitHubApi = require('github')

var github = new GitHubApi({
    // optional
  // debug: true
})

app.set('port', (process.env.PORT || 5000))
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"))
app.use(express.static("server-side"))
app.use('/twbs', express.static(__dirname + '/node_modules/bootstrap/dist'))
app.use('/twbs-helpers', express.static(__dirname + '/node_modules/bootstrap'))

// Routes
app.get('/', function(request, response) {
  response.render('index.ejs')
})

app.post("/search", function(req, res) {
	var query = req.body.query
   github.search.users({
      q:        query,
      order:    'desc',
      per_page: 50,
      page:     1
   }, function (error, resultingData) {
      if (error) throw error
      // console.log(JSON.stringify(resultingData))
      console.log(resultingData.data.items[0]);
      res.render("search-page.ejs", {
   		data: JSON.stringify(resultingData.data.items[0])
   	})
   })
})

app.get('*', function(request, response) {
  response.render('404.ejs')
})

// Listener
app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'))
})

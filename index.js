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
   var pagesRendered = req.body.pagesRendered
   var allResults = new Array()
   github.search.users({
      q:        query,
      order:    'desc',
      per_page: 50,
      page:     1
   }, function (error, resultingData) {
      if (error) res.redirect("*")
      allResults.push.apply(allResults, resultingData.data.items)
      // console.log(JSON.stringify(allResults))
      // console.log(resultingData.data.items)
      res.render("search-page.ejs", {
   		data: allResults,
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

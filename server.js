var express = require('express');
var app = express();
var bodyParser = require('body-parser');   //body-parser
var request = require('request'); // request (call server from server)
var port = 8010;

app.listen(port, function(){
    console.log('Port '+port+' is listening you!');
});

app.use(bodyParser.urlencoded({ extended: false }));   //body-parser, should be before all REST requests
app.use(bodyParser.json());  //body-parser

app.get('/', function(req,res) {
    res.send('FIRE!');
})

// app.get('/:whattheuserwants', function(req, res){
//     var whattheuserwants = req.params.whattheuserwants;
  
//     if(whattheuserwants == "about"){
//       res.send({data: "We are cool"})
//     } else if(whattheuserwants == "help"){
//       res.send({message: "We are here to help you because we are cool"})
//     } else{
//       res.send({error: "Sorry, not understood- not cool!"});
//     }
//   });

//PARAMS 
app.get('/series/:name', function(req,res) {
    var name = req.params.name;
    res.send('Here will be new episodes of '+ name.charAt(0).toUpperCase() + name.slice(1));
});

//QUERY
app.get('/books', function(req, res) {
    var genretosearch = req.query.genre;
    var authortosearch = req.query.author;
    res.send("Let's read the amazing " + genretosearch+ " book of " +authortosearch + "!");
});

app.get('/names', function(req, res) {
    var name = req.query.name;
    res.send("Hello " +name+ "!");
});

app.get('/names', function(req, res) {
    var name = req.query.name;
    res.send("Hello " +name+ "!");
});

app.get('/person', function(req, res) {
    var name = req.query.firstName;
    var surName = req.query.lastName;
    res.send("Hello " +name +" "+ surName + "!");
});

//POST (with Postman and body-parser)
app.post('/users', function(req, res) {
    console.log(req.body); //the data on a new book
    res.send("From server route");
}); 

// // REQUEST (with request)
// request('http://www.elevationacademy.co', function (error, response, body) {
//   if (!error && response.statusCode == 200) {
//     console.log(body) // Shows the HTML for the EA homepage. 
//   }
// });

app.post('/weather', function (req, res){
    var city = req.query.city;
    request('http://api.openweathermap.org/data/2.5/weather?q='+city+'&appid=825d56b5627561dede04f0b68e06e411', function (error, response, body) {
        if (!error && response.statusCode == 200) {
        res.send(body); // Shows the body
        }
    });
});

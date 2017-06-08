
var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000,
  mongoose = require('mongoose'),
  transport = require('./api/models/TransportModel'),
  bodyParser = require('body-parser');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://127.0.0.1:27017/TransportDb',
                 {user: 'admin', pass: 'ubuntu', auth:{authdb:"admin"}});
mongoose.set('debug', true);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


var routes = require('./api/routes/TransportRoutes');
routes(app);
app.set('views', './views');
app.set('view engine', 'ejs');


app.get('/', function(req, res)
{
res.render('index', {title:'Home'});
});


app.listen(port);

console.log('Companie Transport RESTful API server started on: ' + port);
//mongo --port 27017 -u admin -p ubuntu --authenticationDatabase admin
//mongod
//sudo nodemon server.js




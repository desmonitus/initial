global._ = require('lodash');
var express = require('express');
var app = express();
var path = require('path');
var favicon = require('serve-favicon');
var session = require('express-session');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var http = require('http');
var PropertiesReader = require('properties-reader');
global.properties = PropertiesReader('./libServer/application.properties');

global.poontFunc = require('./libServer/poontFunction');
global.mongoDb = require('./libServer/mongoBaseConnection')
global.lineApi = require('./libServer/lineApi');


app.set('port', process.env.PORT || 80);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(express.static(path.join(__dirname, 'public')));
app.use(favicon(path.join(__dirname, '/public/images/favicon.ico')))

app.use(session({
    secret: 'nodejs',
    name: 'cookie_desmonitus',
    proxy: true,
    resave: true,
    saveUninitialized: true
}));
app.use(cookieParser());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

const controller = require('./controller')(app);

let server = http.createServer(app).listen(app.get('port'), function(){
    let time = poontFunc.getNow('dd/mm/yyyy hh:mi:ss');
    console.log("NodeJS Project Start Server port: " + app.get('port')+' '+time);
});
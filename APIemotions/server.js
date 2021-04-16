const express = require('express');

// initializations
const app = express();

// settings
app.set('port', process.env.PORT || 3002);

// middlewares
app.use(express.urlencoded({ extended: false }));
app.use(express.json({ extenden: false }));
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
  res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
  next();
});

// routes
app.use(require('./routes/emotions'));

// global variables

// static files
// app.use(express.static(path.join(__dirname, '/client/build')));

module.exports = app;

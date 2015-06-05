var r = require('request');




// package for HTTP requests
var APIManager = module.exports;

var ENDPOINT = 'http://hackjack.purduehackers.com/';
var username = 'dreamland';
var password = 'password';

APIManager.create_table = function(table) {
  this.request('create', table, function(err,httpResponse,body) {
    console.log('create_table: ', body);
  });
};

APIManager.start_table = function(table) {
  this.request('start', table, function(err,httpResponse,body) {
    console.log('start_table: ', body);
  });
};

APIManager.join_table = function(table) {
  this.request('join', table, function(err,httpResponse,body) {
    console.log('join_table: ', body);
  });
};

APIManager.leave_table = function(table) {
  this.request('leave', table, function(err,httpResponse,body) {
    console.log('leave_table: ', body);
  });
};

APIManager.bet = function(table, amount) {
  this.hack_request('bet', table, amount, function(err,httpResponse,body) {
    console.log('bet: ', body);
  });
};

APIManager.hit = function(table) {
  this.request('hit', table, function(err,httpResponse,body) {
    console.log('hit: ', body);
  });
};

APIManager.stay = function(table) {
  this.request('stay', table, function(err,httpResponse,body) {
    console.log('stay: ', body);
  });
};

APIManager.request = function(command, table, callback) {
  r.post({url: ENDPOINT + 'tables/' + table,
         form: {username: username, password: password, command: command}},
         callback);
};

APIManager.hack_request = function(command, table, amount, callback) {
  r.post({url: ENDPOINT + 'tables/' + table,
         form: {username: username, password: password, command: command, bet_amt: amount}},
         callback);
};

APIManager.get_request = function(table, callback) {
  r(ENDPOINT + 'tables/' + table, callback);
};

var r = require('request');

var ENDPOINT = 'http://hackjack.purduehackers.com/';
var username = 'dreamland';
var password = 'password';

var table_status = function(table) {
  get_request(table, function(err,httpResponse,body) {
    console.log('get_table: ', body);
  });
};

var create_table = function(table) {
  request('create', table, function(err,httpResponse,body) {
    console.log('create_table: ', body);
  });
};

var start_table = function(table) {
  request('start', table, function(err,httpResponse,body) {
    console.log('start_table: ', body);
  });
};

var join_table = function(table) {
  request('join', table, function(err,httpResponse,body) {
    console.log('join_table: ', body);
  });
};

var leave_table = function(table) {
  request('leave', table, function(err,httpResponse,body) {
    console.log('leave_table: ', body);
  });
};

var bet = function(table, amount) {
  hack_request('bet', table, amount, function(err,httpResponse,body) {
    console.log('bet: ', body);
  });
};

var hit = function(table) {
  request('hit', table, function(err,httpResponse,body) {
    console.log('hit: ', body);
  });
};

var stay = function(table) {
  request('stay', table, function(err,httpResponse,body) {
    console.log('stay: ', body);
  });
};

var request = function(command, table, callback) {
  r.post({url: ENDPOINT + 'tables/' + table,
         form: {username: username, password: password, command: command}},
         callback);
};

var hack_request = function(command, table, amount, callback) {
  r.post({url: ENDPOINT + 'tables/' + table,
         form: {username: username, password: password, command: command, bet_amt: amount}},
         callback);
};

var get_request = function(table, callback) {
  r(ENDPOINT + 'tables/' + table, callback);
};


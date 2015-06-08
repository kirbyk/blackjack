/*
 *


*/

var APIManager = require('./APIManager.js');

var gameManager = module.exports = {}

gameManager.gameLoop;
gameManager.gameLoopInterval; //holds the setInterval
gameManager.loopInterval = 1000;

// called at frequency for game states
gameManager.gameLoop = function () {

}

gameManager.start = function() {

  var table = 'cats';

	APIManager.start_table(table);
	// APIManager.join_table(table);

	this.gameLoopInterval = setInterval(function() {
		gameManager.gameLoop();
	}, this.loopInterval);
}

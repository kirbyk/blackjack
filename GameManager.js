/*

This file manages the game cycle, betting joining tables, etc.

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

	// starts a table
	// joins the table
	APIManager.start_table("AYYYY");
	APIManager.join_table("AYYYY");

	this.gameLoopInterval = setInterval(function() {
		gameManager.gameLoop();
	}, this.loopInterval);
}
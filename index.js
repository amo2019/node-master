/*
 * Primary file for API
 *
 */

// Dependencies
var server = require("./lib/server");
var cli = require("./lib/cli");

// Declare the app
var app = {};

// Init function
app.init = function (callback) {
  // Start the server
  server.init();
  // Start the CLI, but make sure it starts last
};

// Self executing
app.init();

// Export the app
module.exports = app;

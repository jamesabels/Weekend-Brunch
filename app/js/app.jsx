"use strict";
const HelloWorld = require("modules/hello");

// INIT FUNCTION
var App = {
    init: function() {
        const hw = new HelloWorld;
        hw.log();
    }
};

module.exports = App;
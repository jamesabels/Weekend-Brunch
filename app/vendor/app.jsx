"use strict";
const HelloWorld = require("modules/hello");

// INIT FUNCTION
(function(){
    console.log("Initializing App");
    const hw = new HelloWorld;
    hw.render();
})();

/* importing packages to run react and manipulate the DOM 
, importing bootstrap css file and the Game component from APP.js*/
import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.css";
import Game from "./App.js";

// rendering Game component to the web page
ReactDOM.render(<Game />, document.getElementById("root"));

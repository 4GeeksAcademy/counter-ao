//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";




//render your react application

import SecondsCounter from "./component/SecondsCounter.jsx";


let seconds = 0;

function renderPersonalizado() {

    console.log(seconds)

    ReactDOM.render(<SecondsCounter seconds={seconds} />, document.getElementById("app"));
    seconds++;
}

setInterval(renderPersonalizado, 1000);
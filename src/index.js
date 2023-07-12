import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Keypad from "./Keypad";


function Hello(){
    return(
        // <App/>
        <Keypad/>
    )
}

ReactDOM.render(<Hello />, document.querySelector("#root"))
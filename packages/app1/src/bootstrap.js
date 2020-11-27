import React from "react";
import ReactDOM from "react-dom";

import { App } from "./App";

import { sum } from "app2/utils";
alert(sum(1, 2));

ReactDOM.render(<App />, document.getElementById("app"));

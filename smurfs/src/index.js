import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import axios from "axios";
import "./index.css";

import { smurfReducer } from "./reducers/smurfReducer";

import App from "./components/App";

const store = createStore(smurfReducer, applyMiddleware(thunk));

ReactDOM.render(<App />, document.getElementById("root"));

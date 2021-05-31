"use strict";
exports.__esModule = true;
var redux_1 = require("redux");
var rootReducer_1 = require("../reducer/rootReducer");
var redux_thunk_1 = require("redux-thunk");
var Store = redux_1.createStore(rootReducer_1["default"], redux_1.applyMiddleware(redux_thunk_1["default"]));
exports["default"] = Store;

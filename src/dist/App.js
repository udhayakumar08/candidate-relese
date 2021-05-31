"use strict";
exports.__esModule = true;
require("./App.css");
var react_router_dom_1 = require("react-router-dom");
var Home_1 = require("./components/Home");
var UserLogin_1 = require("./components/UserLogin");
var UserRegistration_1 = require("./components/UserRegistration");
var Navbar_1 = require("./components/Navbar");
function App() {
    return (React.createElement("div", null,
        React.createElement(Navbar_1["default"], null),
        React.createElement(react_router_dom_1.Switch, null,
            React.createElement(react_router_dom_1.Route, { path: '/', exact: true },
                React.createElement(Home_1["default"], null)),
            React.createElement(react_router_dom_1.Route, { path: '/home' },
                React.createElement(Home_1["default"], null)),
            React.createElement(react_router_dom_1.Route, { path: '/userLogin' },
                React.createElement(UserLogin_1["default"], null)),
            React.createElement(react_router_dom_1.Route, { path: '/user/register' },
                React.createElement(UserRegistration_1["default"], null)))));
}
exports["default"] = App;

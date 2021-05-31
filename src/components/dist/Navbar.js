"use strict";
exports.__esModule = true;
var react_1 = require("react");
var styles_1 = require("@material-ui/core/styles");
var AppBar_1 = require("@material-ui/core/AppBar");
var Toolbar_1 = require("@material-ui/core/Toolbar");
var Typography_1 = require("@material-ui/core/Typography");
var Button_1 = require("@material-ui/core/Button");
var Avatar_1 = require("@material-ui/core/Avatar");
var react_router_dom_1 = require("react-router-dom");
var react_redux_1 = require("react-redux");
var userAction_1 = require("../actions/dist/userAction");
var useStyles = styles_1.makeStyles(function (theme) { return ({
    root: {
        flexGrow: 1
    },
    menuButton: {
        marginRight: theme.spacing(2)
    },
    title: {
        flexGrow: 1
    }
}); });
function Navbar() {
    var classes = useStyles();
    var state = react_redux_1.useSelector(function (isLogin) { return isLogin.userReducer; });
    var dispatch = react_redux_1.useDispatch();
    //const state=true
    var SignOut = function () {
        dispatch(userAction_1.signOut());
    };
    return (react_1["default"].createElement("div", { className: classes.root },
        react_1["default"].createElement(AppBar_1["default"], { position: "static", color: "default" },
            react_1["default"].createElement(Toolbar_1["default"], null,
                react_1["default"].createElement(Typography_1["default"], { variant: "h6", className: classes.title },
                    react_1["default"].createElement(Button_1["default"], { style: { fontSize: "23px" }, component: react_router_dom_1.NavLink, to: '/' }, "OTT")),
                state.isLogin ? null : react_1["default"].createElement(Button_1["default"], { component: react_router_dom_1.NavLink, to: '/userLogin' }, "Login"),
                state.isLogin ? null : react_1["default"].createElement(Button_1["default"], { component: react_router_dom_1.NavLink, to: '/user/register' }, "Register"),
                state.isLogin ? react_1["default"].createElement(Button_1["default"], { component: react_router_dom_1.NavLink, to: '/', onClick: SignOut }, "Sign out") : null,
                state.isLogin ? react_1["default"].createElement(Avatar_1["default"], { src: "/broken-image.jpg" }) : null))));
}
exports["default"] = Navbar;

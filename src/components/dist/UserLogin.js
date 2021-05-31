"use strict";
exports.__esModule = true;
var react_1 = require("react");
var Avatar_1 = require("@material-ui/core/Avatar");
var Button_1 = require("@material-ui/core/Button");
var CssBaseline_1 = require("@material-ui/core/CssBaseline");
var TextField_1 = require("@material-ui/core/TextField");
var FormControlLabel_1 = require("@material-ui/core/FormControlLabel");
var Checkbox_1 = require("@material-ui/core/Checkbox");
//import Link from '@material-ui/core/Link';
var Grid_1 = require("@material-ui/core/Grid");
var LockOutlined_1 = require("@material-ui/icons/LockOutlined");
var Typography_1 = require("@material-ui/core/Typography");
var styles_1 = require("@material-ui/core/styles");
var Container_1 = require("@material-ui/core/Container");
var Dialog_1 = require("@material-ui/core/Dialog");
var DialogActions_1 = require("@material-ui/core/DialogActions");
var DialogContent_1 = require("@material-ui/core/DialogContent");
var DialogContentText_1 = require("@material-ui/core/DialogContentText");
var DialogTitle_1 = require("@material-ui/core/DialogTitle");
var react_router_dom_1 = require("react-router-dom");
var userAction_1 = require("../actions/userAction");
var react_redux_1 = require("react-redux");
var react_router_dom_2 = require("react-router-dom");
var useStyles = styles_1.makeStyles(function (theme) {
    var _a;
    return ({
        paper: {
            width: 'auto',
            variant: "outlined",
            marginTop: theme.spacing(8),
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
        },
        avatar: {
            margin: theme.spacing(1),
            backgroundColor: theme.palette.secondary.main
        },
        form: {
            width: '100%',
            marginTop: theme.spacing(1)
        },
        submit: {
            margin: theme.spacing(3, 0, 2)
        },
        layout: (_a = {
                width: 'auto',
                marginLeft: theme.spacing(2),
                marginRight: theme.spacing(2)
            },
            _a[theme.breakpoints.up(600 + theme.spacing(2) * 2)] = {
                width: 800,
                marginLeft: 'auto',
                marginRight: 'auto'
            },
            _a)
    });
});
function SignIn() {
    var classes = useStyles();
    var dispatch = react_redux_1.useDispatch();
    var history = react_router_dom_2.useHistory();
    var _a = react_1["default"].useState(false), open = _a[0], setOpen = _a[1];
    var _b = react_1.useState(""), email = _b[0], setEmail = _b[1];
    var _c = react_1.useState(""), OTP = _c[0], setOTP = _c[1];
    var userReducer = react_redux_1.useSelector(function (state) { return state.userReducer; });
    var handleClickOpen = function () {
        dispatch(userAction_1.login(email));
        setTimeout(function () {
            setOpen(true);
        }, 3000);
    };
    var handleClose = function () {
        setOpen(false);
    };
    var handleOTP = function (event) {
        setOTP(event.target.value);
    };
    var submitOTP = function () {
        dispatch(userAction_1.otpVerification(OTP, email));
        setOpen(false);
        history.push('/');
    };
    //my logics
    var handleEmail = function (event) {
        setEmail(event.target.value);
    };
    return (react_1["default"].createElement("div", { className: classes.layout },
        react_1["default"].createElement(Container_1["default"], { component: "main", maxWidth: "xs" },
            react_1["default"].createElement(CssBaseline_1["default"], null),
            react_1["default"].createElement("div", { className: classes.paper },
                react_1["default"].createElement(Avatar_1["default"], { className: classes.avatar },
                    react_1["default"].createElement(LockOutlined_1["default"], null)),
                react_1["default"].createElement(Typography_1["default"], { component: "h1", variant: "h5" }, "Sign in"),
                react_1["default"].createElement("form", { className: classes.form, noValidate: true },
                    react_1["default"].createElement(TextField_1["default"], { variant: "outlined", margin: "normal", required: true, fullWidth: true, id: "email", label: "Email Address", name: "email", autoComplete: "email", onChange: handleEmail, autoFocus: true }),
                    react_1["default"].createElement(FormControlLabel_1["default"], { control: react_1["default"].createElement(Checkbox_1["default"], { value: "remember", color: "primary" }), label: "Remember me" }),
                    react_1["default"].createElement(Button_1["default"], { type: "button", fullWidth: true, variant: "contained", color: "primary", className: classes.submit, onClick: handleClickOpen }, "Sign In"),
                    react_1["default"].createElement(Grid_1["default"], { container: true },
                        react_1["default"].createElement(Grid_1["default"], { item: true, xs: true },
                            react_1["default"].createElement(react_router_dom_1.Link, { to: "#" }, "Forgot email?")),
                        react_1["default"].createElement(Grid_1["default"], { item: true },
                            react_1["default"].createElement(react_router_dom_1.Link, { to: '/user/register' }, "Don't have an account? Sign Up"))),
                    react_1["default"].createElement(Dialog_1["default"], { open: open, onClose: handleClose, "aria-labelledby": "form-dialog-title" },
                        react_1["default"].createElement(DialogTitle_1["default"], { id: "form-dialog-title", color: "secondary.main" }, "OTP verification"),
                        react_1["default"].createElement(DialogContent_1["default"], null,
                            react_1["default"].createElement(DialogContentText_1["default"], null, "To login to this website, please enter your OTP here. We already send OTP to your resgistered Email id."),
                            react_1["default"].createElement(TextField_1["default"], { autoFocus: true, margin: "dense", id: "name", label: "6 digit OTP", onChange: handleOTP, fullWidth: true })),
                        react_1["default"].createElement(DialogActions_1["default"], null,
                            react_1["default"].createElement(Button_1["default"], { onClick: handleClose, color: "primary" }, "Cancel"),
                            react_1["default"].createElement(Button_1["default"], { onClick: submitOTP, color: "primary" }, "Submit"))))))));
}
exports["default"] = SignIn;

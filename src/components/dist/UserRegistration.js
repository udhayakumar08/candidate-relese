"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
var react_1 = require("react");
var Avatar_1 = require("@material-ui/core/Avatar");
var Button_1 = require("@material-ui/core/Button");
var CssBaseline_1 = require("@material-ui/core/CssBaseline");
var TextField_1 = require("@material-ui/core/TextField");
var FormControlLabel_1 = require("@material-ui/core/FormControlLabel");
var Checkbox_1 = require("@material-ui/core/Checkbox");
var Link_1 = require("@material-ui/core/Link");
var Grid_1 = require("@material-ui/core/Grid");
var LockOutlined_1 = require("@material-ui/icons/LockOutlined");
var Typography_1 = require("@material-ui/core/Typography");
var styles_1 = require("@material-ui/core/styles");
var Container_1 = require("@material-ui/core/Container");
var FormControl_1 = require("@material-ui/core/FormControl");
var InputLabel_1 = require("@material-ui/core/InputLabel");
var MenuItem_1 = require("@material-ui/core/MenuItem");
var Select_1 = require("@material-ui/core/Select");
var react_redux_1 = require("react-redux");
var userAction_1 = require("../actions/userAction");
var react_router_dom_1 = require("react-router-dom");
// function Copyright() {
//   return (
//     <Typography variant="body2" color="textSecondary" align="center">
//       {'Copyright © '}
//       <Link color="inherit" href="https://material-ui.com/">
//         Your Website
//       </Link>{' '}
//       {new Date().getFullYear()}
//       {'.'}
//     </Typography>
//   );
// }
var useStyles = styles_1.makeStyles(function (theme) { return ({
    paper: {
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
        marginTop: theme.spacing(3)
    },
    submit: {
        margin: theme.spacing(3, 0, 2)
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120
    },
    selectEmpty: {
        marginTop: theme.spacing(2)
    }
}); });
function SignUp() {
    var classes = useStyles();
    var dispatch = react_redux_1.useDispatch();
    var _a = react_1.useState({
        email: "",
        fistName: "",
        lastName: "",
        phone: "",
        plan: ""
    }), NewUser = _a[0], setNewUser = _a[1];
    var handleData = function (event) {
        var _a;
        setNewUser(__assign(__assign({}, NewUser), (_a = {}, _a[event.target.name] = event.target.value, _a)));
    };
    var submitData = function (event) {
        event.preventDefault();
        console.log("new user data", NewUser);
        userAction_1.userRegister(NewUser);
    };
    return (react_1["default"].createElement(Container_1["default"], { component: "main", maxWidth: "xs" },
        react_1["default"].createElement(CssBaseline_1["default"], null),
        react_1["default"].createElement("div", { className: classes.paper },
            react_1["default"].createElement(Avatar_1["default"], { className: classes.avatar },
                react_1["default"].createElement(LockOutlined_1["default"], null)),
            react_1["default"].createElement(Typography_1["default"], { component: "h1", variant: "h5" }, "Sign up"),
            react_1["default"].createElement("form", { className: classes.form, noValidate: true, onSubmit: submitData },
                react_1["default"].createElement(Grid_1["default"], { container: true, spacing: 2 },
                    react_1["default"].createElement(Grid_1["default"], { item: true, xs: 12, sm: 6 },
                        react_1["default"].createElement(TextField_1["default"], { autoComplete: "fname", name: "fistName", value: NewUser.fistName, variant: "outlined", required: true, fullWidth: true, id: "firstName", label: "First Name", onChange: handleData, autoFocus: true })),
                    react_1["default"].createElement(Grid_1["default"], { item: true, xs: 12, sm: 6 },
                        react_1["default"].createElement(TextField_1["default"], { variant: "outlined", required: true, fullWidth: true, id: "lastName", label: "Last Name", name: "lastName", value: NewUser.lastName, onChange: handleData, autoComplete: "lname" })),
                    react_1["default"].createElement(Grid_1["default"], { item: true, xs: 12 },
                        react_1["default"].createElement(TextField_1["default"], { variant: "outlined", required: true, fullWidth: true, id: "email", label: "Email Address", name: "email", onChange: handleData, value: NewUser.email, autoComplete: "email" })),
                    react_1["default"].createElement(Grid_1["default"], { item: true, xs: 12 },
                        react_1["default"].createElement(TextField_1["default"], { variant: "outlined", required: true, fullWidth: true, name: "phone", value: NewUser.phone, label: "Mobile Number", type: "phone", onChange: handleData, autoComplete: "current-password" })),
                    react_1["default"].createElement(Grid_1["default"], { item: true, xs: 12 },
                        react_1["default"].createElement(FormControl_1["default"], { variant: "outlined", className: classes.formControl },
                            react_1["default"].createElement(InputLabel_1["default"], { id: "demo-simple-select-outlined-label" }, "Plan"),
                            react_1["default"].createElement(Select_1["default"], { labelId: "demo-simple-select-outlined-label", id: "demo-simple-select-outlined", value: NewUser.plan, name: "plan", onChange: handleData, label: "Age" },
                                react_1["default"].createElement(MenuItem_1["default"], { value: "" },
                                    react_1["default"].createElement("em", null, "None")),
                                react_1["default"].createElement(MenuItem_1["default"], { value: 999 }, "\u20B9999"),
                                react_1["default"].createElement(MenuItem_1["default"], { value: 499 }, "\u20B9499"),
                                react_1["default"].createElement(MenuItem_1["default"], { value: 199 }, "\u20B9199")))),
                    react_1["default"].createElement(Grid_1["default"], { item: true, xs: 12 },
                        react_1["default"].createElement(FormControlLabel_1["default"], { control: react_1["default"].createElement(Checkbox_1["default"], { value: "allowExtraEmails", color: "primary" }), label: "I want to receive inspiration, marketing promotions and updates via email." }))),
                react_1["default"].createElement(Button_1["default"], { type: "submit", fullWidth: true, variant: "contained", color: "primary", className: classes.submit }, "Sign Up"),
                react_1["default"].createElement(Grid_1["default"], { container: true, justify: "flex-end" },
                    react_1["default"].createElement(Grid_1["default"], { item: true },
                        react_1["default"].createElement(Link_1["default"], { variant: "body2" },
                            react_1["default"].createElement(react_router_dom_1.NavLink, { to: '/userLogin' }, " Already have an account? Sign in"))))))));
}
exports["default"] = SignUp;

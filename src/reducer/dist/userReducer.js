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
var USER_LOGIN = "USER_LOGIN";
var GET_MOVIE = "GET_MOVIE";
var OTP_VERIFICATION = "OTP_VERIFICATION";
var SIGN_OUT = "SIGN_OUT";
var userStore = {
    Loading: true,
    isLogin: false,
    loggedUser: "",
    movies: [{}],
    user: {}
};
var userReducer = function (state, action) {
    if (state === void 0) { state = userStore; }
    switch (action.type) {
        case USER_LOGIN:
            console.log("user reducer is caller");
            return __assign(__assign({}, state), { loggedUser: action.payload, Loading: false });
        case OTP_VERIFICATION:
            return __assign(__assign({}, state), { isLogin: action.payload });
        case GET_MOVIE:
            return {
                movies: action.payload
            };
        case SIGN_OUT:
            return __assign(__assign({}, state), { isLogin: action.payload });
        default:
            console.log("default of reducer is called");
            return state;
    }
};
exports["default"] = userReducer;

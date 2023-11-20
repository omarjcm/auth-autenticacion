"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = _interopRequireDefault(require("express"));
var _user = _interopRequireDefault(require("./routes/user.routes"));
var _auth = _interopRequireDefault(require("./routes/auth.routes"));
var _initialSetup = require("./libs/initialSetup");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var app = (0, _express["default"])();
//create_roles()

app.use(_express["default"].json());
app.use(_express["default"].urlencoded({
  extended: false
}));
app.use('/users', _user["default"]);
app.use('/auth', _auth["default"]);
var _default = exports["default"] = app;
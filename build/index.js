"use strict";

var _app = _interopRequireDefault(require("./app"));
var _config = _interopRequireDefault(require("./config"));
require("./database");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
_app["default"].listen(_config["default"].PORT, function () {
  console.log("Server listen on port ".concat(_config["default"].PORT));
});
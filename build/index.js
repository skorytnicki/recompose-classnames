"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.withClassNames = withClassNames;

var _recompose = require("recompose");

var _classnames = require("classnames");

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function withClassNames(rules) {
    return (0, _recompose.withProps)(function (_ref) {
        var className = _ref.className,
            props = _objectWithoutProperties(_ref, ["className"]);

        return {
            className: (0, _classnames2.default)(rules(props), className)
        };
    });
}

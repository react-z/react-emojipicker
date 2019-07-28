"use strict";

var _enzyme = require("enzyme");

var _enzymeAdapterReact = _interopRequireDefault(require("enzyme-adapter-react-16"));

var _react = _interopRequireDefault(require("react"));

var _reactTestRenderer = _interopRequireDefault(require("react-test-renderer"));

var _Picker = _interopRequireDefault(require("../Picker"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* setup enzyme */
(0, _enzyme.configure)({
  adapter: new _enzymeAdapterReact.default()
});
/* setup jsdom */

var jsdom = require('jsdom');

var JSDOM = jsdom.JSDOM;
var window = new JSDOM('').window;
global.window = window;
global.document = window.document;
test('Picker renders correctly and matches snapshot', function () {
  var component = _reactTestRenderer.default.create(_react.default.createElement(_Picker.default, {
    onEmojiSelected: jest.fn()
  }));

  var tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
test('Picker renders the correct elements and props', function () {
  var handleEmojiSelected = jest.fn(function (event) {});
  var wrapper = (0, _enzyme.shallow)(_react.default.createElement(_Picker.default, {
    onEmojiSelected: handleEmojiSelected
  })); // wrapper
  //   .find('.ld-emoji')
  //   .first()
  //   .simulate('click')
  // expect(wrapper.instance().props.onEmojiSelected).toBeCalled();
  // console.log(wrapper.debug())

  expect(wrapper.find('.ld-emoji').length).toEqual(154);
});
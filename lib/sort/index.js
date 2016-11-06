'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _bubblesort = require('./bubblesort');

Object.keys(_bubblesort).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _bubblesort[key];
    }
  });
});

var _fordjohnson = require('./fordjohnson');

Object.keys(_fordjohnson).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _fordjohnson[key];
    }
  });
});

var _insertionsort = require('./insertionsort');

Object.keys(_insertionsort).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _insertionsort[key];
    }
  });
});

var _selectionsort = require('./selectionsort');

Object.keys(_selectionsort).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _selectionsort[key];
    }
  });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zb3J0L2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOzs7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOzs7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOzs7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0ICogZnJvbSAnLi9idWJibGVzb3J0JyA7XG5leHBvcnQgKiBmcm9tICcuL2ZvcmRqb2huc29uJyA7XG5leHBvcnQgKiBmcm9tICcuL2luc2VydGlvbnNvcnQnIDtcbmV4cG9ydCAqIGZyb20gJy4vc2VsZWN0aW9uc29ydCcgO1xuIl19
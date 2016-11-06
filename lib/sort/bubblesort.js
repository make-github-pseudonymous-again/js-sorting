"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.bubblesort = bubblesort;
function bubblesort(compare, a, i, j) {

	var s = j - 1;

	var swapped = void 0;

	do {

		// we stop if the array is sorted
		// i.e. if no swap was required
		// in this step

		swapped = false;

		for (var k = i; k < s; ++k) {

			if (compare(a[k], a[k + 1]) > 0) {

				// swap boxes

				var t = a[k];
				a[k] = a[k + 1];
				a[k + 1] = t;

				swapped = true;
			}
		}
	} while (swapped);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zb3J0L2J1YmJsZXNvcnQuanMiXSwibmFtZXMiOlsiYnViYmxlc29ydCIsImNvbXBhcmUiLCJhIiwiaSIsImoiLCJzIiwic3dhcHBlZCIsImsiLCJ0Il0sIm1hcHBpbmdzIjoiOzs7OztRQUFnQkEsVSxHQUFBQSxVO0FBQVQsU0FBU0EsVUFBVCxDQUFzQkMsT0FBdEIsRUFBK0JDLENBQS9CLEVBQWtDQyxDQUFsQyxFQUFxQ0MsQ0FBckMsRUFBeUM7O0FBRS9DLEtBQU1DLElBQUlELElBQUksQ0FBZDs7QUFFQSxLQUFJRSxnQkFBSjs7QUFFQSxJQUFHOztBQUVGO0FBQ0E7QUFDQTs7QUFFQUEsWUFBVSxLQUFWOztBQUVBLE9BQU0sSUFBSUMsSUFBSUosQ0FBZCxFQUFrQkksSUFBSUYsQ0FBdEIsRUFBMEIsRUFBRUUsQ0FBNUIsRUFBZ0M7O0FBRS9CLE9BQUtOLFFBQVNDLEVBQUVLLENBQUYsQ0FBVCxFQUFlTCxFQUFFSyxJQUFJLENBQU4sQ0FBZixJQUE0QixDQUFqQyxFQUFxQzs7QUFFcEM7O0FBRUEsUUFBTUMsSUFBSU4sRUFBRUssQ0FBRixDQUFWO0FBQ0FMLE1BQUVLLENBQUYsSUFBT0wsRUFBRUssSUFBSSxDQUFOLENBQVA7QUFDQUwsTUFBRUssSUFBSSxDQUFOLElBQVdDLENBQVg7O0FBRUFGLGNBQVUsSUFBVjtBQUVBO0FBRUQ7QUFFRCxFQXhCRCxRQXdCVUEsT0F4QlY7QUF5QkEiLCJmaWxlIjoiYnViYmxlc29ydC5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBmdW5jdGlvbiBidWJibGVzb3J0ICggY29tcGFyZSwgYSwgaSwgaiApIHtcblxuXHRjb25zdCBzID0gaiAtIDE7XG5cblx0bGV0IHN3YXBwZWQgO1xuXG5cdGRvIHtcblxuXHRcdC8vIHdlIHN0b3AgaWYgdGhlIGFycmF5IGlzIHNvcnRlZFxuXHRcdC8vIGkuZS4gaWYgbm8gc3dhcCB3YXMgcmVxdWlyZWRcblx0XHQvLyBpbiB0aGlzIHN0ZXBcblxuXHRcdHN3YXBwZWQgPSBmYWxzZTtcblxuXHRcdGZvciAoIGxldCBrID0gaSA7IGsgPCBzIDsgKytrICkge1xuXG5cdFx0XHRpZiAoIGNvbXBhcmUoIGFba10sIGFbayArIDFdICkgPiAwICkge1xuXG5cdFx0XHRcdC8vIHN3YXAgYm94ZXNcblxuXHRcdFx0XHRjb25zdCB0ID0gYVtrXTtcblx0XHRcdFx0YVtrXSA9IGFbayArIDFdO1xuXHRcdFx0XHRhW2sgKyAxXSA9IHQ7XG5cblx0XHRcdFx0c3dhcHBlZCA9IHRydWU7XG5cblx0XHRcdH1cblxuXHRcdH1cblxuXHR9IHdoaWxlICggc3dhcHBlZCApO1xufVxuIl19
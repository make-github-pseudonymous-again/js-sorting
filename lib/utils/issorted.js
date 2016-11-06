"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.issorted = issorted;

/**
 * Checks whether range [left,right[ of array is sorted. Returns k <= right
 * such that [left,k[ is sorted.
 */

function issorted(compare, array, left, right) {

	if (left >= right) return right;

	while (++left < right) {

		if (compare(array[left - 1], array[left]) > 0) {

			break;
		}
	}

	return left;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlscy9pc3NvcnRlZC5qcyJdLCJuYW1lcyI6WyJpc3NvcnRlZCIsImNvbXBhcmUiLCJhcnJheSIsImxlZnQiLCJyaWdodCJdLCJtYXBwaW5ncyI6Ijs7Ozs7UUFNZ0JBLFEsR0FBQUEsUTs7QUFMaEI7Ozs7O0FBS08sU0FBU0EsUUFBVCxDQUFvQkMsT0FBcEIsRUFBOEJDLEtBQTlCLEVBQXNDQyxJQUF0QyxFQUE2Q0MsS0FBN0MsRUFBcUQ7O0FBRTNELEtBQUtELFFBQVFDLEtBQWIsRUFBcUIsT0FBT0EsS0FBUDs7QUFFckIsUUFBUSxFQUFFRCxJQUFGLEdBQVNDLEtBQWpCLEVBQXlCOztBQUV4QixNQUFLSCxRQUFTQyxNQUFNQyxPQUFLLENBQVgsQ0FBVCxFQUF5QkQsTUFBTUMsSUFBTixDQUF6QixJQUF5QyxDQUE5QyxFQUFrRDs7QUFFakQ7QUFFQTtBQUVEOztBQUVELFFBQU9BLElBQVA7QUFFQSIsImZpbGUiOiJpc3NvcnRlZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuLyoqXG4gKiBDaGVja3Mgd2hldGhlciByYW5nZSBbbGVmdCxyaWdodFsgb2YgYXJyYXkgaXMgc29ydGVkLiBSZXR1cm5zIGsgPD0gcmlnaHRcbiAqIHN1Y2ggdGhhdCBbbGVmdCxrWyBpcyBzb3J0ZWQuXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIGlzc29ydGVkICggY29tcGFyZSAsIGFycmF5ICwgbGVmdCAsIHJpZ2h0ICkge1xuXG5cdGlmICggbGVmdCA+PSByaWdodCApIHJldHVybiByaWdodCA7XG5cblx0d2hpbGUgKCArK2xlZnQgPCByaWdodCApIHtcblxuXHRcdGlmICggY29tcGFyZSggYXJyYXlbbGVmdC0xXSAsIGFycmF5W2xlZnRdICkgPiAwICkge1xuXG5cdFx0XHRicmVhayA7XG5cblx0XHR9XG5cblx0fVxuXG5cdHJldHVybiBsZWZ0IDtcblxufVxuIl19
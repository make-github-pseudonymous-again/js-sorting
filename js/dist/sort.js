"use strict";

(function () {

	"use strict";

	var definition = function definition(exports, undefined) {

		/* js/src/sort */
		/* js/src/sort/bubblesort.js */

		var bubblesort = function bubblesort(compare, a, i, j) {

			var swapped, k, s, t;

			s = j - 1;

			do {

				// we stop if the array is sorted
				// i.e. if no swap was required
				// in this step

				swapped = false;

				for (k = i; k < s; ++k) {

					if (compare(a[k], a[k + 1]) > 0) {

						// swap boxes

						t = a[k];
						a[k] = a[k + 1];
						a[k + 1] = t;

						swapped = true;
					}
				}
			} while (swapped);
		};

		exports.bubblesort = bubblesort;

		/* js/src/sort/fordjohnson.js */

		var _fordjohnson = function _fordjohnson(binarysearch) {

			var fordjohnson = function fordjohnson(compare, swap, a, i, j) {

				var m, k, t, y, p, q, r, x, l, w, s, pairswap;

				if (j - i < 2) return;

				k = m = (j - i) / 2 | 0;

				// compare pairs of elements and put largest elements at the front of the
				// array

				while (k--) {

					if (compare(a[i + k], a[i + m + k]) < 0) {

						swap(a, i + k, i + m + k);
					}
				}

				// sort the largest elements at the front recursively

				pairswap = function (a, i, j) {
					swap(a, i, j);
					swap(a, i + m, j + m);
				};

				fordjohnson(compare, pairswap, a, i, i + m);

				// merge the rest of the array into the front, one item at a time

				p = y = t = 1;

				q = 0;

				while (i + m + t <= j) {

					r = t;

					while (r-- > q) {

						w = a[i + m + t - 1];

						x = binarysearch(compare, a, i, i + m + q, w);
						l = x[0] + x[1];

						s = i + m + t;

						while (--s > l) {

							swap(a, s, s - 1);
						}
					}

					q = t;

					p *= 2;
					y = p - 2 * t;
					t += y;
				}

				r = j - i - m;

				while (r-- > q) {

					w = a[j - 1];

					x = binarysearch(compare, a, i, i + m + q, w);
					l = x[0] + x[1];

					s = j;

					while (--s > l) {

						swap(a, s, s - 1);
					}
				}
			};

			return fordjohnson;
		};

		exports._fordjohnson = _fordjohnson;

		/* js/src/sort/insertionsort.js */

		var insertionsort = function insertionsort(compare, a, i, j) {

			var o, k, t;

			for (k = i + 1; k < j; ++k) {

				t = k;
				o = a[t];

				while (t-- > i && compare(a[t], o) > 0) {
					a[t + 1] = a[t];
				}

				a[t + 1] = o;
			}
		};

		exports.insertionsort = insertionsort;

		/* js/src/sort/selectionsort.js */

		var selectionsort = function selectionsort(compare, a, i, j) {

			var o, t, k;

			for (; i < j; ++i) {

				t = k = i;
				o = a[t];

				while (++t < j) {

					if (compare(o, a[t]) > 0) {
						o = a[t];
						k = t;
					}
				}

				if (k > i) {
					a[k] = a[i];
					a[i] = o;
				}
			}
		};

		exports.selectionsort = selectionsort;

		/* js/src/utils */
		/* js/src/utils/issorted.js */

		/**
   * Checks whether range [left,right[ of array is sorted. Returns k <= right
   * such that [left,k[ is sorted.
   */

		var issorted = function issorted(compare, array, left, right) {

			if (left >= right) return right;

			while (++left < right) {

				if (compare(array[left - 1], array[left]) > 0) {

					break;
				}
			}

			return left;
		};

		exports.issorted = issorted;

		/* js/src/utils/whole.js */

		var whole = function whole(sort) {

			return function (compare, array) {

				sort(compare, array, 0, array.length);
			};
		};

		exports.whole = whole;

		return exports;
	};
	if (typeof exports === "object") {
		definition(exports);
	} else if (typeof define === "function" && define.amd) {
		define("aureooms-js-sort", [], function () {
			return definition({});
		});
	} else if (typeof window === "object" && typeof window.document === "object") {
		definition(window["sort"] = {});
	} else console.error("unable to detect type of module to define for aureooms-js-sort");
})();
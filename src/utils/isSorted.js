import {firstInversion} from './firstInversion';

/**
 * Returns whether range [left,right[ of array is sorted.
 */
export function isSorted ( compare , array , left , right ) {
	return firstInversion(compare, array, left, right) === right;
}

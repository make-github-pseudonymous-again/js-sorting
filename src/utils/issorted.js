
/**
 * Checks whether range [left,right[ of array is sorted. Returns k <= right
 * such that [left,k[ is sorted.
 */

export function issorted ( compare , array , left , right ) {

	if ( left >= right ) return right ;

	while ( ++left < right ) {

		if ( compare( array[left-1] , array[left] ) > 0 ) {

			break ;

		}

	}

	return left ;

}

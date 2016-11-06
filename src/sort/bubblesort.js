export function bubblesort ( compare, a, i, j ) {

	const s = j - 1;

	let swapped ;

	do {

		// we stop if the array is sorted
		// i.e. if no swap was required
		// in this step

		swapped = false;

		for ( let k = i ; k < s ; ++k ) {

			if ( compare( a[k], a[k + 1] ) > 0 ) {

				// swap boxes

				const t = a[k];
				a[k] = a[k + 1];
				a[k + 1] = t;

				swapped = true;

			}

		}

	} while ( swapped );
}



export function selectionsort ( compare, a, i, j ) {

	for ( ; i < j ; ++i ) {

		let k = i;
		let t = i;
		let o = a[t];

		while ( ++t < j ) {

			if ( compare( o, a[t] ) > 0 ) {
				o = a[t];
				k = t;
			}

		}

		if ( k > i ) {
			a[k] = a[i];
			a[i] = o;
		}

	}
}


export function insertionsort ( compare, a, i, j ) {

	for ( let k = i + 1 ; k < j ; ++k ) {

		let t = k;
		const o = a[t];

		while ( t --> i && compare( a[t], o ) > 0 ) {
			a[t + 1] = a[t];
		}

		a[t + 1] = o;
	}
}

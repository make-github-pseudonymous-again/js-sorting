

export function whole ( sort ) {

	return function ( compare, array ) {

		sort( compare, array, 0, array.length );

	};

}

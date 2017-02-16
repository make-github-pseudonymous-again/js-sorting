import test from 'ava' ;

import array from "@aureooms/js-array" ;
import search from "@aureooms/js-search" ;
import random from "@aureooms/js-random" ;
import compare from "@aureooms/js-compare" ;
import * as itertools from "@aureooms/js-itertools" ;
import functools from "@aureooms/js-functools" ;

import * as sort from '../../src' ;

function check ( sortname, arraysort, ctor, n, comparename, compare ) {

	arraysort = sort.whole( arraysort );

	const title = `whole ${sortname} (new ${ctor.name}(${n}), ${comparename})`;

	test( title, t => {

		// SETUP ARRAY
		const a = new ctor(n);
		array.iota( a, 0, n, 0 );

		// SORT ARRAY
		random.shuffle( a, 0, n );
		arraysort( compare, a );

		t.is( sort.issorted( compare , a , 0 , n ) , n , "check sorted" );
		t.is( a.length, n, "check length a" );

	} );
}

itertools.exhaust( itertools.map(

function ( args ) {

	functools.star( function ( sortname, arraysort, comparename, compare, size, type ) {

		if ( type.BYTES_PER_ELEMENT && size > Math.pow( 2, type.BYTES_PER_ELEMENT * 8 ) ) {
			return;
		}

		check( sortname, arraysort, type, size, comparename, compare );

	}, itertools.list( itertools.chain( args ) ) );

} ,

itertools.product( [

[
	[ "insertionsort", sort.insertionsort ],
	[ "selectionsort", sort.selectionsort ],
	[ "bubblesort", sort.bubblesort ],
	[ "fordjohnson" , function ( compare , a , i , j ) {

		sort._fordjohnson( search.binarysearch )( compare , array.swap , a , i , j ) ;

	} ]

],

[
	[ "increasing", compare.increasing ],
	[ "decreasing", compare.decreasing ]
],

[[0], [1], [2], [10], [63], [64], [65]],

[
	[ Array ],
	[ Int8Array ],
	[ Uint8Array ],
	[ Int16Array ],
	[ Uint16Array ],
	[ Int32Array ],
	[ Uint32Array ],
	[ Float32Array ],
	[ Float64Array ]
 ]

], 1 ) ) ) ;

import test from 'ava' ;

import { shuffle } from "@randomized/random" ;
import {increasing, decreasing} from "@total-order/primitive" ;
import {exhaust} from '@iterable-iterator/consume';
import {map} from '@iterable-iterator/map';
import {range} from '@iterable-iterator/range';
import {list} from '@iterable-iterator/list';
import {_chain as chain} from '@iterable-iterator/chain';
import {product} from '@set-theory/cartesian-product';
import {star} from "@functional-abstraction/functools";
import {isSorted} from '@comparison-sorting/is-sorted';

import * as sort from '../../src' ;

function check ( sortname, arraysort, ctor, n, comparename, compare ) {

	arraysort = sort.whole( arraysort );

	const title = `whole ${sortname} (new ${ctor.name}(${n}), ${comparename})`;

	test( title, t => {

		// SETUP ARRAY
		const a = ctor.from(range(n));

		// SORT ARRAY
		shuffle( a, 0, n );
		arraysort( compare, a );

		t.true( isSorted( compare , a , 0 , n ) , "check sorted" );
		t.is( n, a.length, "check length a" );

	} );
}

exhaust( map(

function ( args ) {

	star( function ( sortname, arraysort, comparename, compare, size, type ) {

		if ( type.BYTES_PER_ELEMENT && size > Math.pow( 2, type.BYTES_PER_ELEMENT * 8 ) ) {
			return;
		}

		check( sortname, arraysort, type, size, comparename, compare );

	}, list( chain( args ) ) );

} ,

product( [

[
	[ "selectionsort", sort.selectionsort ],
	[ "bubblesort", sort.bubblesort ]
],

[
	[ "increasing", increasing ],
	[ "decreasing", decreasing ]
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

import ava from 'ava' ;

import { swap } from "@aureooms/js-array" ;
import { binarysearch } from "@aureooms/js-search" ;
import * as spec from "@aureooms/js-in-situ-sort-spec" ;
import * as sort from "../../src" ;

spec.test( ava , [
	[ "insertionsort", sort.insertionsort ],
	[ "selectionsort", sort.selectionsort ],
	[ "bubblesort", sort.bubblesort ],
	[ "fordjohnson" , function ( compare , a , i , j ) {
		sort._fordjohnson( binarysearch )( compare , swap , a , i , j ) ;
	} ]
] ) ;

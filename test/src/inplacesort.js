import ava from 'ava' ;

import * as spec from "@comparison-sorting/specification" ;
import * as sort from "../../src" ;

spec.test( ava , [
	[ "selectionsort", sort.selectionsort ],
	[ "bubblesort", sort.bubblesort ]
] ) ;

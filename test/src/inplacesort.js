import ava from 'ava' ;

import * as spec from "@aureooms/js-in-situ-sort-spec" ;
import * as sort from "../../src" ;

spec.test( ava , [
	[ "selectionsort", sort.selectionsort ],
	[ "bubblesort", sort.bubblesort ]
] ) ;

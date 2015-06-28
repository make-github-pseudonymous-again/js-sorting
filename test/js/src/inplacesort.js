
var array = require( "aureooms-js-array" ) ;
var search = require( "aureooms-js-search" ) ;
var insitusortspec = require( "aureooms-js-in-situ-sort-spec" ) ;

insitusortspec.test( [
	[ "insertionsort", sort.insertionsort ],
	[ "selectionsort", sort.selectionsort ],
	[ "bubblesort", sort.bubblesort ],
	[ "fordjohnson" , function ( compare , a , i , j ) {

		sort._fordjohnson( search.binarysearch )( compare , array.swap , a , i , j ) ;

	} ]
] ) ;

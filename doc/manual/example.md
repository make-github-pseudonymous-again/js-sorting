# Examples
```js
import array from "@aureooms/js-array" ;
import search from "@aureooms/js-search" ;
import compare from "@aureooms/js-compare" ;

let fordjohnson = function ( compare , a , i , j ) {

	sort._fordjohnson( search.binarysearch )( compare , array.swap , a , i , j ) ;

} ;

let a = [ 1 , 6 , 5 , 3 , 2 , 4 ] ;

fordjohnson( compare.increasing , a , 0 , a.length ) ;

a ; // [ 1 , 2 , 3 , 4 , 5 , 6 ]

fordjohnson( compare.decreasing , a , 0 , a.length ) ;

a ; // [ 6 , 5 , 4 , 3 , 2 , 1 ]

// but also

/** selectionsort */
let selectionsort = sort.selectionsort ;
/** bubblesort */
let bubblesort = sort.bubblesort ;
```

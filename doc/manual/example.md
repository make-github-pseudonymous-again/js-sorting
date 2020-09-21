# Examples
```js
import * as sort from "@aureooms/js-sort" ;
import {increasing, decreasing} from "@aureooms/js-compare" ;

let a = [ 1 , 6 , 5 , 3 , 2 , 4 ] ;
let {selectionsort, isSorted} = sort;

selectionsort( increasing , a , 0 , a.length ) ;

a ; // [ 1 , 2 , 3 , 4 , 5 , 6 ]
isSorted(increasing, a, 0, a.length); // true

selectionsort( decreasing , a , 0 , a.length ) ;

a ; // [ 6 , 5 , 4 , 3 , 2 , 1 ]
isSorted(decreasing, a, 0, a.length); // true

// but also

/** bubblesort */
let {bubblesort} = sort ;
```

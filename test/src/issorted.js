import test from 'ava' ;

import { increasing , decreasing } from "@aureooms/js-compare" ;

import { issorted } from '../../src' ;

function macro ( t , array , left , right , k1 , k2 ) {

	const n = array.length ;

	t.is( issorted( increasing , array , left , right ) , k1 ) ;
	t.is( issorted( decreasing , array , left , right ) , k2 ) ;

	t.is( array.length , n ) ;

}

macro.title = ( _ , ...args ) => args.join(' , ') ;

test( macro , [ ] , 0 , 0 , 0 , 0 ) ;
test( macro , [ 0 , 1 , 2 ] , 1 , 1 , 1 , 1 ) ;
test( macro , [ 1 , 1 , 1 ] , 0 , 3 , 3 , 3 ) ;
test( macro , [ 1 , 2 , 3 ] , 0 , 3 , 3 , 1 ) ;
test( macro , [ 1 , 2 , 4 , 3 ] , 0 , 4 , 3 , 1 ) ;
test( macro , [ 1 , 0 , 1 , 1 , 2 , 3 , 1 , 0 , 1 ] , 3 , 6 , 6 , 4 ) ;
test( macro , [ 1 , 0 , 1 , 1 , 2 , 3 , 1 , 0 , 1 ] , 0 , 9 , 1 , 2 ) ;

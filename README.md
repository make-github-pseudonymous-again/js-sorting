[js-sort](http://aureooms.github.io/js-sort)
==

Sorting code bricks for JavaScript. Parent is
[aureooms/js-algo](https://github.com/aureooms/js-algo).

```js
let fordjohnson = sort._fordjohnson( search.binarysearch ) ;
```

[![NPM license](http://img.shields.io/npm/l/aureooms-js-sort.svg?style=flat)](https://raw.githubusercontent.com/aureooms/js-sort/master/LICENSE)
[![NPM version](http://img.shields.io/npm/v/aureooms-js-sort.svg?style=flat)](https://www.npmjs.org/package/aureooms-js-sort)
[![Bower version](http://img.shields.io/bower/v/aureooms-js-sort.svg?style=flat)](http://bower.io/search/?q=aureooms-js-sort)
[![Build Status](http://img.shields.io/travis/aureooms/js-sort.svg?style=flat)](https://travis-ci.org/aureooms/js-sort)
[![Coverage Status](http://img.shields.io/coveralls/aureooms/js-sort.svg?style=flat)](https://coveralls.io/r/aureooms/js-sort)
[![Dependencies Status](http://img.shields.io/david/aureooms/js-sort.svg?style=flat)](https://david-dm.org/aureooms/js-sort#info=dependencies)
[![devDependencies Status](http://img.shields.io/david/dev/aureooms/js-sort.svg?style=flat)](https://david-dm.org/aureooms/js-sort#info=devDependencies)
[![Code Climate](http://img.shields.io/codeclimate/github/aureooms/js-sort.svg?style=flat)](https://codeclimate.com/github/aureooms/js-sort)
[![NPM downloads per month](http://img.shields.io/npm/dm/aureooms-js-sort.svg?style=flat)](https://www.npmjs.org/package/aureooms-js-sort)
[![GitHub issues](http://img.shields.io/github/issues/aureooms/js-sort.svg?style=flat)](https://github.com/aureooms/js-sort/issues)
[![Inline docs](http://inch-ci.org/github/aureooms/js-sort.svg?branch=master&style=shields)](http://inch-ci.org/github/aureooms/js-sort)


Can be managed through [jspm](https://github.com/jspm/jspm-cli),
[duo](https://github.com/duojs/duo),
[component](https://github.com/componentjs/component),
[bower](https://github.com/bower/bower),
[ender](https://github.com/ender-js/Ender),
[jam](https://github.com/caolan/jam),
[spm](https://github.com/spmjs/spm),
and [npm](https://github.com/npm/npm).

## Install

### jspm
```terminal
jspm install github:aureooms/js-sort
# or
jspm install npm:aureooms-js-sort
```
### duo
No install step needed for duo!

### component
```terminal
component install aureooms/js-sort
```

### bower
```terminal
bower install aureooms-js-sort
```

### ender
```terminal
ender add aureooms-js-sort
```

### jam
```terminal
jam install aureooms-js-sort
```

### spm
```terminal
spm install aureooms-js-sort --save
```

### npm
```terminal
npm install aureooms-js-sort --save
```

## Require
### jspm
```js
let sort = require( "github:aureooms/js-sort" ) ;
// or
import sort from 'aureooms-js-sort' ;
```
### duo
```js
let sort = require( "aureooms/js-sort" ) ;
```

### component, ender, spm, npm
```js
let sort = require( "aureooms-js-sort" ) ;
```

### bower
The script tag exposes the global variable `sort`.
```html
<script src="bower_components/aureooms-js-sort/js/dist/sort.min.js"></script>
```
Alternatively, you can use any tool mentioned [here](http://bower.io/docs/tools/).

### jam
```js
require( [ "aureooms-js-sort" ] , function ( sort ) { ... } ) ;
```

## Children

This package has several children:

  - [aureooms/js-bucketsort](https://github.com/aureooms/js-bucketsort): bucketsort code bricks for JavaScript
  - [aureooms/js-countingsort](https://github.com/aureooms/js-countingsort): countingsort code bricks for JavaScript
  - [aureooms/js-in-situ-sort-spec](https://github.com/aureooms/js-in-situ-sort-spec): in place sorting code bricks for JavaScript
    - [aureooms/js-heapsort](https://github.com/aureooms/js-heapsort): heapsort code bricks for JavaScript
    - [aureooms/js-quicksort](https://github.com/aureooms/js-quicksort): quicksort code bricks for JavaScript
  - [aureooms/js-mergesort](https://github.com/aureooms/js-mergesort): mergesort code bricks for JavaScript
  - [aureooms/js-merging](https://github.com/aureooms/js-merging): merging code bricks for JavaScript
  - [aureooms/js-partition](https://github.com/aureooms/js-partition): partition code bricks for JavaScript
  - [aureooms/js-radixsort](https://github.com/aureooms/js-radixsort): radixsort code bricks for JavaScript
  - [aureooms/js-selection](https://github.com/aureooms/js-selection): selection code bricks for JavaScript


## Use

```js
let array = require( "aureooms-js-array" ) ;
let search = require( "aureooms-js-search" ) ;
let compare = require( "aureooms-js-compare" ) ;

let fordjohnson = function ( compare , a , i , j ) {

	sort._fordjohnson( search.binarysearch )( compare , array.swap , a , i , j ) ;

} ;

let a = [ 1 , 6 , 5 , 3 , 2 , 4 ] ;

fordjohnson( compare.increasing , a , 0 , a.length ) ;

a ; // [ 1 , 2 , 3 , 4 , 5 , 6 ]

fordjohnson( compare.decreasing , a , 0 , a.length ) ;

a ; // [ 6 , 5 , 4 , 3 , 2 , 1 ]

// but also

/** insertionsort */
let insertionsort = sort.insertionsort ;
/** selectionsort */
let selectionsort = sort.selectionsort ;
/** bubblesort */
let bubblesort = sort.bubblesort ;
```

## Reference

  - http://sorting.at

:signal_strength:
[Sorting](https://make-github-pseudonymous-again.github.io/js-sorting)
[![License](https://img.shields.io/github/license/make-github-pseudonymous-again/js-sorting.svg)](https://raw.githubusercontent.com/make-github-pseudonymous-again/js-sorting/main/LICENSE)
[![GitHub issues](https://img.shields.io/github/issues/make-github-pseudonymous-again/js-sorting.svg)](https://github.com/make-github-pseudonymous-again/js-sorting/issues)
==

<p align="center">
<a href="https://xkcd.com/1185">
<img src="https://imgs.xkcd.com/comics/ineffective_sorts.png" width="600">
</a><br/>
© <a href="https://xkcd.com">xkcd.com</a>
</p>

Sorting algorithms for JavaScript.
See [docs](https://make-github-pseudonymous-again.github.io/js-sorting).
Parent is [js-algorithms](https://github.com/make-github-pseudonymous-again/js-algorithms).

> :building_construction: Caveat emptor! This is work in progress. Code may be
> working. Documentation may be present. Coherence may be. Maybe.

```js
import {isSorted} from '@comparison-sorting/is-sorted';
import {increasing, decreasing} from '@total-order/primitive';
isSorted(increasing, [1, 2, 3], 0, 3); // true
isSorted(decreasing, [1, 2, 3], 0, 3); // false
```

## :baby: Children

This package has several children:

### :balance_scale: Comparison sorting

#### Spec

  - :notebook_with_decorative_cover: [@comparison-sorting/specification](https://github.com/comparison-sorting/specification): Comparison sorting specification for JavaScript

#### In-place

  - :leaves: [@comparison-sorting/heap-sort](https://github.com/comparison-sorting/heap-sort): heapsort for JavaScript
  - :rabbit2: [@comparison-sorting/quick-sort](https://github.com/comparison-sorting/quick-sort): quicksort for JavaScript
  - :rewind: [@comparison-sorting/insertion-sort](https://github.com/comparison-sorting/insertion-sort): Insertion sorting algorithms for JavaScript
  - :person_fencing: [@comparison-sorting/merge-insertion-sort](https://github.com/comparison-sorting/merge-insertion-sort): Ford-Johnson algorithm for JavaScript

#### Stable

  - :dragon: [@comparison-sorting/merge-sort](https://github.com/comparison-sorting/merge-sort): mergesort for JavaScript

#### Input oblivious

  - :musical_score: [@comparison-sorting/odd-even-merge-sort](https://github.com/comparison-sorting/odd-even-merge-sort): Batcher's odd-even mergesort for JavaScript

#### Subroutines

  - :waning_gibbous_moon: [@comparison-sorting/merging](https://github.com/comparison-sorting/merging): merging for JavaScript
  - :cake: [@comparison-sorting/partition](https://github.com/comparison-sorting/partition): partition for JavaScript
  - :point_down: [@comparison-sorting/selection](https://github.com/comparison-sorting/selection): selection for JavaScript

### :zzz: Integer sorting

  - :oden: [@integer-sorting/radix-sort](https://github.com/integer-sorting/radix-sort): Radix sorting algorithms for JavaScript
  - [js-countingsort](https://github.com/make-github-pseudonymous-again/js-countingsort): countingsort for JavaScript
  - [js-bucketsort](https://github.com/make-github-pseudonymous-again/js-bucketsort): bucketsort for JavaScript


## :link: Links

  - https://sorting.at

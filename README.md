:signal_strength: [@aureooms/js-sort](https://make-github-pseudonymous-again.github.io/js-sort)
==

<p align="center">
<a href="https://xkcd.com/1185">
<img src="https://imgs.xkcd.com/comics/ineffective_sorts.png" width="600">
</a><br/>
© <a href="https://xkcd.com">xkcd.com</a>
</p>

Sorting algorithms for JavaScript.
See [docs](https://make-github-pseudonymous-again.github.io/js-sort).
Parent is [@aureooms/js-algorithms](https://github.com/make-github-pseudonymous-again/js-algorithms).

> :building_construction: Caveat emptor! This is work in progress. Code may be
> working. Documentation may be present. Coherence may be. Maybe.

```js
import {isSorted} from '@comparison-sorting/is-sorted';
import {increasing, decreasing} from '@total-order/primitive';
isSorted(increasing, [1, 2, 3], 0, 3); // true
isSorted(decreasing, [1, 2, 3], 0, 3); // false
```

[![License](https://img.shields.io/github/license/make-github-pseudonymous-again/js-sort.svg)](https://raw.githubusercontent.com/make-github-pseudonymous-again/js-sort/master/LICENSE)
[![Version](https://img.shields.io/npm/v/@aureooms/js-sort.svg)](https://www.npmjs.org/package/@aureooms/js-sort)
[![Build](https://img.shields.io/travis/make-github-pseudonymous-again/js-sort/master.svg)](https://travis-ci.org/make-github-pseudonymous-again/js-sort/branches)
[![Dependencies](https://img.shields.io/david/make-github-pseudonymous-again/js-sort.svg)](https://david-dm.org/make-github-pseudonymous-again/js-sort)
[![Dev dependencies](https://img.shields.io/david/dev/make-github-pseudonymous-again/js-sort.svg)](https://david-dm.org/make-github-pseudonymous-again/js-sort?type=dev)
[![GitHub issues](https://img.shields.io/github/issues/make-github-pseudonymous-again/js-sort.svg)](https://github.com/make-github-pseudonymous-again/js-sort/issues)
[![Downloads](https://img.shields.io/npm/dm/@aureooms/js-sort.svg)](https://www.npmjs.org/package/@aureooms/js-sort)

[![Code issues](https://img.shields.io/codeclimate/issues/make-github-pseudonymous-again/js-sort.svg)](https://codeclimate.com/github/make-github-pseudonymous-again/js-sort/issues)
[![Code maintainability](https://img.shields.io/codeclimate/maintainability/make-github-pseudonymous-again/js-sort.svg)](https://codeclimate.com/github/make-github-pseudonymous-again/js-sort/trends/churn)
[![Code coverage (cov)](https://img.shields.io/codecov/c/gh/make-github-pseudonymous-again/js-sort/master.svg)](https://codecov.io/gh/make-github-pseudonymous-again/js-sort)
[![Code technical debt](https://img.shields.io/codeclimate/tech-debt/make-github-pseudonymous-again/js-sort.svg)](https://codeclimate.com/github/make-github-pseudonymous-again/js-sort/trends/technical_debt)
[![Documentation](https://make-github-pseudonymous-again.github.io/js-sort//badge.svg)](https://make-github-pseudonymous-again.github.io/js-sort//source.html)
[![Package size](https://img.shields.io/bundlephobia/minzip/@aureooms/js-sort)](https://bundlephobia.com/result?p=@aureooms/js-sort)

## :baby: Children

This package has several children:

### :balance_scale: Comparison sorting

  - :notebook_with_decorative_cover: [aureooms/js-in-situ-sort-spec](https://github.com/make-github-pseudonymous-again/js-in-situ-sort-spec): in place sorting for JavaScript
    - :leaves: [aureooms/js-heapsort](https://github.com/make-github-pseudonymous-again/js-heapsort): heapsort for JavaScript
    - :rabbit2: [aureooms/js-quicksort](https://github.com/make-github-pseudonymous-again/js-quicksort): quicksort for JavaScript
    - :rewind: [aureooms/js-insertion-sort](https://github.com/make-github-pseudonymous-again/js-insertion-sort): Insertion sorting algorithms for JavaScript
    - :person_fencing: [aureooms/js-merge-insertion-sort](https://github.com/make-github-pseudonymous-again/js-merge-insertion-sort): Ford-Johnson algorithm for JavaScript
  - :dragon: [aureooms/js-mergesort](https://github.com/make-github-pseudonymous-again/js-mergesort): mergesort for JavaScript
  - :musical_score: [aureooms/js-odd-even-mergesort](https://github.com/make-github-pseudonymous-again/js-odd-even-mergesort): Batcher's odd-even mergesort for JavaScript

#### Subroutines

  - :waning_gibbous_moon: [aureooms/js-merging](https://github.com/make-github-pseudonymous-again/js-merging): merging for JavaScript
  - :cake: [aureooms/js-partition](https://github.com/make-github-pseudonymous-again/js-partition): partition for JavaScript
  - :point_down: [aureooms/js-selection](https://github.com/make-github-pseudonymous-again/js-selection): selection for JavaScript

### :zzz: Integer sorting

  - :oden: [aureooms/js-radix-sort](https://github.com/make-github-pseudonymous-again/js-radix-sort): Radix sorting algorithms for JavaScript
  - [aureooms/js-countingsort](https://github.com/make-github-pseudonymous-again/js-countingsort): countingsort for JavaScript
  - [aureooms/js-bucketsort](https://github.com/make-github-pseudonymous-again/js-bucketsort): bucketsort for JavaScript


## :link: Links

  - http://sorting.at

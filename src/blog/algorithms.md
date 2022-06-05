---
title: Algorithms
author: Doston Nabotov
date: 2022-06-05
description: Essential Algorithms that are implemented in JavaScript. Concepts and mostly practice implementation of algorithms.
img: /assets/images/img-3.jpg
imgAlt: pencils
tags: ["IT", "algorithms", "featured"]
---

```js:
// remove duplicate elements in an array

const removeDuplicates = (arr) => {
  const cache = {};
  const result = [];

  for (let i = 0; i <= result.length; i++) {
    if (!cache[arr[i]]) {
      result.push(arr[i]);
      cache[arr[i]] = true;
    }
  }

  return result.sort((a, b) => a - b);
}

removeDuplicates([4,6,9,1,3,4,6,5,3]);
// [ 1, 3, 4, 6, 9 ]
```

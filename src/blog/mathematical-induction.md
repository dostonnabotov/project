---
title: Mathematical Induction
author: Doston Nabotov
date: 2022-05-28
description: Mathematical Induction is a mathematical proof technique. It is essentially used to prove that a statement P(n) holds for every natural number $n = 0, 1, 2, 3, ... $ There are 3 steps need to be implemented to achieve the desired result
img: /assets/images/img-3.jpg
imgAlt: pencils
tags: ["discrete math", "mathematical induction"]
---

## Mathematical Induction

Mathematical Induction is a mathematical proof technique

There are 3 steps need to be implemented to achieve the desired result

### The First Step:

The <u>Base</u> of induction - We check if the statement is true for some initial value $n = 1$.

### The Second Step:

The <u>Assumption</u> of induction – We write down the statement for $n = m$, and assume that the statement is true in this case.

### The Third Step:

The <u>Inductive</u> step – We write down the statement for $n = m + 1$ , and prove that the statement is true in this case.

<!-- ![Laptop](/assets/images/img-1.jpg) -->

### Task #1:

Using the principle of mathematical induction, prove the correctness of the following equality. All 3 steps must be explained!

$$ \sum\_{i=1}^{n} i(i+1) = {n(n+1)(n+2)\over 3} $$

**(1)** Base of induction:

| $n=1$ |

$$ \sum\_{i=1}^{1} i(i+1) = {1(1+1)(1+2)\over 3} = $$

$$ 1(1+1) = 1(1+1) \Rightarrow 2 = 2 \Rightarrow yes $$

| $n=2$ |

$$ \sum\_{i=1}^{2} i(i+1) = {2(2+1)(2+2)\over 3} = $$

$$ 1(1+1) + 2(2+1) = 2(4) \Rightarrow $$

$$ 8 = 8 \Rightarrow yes $$

> Note: $ 1(1+1) $ is when $ i=1 $, and $ 2(2+1) $ is when $ i=2 $

**(2)** Assumption of induction:

| $n=m$ |

$$ \sum\_{i=1}^{m} i(i+1) = {m(m+1)(m+2)\over 3} $$

> Even though, they doesn't mean much, you are required to write it down. It is a helper in the third step

**(3)** Inductive step:

| $n=m+1$ |

$$ \sum\_{i=1}^{m+1} i(i+1) = {(m+1)(m+1+1)(m+1+2)\over 3} $$

$$ \sum\_{i=1}^{m+1} i(i+1) = {(m+1)(m+2)(m+3)\over 3} $$

$$ \sum\_{i=1}^{m} i(i+1) + {(m+1)(m+1+1)} = {(m+1)(m+2)(m+3)\over 3}$$

$$ {m(m+1)(m+2)\over 3} + {(m+1)(m+2)\over 3} = {(m+1)(m+2)(m+3)\over 3} $$

$$ m(m+1)(m+2) + 3(m+1)(m+2) = (m+1)(m+2)(m+3) $$

$$ (m+1)(m+2)(m+3) = (m+1)(m+2)(m+3) $$

$$ \Rightarrow LHS = RHS $$
$$ \Rightarrow Q.E.D. $$

[Learn more](https://en.wikipedia.org/wiki/Mathematical_induction)

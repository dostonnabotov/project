---
title: Derivatives
author: Doston Nabotov
date: 2022-06-01
description: Derivation Basic Formulas. Product Rule, Chain Rule and Quotient Rule. Where and how to use these rules. Also, examples at the end
img: /assets/images/img-1.jpg
imgAlt: laptop
tags: ["calculus", "derivatives"]
---

## Table of Contents

- [Derivation Basic Formulas](#basic-formulas)
- [Product Rule](#product-rule)
- [Chain Rule](#chain-rule)
- [Quotient Rule](#quotient-rule)

## Derivation Basic Formulas <a name="basic-formulas"></a>

  - $ (x^a)' = ax^{a-1} $
  - $ (\sin x)' = \cos x $
  - $ (\cos x)' = -\sin x $
  - $ (\tan x)' = \frac{1}{\cos ^2 x} $

## Product Rule <a name="product-rule"></a>

### Formula

$$ \color{#f00}\frac{d}{dx}[f \cdot g] = f'g+fg' $$

$$ \color{#f00}\frac{d}{dx}[f \cdot g \ctdot h] = f'gh+fg'h+fgh' $$

### Examples

**Example #1:** $$ \frac{d}{dx}[x^2 \sin x] $$

**Solution:** 

$$ f = x^2,\ f' = 2x $$

$$ g = \sin x, \ g' = \cos x $$

$$ = f'g+fg' = (2x)(\sin x) + (x^2)(\cos x) $$

## Chain Rule <a name="chain-rule"></a>

### Formula

$$ \color{#f00}\frac{d}{dx}(f\ [\ g\ (x)\ ]\ ) = f'\ [\ g\ (x)\ ]\ \cdot g'(x) $$

$$ \color{#f00}\frac{d}{dx}[u^n] = n\ [u]^{n-1} \cdot u' $$


### Examples

**Example #1:** $$ \frac{d}{dx}[5x+3]^4 $$


**Solution:** $$ 4\ (5x+3)^{3}\ (5), \\Rightarrow \ 20(5x+3)^3 $$


## Quotient Rule <a name="quotient-rule"></a>

### Formula

$$ \color{#f00}\frac{d}{dx}[\frac{f}{g}]=\frac{gf'-fg'}{g^2} $$

### Examples

**Example #1:** $$ \frac{d}{dx}[\frac{7x+4}{x^2+5}] $$

**Solution:** 


$$ f = 7x+4,\ f' = 7 $$

$$ g = x^2+5, \ g' = 2x $$

$$ = \frac{ (x^2+5)(7)-(7x+4)(2x) }{ (x^2+5)^2 } $$

$$ = \frac{ 7x^2+35-14x^2-8x }{ (x^2+5)^2 } $$

$$ = \frac{ -7x^2-8x+35 }{ (x^2+5)^2 } $$

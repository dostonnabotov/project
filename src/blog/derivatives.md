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

![derivation basic formulas](/assets/images/Differentiation-formulas.png)

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

Example #1: $$ \frac{d}{dx}[\ 5x+3\ ]^4 $$

$$ 4\ (5x+3)^{3}\ (5) \\Rightarrow \ 20(5x+3)^3 $$

Example #2:  $$ \frac{d}{dx}[\ \cos (x^2)\ ] $$

$$ = -\sin (x^2)(2x) \\Rightarrow \ -2x \\sin(x^2) $$

Example #3:  $$ \frac{d}{dx}[\ \tan (x^3)\ ] $$

$$ = \sec^2 (x^3) \cdot 3x^2 \\Rightarrow \ 3x^2 \\sec^2(x^3) $$

Example #4: $$ \frac{d}{dx}[\ \sec (4x)\ ] $$

$$ = \sec(4x)\\tan(4x) \cdot 4 $$

Example #5: $$ \frac{d}{dx}[\ \ln x)\ ]^7 $$

$$ = 7[\ \ln x\ ]^6 \cdot \frac{1}{x} = \frac{7(\ln x)^6}{x} $$

Example #6: $$ \frac{d}{dx}[\ \frac{1}{(x^2+8)^3}\ ],\ \Rightarrow\ \frac{d}{dx}[\ x^2+8\ ]^{-3} $$

$$ -3[\ x^2+8\ ]^{-4} \cdot (2x) = \frac{-6x}{(x^2+8)^4} $$

Example #7: $$ \frac{d}{dx}(\sin[\ \tan (x^4)\ ]) $$

$$ = \cos (\tan x^4) \cdot \sec^2 (x^4) \cdot (4x^3) $$

Example #8: $$ \frac{d}{dx}[\ \cos^7 (\sin (\sec x^2)) \ ] = \frac{d}{dx}[\ \cos (\sin (\sec x^2))\ ]^7 $$

$$ = 7[\  \cos^7 (\sin (\sec x^2)) \ ]^6 \cdot [\ -\sin (\sin (\sec x^2))\ ] \cdot [\ \cos (\sec x^2)\ ] \cdot \sec (x^2)\tan (x^2) \cdot (2x) $$


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

---
title: Linear Algebra
author: Doston Nabotov
date: 2022-05-29
description: Linear algebra, mathematical discipline that deals with vectors and matrices and, more generally, with vector spaces and linear transformations. Linear algebra is also used in most sciences and fields of engineering.
img: /assets/images/img-1.jpg
imgAlt: laptop
tags: ["math", "linear algebra"]
---

## Solve the system of equation

Given:

$$ \begin{cases}x+4y+z=1 \\\ -x-2y+2z=3 \\\ 2x-z=4 \end{cases} $$

**Task**: Solve the system of equation using 3 three methods

- Cramer's Formula
- Gauss Elimination Method
- Matrix Method

### **(a)** Using Cramer's formula

> Calculate the determinant $\delta$

$$
\delta = \left\vert A \right\vert = \begin{bmatrix} \ 1 & 4 & 1 \\\ -1 & -2 & 2 \\\ 2 & 0 & -1 \end{bmatrix} =
$$

$$ 1(2-0)-4(1-4)+1(0+4) = 18 $$

> Calculate the determinant $\delta x$

$$
\delta x = \begin{bmatrix} \ 1 & 4 & 1 \\\ 3 & -2 & 2 \\\ 4 & 0 & -1 \end{bmatrix} =
$$

$$ 1(2-0)-4(-3-8)+1(0+8) = 54 $$

> Calculate the determinant $\delta y$

$$
\delta y = \begin{bmatrix} \ 1 & 1 & 1 \\\ -1 & 3 & 2 \\\ 2 & 4 & -1 \end{bmatrix} =
$$

$$ 1(-3-8)-1(1-4)+1(-4-6) = -18 $$

> Calculate the determinant $\delta z$

$$
\delta z = \begin{bmatrix} \ 1 & 4 & 1 \\\ -1 & -2 & 3 \\\ 2 & 0 & 4 \end{bmatrix} =
$$

$$ 1(-8-0)-4(-4-6)+1(0+6) = 36 $$

$$
\color{#f00} x = \frac{\delta x}{\delta},\ y = \frac{\delta y}{\delta},\ z = \frac{\delta z}{\delta}
$$

$$
x = \frac{54}{18} = 3, \ y = \frac{-18}{18} = -1, \ z = \frac{36}{18} = 2
$$

$$ Result: \ x=3,\ y=-1,\ z=2 $$

### **(b)** Using Gauss Elimination Method

> Goal is make the equation looks something like this:
> $$\left[\begin{array}{rrr|r}1 & n_1 & n_2 & x \\\ 0 & 1 & n_3 & y \\\ 0 & 0 & 1 & z \end{array}\right]$$

$$
  \left[\begin{array}{rrr|r} 1 & 4 & 1 & 1 \\\ -1 & -2 & 2 & 3 \\\ 2 & 0 & -1 & 4 \end{array}\right] \to R_2+R_1 \ | \ R_1(-2)+R_3
$$

$$
  \left[\begin{array}{rrr|r} 1 & 4 & 1 & 1 \\\0 & 2 & 3 & 4 \\\ 0 & -8 & -3 & 2\end{array}\right] \to R_2(4)+R_3
$$

$$
  \left[\begin{array}{rrr|r} 1 & 4 & 1 & 1 \\\0 & 2 & 3 & 4 \\\ 0 & 0 & 9 & 18 \end{array}\right] \to R_2(\frac{1}{2}) \ | \ R_3(\frac{1}{9})
$$

$$
  \left[\begin{array}{rrr|r} 1 & 4 & 1 & 1 \\\0 & 1 & \frac{3}{2} & 2 \\\ 0 & 0 & 1 & 2 \end{array}\right] \to R_2(4)+R_3
$$

> Calculate for $z$

$$ \Rightarrow z = 2 $$

> Calculate for $y$

$$ \Rightarrow y + \frac{3}{2}\ z = 2 $$
$$ \Rightarrow y + \frac{3}{2}\ 2 = 2 \Rightarrow y=-1 $$

> Calculate for $x$

$$ \Rightarrow x+4y+z=1 $$
$$ \Rightarrow x+4(-1)+2=1 \Rightarrow x=3$$

$$ Result: \ x=3,\ y=-1,\ z=2 $$

### **(c)** Using Matrix Method

$$
A = \begin{bmatrix} 1 & 4 & 1 \\\ -1 & -2 & 2 \\\ 2 & 0 & -1 \end{bmatrix},
X = \begin{bmatrix} x_1 \ \\\ x_2 \ \\\ x_3 \end{bmatrix},
B = \begin{bmatrix} 1 \ \\\ 3 \ \\\ 4 \end{bmatrix}
$$

$$ \color{#f00}AX=B $$
$$ \color{#f00}A^{-1}AX=A^{-1}B $$
$$ \color{#f00}X = A^{-1}B $$

> Find the inverse matrix of A:

$$
\left\vert A \right\vert = \begin{bmatrix} \ 1 & 4 & 1 \\\ -1 & -2 & 2 \\\ 2 & 0 & -1 \end{bmatrix} =
$$

$$ 1(2-0)-4(1-4)+1(0+4) = 18\ne 0 $$

> Find the conjugate of matrix:

$$
c^{11}=\begin{bmatrix} -2 & 2 \\\ 0 & -1 \end{bmatrix}=2, \
c^{12}=-\begin{bmatrix} -1 & 2 \\\ 2 & -1 \end{bmatrix}=3
$$

$$
c^{13}=\begin{bmatrix} -1 & -2 \\\ 2 & 0 \end{bmatrix}=4, \
c^{21}=-\begin{bmatrix} 4 & 1 \\\ 0 & -1 \end{bmatrix}=4,
$$

$$
c^{22}=\begin{bmatrix} 1 & 1 \\\ 2 & -1 \end{bmatrix}=3, \
c^{23}=-\begin{bmatrix} 1 & 4 \\\ 2 & 0 \end{bmatrix}=8,
$$

$$
c^{31}=\begin{bmatrix} 4 & 1 \\\ -2 & 2 \end{bmatrix}=10, \
c^{32}=-\begin{bmatrix} 1 & 1 \\\ -1 & 2 \end{bmatrix}=-3,
$$

$$ c^{33}=\begin{bmatrix} 1 & 4 \\\ -1 & -2 \end{bmatrix}=2 $$

> Write down all the conjugates in the matrix form

$$ C = \begin{bmatrix} \ 2 & 3 & 4 \\\ 4 & -3 & 8 \\\ 10 & -3 & 2 \end{bmatrix} \Rightarrow $$

> Transpose conjugate matrix

$$ C^T = \begin{bmatrix} 2 & 4 & 10 \\\ 3 & -3 & -3 \\\ 4 & 8 & 2 \end{bmatrix} = adj A $$

$$ \color{#f00}A^{-1}=\frac{1}{\left\vert A \right\vert} \cdot adj A $$

$$ A^{-1}=\frac{1}{18} \begin{bmatrix} \ 2 & 4 & 10 \\\ 3 & -3 & -3 \\\ 4 & 8 & 2 \end{bmatrix} $$

> You don't have to calculate the matrix above it gives small fractional numbers. Thus, we just plug them in our formula ($X = A^{-1}B$) and calculate it at once.

$$
X=A^{-1}B=\frac{1}{18} \begin{bmatrix} \ 2 & 4 & 10 \\\ 3 & -3 & -3 \\\ 4 & 8 & 2 \end{bmatrix}
\begin{bmatrix} \ 1 \ \\\ 3 \ \\\ 4 \ \end{bmatrix}=
\begin{bmatrix} \ 3 \ \\\ -1 \ \\\ 2 \ \end{bmatrix}
$$

$$ Result: \ x=3,\ y=-1,\ z=2 $$

> As you can see that, using all three formulas gave us the same the answer, which means that we calculated all of them correctly

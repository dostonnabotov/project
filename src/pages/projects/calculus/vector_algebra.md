---
title: Vector Algebra
img: /assets/images/img-2.jpg
imgAlt: windows logo
description: Lorem ipsum dolor sit amet consectetur, adipisicing elit.
  Quibusdam dolor expedita, possimus quisquam quas nemo nam
  deserunt velit hic quasi, consequuntur
---

## Vector Algebra Formulas

### The Coordinates of two vectors

Given: $A(x_1,y_1,z_1)$ and $B(x_2,y_2,z_2)$
$$\overrightarrow{AB}=\langle x_2-x_1, y_2-y_1, y_2-y_1\rangle$$

### The Magnitude of vector

$$\left\vert \vec{a} \right\vert = \sqrt{a^2_x+a^2_y+a^2_z}$$

### The Coordinates of a vector

$$a_x = \left\vert \vec{a} \right\vert \times \cos \alpha$$
$$a_y = \left\vert \vec{a} \right\vert \times \cos \beta$$
$$a_z = \left\vert \vec{a} \right\vert \times \cos \gamma$$

### The Direction Cosines of a vector

$$\cos\alpha = {a_x\over \left\vert \vec{a} \right\vert}$$
$$\cos\beta = {a_y\over \left\vert \vec{a} \right\vert}$$
$$\cos\gamma = {a_z\over \left\vert \vec{a} \right\vert}$$

> $\cos^2 \alpha + \cos^2 \beta + \cos^2 \gamma = 1$

### The Angle between two vectors

$$\cos\theta = {\vec{a} \cdot \vec{b}\over\left\vert\vec{a}\right\vert \cdot \left\vert\vec{b}\right\vert}$$

### The Angles of the Triangle

$$
\cos A = {\overrightarrow{AB} \cdot \overrightarrow{AC}\over
\left\vert\overrightarrow{AB}\right\vert \cdot\left\vert\overrightarrow{AC} \right\vert}
$$

$$
\cos B = {\overrightarrow{BA} \cdot \overrightarrow{BC}\over
\left\vert\overrightarrow{BA}\right\vert \cdot\left\vert\overrightarrow{BC} \right\vert}
$$

$$
\cos C = {\overrightarrow{CA} \cdot \overrightarrow{CB}\over
\left\vert\overrightarrow{CA}\right\vert \cdot\left\vert\overrightarrow{CB} \right\vert}
$$

### Triple Product

$$\vec{a}\vec{b}\vec{c} = \begin{bmatrix}a_x & a_y & a_z \\\ b_x & b_y & b_z \\\ c_x & c_y & c_z \end{bmatrix}$$

### Linearly Independent vectors

$$\vec{a}\vec{b}\vec{c}\ne 0$$

### Linearly Dependent vectors

$$\vec{a}\vec{b}\vec{c} = 0$$

### Coplanar vectors

$$\vec{a}\vec{b}\vec{c} = 0$$

> If the result = 0, then it's **coplanar** <br/>
> If the result > 0, then it's **right-handed** <br/>
> If the result < 0, then it's **left-handed**

### Collinear vectors

$$\vec{a}\rightrightarrows\vec{b} \Leftrightarrow {a_x\over b_x}={a_y\over b_y}={a_z\over b_z}$$

> $\vec{a}\rightrightarrows\vec{b}$ means that $\vec{a}$ is parallel to $\vec{b}$ <br/><br/>
> If the vector are linearly dependent, you are often asked to find the express $\vec{c}$ as a linear combination of
> $\vec{a}$ and $\vec{b}$. Let's solve it.

**(1)**
$$\vec{c} = k_1\vec{a} + k_2\vec{a}$$

**(2)**
$$(c_x, c_y, c_z) = k_1(a_x, a_y, a_z) + k_2(b_x, b_y,b_z)$$

**(3)**
$$(c_x, c_y, c_z) = (a_xk_1 + b_xk_2, a_yk_1 + b_yk_2, a_zk_1 + b_zk_2)$$

**(4)**
$$c_x = a_xk_1 + b_xk_2$$
$$c_y = a_yk_1 + b_yk_2$$
$$c_z = a_zk_1 + b_zk_2$$

**(5)**
$$k_1 = m, k_2 = n, \vec{c} = m\vec{a} + n\vec{a}$$

> $m$ and $n$ are the results from the equation (4).

### The Product of two vectors

$$\vec{a} \times \vec{b} = \begin{bmatrix}\vec{i} & \vec{j} & \vec{k} \\\ a_x & a_y & a_z \\\ b_x & b_y & b_z \end{bmatrix}=$$

$$
\vec{i}\begin{bmatrix}a_y & a_z \\\ b_y & b_z\end{bmatrix} - \vec{j}\begin{bmatrix}a_x & a_z \\\ b_x &
a_z\end{bmatrix} + \vec{k}\begin{bmatrix}a_x & a_y \\\ b_x & b_y\end{bmatrix}=
$$

$$p\vec{i} + q\vec{j} + r\vec{k}$$

> $p$, $q$ and $r$ are the results that come out from matrices

### Area of Parallelogram

$$Area = \left\vert\vec{a} \times \vec{b}\right\vert$$

### Area of a triangle

$$Area = {1\over 2} \left\vert\vec{a} \times \vec{b}\right\vert$$

> SI unit for Area - [square units]

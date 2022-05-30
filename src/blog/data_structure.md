---
title: Introduction to Data Structure
author: Doston Nabotov
date: 2022-05-30
description: Important notes for Data Structure. Types of data structures as well as what they are used for. Basic Introduction to Data Structure
img: /assets/images/img-3.jpg
imgAlt: pencils
tags: ["IT", "data structure"]
---

## Data Definition

Data Definition defines a particular data with the following characteristics.

**Atomic** − Definition should define a single concept.
**Traceable** − Definition should be able to be mapped to some data element.
**Accurate** − Definition should be unambiguous.
**Clear and Concise** − Definition should be understandable.

## Data Object

Data Object represents an object having a data.

### Data Type

Data type is a way to classify various types of data such as integer, string, etc.
which determines the values that can be used with the corresponding type of data, 
the type of operations that can be performed on the corresponding type of data.
There are two data types

  - Built-in Data Type
  - Derived Data Type

### Built-in Data Type

Those data types for which a language has built-in support are known as Built-in Data types. For example,
most of the languages provide the following built-in data types.

  - Integers
  - Boolean (true, false)
  - Floating (decimal numbers)
  - Character and Strings

### Derived Data Type

Those data types which are implementation independent as they can be implemented in one or the other
way are known as derived data types. These data types are normally built by the combination of primary
or built-in data types and associated operations on them. For example: 

  - List
  - Array
  - Stack
  - Queue

## Data Structure Types

![Data Structure Types](https://qph.cf2.quoracdn.net/main-qimg-b39bae5b6be3d7f21738eb7ec04aae13-pjlq)

## Basic Operations on Data Structure

The data in the data structures are processed by certain operations. The particular data structure chosen
largely depends on the frequency of the operation that needs to be performed on the data structure.

 - Traversing
 - Searching
 - Insertion
 - Deletion
 - Sorting
 - Merging


## Array

> Array - The items of an array are allocated at adjacent memory locations. These memory locations are called elements of that array.

### Array Representation

![Array Representation](https://media.geeksforgeeks.org/wp-content/uploads/C-Arrays.jpg)

## Operations on Array

Following are the basic operations supported by an array

  - **Traverse** - print all the array elements one by one
  - **Insertion** - adds an element at the given index
  - **Deletion** - deletes an element at the given index
  - **Search** - searches an element using the given index or by the value
  - **Update** - updates an element at the given index

Check out some array implementation in JavaScipt on my [Github repository](https://github.com/dostonnabotov/Data-Structure/tree/master/2.array)

## Binary Search

> Binary search is an efficient algorithm for finding an item from a sorted list of items. It works by repeatedly dividing in half the portion of the list that could contain the item, until you've narrowed down the possible locations to just one.

A Binary Search Tree (BST) is  a tree in which all the nodes follow the below-mentioned properties:

  - The left sub-tree of a node has a key less than or equal to its parent node's key.
  - The right sub-tree of a node has a key greater than to its parent node's key.

### Basic Operations

  - Search
  - Insert
  - Pre-order Traversal
  - In-order Traversal
  - Post-order Traversal

Check out more on [VisualGo site](https://visualgo.net/en/bst)


# Frontend Boilerplate with React, Redux & TypeScript

Forked from polaferriere/react-redux-saga-typescript

## Changes in this version

- upgraded to the latest packages versions
- bootstrap used for rendering todos
- tsx classes replaced with functions and hooks
- introduced scalable layout
- using @reduxjs/toolkit

## How to run

- npm install
- npm start

## Redux how to

We don't need redux and especially redux-saga in this project.

They are provided for education purpose only.

Redux serves for providing global state, typically when we want to pass the state between components.

Using redux often seems cumbersom but it's easy if you know how to manage it.

- first define store structure for a component, such as in todos/store.ts
- then write a slice with reducers as in todos/slice.ts

Note that you don't need to define special constants for actions - they are exported from slice

For example, in todos/slice.ts addTodo action is exported with the type 'todos/addTodo'

- then add component store and reducers to global store. as it's done in 'src/store.ts'

That is enough to have redux in the component

Now how to use it in the component?

- first import the action you will use in the component, see example in 'todos/components/Header.tsx'
- connect the component to redux (see last line in 'todos/components/Header.tsx')
- obtain action from props, like
  ```
  const Header = ({addTodo}) => {...}
  ```
- if a component needs a store data, use 'useSelector' hook





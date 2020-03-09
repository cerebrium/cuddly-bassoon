import React from 'react'

let nextTodoId = 0

export const addTodo = ( text ) => ({
    type: 'ADD_TODO',
    id: nextTodoId++,
    text
})
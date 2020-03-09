import React from 'react'

export interface actions {
    type: string,
    id: number,
    text?: string,
    filter?: string
}

export interface todo {
    id: number,
    text: string,
    completed: boolean
}

const todos = ( state = [], action: actions): Array<Object> => {
    switch(action.type) {
        case 'ADD_TODO': 
            return [
                ...state,
                {
                    id: action.id,
                    text: action.text,
                    completed: false
                }
            ]
        case 'TOGGLE_TODO': 
            return state.map( (todo: todo) => 
                todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
            ) 
        default:
            return state       
    }
}

export default todos
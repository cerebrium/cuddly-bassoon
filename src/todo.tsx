import React from 'react'
import PropTypes from 'prop-types'

export interface todoProps {
    onClick(event: MouseEvent): void 
    completed: boolean,
    text: string
}

const Todo = (todoProps: todoProps) => {
    return (
        <>
            <li
                onClick={todoProps.onClick}
                style={{
                    textDecoration: todoProps.completed ? 'line-through' : 'none'
                }}
            >
                {todoProps.text}
            </li>
        </>
    )
}

Todo.propTypes = {
    onClick: PropTypes.func.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired
}

export default Todo
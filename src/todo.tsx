import React from 'react'
import PropTypes, { InferProps } from 'prop-types'

const Todo = ({
    onClick,
    text,
    completed
    }: InferProps<Todo.propTypes>) => {

    return (
        <>
            <li
                onClick={onClick}
                style={{
                    textDecoration: completed ? 'line-through' : 'none'
                }}
            >
                {text}
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
import React from 'react'
import PropTypes, { InferProps } from 'prop-types'

function Todo ({
    onClick,
    text,
    completed
    }: InferProps<typeof Todo.propTypes>) {

    return (
        <li
            onClick={onClick}
            style={{
                textDecoration: completed ? 'line-through' : 'none'
            }}
        >
            {text}
        </li>
    )
}

export default Todo

Todo.propTypes = {
    onClick: PropTypes.func.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired
}

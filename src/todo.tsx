import React from 'react'
import PropTypes, { InferProps } from 'prop-types'

export function Todo ({
    onClick,
    text,
    completed
    }: InferProps<typeof Todo.propTypes>) {

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

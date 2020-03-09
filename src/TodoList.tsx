import React from 'react'
import PropTypes, { InferProps } from 'prop-types'
import Todo from './todo'

function TodoList ({ 
    todos,
    onTodoClick,
    }: InferProps<typeof TodoList.propTypes>) {
        return (
            <ul>
                {todos.map( (todo, index: number) => (
                        <Todo key={index} {...todo} onClick={ () => onTodoClick(index)}/>
                    ))}
            </ul>
        )
}

export default TodoList

TodoList.propTypes = {
    todos: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            completed: PropTypes.bool.isRequired,
            text: PropTypes.string.isRequired
        }).isRequired
    ).isRequired,
    onTodoClick: PropTypes.func.isRequired
}
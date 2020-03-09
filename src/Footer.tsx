import React from 'react'
import FilterLink from '../containers/FilterLink'
import { VisibilityFilters } from './actions/index'

function Footer () {
    return (
        <p>
            Show: <FilterLink filter={VisibilityFilters.SHOW_ALL}>ALL</FilterLink>
            {', '}
            <FilterLink filter={VisibilityFilters.SHOW_ACTIVE}>Active</FilterLink>
            {', '}
            <FilterLink filter={VisibilityFilters.SHOW_COMPLETED}>COMPLETED</FilterLink>
        </p>
    )

}

export default Footer
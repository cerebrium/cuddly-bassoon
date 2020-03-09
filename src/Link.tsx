import React from 'react'
import PropTypes, { InferProps } from 'prop-types'

function Link ({ 
    active, 
    children, 
    onClick 
    }: InferProps<typeof Link.propTypes>) {
    
        if (active) {
            return <span>{children}</span>
        }
    return (
        <a
            href=''
            onClick={e => {
                e.preventDefault()
                onClick()
            }}
        >
            {children}
        </a>
        
    )
}

export default Link

Link.propTypes = {
    active: PropTypes.bool.isRequired,
    children: PropTypes.node.isRequired,
    onClick: PropTypes.func.isRequired
}
import React from 'react'
import { Link } from 'react-router-dom'

const SignUpButton = () => {
    return (
        <div>
            <Link to={'/signup'}>
                <button>Create an Account</button>
            </Link>
        </div>
    )
}

export default SignUpButton
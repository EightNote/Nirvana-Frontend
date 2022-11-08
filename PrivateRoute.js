import React from 'react'
import { useSelector } from 'react-redux'
import { Redirect, Route } from 'react-router-dom'

const PrivateRoute = ({ component: Component, ...rest }) => {


    const user = useSelector((state) => state.auth.username)

    return (
        <Route
            {...rest}
        //     render={props =>
        // return user ? (
        //         <Component {...props} />
        //     ) : (
        //         <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
        //     )
            // }
    />
    )
}

export default PrivateRoute
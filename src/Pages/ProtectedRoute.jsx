import React from 'react';

import { Route, Redirect } from "react-router-dom";

const ProtectedRoute = ({ component: Component, children, redirectPath, ...rest }) => {
    return (
        <Route {...rest}
            render={props => {
                if (localStorage.getItem("token"))
                {
                    return children;
                }
                else {
                    return <Redirect to={{ pathname: redirectPath, state: { from: props.location } }} />
                }
            }}
        />
    )
}

export default ProtectedRoute;
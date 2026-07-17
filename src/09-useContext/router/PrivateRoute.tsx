import React, { use } from "react"
import { JSX } from "react/jsx-runtime"
import { UserContext } from "../context/UserContext"
import { Navigate } from "react-router";

interface Props {
    element: JSX.Element,
    // element: React.ReactNode,
}

export const PrivateRoute = ({element}: Props) => {
    
    const { authStatus } = use(UserContext);

    if(authStatus === 'checking'){
        return <div>Loading...</div>
    }

    if(authStatus === 'authenticated'){
        return element;
    }
    
    return <Navigate to="/login" replace></Navigate>

}
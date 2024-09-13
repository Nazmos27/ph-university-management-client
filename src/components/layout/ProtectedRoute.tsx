import React, { ReactNode } from 'react'
import { useAppSelector } from '../../redux/features/hooks'
import { useCurrentToken, useCurrentUser } from '../../redux/features/auth/authSlice'
import { Navigate } from 'react-router-dom'

const ProtectedRoute = ({children} : {children : ReactNode}) => {
    const token = useAppSelector(useCurrentToken)
    const user = useAppSelector(useCurrentUser)
    if(!token){
        return <Navigate to="/login" replace={true}></Navigate>
    }
  return children
}

export default ProtectedRoute
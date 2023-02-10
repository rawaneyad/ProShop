import React from 'react'
import { Navigate } from 'react-router-dom'
import Cookies from 'js-cookie'

function Protected({ isAuth, children }) {
  if (!isAuth && !Cookies.get('user') ) {
    return <Navigate to="/login" replace />
  }
  return children
}
export default Protected
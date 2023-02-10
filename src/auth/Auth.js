import React from 'react'
import { Navigate } from 'react-router-dom'
import Cookies from 'js-cookie'

function Protected({ isAuth, children }) {
 
  if ( Cookies.get('user') || isAuth ) {
  return <Navigate to="/dashboard" replace/>
  }

  
  return children
}
export default Protected
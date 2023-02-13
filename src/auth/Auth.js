import React from 'react'
import { Navigate } from 'react-router-dom'
import Cookies from 'js-cookie'

function Protected({ isAuth, children }) {
 
  if ( Cookies.get('user') || isAuth ) {
    // console.log(JSON.parse(Cookies.get('user'))._id);
  return <Navigate to="/profile/:id" replace />
  }
  
  return children
}
export default Protected
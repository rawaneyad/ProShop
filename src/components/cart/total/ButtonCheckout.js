import { Button } from 'antd'
import React from 'react'
import { Link } from 'react-router-dom'

const ButtonCheckout = () => {
  return (
    <Link to={`/dashboard`}><Button type='primary'>Button Checkout</Button></Link>
  )
}

export default ButtonCheckout
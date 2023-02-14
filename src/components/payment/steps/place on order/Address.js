import { Space, Typography } from 'antd'
import React from 'react'
import Header from '../shipping & payment/order details/Header'
import ProductList from '../shipping & payment/order details/ProductList'
const { Text }=Typography
const Address = () => {
  return (
    <Space direction="vertical" className="OrderDetails">
    <Header name='Shipping Address' />
    <Space className="billItem">
        <Text>Address: {JSON.parse(localStorage.getItem('ShippingAddress')).address}</Text>
      </Space>
      <Space className="billItem">
        <Text>Postal Code: {JSON.parse(localStorage.getItem('ShippingAddress')).postalCode}</Text>
      
      </Space>
      <Space className="billItem">
        <Text>City: {JSON.parse(localStorage.getItem('ShippingAddress')).city}</Text>
    
      </Space>
      <Space className="billItem">
        <Text>Country: {JSON.parse(localStorage.getItem('ShippingAddress')).country}</Text>
      </Space>
    <Header name='Order Details' />
    <ProductList/>
  </Space>
  )
}

export default Address
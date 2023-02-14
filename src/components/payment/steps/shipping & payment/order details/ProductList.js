import { List } from 'antd'
import React from 'react'
import Product from './Product'

const ProductList = () => {
  return (
    <List
    itemLayout="horizontal"
    // dataSource={data}
    renderItem={(item) => (
      <Product item={item}/>
    )}
  />
  )
}

export default ProductList
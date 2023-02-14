import { List } from 'antd'
import React from 'react'

const Product = ({item}) => {
  return (
    <List.Item>
        <List.Item.Meta
          avatar={<img
            alt="Product"
            src="https://joeschmoe.io/api/v1/random"
            style={{ width: 300, height: 300 }}
          />}
          title={<a href="https://ant.design">{item.title}</a>}
          description="Ant Design, a design language for background applications, is refined by Ant UED Team"
        />
      </List.Item>
  )
}

export default Product
import { Button } from 'antd'
import React from 'react'

const ProfileButton = ({name}) => {
  return (
    <Button type="primary">{name}</Button>
  )
}

export default ProfileButton
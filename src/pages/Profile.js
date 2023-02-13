import { Space } from 'antd'
import React from 'react'
import UserProfileMenu from '../components/profile user/menu/UserProfileMenu'
import UserDataBox from '../components/profile user/user data/UserDataBox'

const Profile = () => {
  return (
    <Space className='UserProfile'>
      <UserProfileMenu/>
      <UserDataBox/>
    </Space>
  )
}

export default Profile
import React, {  useContext, useEffect } from 'react'
import { UserContext } from '../../context/UserContext/UserState'
import { Spin } from 'antd'


const User = () => {
  const {user, getUserInfo}= useContext(UserContext)
  useEffect(()=>{
    getUserInfo()
  },[])
  
  if(!user){
    return <Spin></Spin>
  }
  return   <div>
      {user.name}
      
    </div>
  
}

export default User

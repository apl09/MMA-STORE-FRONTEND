import React, {  useContext, useEffect } from 'react'
import { UserContext } from '../../context/UserContext/UserState'
import { Spin } from 'antd'
import Card from 'antd/es/card/Card'


const User = () => {
  const {user, getUserInfo}= useContext(UserContext)
  useEffect(()=>{
    getUserInfo()
  },[])
  
  if(!user){
    return <Spin></Spin>
  }
  return  ( <div>
    <Card
    title={user.name}    

      bordered={true}
      style={{
        width:300,
        borderColor:'blue',
        background: 'blue'
        
        
      }}
        >
        <p></p>
        <p>{user.email}</p>
        </Card>                  
    </div>
  );
  
}

export default User

import { View, Text } from 'react-native'
import React from 'react'
import UserStory from '../components/UserStory'
import axios from 'axios'

const index = () => {
  const handleSubmit = async () => {
    try {
      const response = await fetch('http:/192.168.81.93:5000/api/auth/login',  {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify({ email : '251203@gmil.com', password: '12345678' }),
      })  
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error('Login error:', error);
    } 
  }
  const handleSubmi1 = async ()=> {
    const res = await axios.get('http:/192.168.81.93:5000/')
    console.log(res.data)
  }
  return (
    
    <View style={{
        alignItems : 'center', justifyContent : 'center'
    }}>
    <Text>index</Text>
    <UserStory />
    <Text onPress={handleSubmit}>Hello</Text>
    </View>
  );
};

export default index;

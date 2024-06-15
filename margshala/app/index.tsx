import { View, Text, ScrollView } from 'react-native'
import React, { useEffect, useState} from 'react'
import UserStory from '../components/UserStory'
import axios from 'axios'
import { Link } from 'expo-router'

const index = () => {
  const [posts, setposts] = useState([])
  const fetchData = async () => {
    const res = await fetch('http://192.168.81.93:5000/api/getposts/', {
      method : "POST",
      headers : {
        'Content-type':'application/json'
      },
    })
    const response = await res.json()
    setposts(response)
  };
  
  useEffect(()=>{
    fetchData()
  },[])

  return (

    <ScrollView contentContainerStyle={{
      alignItems: 'center', justifyContent: 'center'
    }}>
      <Text>index</Text>
      {posts.map((data) => (
        <UserStory key={data._id} story={data} />
      ))}
      <Text >Hello</Text>

      <Link href='/login'>
        <Text onPress={fetchData}>login page</Text>
      </Link>
    </ScrollView>
  );
};

export default index;

import { View, Text } from 'react-native'
import React from 'react'
import UserStory from '../components/UserStory'
const index = () => {
  return (
    <View style={{
        alignItems : 'center', justifyContent : 'center'
    }}>
    <Text>index</Text>
    <UserStory />
    </View>
  )
}

export default index
import { View, Text } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'
import { Link } from 'expo-router'

const TabBar = () => {
  return (
    <View style={{
        backgroundColor:'black',
        position: 'absolute',
        bottom : 50,
        width : '100%',
        flexDirection : 'row',
        justifyContent :'space-evenly',
        padding: 20
    }}>
        
        <Link href='/'><Ionicons name = 'home-outline' size = {30} color='white'/></Link>
        <Link href='/quest'><Ionicons name = 'compass-outline' size = {30} color='white'/></Link>
        <Link href='/profile'><Ionicons name = 'person-circle-outline' size = {30} color='white'/></Link>
    </View>
  )
}

export default TabBar 
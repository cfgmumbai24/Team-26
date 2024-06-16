import { View, Text } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'
import { Link } from 'expo-router'

const profile = () => {
  return (
    <View >
        <View style={{
            backgroundColor:'darkblue',
            height : '50%',
            justifyContent : 'center',
            alignItems: 'center',
        }}>
            <Ionicons name='person-outline' size={40} color='black' style={{backgroundColor:'white', padding: 20, borderRadius : 100, marginTop: 50}}/>
        </View>
        <Link href='/signup'>
        <View style={{backgroundColor : 'black', width : 105, height : 29, marginTop : 20, padding : 5, borderRadius : 10, alignItems : 'center'}}>
            <Text style={{color : 'white', textAlign : 'center'}}>Sign Up</Text>
        </View>
        </Link>
        <View style={{marginTop : 20, gap : 10}}>
            <Text style={{fontWeight: 'bold', fontSize:18, backgroundColor : 'gray', opacity : 0.2}}>Schemes</Text>
            <Link href='/khojshala'>
                <Text style={{fontWeight : 'bold', fontSize : 16}}>Khojshala</Text>
            </Link>
            <Link href='/swarozgar'>
                <Text style={{fontWeight : 'bold', fontSize : 16}}>Swarozgar</Text>
            </Link>
        </View>
    </View>
  )
}

export default profile
import { View, Text, Image, ScrollView, Pressable } from 'react-native'
import React, { useEffect } from 'react'
import { useState } from 'react'
import { useLocalSearchParams, router } from 'expo-router'
import { Ionicons } from '@expo/vector-icons'
import { openURL } from 'expo-linking'

const explore = () => {
    let { category } = useLocalSearchParams()
    const newcat = category
    category = 'abc' + category
    const [posts, setposts] = useState([])

    const tags = { category }
    // category = 'abc' + category;
    const fetchData = async () => {
        
        const res = await fetch(`http://192.168.81.93:5000/api/getposts/?tags=${category}`, {
            method: "POST",
            headers: {
                'Content-type': 'application/json'
            },
        })
        const response = await res.json()
        console.log(response)
        setposts(response)
    };

    useEffect(() => {
        fetchData()
    }, [])
    return (

        <View style={{ alignItems: 'center' }}>
            <Image src={`${posts[0]?.links[0]}`} style={{ width: 500, height: 300 }} />

            <View style={{
                paddingHorizontal: 20,
                paddingTop: 20,
                gap: 20,
                alignItems: 'center'
            }}>
                <Text style={{
                    fontSize: 30,
                    fontWeight: 'bold',
                }}>{newcat}</Text>
                <Text style={{
                    fontSize: 20,
                }}>
                    {posts[0]?.title} 
                </Text>
                <Text>
                    {posts[0]?.description} 
                </Text>
                
                <Pressable style={{
                    backgroundColor: 'rgba(20,39,45,1)', alignItems: 'center', justifyContent: 'center', width: 264, height: 50, borderRadius: 31, flexDirection: 'row'
                }}
                    onPress={() => {
                        openURL('http://iabtfoundation.org/khojshala/')
                    }}
                >
                    <Text style={{
                        padding: 10,
                        fontSize: 20,
                        color: 'white'
                    }}>
                        Learn with Khojshala
                    </Text>
                    <Ionicons name='arrow-forward-outline' color='white' size={30} />
                </Pressable>
            </View>
        </View>
    )
}

export default explore
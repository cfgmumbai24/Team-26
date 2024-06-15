import { View, Text, Image, Pressable } from 'react-native'
import React from 'react'
import { router } from 'expo-router'
import { Ionicons } from '@expo/vector-icons'

const UserStory = ({story}) => {
    return (
        <View style={{
            paddingTop : 50,
            paddingHorizontal : 30,
            gap : 15,
            alignItems: 'center',
        }}>
            <Image src={`${story.links[0]}`} style={{ width: 300, height: 300, borderRadius: 50}} />
            <Text style={{
                fontSize: 25,
                fontWeight: 'bold'
            }}>
                {story.title}
            </Text>

            <Text>
                Pitogarh, Uttarakhand
            </Text>

            <Text style={{
                color: 'darkgreen'
            }}>
                #farming #craft #agriculture
                {story.tags.map((tag)=>{
                    <Text>#{tag} </Text>
                })}
            </Text>
            <Text style={{
                fontSize: 15
            }}>
                {story.description}
            </Text>

            <Pressable style={{
                backgroundColor: 'rgba(20,39,45,1)', alignItems : 'center', justifyContent: 'center', width : 264, height: 50, borderRadius : 31, flexDirection : 'row'
            }} 
            onPress={()=>{
                router.push({
                    pathname : '/explore',
                    params : {category : story.tags[0]} 
                })
            }}>
                <Text style={{
                    padding: 10,
                    fontSize : 20,
                    color : 'white'
                }}>
                    Explore Field
                </Text>
                <Ionicons name='arrow-forward-outline' color='white' size={30} />
            </Pressable>
        </View>
    )
}

export default UserStory
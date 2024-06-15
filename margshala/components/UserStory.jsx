import { View, Text, Image, Pressable } from 'react-native'
import React from 'react'

const UserStory = () => {
    return (
        <View style={{
            paddingTop : 50,
            paddingHorizontal : 30,
            gap : 15,
            alignItems: 'center',
        }}>
            <Image src={'https://im.rediff.com/money/2015/may/08shuva4.jpg'} style={{ width: 300, height: 300, borderRadius: 50}} />
            <Text style={{
                fontSize: 25,
                fontWeight: 'bold'
            }}>
                KISHORE
            </Text>

            <Text>
                Pitogarh, Uttarakhand
            </Text>

            <Text style={{
                color: 'darkgreen'
            }}>
                #farming #craft #agriculture
            </Text>
            <Text style={{
                fontSize: 15
            }}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor unde nostrum adipisci exercitationem ipsam libero dolore reiciendis atque neque quae dolorum placeat consequatur in explicabo soluta excepturi eos labore, est facilis sint ullam delectus? Sunt, sit molestias quas deleniti tenetur quae recusandae molestiae sint et.
            </Text>

            <Pressable style={{
                backgroundColor: 'rgba(20,39,45,1)', alignItems : 'center', justifyContent: 'center', width : 264, height: 50, borderRadius : 31
            }}>
                <Text style={{
                    padding: 10,
                    color : 'white'
                }}>
                    Explore Field
                </Text>
            </Pressable>
        </View>
    )
}

export default UserStory
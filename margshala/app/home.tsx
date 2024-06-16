import { View, Text, ScrollView } from "react-native";
import React, { useEffect, useState} from "react";
import UserStory from "../components/UserStory";
import axios from "axios";
import { Link } from "expo-router";
import TabBar from "@/components/TabBar";
import { Image } from "react-native";

const home = () => {
  const [post, setposts] = useState([])

  const handleSubmit = async () => {
    try {
      const response = await fetch("http:/192.168.81.93:5000/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify({
          email: "251203@gmil.com",
          password: "12345678",
        }),
      });
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error("Login error:", error);
    }
  };
  const handleSubmi1 = async () => {
    const res = await axios.get("http:/192.168.81.93:5000/");
    console.log(res.data);
  };

  const fetchData = async () => {
    const res = await fetch(`http://192.168.81.93:5000/api/getposts`, {
      method: "POST",
      headers: {
        'Content-type': 'application/json'
      },
    })
    const response = await res.json()
    setposts(response)
  };

  useEffect(() => {
    fetchData()
  }, [])


  return (
    <View style={{alignItems : 'center', marginTop : 30}}>
        <Image
        src="https://s3-alpha-sig.figma.com/img/bfa3/d9ce/5b8131d0dfeb5626bec5a15d71b30188?Expires=1719187200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=AjYyLWYPsHuvRtLv71uRPIRgCuTU7DWgaE4Nt2x0EnopZ2R-wBKGq6j5QaVvzU5Q8icVk23v1UD-tObYmpxH9gf3DlMqzuDoydthIG7ZFjwNmp43tuqnq-iydSSRJEFoTwgpC66qklwPrhKDtNphGCS8Ud63SnboDpzlDu6nJLPDavEkMxnKs7achRBYQ~lNZzxda-MkU9uwvbw4PLNsHpw68Qf9daT61Ga-Yzy2D4QT0QAV8-zdWRiIYeVS~gSJZ4pTzmVRKtO95upLLGXpae6kegBE3fOYDBkApJUucC55eX0RAwEhbJT3KIfJEKCAdcVHmrxOqnQq4~Wf-JOnyw__"
        style={{
          width: 136,
          height: 59,
        }}
      ></Image>
      <ScrollView contentContainerStyle={{
        alignItems: 'center', justifyContent: 'center', 
      }}>
        {post.map((data) => (
          <UserStory key={data._id} story={data} />
        ))}
        <Text >Hello</Text>
      </ScrollView>
      <TabBar />
    </View>
  );
};

export default home;

import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  TextInput,
  Pressable,
} from "react-native";
import { useState } from "react";
import React from "react";
import { UserContext } from "@/context";
import { useContext } from "react";
import axios from 'axios'

const login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const {setUser} = useContext(UserContext)

  const data = {email, password}

  const handleFormSubmit = async () => {
    const res = await fetch('http://192.168.81.93:5000/api/auth/login', {
      method : "POST",
      headers : {
        'Content-type':'application/json'
      },
      body : JSON.stringify(data)
    })
    const response = await res.json()
    setUser(response.token)
  };
  const handleSubmit = async ()=> {
    const rest = await axios.get('http://192.168.81.93:5000/')
    console.log(rest.data)
  }
  return (
    <View style={{ alignItems: "center", justifyContent: "center", flex: 1 }}>
      <Image
        src="https://s3-alpha-sig.figma.com/img/bfa3/d9ce/5b8131d0dfeb5626bec5a15d71b30188?Expires=1719187200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=AjYyLWYPsHuvRtLv71uRPIRgCuTU7DWgaE4Nt2x0EnopZ2R-wBKGq6j5QaVvzU5Q8icVk23v1UD-tObYmpxH9gf3DlMqzuDoydthIG7ZFjwNmp43tuqnq-iydSSRJEFoTwgpC66qklwPrhKDtNphGCS8Ud63SnboDpzlDu6nJLPDavEkMxnKs7achRBYQ~lNZzxda-MkU9uwvbw4PLNsHpw68Qf9daT61Ga-Yzy2D4QT0QAV8-zdWRiIYeVS~gSJZ4pTzmVRKtO95upLLGXpae6kegBE3fOYDBkApJUucC55eX0RAwEhbJT3KIfJEKCAdcVHmrxOqnQq4~Wf-JOnyw__"
        style={{
          width: 136,
          height: 59,
        }}
      ></Image>
      <Text style={{ fontSize: 34, fontWeight: "bold", margin: 40 }}>
        Login
      </Text>

      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
        <Pressable
        onPress={handleFormSubmit}
          style={{
            backgroundColor: "rgba(20,39,45,1)",
            alignItems: "center",
            justifyContent: "center",
            width: 264,
            height: 50,
            borderRadius: 31,
          }}
        >
          <Text
            style={{
              padding: 10,
              color: "white",
            }}
          >
            Login
          </Text>
        </Pressable>
      </View>
      <Text style={{ fontSize: 15, paddingTop: 20 }}>
        Already a user? LOGIN
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    marginBottom: 10,
    width: 282,
    borderRadius: 10,
  },
});

export default login;

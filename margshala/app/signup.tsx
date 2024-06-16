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
import { Link } from "expo-router";

const signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [city, setCity] = useState("");
  const [district, setDistrict] = useState("");
  const [state, setState] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const data = {email, password, city, district, state, username, name}
  const handleFormSubmit = async () => {
    const res = await fetch('http://192.168.81.93:5000/api/auth/signup', {
      method : "POST",
      headers : {
        'Content-type':'application/json'
      },
      body : JSON.stringify(data)
    })
    const response = await res.json()
  };

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
        Sign Up
      </Text>

      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder="Name"
          value={name}
          onChangeText={setName}
        />
        <TextInput
          style={styles.input}
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
        />
        <TextInput
          style={styles.input}
          placeholder="City"
          value={city}
          onChangeText={setCity}
        />
        <TextInput
          style={styles.input}
          placeholder="District"
          value={district}
          onChangeText={setDistrict}
        />
        <TextInput
          style={styles.input}
          placeholder="State"
          value={state}
          onChangeText={setState}
        />
        <TextInput
          style={styles.input}
          placeholder="Username"
          value={username}
          onChangeText={setUsername}
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
            SUBMIT
          </Text>
        </Pressable>
      </View>
      <Text style={{ fontSize: 15, paddingTop: 20 }}>
        Already a user? <Link href='/login'>LOGIN</Link>
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

export default signup;

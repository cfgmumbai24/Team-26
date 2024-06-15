import { View, Text } from "react-native";
import React from "react";
import UserStory from "../components/UserStory";
import { Link } from "expo-router";
const index = () => {
  return (
    <View
      style={{
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Link href="signup">
        <Text>SignUP</Text>
      </Link>
      <Text>index</Text>
      <UserStory />
    </View>
  );
};

export default index;

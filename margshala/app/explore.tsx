import { View, Text, Image, ScrollView, Pressable } from "react-native";
import React from "react";
import { useLocalSearchParams, router } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { openURL } from "expo-linking";

const explore = () => {
  const { category } = useLocalSearchParams();
  return (
    <View style={{ alignItems: "center" }}>
      <Image
        src={
          "https://emeritus.org/in/wp-content/uploads/sites/3/2022/03/What-is-Financial-Management.jpg.webp"
        }
        style={{ width: 500, height: 300 }}
      />

      <View
        style={{
          paddingHorizontal: 20,
          paddingTop: 20,
          gap: 20,
          alignItems: "center",
        }}
      >
        <Text
          style={{
            fontSize: 30,
            fontWeight: "bold",
          }}
        >
          {category}
        </Text>
        <Text
          style={{
            fontSize: 20,
          }}
        >
          Lorem ipsum dolor sit amet.
        </Text>
        <Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae,
          repellendus. Modi voluptate labore necessitatibus eius qui! Tempora
          eum, ex exercitationem sapiente ea praesentium animi dolores quae ut,
          eos sit aliquid!
        </Text>
        <Text
          style={{
            fontSize: 20,
          }}
        >
          Lorem ipsum dolor sit amet.
        </Text>
        <Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae,
          repellendus. Modi voluptate labore necessitatibus eius qui! Tempora
          eum, ex exercitationem sapiente ea praesentium animi dolores quae ut,
          eos sit aliquid! bjksnkjas
        </Text>
        <Pressable
          style={{
            backgroundColor: "rgba(20,39,45,1)",
            alignItems: "center",
            justifyContent: "center",
            width: 264,
            height: 50,
            borderRadius: 31,
            flexDirection: "row",
          }}
          onPress={() => {
            openURL("http://iabtfoundation.org/khojshala/");
          }}
        >
          <Text
            style={{
              padding: 10,
              fontSize: 20,
              color: "white",
            }}
          >
            Learn with Khojshala
          </Text>
          <Ionicons name="arrow-forward-outline" color="white" size={30} />
        </Pressable>
      </View>
    </View>
  );
};

export default explore;

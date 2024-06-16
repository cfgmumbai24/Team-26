import { StyleSheet, Text, View, Pressable } from "react-native";
import React from "react";
import { openURL } from "expo-linking";

const swarozgar = () => {
  return (
    <View style={{ justifyContent: "center", flex: 1, padding: 15 }}>
      <Text style={{ fontSize: 25, fontWeight: "bold", marginBottom: 50 }}>
        Swarozgar Fellowship
      </Text>
      <Text style={{ fontSize: 16, fontWeight: "semibold", marginBottom: 20 }}>
        DESCRIPTION
      </Text>
      <Text style={{ fontSize: 14, textAlign: "justify" }}>
        Khoj Shala is seeking a dedicated and knowledgeable Financial Advisor to
        join our team. In this role, you will work closely with rural clients to
        understand their financial needs and goals, and provide tailored advice
        and strategies to help them achieve financial security. You will be
        responsible for analyzing financial situations, developing financial
        plans, and recommending investments and other financial products. The
        ideal candidate will have a strong understanding of financial markets
        and products, excellent communication skills, and a passion for helping
        others achieve financial success.
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
          openURL(
            "https://docs.google.com/forms/d/e/1FAIpQLScWRdIlPMrWfUMcFCBMuv2iLBiV_xnkVtSe5IiyYq6d3bdf5A/viewform"
          );
        }}
      >
        <Text
          style={{
            padding: 10,
            fontSize: 15,
            color: "white",
            fontWeight: "bold",
          }}
        >
          Register
        </Text>
      </Pressable>
    </View>
  );
};

export default swarozgar;

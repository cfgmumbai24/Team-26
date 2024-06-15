import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import React from "react";

const onboarding = () => {
  return (
    <View style={{ alignItems: "center", justifyContent: "center", flex: 1 }}>
      <Image
        src="https://s3-alpha-sig.figma.com/img/bfa3/d9ce/5b8131d0dfeb5626bec5a15d71b30188?Expires=1719187200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=AjYyLWYPsHuvRtLv71uRPIRgCuTU7DWgaE4Nt2x0EnopZ2R-wBKGq6j5QaVvzU5Q8icVk23v1UD-tObYmpxH9gf3DlMqzuDoydthIG7ZFjwNmp43tuqnq-iydSSRJEFoTwgpC66qklwPrhKDtNphGCS8Ud63SnboDpzlDu6nJLPDavEkMxnKs7achRBYQ~lNZzxda-MkU9uwvbw4PLNsHpw68Qf9daT61Ga-Yzy2D4QT0QAV8-zdWRiIYeVS~gSJZ4pTzmVRKtO95upLLGXpae6kegBE3fOYDBkApJUucC55eX0RAwEhbJT3KIfJEKCAdcVHmrxOqnQq4~Wf-JOnyw__"
        style={{
          width: 136,
          height: 59,
          marginTop: 50,
        }}
      ></Image>
      <Text
        style={{
          fontSize: 17,
          marginTop: 50,
          marginBottom: 0,
          fontWeight: "300",
          textAlign: "center",
        }}
      >
        Youth decisions shape life trajectories. If you're from Uttarakhand and
        considering entrepreneurship, Margshala is for you!
      </Text>

      <View style={styles.container}>
        <View style={styles.row}>
          <View style={styles.item}>
            <Image
              source={require("../assets/images/sun.png")}
              style={styles.image}
              resizeMode="cover"
            />
            <Text style={styles.label}>Globalization</Text>
          </View>
          <View style={styles.item}>
            <Image
              source={require("../assets/images/mentor.png")}
              style={styles.image}
              resizeMode="cover"
            />
            <Text style={styles.label}>Mentorship</Text>
          </View>
        </View>
        <View style={styles.row}>
          <View style={styles.item}>
            <Image
              source={require("../assets/images/idea.png")}
              style={styles.image}
              resizeMode="cover"
            />
            <Text style={styles.label}>Empowerment</Text>
          </View>
          <View style={styles.item}>
            <Image
              source={require("../assets/images/men.png")}
              style={styles.image}
              resizeMode="cover"
            />
            <Text style={styles.label}>Networking</Text>
          </View>
        </View>
      </View>
      <Pressable
        style={{
          backgroundColor: "rgba(20,39,45,1)",
          alignItems: "center",
          justifyContent: "center",
          width: 264,
          height: 50,
          borderRadius: 30,
          flexDirection: "row",
          marginBottom: 50,
        }}
        onPress={() => {}}
      >
        <Text
          style={{
            fontSize: 20,
            color: "white",
          }}
        >
          Get Started
        </Text>
      </Pressable>
      <Text style={{ marginTop: 50, marginBottom: 20 }}>
        Don’t know where to go? Let us take you there
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 30,
  },
  row: {
    flexDirection: "row",
    marginBottom: 60,
  },
  item: {
    flex: 1,
    alignItems: "center",
  },
  image: {
    width: 70,
    height: 63,
    margin: 5,
    borderRadius: 10,
  },
  label: {
    marginTop: 5,
    textAlign: "center",
  },
});

export default onboarding;

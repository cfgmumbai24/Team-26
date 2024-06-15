import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";

const onboarding = () => {
  return (
    <View style={{ alignItems: "center", justifyContent: "center", flex: 1 }}>
      <Image
        src="https://s3-alpha-sig.figma.com/img/bfa3/d9ce/5b8131d0dfeb5626bec5a15d71b30188?Expires=1719187200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=AjYyLWYPsHuvRtLv71uRPIRgCuTU7DWgaE4Nt2x0EnopZ2R-wBKGq6j5QaVvzU5Q8icVk23v1UD-tObYmpxH9gf3DlMqzuDoydthIG7ZFjwNmp43tuqnq-iydSSRJEFoTwgpC66qklwPrhKDtNphGCS8Ud63SnboDpzlDu6nJLPDavEkMxnKs7achRBYQ~lNZzxda-MkU9uwvbw4PLNsHpw68Qf9daT61Ga-Yzy2D4QT0QAV8-zdWRiIYeVS~gSJZ4pTzmVRKtO95upLLGXpae6kegBE3fOYDBkApJUucC55eX0RAwEhbJT3KIfJEKCAdcVHmrxOqnQq4~Wf-JOnyw__"
        style={{
          width: 136,
          height: 59,
        }}
      ></Image>
      <Text style={{ fontSize: 17, marginTop: 50, fontWeight: 200 }}>
        Youth decisions shape life trajectories. If you're from Uttarakhand and
        considering entrepreneurship, Margshala is for you!
      </Text>
    </View>
  );
};

export default onboarding;

const styles = StyleSheet.create({});

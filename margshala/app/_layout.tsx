import { Stack } from "expo-router";
import { useState } from "react";
import { UserContext } from "@/context";

export default function RootLayout() {
  const [user, setUser] = useState(undefined)
  return (
    <UserContext.Provider value={{ user, setUser }} >
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="login" options={{ headerShown: false }} />
      <Stack.Screen name="quest" options={{ headerShown: false }} />
      <Stack.Screen name="signup" options={{ headerShown: false }} />
      <Stack.Screen name="onboarding" options={{ headerShown: false }} />
      <Stack.Screen name="explore" options={{ headerShown: false }} />
      <Stack.Screen name="youtube" options={{ headerShown: false }} />
    </Stack>
    </UserContext.Provider>
  );
}

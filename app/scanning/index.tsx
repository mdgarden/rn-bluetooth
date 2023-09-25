import { Stack } from "expo-router";
import { View, Text } from "react-native";

export default function Scanning() {
  return (
    <>
      <Stack.Screen options={{ headerShown: false }} />
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text style={{ color: "white" }}>Scanning Bluetooth device</Text>
      </View>
    </>
  );
}

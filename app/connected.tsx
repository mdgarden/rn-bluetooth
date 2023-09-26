import { View, Text, Button } from "react-native";

export default function Connected(setIsConnected: any) {
  return (
    <>
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text style={{ color: "black" }}>Device Connected</Text>
        <Button
          title="Disconnect Device"
          onPress={() => setIsConnected(false)}
        />
      </View>
    </>
  );
}

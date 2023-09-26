import { View, Text, Button } from "react-native";

export default function Scanning(setIsConnected: any) {
  return (
    <>
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text style={{ color: "black" }}>Scanning Bluetooth device</Text>
        <Button title="Connect Device" onPress={() => setIsConnected(true)} />
      </View>
    </>
  );
}

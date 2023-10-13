import { View, Text, Button } from "react-native";
import { devices } from "../dummy/devices";

export default function Connected({ setConnectedDevice }: any) {
  return (
    <>
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text style={{ color: "black" }}>Device Connected</Text>
        <Button
          title="Disconnect Device"
          onPress={() => setConnectedDevice(devices[1])}
        />
      </View>
    </>
  );
}

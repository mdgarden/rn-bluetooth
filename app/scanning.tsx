import { View, Text, Button, ScrollView, StyleSheet } from "react-native";
import { devices } from "../dummy/devices";

export default function Scanning(setIsConnected: any) {
  return (
    <View style={{ flex: 1, backgroundColor: "gold" }}>
      <ScrollView
        contentContainerStyle={{
          backgroundColor: "mediumorchid",
          alignContent: "center",
          justifyContent: "center",
          padding: 20,
        }}
      >
        {devices.map((device) => (
          <View style={styles.list} key={device.index}>
            <Text style={styles.device}>{device.name}</Text>
          </View>
        ))}
      </ScrollView>
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text style={{ color: "black" }}>scanning Bluetooth device</Text>
        <Button title={"Connect Device"} onPress={() => setIsConnected(true)} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  list: {
    padding: 3,
  },
  device: {
    fontSize: 20,
  },
});

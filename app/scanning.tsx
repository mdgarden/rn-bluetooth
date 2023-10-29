import { View, Text, Button, ScrollView } from "react-native";

export default function Scanning(setIsConnected: any) {
  return (
    <View style={{ flex: 1, backgroundColor: "gold" }}>
      <ScrollView
        contentContainerStyle={{
          backgroundColor: "mediumorchid",
          alignContent: "center",
          justifyContent: "center",
        }}
      >
        <View>
          <Text style={{ color: "black" }}>Device name</Text>
        </View>
        <View>
          <Text style={{ color: "black" }}>Device name</Text>
        </View>
        <View>
          <Text style={{ color: "black" }}>Device name</Text>
        </View>
      </ScrollView>
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text style={{ color: "black" }}>scanning Bluetooth device</Text>
        <Button title={"Connect Device"} onPress={() => setIsConnected(true)} />
      </View>
    </View>
  );
}

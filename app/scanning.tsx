import { View, Text, Button, FlatList, StyleSheet } from "react-native";
import { devices } from "../dummy/devices";

type ItemProps = {
  index: number;
  title: string;
};

const Item = ({ index, title }: ItemProps) => (
  <View style={styles.list} key={index}>
    <Text style={styles.device}>{title}</Text>
  </View>
);

export default function Scanning(setIsConnected: any) {
  return (
    <View style={{ flex: 1 }}>
      <View
        style={{
          flex: 2,
          padding: 20,
          paddingTop: 100,
          backgroundColor: "mediumorchid",
        }}
      >
        <FlatList
          contentContainerStyle={{
            alignContent: "center",
            justifyContent: "center",
            padding: 20,
            borderRadius: 25,
          }}
          data={devices}
          renderItem={({ item }) => (
            <Item title={item.deviceName} index={item.index} />
          )}
          keyExtractor={(device) => device.index + ""}
        />
      </View>
      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "gold",
        }}
      >
        <Text style={{ color: "black" }}>scanning Bluetooth device</Text>
        <Button title={"Connect Device"} onPress={() => setIsConnected(true)} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  list: {
    padding: 20,
    borderColor: "gold",
    borderWidth: 1,
    margin: 4,
  },
  device: {
    fontSize: 25,
  },
});

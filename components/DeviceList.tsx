import { View, Text, FlatList, StyleSheet } from "react-native";
import { Device } from "../dummy/devices";

type ItemProps = {
  index: number;
  title: string;
};

type props = {
  devices: Device[];
};

const Item = ({ index, title }: ItemProps) => (
  <View style={styles.list} key={index}>
    <Text style={styles.device}>{title}</Text>
  </View>
);

export default function DeviceList({ devices }: props) {
  return (
    <>
      <Text style={styles.scannerTitle}>검색된 장치</Text>
      <FlatList
        contentContainerStyle={styles.deviceListContainer}
        data={devices}
        renderItem={({ item }) => (
          <Item title={item.deviceName} index={item.index} />
        )}
        keyExtractor={(device) => device.index + ""}
      />
    </>
  );
}

const styles = StyleSheet.create({
  list: {
    padding: 20,
    backgroundColor: "gainsboro",
    margin: 4,
    borderRadius: 10,
  },
  device: {
    fontSize: 20,
  },
  deviceListContainer: {
    alignContent: "center",
    justifyContent: "center",
    padding: 20,
    borderRadius: 25,
  },
  scannerTitle: {
    textAlign: "center",
    fontSize: 20,
  },
});

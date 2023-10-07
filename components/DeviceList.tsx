import { Text, FlatList, StyleSheet, TouchableOpacity } from "react-native";
import { Device } from "../dummy/devices";

type ItemProps = {
  index: number;
  title: string;
  selected: boolean;
  onPress: (id: string) => void;
};

type props = {
  devices: Device[];
  onPress: (id: string) => void;
  selected: string;
};

const Item = ({ index, title, selected, onPress }: ItemProps) => (
  <TouchableOpacity
    onPress={() => onPress(title)}
    style={{
      ...styles.list,
      backgroundColor: selected ? "darkcyan" : "gainsboro",
    }}
    key={index}
  >
    <Text style={{ ...styles.device, color: selected ? "white" : "black" }}>
      {title}
    </Text>
  </TouchableOpacity>
);

export default function DeviceList({ devices, onPress, selected }: props) {
  return (
    <>
      <Text style={styles.scannerTitle}>검색된 장치</Text>
      <FlatList
        contentContainerStyle={styles.deviceListContainer}
        data={devices}
        renderItem={({ item }) => (
          <Item
            title={item.deviceName}
            index={item.index}
            selected={item.deviceName === selected}
            onPress={onPress}
          />
        )}
        keyExtractor={(device) => device.index + ""}
      />
    </>
  );
}

const styles = StyleSheet.create({
  list: {
    padding: 20,
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

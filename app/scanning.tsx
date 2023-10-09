import {
  View,
  Text,
  Button,
  FlatList,
  StyleSheet,
  ActivityIndicator,
} from "react-native";
import { devices } from "../dummy/devices";
import { useState } from "react";
import DeviceList from "../components/DeviceList";

export default function Scanning({ setIsConnected }: any) {
  const [selectedDevice, setSelectedDevice] = useState<string>("");
  const searching = false;
  const handleSelectDevice = (name: string) => {
    selectedDevice === name ? setSelectedDevice("") : setSelectedDevice(name);
  };

  return (
    <View style={{ flex: 1 }}>
      <View style={styles.scannerContainer}>
        {searching && (
          <View>
            <ActivityIndicator size="large" color="gold" />
          </View>
        )}
        {devices && (
          <DeviceList
            devices={devices}
            selected={selectedDevice}
            onPress={handleSelectDevice}
          />
        )}
        {!devices && !searching && <Text>Device Not found</Text>}
      </View>
      <View style={styles.buttonContainer}>
        <Button
          title={"Connect Device"}
          onPress={() => setIsConnected(true)}
          disabled={!selectedDevice}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  scannerContainer: {
    flex: 2,
    padding: 20,
    paddingTop: 100,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: devices ? "stretch" : "center",
  },

  buttonContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

import React, { useState, useEffect, useCallback } from "react";
import {
  Text,
  Alert,
  View,
  FlatList,
  Platform,
  StatusBar,
  SafeAreaView,
  NativeModules,
  useColorScheme,
  TouchableOpacity,
  NativeEventEmitter,
  PermissionsAndroid,
} from "react-native";
import { BleManager } from "react-native-ble-plx";

export function useBleplx() {
  const peripherals = new Map();
  const [isScanning, setIsScanning] = useState(false);
  const [connectedDevices, setConnectedDevices] = useState([]);
  const [discoveredDevices, setDiscoveredDevices] = useState<string[] | null>(
    []
  );

  const manager = new BleManager();
  manager.startDeviceScan(
    discoveredDevices,
    { allowDuplicates: false },
    (error, scannedDevice) => {
      if (error) {
        throw new Error(error.message);
      }

      //   scannedDevice && setDiscoveredDevices([...discoveredDevices, ...scannedDevice]));
    }
  );

  return { peripherals, isScanning, connectedDevices, discoveredDevices };
}

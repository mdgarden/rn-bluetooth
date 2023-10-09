import FontAwesome from "@expo/vector-icons/FontAwesome";
import { useFonts } from "expo-font";
import { SplashScreen } from "expo-router";
import { useEffect, useState } from "react";

import Scanning from "./scanning";
import Connected from "./connected";
import DeviceProvider from "../store/deviceContext";

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from "expo-router";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
    ...FontAwesome.font,
  });

  // Expo Router uses Error Boundaries to catch errors in the navigation tree.
  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return <RootLayoutNav />;
}

function RootLayoutNav() {
  const [isConnected, setIsConnected] = useState<boolean>(false);
  const [connectedDevice, setConnectedDevice] = useState<string>("");
  const deviceContext = {
    deviceName: "device test 1",
    index: 2,
  };

  return (
    <DeviceProvider
      value={{
        isConnected,
        setIsConnected,
        connectedDevice,
        setConnectedDevice,
        profile: "test",
      }}
    >
      {isConnected ? (
        <Connected setIsConnected={setIsConnected} />
      ) : (
        <Scanning setIsConnected={setIsConnected} />
      )}
    </DeviceProvider>
  );
}

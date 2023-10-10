import { createContext, useContext, useReducer } from "react";

type Device = {
  id: string;
  profile: string;
  index: number;
};

type BluetoothActions = {
  type: "CONNECT" | "DISCONNECT";
  payload: Device;
};

type ProviderProps = {
  children: React.ReactNode;
};

const initialDevice: Device = {
  id: "testDevice",
  profile: "profile test",
  index: 1,
};

export const BluetoothReducer = (
  state: Device,
  action: BluetoothActions
): Device => {
  switch (action.type) {
    case "CONNECT":
      // TODO: connect to action.target device
      return initialDevice;
    case "DISCONNECT":
      return {
        id: "",
        profile: "",
        index: 0,
      };
  }

  // TODO: throw error
};

const DeviceContext = createContext<Device>(initialDevice);
const DeviceDispatchContext =
  createContext<React.Dispatch<BluetoothActions> | null>(null);

export function useDeviceState() {
  const context = useContext(DeviceContext);

  if (context === undefined) {
    throw new Error("useDeviceState must be used within a DeviceProvider");
  }

  return context;
}

export function useDeviceDispatch() {
  const context = useContext(DeviceDispatchContext);

  if (context === undefined) {
    throw new Error("useDeviceState must be used within a DeviceProvider");
  }

  return context;
}

export default function DeviceContextProvider({ children }: ProviderProps) {
  const [connectedDevice, dispatch] = useReducer(
    BluetoothReducer,
    initialDevice
  );

  return (
    <DeviceContext.Provider value={connectedDevice}>
      <DeviceDispatchContext.Provider value={dispatch}>
        {children}
      </DeviceDispatchContext.Provider>
    </DeviceContext.Provider>
  );
}

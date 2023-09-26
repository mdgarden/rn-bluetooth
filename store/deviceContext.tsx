import * as React from "react";

type Device = {
  isConnected: boolean;
  setIsConnected: React.Dispatch<React.SetStateAction<boolean>>;
  profile: string;
};

const DefaultDevice: Device = {
  isConnected: false,
  setIsConnected: function (value: React.SetStateAction<boolean>): void {
    throw new Error("Function not implemented.");
  },
  profile: "",
};

const DeviceContext = React.createContext<Device>(DefaultDevice);

type Props = {
  value: Device;
  children: React.ReactNode;
};

export default function DeviceProvider({ value, children }: Props) {
  return (
    <DeviceContext.Provider value={value}>{children}</DeviceContext.Provider>
  );
}

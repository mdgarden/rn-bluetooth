import { View, Text, Button, FlatList } from "react-native";
import { Peripheral } from "react-native-ble-manager";
import { logs, Log } from "../dummy/logs";

type Props = {
  connectedPeripheral: (peripheral: Peripheral) => Promise<void>;
  setConnectedPeripheral: any;
};

type ItemProps = Omit<Log, "id">;

const Item = ({ date, message, location, destination }: ItemProps) => (
  <View
    style={{
      margin: 10,
      justifyContent: "flex-start",
      alignItems: "flex-start",
    }}
  >
    <Text>{date}</Text>
    <Text>{message}</Text>
    <Text>{location.coords.longitude}</Text>
    <Text>{destination}</Text>
  </View>
);

export default function Connected({
  connectedPeripheral,
  setConnectedPeripheral,
}: Props) {
  return (
    <>
      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
          paddingTop: 50,
          paddingBottom: 50,
        }}
      >
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            marginBottom: 50,
          }}
        >
          <Text style={{ color: "black", textAlign: "center" }}>
            다음 장치와 연결되어 있습니다.
          </Text>
          <Text style={{ color: "black", fontWeight: "bold" }}>
            {connectedPeripheral.name}
          </Text>
        </View>
        <View style={{ flex: 3, minWidth: "80%" }}>
          <Text>LOGS</Text>
          {logs.length ? (
            <FlatList
              data={logs}
              renderItem={({ item }) => (
                <Item
                  date={item.date}
                  message={item.message}
                  location={item.location}
                  destination={item.destination}
                />
              )}
            />
          ) : (
            <Text>기록이 없습니다.</Text>
          )}
        </View>
        <Button
          title="장치 연결 해제하기"
          onPress={() => setConnectedPeripheral(null)}
        />
      </View>
    </>
  );
}

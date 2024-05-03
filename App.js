import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import Header from "./components/Header";
import CreateLabel from "./components/CreateLabel";
// App.js

export default function App() {
  return (
    <View className="">
      <Header />
      <CreateLabel />
      <StatusBar style="auto" />
    </View>
  );
}

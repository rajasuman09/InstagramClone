import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Header from "./app/components/Header";
import Screen from "./app/components/Screen";
import Stories from "./app/components/Stories";

export default function App() {
  return (
    <Screen customStyles={styles.container}>
      <StatusBar style="light" />
      <Header />
      <Stories />
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    paddingHorizontal: 10,
  },
});

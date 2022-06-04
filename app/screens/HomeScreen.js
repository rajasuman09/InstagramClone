import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Screen from "../components/Screen";
import Header from "../components/Header";
import Stories from "../components/Stories";
import { StatusBar } from "expo-status-bar";
import Posts from "../components/Posts";

const HomeScreen = () => {
  return (
    <Screen customStyles={styles.container}>
      <StatusBar style="light" />
      <Header />
      <Stories />
      <Posts />
    </Screen>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
  },
});

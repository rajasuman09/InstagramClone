import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import React from "react";
import Constants from "expo-constants";

const Screen = ({ children, customStyles }) => {
  return (
    <SafeAreaView style={[styles.screen, customStyles]}>
      {children}
    </SafeAreaView>
  );
};

export default Screen;

const styles = StyleSheet.create({
  screen: {
    paddingTop: Constants.statusBarHeight,
    marginBottom: 50,
  },
});

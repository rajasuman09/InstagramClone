import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import Constants from "expo-constants";

const bottomTabIcons = [
  {
    name: "Home",
    active: <Ionicons name="home" size={30} color="white" />,
    inactive: <Ionicons name="home-outline" size={30} color="white" />,
  },
  {
    name: "Search",
    active: <Ionicons name="search" size={30} color="white" />,
    inactive: <Ionicons name="search-outline" size={30} color="white" />,
  },
  {
    name: "Reel",
    active: (
      <Image
        source={require("../assets/reels-filled.png")}
        style={{ width: 30, height: 30 }}
      />
    ),
    inactive: (
      <Image
        source={require("../assets/reels-outline.png")}
        style={{ width: 30, height: 30 }}
      />
    ),
  },
  {
    name: "Shop",
    active: (
      <Image
        source={require("../assets/shop-filled.png")}
        style={{ width: 30, height: 30 }}
      />
    ),
    inactive: (
      <Image
        source={require("../assets/shop-outline.png")}
        style={{ width: 30, height: 30 }}
      />
    ),
  },
  {
    name: "Profile",
    active: <Ionicons name="person" size={30} color="white" />,
    inactive: <Ionicons name="person-outline" size={30} color="white" />,
  },
];

const BottomTabBar = () => {
  const [active, setActive] = useState("Home");
  return (
    <View style={styles.wrapper}>
      <View style={styles.container}>
        {bottomTabIcons.map((icon, index) => {
          return (
            <TouchableOpacity
              key={index}
              onPress={() => {
                setActive(icon.name);
              }}
            >
              {active === icon.name ? icon.active : icon.inactive}
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
};

export default BottomTabBar;

const styles = StyleSheet.create({
  wrapper: {
    position: "absolute",
    justifyContent: "flex-end",
    flex: 1,
    width: "100%",
    height: "100%",
  },
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    paddingHorizontal: 10,
    alignItems: "center",
    backgroundColor: "black",
    height: 50,
  },
});

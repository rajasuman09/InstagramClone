import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { Feather, MaterialCommunityIcons } from "@expo/vector-icons";

const Header = () => {
  return (
    <View style={styles.header}>
      <Image style={styles.image} source={require("../assets/logo.png")} />
      <View style={styles.icons}>
        <View style={{ marginHorizontal: 5 }}>
          <Feather name="plus-square" size={28} color="white" />
        </View>
        <View style={{ marginHorizontal: 5 }}>
          <Feather name="heart" size={28} color="white" />
        </View>
        <View style={{ marginHorizontal: 5 }}>
          <View style={styles.badge}>
            <Text style={{ color: "white", fontSize: 12 }}>11</Text>
          </View>
          <MaterialCommunityIcons
            name="facebook-messenger"
            size={28}
            color="white"
          />
        </View>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  badge: {
    position: "absolute",
    zIndex: 1,
    width: 25,
    height: 18,
    borderRadius: 25,
    justifyContent: "center",
    left: 15,
    bottom: 15,
    backgroundColor: "red",
    alignItems: "center",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  icons: {
    flexDirection: "row",
  },
  image: {
    width: 100,
    height: 50,
    resizeMode: "contain",
  },
});

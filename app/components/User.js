import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";

const User = ({ image, userName }) => {
  return (
    <View style={styles.user}>
      <Image style={styles.image} source={{ uri: image }} />
      <Text style={styles.text}>
        {userName.length > 10 ? userName.slice(0, 10) + "..." : userName}
      </Text>
    </View>
  );
};

export default User;

const styles = StyleSheet.create({
  image: {
    width: 80,
    height: 80,
    borderRadius: 40,
    borderWidth: 3,
    borderColor: "#ff8501",
    marginBottom: 10,
  },
  text: {
    color: "white",
  },
  user: {
    alignItems: "center",
    justifyContent: "center",
    paddingRight: 12,
    paddingVertical: 5,
  },
});

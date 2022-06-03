import { StyleSheet, Text, View, FlatList, Image } from "react-native";
import React from "react";

const users = [
  {
    id: 1,
    name: "Maria",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmFuZG9tJTIwcGVvcGxlfGVufDB8fDB8fA%3D%3D&w=1000&q=80",
  },
  {
    id: 2,
    name: "Kasperov",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cmFuZG9tJTIwcGVvcGxlfGVufDB8fDB8fA%3D%3D&w=1000&q=80",
  },
  {
    id: 3,
    name: "Maria",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmFuZG9tJTIwcGVvcGxlfGVufDB8fDB8fA%3D%3D&w=1000&q=80",
  },
  {
    id: 4,
    name: "Kasperov",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cmFuZG9tJTIwcGVvcGxlfGVufDB8fDB8fA%3D%3D&w=1000&q=80",
  },
  {
    id: 5,
    name: "Maria",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmFuZG9tJTIwcGVvcGxlfGVufDB8fDB8fA%3D%3D&w=1000&q=80",
  },
  {
    id: 6,
    name: "Kasperov",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cmFuZG9tJTIwcGVvcGxlfGVufDB8fDB8fA%3D%3D&w=1000&q=80",
  },
];

const Stories = () => {
  return (
    <View>
      <FlatList
        data={users}
        keyExtractor={(user) => user.id.toString()}
        renderItem={({ item }) => ListItem(item.image, item.name)}
        horizontal={true}
      />
    </View>
  );
};

const ListItem = (image, userName) => {
  return (
    <View style={styles.user}>
      <Image style={styles.image} source={{ uri: image }} />
      <Text style={styles.text}>
        {userName.length > 10 ? userName.slice(0, 10) + "..." : userName}{" "}
      </Text>
    </View>
  );
};

export default Stories;

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

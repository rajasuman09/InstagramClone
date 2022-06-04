import { StyleSheet, Text, View, FlatList, Image } from "react-native";
import React from "react";
import User from "./User";
import users from "../api/users";

const Stories = () => {
  return (
    <View>
      <FlatList
        data={users}
        keyExtractor={(user) => user.id.toString()}
        renderItem={({ item }) => (
          <User image={item.image} userName={item.name} />
        )}
        horizontal={true}
      />
    </View>
  );
};

export default Stories;

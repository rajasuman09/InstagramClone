import { StyleSheet, Text, View, FlatList } from "react-native";
import React from "react";
import posts from "../api/posts";
import Post from "./Post";

const Posts = () => {
  return (
    <FlatList
      data={posts}
      keyExtractor={(post) => post.id.toString()}
      renderItem={({ item }) => <Post post={item} />}
    />
  );
};

export default Posts;

const styles = StyleSheet.create({});

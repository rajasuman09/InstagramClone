import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { Feather } from "@expo/vector-icons";

const Post = ({ post }) => {
  return (
    <View>
      <Header post={post} />
      <Image style={styles.image} source={{ uri: post.image }} />
      <Footer />
      <Text style={styles.likes}>{post.likes} likes</Text>
      <Caption post={post} />
      <Comments post={post} />
    </View>
  );
};

const Header = ({ post }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image style={styles.dp} source={{ uri: post.dp }} />
        <Text style={styles.dpText}>{post.user}</Text>
      </View>
      <Text style={styles.dpText}>...</Text>
    </View>
  );
};

const Footer = () => {
  return (
    <View style={styles.footer}>
      <View style={styles.footerLeftIcons}>
        <View style={{ marginHorizontal: 5 }}>
          <Feather name="heart" size={28} color="white" />
        </View>
        <View style={{ marginHorizontal: 5 }}>
          <Feather name="message-circle" size={28} color="white" />
        </View>
        <View style={{ marginHorizontal: 5 }}>
          <Feather name="send" size={28} color="white" />
        </View>
      </View>
      <View>
        <Feather name="bookmark" size={28} color="white" />
      </View>
    </View>
  );
};

const Caption = ({ post }) => {
  return (
    <Text style={styles.caption}>
      <Text style={{ fontWeight: "800" }}>{post.user}</Text>
      {` ${post.caption}`}
    </Text>
  );
};

const Comments = ({ post }) => {
  return (
    <View>
      <Text style={styles.commentsHeader}>
        View all {post.comments.length} comments
      </Text>
      <View style={styles.commentsContainer}>
        <Text style={styles.comments}>
          <Text style={{ fontWeight: "800" }}>{post.comments[0].user}</Text>
          {` ${post.comments[0].comment}`}
        </Text>
      </View>
    </View>
  );
};

export default Post;

const styles = StyleSheet.create({
  caption: {
    color: "white",
    fontSize: 16,
    marginHorizontal: 5,
    marginVertical: 10,
  },
  comments: {
    color: "white",
    fontSize: 16,
  },
  commentsContainer: {
    flexDirection: "row",
    marginHorizontal: 5,
    paddingVertical: 5,
  },
  commentsHeader: {
    color: "dodgerblue",
    fontSize: 14,
    marginHorizontal: 5,
  },
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 15,
    marginTop: 15,
    paddingHorizontal: 10,
  },
  dp: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
    resizeMode: "contain",
  },
  dpText: {
    color: "white",
    fontSize: 16,
    fontWeight: "500",
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingTop: 15,
    paddingBottom: 10,
  },
  footerLeftIcons: {
    flexDirection: "row",
    marginHorizontal: 5,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
  },
  image: {
    width: "100%",
    height: 400,
  },
  likes: {
    color: "white",
    fontSize: 16,
    marginHorizontal: 5,
  },
});

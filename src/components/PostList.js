import React from "react";
import { FlatList, StyleSheet, View } from "react-native";
import { Post } from "./Post";

export const PostList = ({ data, onOpen }) => {
  return (
    <View stule={styles.wrapper}>
      <FlatList
        data={data}
        keyExtractor={(post) => post.id.toString()}
        renderItem={({ item }) => <Post post={item} onOpen={onOpen} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  wrapper: {
    padding: 10,
  },
});

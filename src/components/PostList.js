import React from "react";
import {
  FlatList,
  StyleSheet,
  View,
  Text,
  ImageBackground,
} from "react-native";
import { Post } from "./Post";

export const PostList = ({ data, onOpen }) => {
  if (!data.length) {
    return (
      <View>
        <ImageBackground
          style={styles.image}
          source={require("../../assets/logo.png")}
        >
          <Text style={styles.noItems}>No posts yet</Text>
        </ImageBackground>
      </View>
    );
  }

  return (
    <View stule={styles.wrapper}>
      <ImageBackground
        style={styles.image}
        source={require("../../assets/logo.png")}
      >
        <FlatList
          data={data}
          keyExtractor={(post) => post.id.toString()}
          renderItem={({ item }) => <Post post={item} onOpen={onOpen} />}
        />
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    padding: 10,
    backgroundColor: "#d1ebf0",
    height: "100%",
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "contain",
  },
  noItems: {
    fontFamily: "open-regular",
    textAlign: "center",
    marginVertical: 10,
    fontSize: 18,
  },
});

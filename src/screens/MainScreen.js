import React from "react";
import { StyleSheet, View, FlatList } from "react-native";
import { DATA } from "../data";
import { Post } from "../components/Post";

export const MainScreen = ({ navigation }) => {
  const openPostHandler = (post) => {
    navigation.navigate("Post", { postId: post.id, date: post.date });
  };

  return (
    <View stule={styles.wrapper}>
      <FlatList
        data={DATA}
        keyExtractor={(post) => post.id.toString()}
        renderItem={({ item }) => <Post post={item} onOpen={openPostHandler} />}
      />
    </View>
  );
};

MainScreen.navigationOptions = {
  headerTitle: "My blog",
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

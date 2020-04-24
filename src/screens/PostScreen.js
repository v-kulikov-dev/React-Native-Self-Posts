import React from "react";
import {
  StyleSheet,
  View,
  Image,
  Text,
  Button,
  ScrollView,
  Alert,
} from "react-native";
import { DATA } from "../data";
import { THEME } from "../theme";

export const PostScreen = ({ navigation }) => {
  const postId = navigation.getParam("postId");

  const post = DATA.find((p) => p.id === postId);

  const removeHandler = () => {
    Alert.alert(
      "Remove Post",
      "Are you sure you want to delete the post?",
      [
        {
          text: "Cancel",
          style: "cancel",
        },
        { text: "Remove", style: "destructive", onPress: () => {} },
      ],
      { cancelable: false }
    );
  };

  return (
    <ScrollView>
      <Image source={{ uri: post.img }} style={styles.image} />
      <View style={styles.textWrap}>
        <Text style={styles.title}>{post.text}</Text>
      </View>
      <Button
        title="Remove"
        color={THEME.DANGER_COLOR}
        onPress={removeHandler}
      />
    </ScrollView>
  );
};

PostScreen.navigationOptions = ({ navigation }) => {
  const date = navigation.getParam("date");
  return {
    headerTitle: "Post on " + new Date(date).toLocaleDateString(),
  };
};

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 200,
  },
  textWrap: {
    padding: 10,
  },
  title: {
    fontFamily: "open-regular",
  },
});

import React, { useEffect, useCallback } from "react";
import {
  StyleSheet,
  View,
  Image,
  Text,
  Button,
  ScrollView,
  Alert,
  Dimensions,
  ImageBackground,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { THEME } from "../theme";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { AppHeaderIcon } from "../components/AppHeaderIcon";
import { removePost, toggleBooked } from "../store/actions/post";

export const PostScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const postId = navigation.getParam("postId");

  const post = useSelector((state) =>
    state.post.allPosts.find((p) => p.id === postId)
  );

  const booked = useSelector((state) =>
    state.post.bookedPosts.some((post) => post.id === postId)
  );

  useEffect(() => {
    navigation.setParams({ booked });
  }, [booked]);

  const toggleHandler = useCallback(() => {
    dispatch(toggleBooked(post));
  }, [dispatch, post]);

  useEffect(() => {
    navigation.setParams({ toggleHandler });
  }, [toggleHandler]);

  const removeHandler = () => {
    Alert.alert(
      "Remove Post",
      "Are you sure you want to delete the post?",
      [
        {
          text: "Cancel",
          style: "cancel",
        },
        {
          text: "Remove",
          style: "destructive",
          onPress() {
            navigation.navigate("Main");
            dispatch(removePost(postId));
          },
        },
      ],
      { cancelable: false }
    );
  };

  const editHandler = () => {
    navigation.navigate("Edit");
    console.log("edit");
  };

  if (!post) {
    return null;
  }

  return (
    <ImageBackground
      style={styles.backgroundImage}
      source={require("../../assets/logo_for_aboutScreen.png")}
    >
      <ScrollView>
        <Image source={{ uri: post.img }} style={styles.image} />
        <View style={styles.textWrap}>
          <Text style={styles.title}>{post.text}</Text>
        </View>
        <View style={styles.btnWrap}>
          <View style={styles.button}>
            <Button
              title="Remove"
              color={THEME.DANGER_COLOR}
              onPress={removeHandler}
            />
          </View>
          <View style={styles.button}>
            <Button
              title="Edit"
              color={THEME.MAIN_COLOR}
              onPress={editHandler}
            />
          </View>
        </View>
      </ScrollView>
    </ImageBackground>
  );
};
//Todo: Create notification for add to booked
PostScreen.navigationOptions = ({ navigation }) => {
  const date = navigation.getParam("date");
  const booked = navigation.getParam("booked");
  const toggleHandler = navigation.getParam("toggleHandler");
  const iconName = booked ? "ios-star" : "ios-star-outline";
  return {
    headerTitle: "Post on " + new Date(date).toLocaleDateString(),
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
        <Item title="Take photo" iconName={iconName} onPress={toggleHandler} />
      </HeaderButtons>
    ),
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
  btnWrap: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  button: {
    width: Dimensions.get("window").width / 3,
  },
  backgroundImage: {
    width: "100%",
    height: "100%",
    resizeMode: "contain",
  },
});

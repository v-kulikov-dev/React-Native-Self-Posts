import React, { useState, useRef } from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  Button,
  ScrollView,
  TouchableWithoutFeedback,
  Keyboard,
  ImageBackground,
} from "react-native";
import { useDispatch } from "react-redux";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { AppHeaderIcon } from "../components/AppHeaderIcon";
import { THEME } from "../theme";
import { addPost } from "../store/actions/post";
import { PhotoPicker } from "../components/PhotoPicker";

export const CreateScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const [text, setText] = useState("");
  const imgRef = useRef();

  const saveHandler = () => {
    const post = {
      date: new Date().toJSON(),
      text: text,
      img: imgRef.current,
      booked: false,
    };
    dispatch(addPost(post));
    navigation.navigate("Main");
  };

  const photoPickHandler = (uri) => {
    imgRef.current = uri;
  };

  return (
    <ImageBackground
      style={styles.image}
      source={require("../../assets/logo_for_createScreen.png")}
    >
      <ScrollView>
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
          <View style={styles.wrapper}>
            <Text style={styles.title}>Create New Post</Text>
            <TextInput
              style={styles.textarea}
              placeholder="Enter post text"
              value={text}
              onChangeText={setText}
              multiline
            />
            <PhotoPicker onPick={photoPickHandler} />
            <Button
              title="Create Post"
              color={THEME.MAIN_COLOR}
              onPress={saveHandler}
              disabled={!text}
            />
          </View>
        </TouchableWithoutFeedback>
      </ScrollView>
    </ImageBackground>
  );
};

CreateScreen.navigationOptions = ({ navigation }) => ({
  headerTitle: "Create post",
  headerLeft: () => (
    <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
      <Item
        title="Toggle Drawer"
        iconName="ios-menu"
        onPress={() => navigation.toggleDrawer()}
      />
    </HeaderButtons>
  ),
});

const styles = StyleSheet.create({
  wrapper: {
    padding: 10,
  },
  title: {
    fontSize: 20,
    textAlign: "center",
    fontFamily: "open-regular",
    marginVertical: 10,
  },
  textarea: {
    borderWidth: 2,
    borderColor: THEME.MAIN_COLOR,
    borderRadius: 5,
    marginBottom: 10,
    height: 50,
    paddingLeft: 10,
    paddingRight: 10,
  },
  style: {
    padding: 10,
    marginBottom: 10,
  },
  img: {
    width: "100%",
    height: 200,
    marginBottom: 10,
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "contain",
  },
});

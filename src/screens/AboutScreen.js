import React from "react";
import { StyleSheet, View, Text, ImageBackground } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { AppHeaderIcon } from "../components/AppHeaderIcon";

export const AboutScreen = () => {
  return (
    <ImageBackground
      style={styles.image}
      source={require("../../assets/logo_for_aboutScreen.png")}
    >
      <View style={styles.center}>
        <Text>Note application with the ability to use images</Text>
        <Text>
          App version <Text style={styles.version}>1.0.0</Text>
        </Text>
      </View>
    </ImageBackground>
  );
};

AboutScreen.navigationOptions = ({ navigation }) => ({
  headerTitle: "About App",
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
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  version: {
    fontFamily: "open-bold",
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "contain",
  },
});

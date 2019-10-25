import React from "react";
import { View, StyleSheet, Platform } from "react-native";
import Colours from "../constants/colours";
import TitleText from "./TitleText";

const Header = props => {
  return (
    <View style={styles.header}>
      <TitleText style={styles.headerTitle}>{props.title}</TitleText>
    </View>
  );
};

const styles = StyleSheet.create({
  headerBase: {
    width: "100%",
    height: 90,
    paddingTop: 36,
    backgroundColor: Platform.OS == "android" ? Colours.primary : "white",
    alignItems: "center",
    justifyContent: "center",
    borderBottomColor: Platform.OS === "ios" ? "#ccc" : "transparent",
    borderBottomWidth: Platform.OS === "ios" ? 1 : 0
  },
  headerTitle: {
    color: Platform.OS === "ios" ? Colours.primary : "white",
    fontSize: 18
  }
});

export default Header;

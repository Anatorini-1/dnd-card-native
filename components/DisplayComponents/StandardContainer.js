import React from "react";
import { StyleSheet, Text, View } from "react-native";

const StandardContainer = (props) => {
  return <View style={styles.container}>{props.children}</View>;
};

export default StandardContainer;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FAEBD7",
    borderColor: "#660308",
    borderWidth: 5,
    borderStyle: "solid",
    borderRadius: 20,
    margin: 20,
    minHeight: 100,
    padding: 10,
  },
});

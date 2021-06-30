import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Chip } from "react-native-elements";
import { RFPercentage } from "react-native-responsive-fontsize";
export default function LabeledField({ label, text }) {
  return (
    <View style={style.container}>
      <Text style={{ ...style.text }}>{label}</Text>
      <Text style={{ ...style.text, textAlign: "center", fontWeight: "bold" }}>
        {text}
      </Text>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    width: "90%",
    marginLeft: "5%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 5,
    borderBottomColor: "black",
    borderBottomWidth: 3,
    borderStyle: "solid",
  },
  text: {
    fontSize: RFPercentage(3),
    margin: 10,
    flex: 1,
  },
});

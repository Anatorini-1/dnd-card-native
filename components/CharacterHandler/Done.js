import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Button } from "react-native-elements";
const Done = ({ setPage }) => {
  return (
    <View style={{ alignItems: "center", justifyContent: "center" }}>
      <Text style={{ fontWeight: "bold", fontSize: 20 }}>
        Your Character has been created
      </Text>
      <Button
        title="Return to Character Selection"
        buttonStyle={{ margin: 20, backgroundColor: "#900" }}
        onPress={() => setPage("menu")}
      />
    </View>
  );
};

export default Done;

const styles = StyleSheet.create({});

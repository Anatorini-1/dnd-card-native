import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Button, Icon } from "react-native-elements";
import * as FileSystem from "expo-file-system";
import { RFPercentage } from "react-native-responsive-fontsize";
import Working from "./Creator/Working";
import Init from "./Creator/Init";
import Done from "./Done";
const CreateCharacter = ({ setPage }) => {
  const [creationState, setCreationState] = React.useState("start");
  const [characterName, setCharacterName] = React.useState("");
  const pageToShow =
    creationState == "start" ? (
      <Init
        display={creationState == "start"}
        setPage={setCreationState}
        characterName={characterName}
        setCharacterName={setCharacterName}
      />
    ) : creationState == "working" ? (
      <Working
        display={creationState == "working"}
        setPage={setCreationState}
        characterName={characterName}
        abort={() => {
          setPage("menu");
        }}
      />
    ) : (
      <Done setPage={setPage} />
    );

  return (
    <View style={styles.container}>
      <Button
        icon={<Icon type="material" name="close" />}
        containerStyle={{ position: "absolute", top: 10, right: 10 }}
        buttonStyle={{
          borderColor: "#900",
          borderWidth: 2,
        }}
        type="outline"
        onPress={() => setPage("menu")}
      />
      <Text style={styles.labelStyle}>Character Creator</Text>
      {pageToShow}
    </View>
  );
};

export default CreateCharacter;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  labelStyle: {
    fontSize: RFPercentage(4),
    height: 80,
    textAlign: "center",
    width: "80%",

    fontWeight: "bold",
    position: "absolute",
    top: 14,
  },
});

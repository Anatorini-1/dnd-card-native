import React from "react";
import { StyleSheet, Text, View, Alert } from "react-native";
import * as FileSystem from "expo-file-system";
import { Button, Icon } from "react-native-elements";
import { RFPercentage } from "react-native-responsive-fontsize";
import { Input } from "react-native-elements";
import { Asset } from "expo-asset";
const Init = ({ setPage, setCharacterName, display }) => {
  const checkNameAvailability = async (name) => {
    let path = FileSystem.documentDirectory;
    let fileTree = await FileSystem.readDirectoryAsync(path);
    let findResult = fileTree.find((e) => e == "characters");
    if (!findResult) {
      await FileSystem.makeDirectoryAsync(path + "characters");
    }
    let existingCharacters = await FileSystem.readDirectoryAsync(
      path + "characters"
    );
    if (existingCharacters.find((c) => c == name)) return false;
    else return true;
  };

  const fillTheFiles = async (name) => {
    let path = `${FileSystem.documentDirectory}characters/${name}/`;
    let stats = require("../../../assets/defaultCharacter/stats.json");
    let spells = require("../../../assets/defaultCharacter/spells.json");
    let gear = require("../../../assets/defaultCharacter/gear.json");
    let features = require("../../../assets/defaultCharacter/features.json");
    await FileSystem.writeAsStringAsync(
      path + "stats.json",
      JSON.stringify(stats)
    );
    await FileSystem.writeAsStringAsync(
      path + "spells.json",
      JSON.stringify(spells)
    );
    await FileSystem.writeAsStringAsync(
      path + "gear.json",
      JSON.stringify(gear)
    );
    await FileSystem.writeAsStringAsync(
      path + "features.json",
      JSON.stringify(features)
    );
  };
  const createBlankCharacter = async (name) => {
    let path = FileSystem.documentDirectory;
    let fileTree = await FileSystem.readDirectoryAsync(path);
    let findResult = fileTree.find((e) => e == "characters");

    if (!findResult) {
      await FileSystem.makeDirectoryAsync(path + "characters");
    }
    await FileSystem.makeDirectoryAsync(`${path}characters/${name}`).catch(
      (e) => Alert.alert(e)
    );

    //console.log("Tu doszliśm123y");
    await fillTheFiles(name);
  };
  const [isNameAvailable, setIsNameAvailable] = React.useState(true);
  const [chosenName, setName] = React.useState("");
  return (
    <View style={{ ...styles.container, display: display ? "flex" : "none" }}>
      <Text style={{ fontWeight: "bold", fontSize: RFPercentage(4) }}>
        Pick A Name
      </Text>
      <Input
        value={chosenName}
        onChangeText={(t) => {
          setName(t);
          checkNameAvailability(t).then((r) => setIsNameAvailable(r));
        }}
      />
      <Text>{isNameAvailable ? "" : "Character Name Already Taken"}</Text>
      <Button
        buttonStyle={styles.actionBtn}
        icon={<Icon type="material" name="arrow-forward" />}
        type="outline"
        onPress={() => {
          checkNameAvailability(chosenName).then((r) => {
            if (r) {
              createBlankCharacter(chosenName).then(() => {
                setCharacterName(chosenName);
                setPage("working");
              });
            }
          });
        }}
        disabled={!(isNameAvailable && chosenName)}
      />
    </View>
  );
};

export default Init;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  actions: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  actionBtn: {
    borderColor: "#900",
    borderWidth: 3,
    margin: 20,
    borderRadius: 25,
  },
});

import React from "react";
import { StyleSheet, Text, View, Dimensions, Alert } from "react-native";
import { Overlay, Button, Icon } from "react-native-elements";
import * as FileSystem from "expo-file-system";

const ChooseCharacter = ({ setPage, setShow, setCharacterData }) => {
  const loadCharacters = async () => {
    let path = FileSystem.documentDirectory;
    let fileTree = await FileSystem.readDirectoryAsync(path);
    let findResult = fileTree.find((e) => e == "characters");
    if (!findResult) {
      await FileSystem.makeDirectoryAsync(path + "characters");
    }

    let characters = await FileSystem.readDirectoryAsync(path + "characters");
    setCharacterList(characters);
  };
  const [characterList, setCharacterList] = React.useState([]);
  React.useEffect(() => {
    loadCharacters();
  }, []);
  let characterButtons = [];
  characterList.forEach((c) => {
    characterButtons.push(
      <View
        key={c}
        style={{
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
        }}
      >
        <Button
          onPress={async () => {
            let path = FileSystem.documentDirectory + "characters/" + c;
            let stats = JSON.parse(
              await FileSystem.readAsStringAsync(path + "/stats.json")
            );
            let spells = JSON.parse(
              await FileSystem.readAsStringAsync(path + "/spells.json")
            );
            let features = JSON.parse(
              await FileSystem.readAsStringAsync(path + "/features.json")
            );
            let gear = JSON.parse(
              await FileSystem.readAsStringAsync(path + "/gear.json")
            );
            console.log(
              "\nStats:\n",
              stats,
              "\nSpells:\n",
              spells,
              "\nFeatures:\n",
              features,
              "\nGear:\n",
              gear
            );
            setCharacterData({ stats, spells, features, gear });
            setShow(false);
          }}
          title={c}
          titleStyle={{ color: "black" }}
          containerStyle={{ width: "60%", margin: 5 }}
          buttonStyle={{
            backgroundColor: "white",
            borderStyle: "solid",
            borderWidth: 3,
            borderColor: "#900",
          }}
        />
        <Button
          title="X"
          buttonStyle={{ backgroundColor: "#900" }}
          onPress={() => {
            Alert.alert(
              "Delete Character",
              `Are you sure you want to delete ${c}? \n This action is irreversible!`,
              [
                {
                  text: "No",
                  onPress: () => {},
                  style: "cancel",
                },
                {
                  text: "Yes",
                  onPress: async () => {
                    await FileSystem.deleteAsync(
                      FileSystem.documentDirectory + `characters/${c}`
                    ),
                      loadCharacters();
                  },
                },
              ]
            );
          }}
        />
      </View>
    );
  });
  return (
    <>
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
      {characterButtons}
    </>
  );
};

export default ChooseCharacter;

const styles = StyleSheet.create({});

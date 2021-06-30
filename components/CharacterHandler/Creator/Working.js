import React from "react";
import { StyleSheet, Text, View, Alert, ActivityIndicator } from "react-native";
import Wrapper from "./InputsWrapper";
import Input from "./InputToJson";
import AppLoading from "./AppLoading";
import { Button, ButtonGroup } from "react-native-elements";
import * as FileSystem from "expo-file-system";
import { RFPercentage } from "react-native-responsive-fontsize";
import AbilityInput from "./AbilityInput";
import SavingThrowProfficiencies from "./SavingThrowProfficiencies";
import HitDiceCreator from "./HitDiceCreator";
import SpellSlots from "./SpellSlots";
const Working = ({ setPage, characterName, display, abort }) => {
  const [loaded, setLoaded] = React.useState(false);
  const [characterFiles, setCharacterFiles] = React.useState({});

  const loadFiles = async () => {
    let path = `${FileSystem.documentDirectory}characters/${characterName}/`;
    let fileList = await FileSystem.readDirectoryAsync(path);
    if (
      fileList.find((e) => e == "stats.json") &&
      fileList.find((e) => e == "spells.json") &&
      fileList.find((e) => e == "gear.json") &&
      fileList.find((e) => e == "features.json")
    ) {
      let files = {};
      files.stats = JSON.parse(
        await FileSystem.readAsStringAsync(path + "stats.json")
      );

      files.spells = JSON.parse(
        await FileSystem.readAsStringAsync(path + "spells.json")
      );

      files.gear = JSON.parse(
        await FileSystem.readAsStringAsync(path + "gear.json")
      );

      files.features = JSON.parse(
        await FileSystem.readAsStringAsync(path + "features.json")
      );
      setCharacterFiles(files);
      setLoaded(true);
    } else {
      Alert.alert("Something went wrong ):");
      abort();
    }
  };
  React.useEffect(() => {
    loadFiles();
  }, []);
  const saveChanges = async () => {
    let path = `${FileSystem.documentDirectory}characters/${characterName}/`;
    //console.log(path);
    characterFiles["stats"]["Names"]["Character"] = characterName;
    await FileSystem.writeAsStringAsync(
      path + "stats.json",
      JSON.stringify(characterFiles.stats)
    );
    await FileSystem.writeAsStringAsync(
      path + "spells.json",
      JSON.stringify(characterFiles.spells)
    );
    setPage("done");
    //console.log(await FileSystem.readAsStringAsync(path + "stats.json"));
  };

  return (
    <View style={{ width: "100%" }}>
      {loaded ? (
        <Wrapper>
          <Input
            label={`Class:`}
            onChangeText={(val) => {
              let newFiles = characterFiles;
              newFiles["stats"]["Info"]["Class"] = val;

              setCharacterFiles(newFiles);
            }}
          />
          <Input
            label={`SubClass:`}
            onChangeText={(val) => {
              let newFiles = characterFiles;
              newFiles["stats"]["Info"]["SubClass"] = val;

              setCharacterFiles(newFiles);
            }}
          />
          <Input
            label={`Background:`}
            onChangeText={(val) => {
              let newFiles = characterFiles;
              newFiles["stats"]["Info"]["Background"] = val;

              setCharacterFiles(newFiles);
            }}
          />
          <Input
            label={`Alignment:`}
            onChangeText={(val) => {
              let newFiles = characterFiles;
              newFiles["stats"]["Info"]["Alignment"] = val;

              setCharacterFiles(newFiles);
            }}
          />
          <Input
            label={`Level:`}
            onChangeText={(val) => {
              let newFiles = characterFiles;
              newFiles["stats"]["Info"]["Level"] = val;

              setCharacterFiles(newFiles);
            }}
          />
          <Input
            label={`Player Name:`}
            onChangeText={(val) => {
              let newFiles = characterFiles;
              newFiles["stats"]["Names"]["Player"] = val;

              setCharacterFiles(newFiles);
            }}
          />
          <Input
            label={`Strength:`}
            onChangeText={(val) => {
              let newFiles = characterFiles;
              newFiles["stats"]["Base Stats"]["Strength"] = val;

              setCharacterFiles(newFiles);
            }}
          />
          <Input
            label={`Dexterity:`}
            onChangeText={(val) => {
              let newFiles = characterFiles;
              newFiles["stats"]["Base Stats"]["Dexterity"] = val;

              setCharacterFiles(newFiles);
            }}
          />
          <Input
            label={`Constitution:`}
            onChangeText={(val) => {
              let newFiles = characterFiles;
              newFiles["stats"]["Base Stats"]["Constitution"] = val;

              setCharacterFiles(newFiles);
            }}
          />
          <Input
            label={`Intelligence:`}
            onChangeText={(val) => {
              let newFiles = characterFiles;
              newFiles["stats"]["Base Stats"]["Intelligence"] = val;

              setCharacterFiles(newFiles);
            }}
          />
          <Input
            label={`Wisdom:`}
            onChangeText={(val) => {
              let newFiles = characterFiles;
              newFiles["stats"]["Base Stats"]["Wisdom"] = val;

              setCharacterFiles(newFiles);
            }}
          />
          <Input
            label={`Charisma:`}
            onChangeText={(val) => {
              let newFiles = characterFiles;
              newFiles["stats"]["Base Stats"]["Charisma"] = val;

              setCharacterFiles(newFiles);
            }}
          />
          <AbilityInput
            group="Strength"
            ability="Athelitcs"
            files={characterFiles}
            setFiles={setCharacterFiles}
          />
          <AbilityInput
            group="Dexterity"
            ability="Acrobatics"
            files={characterFiles}
            setFiles={setCharacterFiles}
          />
          <AbilityInput
            group="Dexterity"
            ability="Sleight Of Hand"
            files={characterFiles}
            setFiles={setCharacterFiles}
          />
          <AbilityInput
            group="Dexterity"
            ability="Stealth"
            files={characterFiles}
            setFiles={setCharacterFiles}
          />
          <AbilityInput
            group="Intelligence"
            ability="Arcana"
            files={characterFiles}
            setFiles={setCharacterFiles}
          />
          <AbilityInput
            group="Intelligence"
            ability="History"
            files={characterFiles}
            setFiles={setCharacterFiles}
          />
          <AbilityInput
            group="Intelligence"
            ability="Investigation"
            files={characterFiles}
            setFiles={setCharacterFiles}
          />
          <AbilityInput
            group="Intelligence"
            ability="Nature"
            files={characterFiles}
            setFiles={setCharacterFiles}
          />
          <AbilityInput
            group="Intelligence"
            ability="Religion"
            files={characterFiles}
            setFiles={setCharacterFiles}
          />
          <AbilityInput
            group="Wisdom"
            ability="Animal Handling"
            files={characterFiles}
            setFiles={setCharacterFiles}
          />
          <AbilityInput
            group="Wisdom"
            ability="Insight"
            files={characterFiles}
            setFiles={setCharacterFiles}
          />
          <AbilityInput
            group="Wisdom"
            ability="Medicine"
            files={characterFiles}
            setFiles={setCharacterFiles}
          />
          <AbilityInput
            group="Wisdom"
            ability="Perception"
            files={characterFiles}
            setFiles={setCharacterFiles}
          />
          <AbilityInput
            group="Wisdom"
            ability="Survival"
            files={characterFiles}
            setFiles={setCharacterFiles}
          />
          <AbilityInput
            group="Charisma"
            ability="Deception"
            files={characterFiles}
            setFiles={setCharacterFiles}
          />
          <AbilityInput
            group="Charisma"
            ability="Intimidation"
            files={characterFiles}
            setFiles={setCharacterFiles}
          />
          <AbilityInput
            group="Charisma"
            ability="Performance"
            files={characterFiles}
            setFiles={setCharacterFiles}
          />
          <AbilityInput
            group="Charisma"
            ability="Persuasion"
            files={characterFiles}
            setFiles={setCharacterFiles}
          />
          <SavingThrowProfficiencies
            files={characterFiles}
            setFiles={setCharacterFiles}
          />
          <Input
            label={`Passive Perception Bonus`}
            onChangeText={(val) => {
              let newFiles = characterFiles;
              newFiles["stats"]["Passives"]["Perception"] = val;

              setCharacterFiles(newFiles);
            }}
          />
          <Input
            label={`Passive Insight Bonus`}
            onChangeText={(val) => {
              let newFiles = characterFiles;
              newFiles["stats"]["Passives"]["Insight"] = val;

              setCharacterFiles(newFiles);
            }}
          />
          <Input
            label={`Passive Investigation Bonus`}
            onChangeText={(val) => {
              let newFiles = characterFiles;
              newFiles["stats"]["Passives"]["Investigation"] = val;

              setCharacterFiles(newFiles);
            }}
          />
          <Input
            label={`Dark Vision`}
            onChangeText={(val) => {
              let newFiles = characterFiles;
              newFiles["stats"]["Passives"]["Dark Vision"] = val;

              setCharacterFiles(newFiles);
            }}
          />
          <Input
            label={`Speed `}
            onChangeText={(val) => {
              let newFiles = characterFiles;
              newFiles["stats"]["Passives"]["Speed"] = val;

              setCharacterFiles(newFiles);
            }}
          />
          <Input
            label={`Armor Class `}
            onChangeText={(val) => {
              let newFiles = characterFiles;
              newFiles["stats"]["Passives"]["Armor Class"] = val;

              setCharacterFiles(newFiles);
            }}
          />
          <Input
            label={`Initiative Bonus (on top of the DEX modifier)`}
            onChangeText={(val) => {
              let newFiles = characterFiles;
              newFiles["stats"]["Passives"]["Initiative Bonus"] = val;

              setCharacterFiles(newFiles);
            }}
          />
          <Input
            label={`Proficiency Bonus`}
            onChangeText={(val) => {
              let newFiles = characterFiles;
              newFiles["stats"]["Passives"]["Proficiency Bonus"] = val;

              setCharacterFiles(newFiles);
            }}
          />
          <HitDiceCreator files={characterFiles} setFiles={setCharacterFiles} />
          <Input
            label={`Spellcasting Class:`}
            onChangeText={(val) => {
              let newFiles = characterFiles;
              newFiles["spells"]["Metadata"]["Class"] = val;

              setCharacterFiles(newFiles);
            }}
          />
          <Input
            label={`Highest Level Spells you can cast:`}
            onChangeText={(val) => {
              let newFiles = characterFiles;
              newFiles["spells"]["Metadata"]["Spell Level"] = val;
              setCharacterFiles(newFiles);
            }}
            keyboardType="numeric"
          />
          <Input
            label={`Spellcasting Ability \n (for the love of God please type correctly):`}
            onChangeText={(val) => {
              let newFiles = characterFiles;
              newFiles["spells"]["Metadata"]["Spellcasting Ability"] = val;
              setCharacterFiles(newFiles);
            }}
          />
          <SpellSlots files={characterFiles} setFiles={setCharacterFiles} />
          <View>
            <Text style={{ fontWeight: "bold", fontSize: RFPercentage(5) }}>
              Thats all for now
            </Text>
            <Text style={{ fontWeight: "bold", fontSize: RFPercentage(3) }}>
              Rest of the information, like Your prepared spells, features and
              items you will be able to provide later
            </Text>
            <Button
              title="Complete"
              buttonStyle={{ margin: 10, backgroundColor: "#900" }}
              onPress={() => {
                saveChanges();
              }}
            />
          </View>
        </Wrapper>
      ) : (
        <ActivityIndicator />
      )}
    </View>
  );
};

export default Working;

const styles = StyleSheet.create({});

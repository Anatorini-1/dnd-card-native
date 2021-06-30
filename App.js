// ----React----
import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import CharacterHandler from "./components/CharacterHandler/CharacterHandler";

// ----- Other ------

// ---- My Components ------

import Nav from "./components/Navigation/MainNavbar";
import Tabs from "./components/Navigation/MainTabs";

export default function App() {
  const [index, setIndex] = useState("Info");
  const [showCharacterHandler, setShowCharacterHandler] = useState(true);
  const [characterData, setCharacterData] = useState({});
  console.log(showCharacterHandler);
  return (
    <View style={styles.container}>
      <Nav value={index} onChange={setIndex} />
      <Tabs
        characterData={characterData}
        fuckReact={setShowCharacterHandler}
        setCharacterData={setCharacterData}
        value={index}
      />
      <CharacterHandler
        show={showCharacterHandler}
        setShow={setShowCharacterHandler}
        setCharacterData={setCharacterData}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 0,
  },
});

/*
 const [inputValue,setInputValue] = useState("")
  const [textValue,setTextValue] = useState("")
  const saveDataToFile = async () => {
    const uri = FileSystem.documentDirectory
    await FileSystem.writeAsStringAsync(uri+"inputText",inputValue)
  }
  const readDataFromFile = async () => {
    const uri = FileSystem.documentDirectory
    const file = await FileSystem.readAsStringAsync(uri+"inputText")
    setTextValue(file)
  }
 */

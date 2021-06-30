import React from "react";
import { View, Text, StyleSheet, ScrollView, Keyboard } from "react-native";
import { Button } from "react-native-elements";
import Dial from "../Navigation/SpeedDialComp";
import SubPages from "../SubPages/Info";

export default function Info({ fuckReact, characterData, setCharacterData }) {
  const [index, setIndex] = React.useState("Hp");
  const [showManageButton, setShowManageButton] = React.useState("flex");
  let PageToShow = SubPages[index];
  Keyboard.addListener("keyboardDidShow", () => {
    setShowManageButton("none");
  });
  Keyboard.addListener("keyboardDidHide", () => {
    setShowManageButton("flex");
  });
  return (
    <View style={{ height: "100%", width: "100%" }}>
      <PageToShow
        setCharacterData={setCharacterData}
        characterData={characterData}
      />
      <Dial
        buttons={[
          { title: "Name", icon: "badge" },
          { title: "Hp", icon: "favorite" },
          { title: "Hit Dice", icon: "casino" },
          { title: "Death Saves", icon: "masks" },
        ]}
        page={index}
        setPage={setIndex}
      />
      <Button
        title="Manage Characters"
        containerStyle={{
          position: "absolute",
          bottom: 28,
          left: "10%",
          width: "60%",
          height: 50,
          display: showManageButton,
        }}
        buttonStyle={{
          display: showManageButton,
          height: "100%",
          backgroundColor: "#990000",
        }}
        onPress={() => fuckReact(true)}
      />
    </View>
  );
}

const style = StyleSheet.create({
  continer: {
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(200,0,0,0.3)",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
});

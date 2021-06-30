import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { TabView, Button } from "react-native-elements";
import IsEmpty from "is-empty-obj";
import Pages from "../MainPages/MainPages";

function MainTabs({
  value,
  onChange,
  fuckReact,
  characterData,
  setCharacterData,
}) {
  const PageToDisplay = Pages[value];

  return (
    <View style={style.container}>
      {JSON.stringify(characterData).length < 10 ? (
        <>
          <Text
            style={{
              width: "100%",
              textAlign: "center",
              paddingTop: 100,
              fontWeight: "bold",
              fontSize: 30,
            }}
          >
            Please Select A Character
          </Text>
          <Button
            raised
            title="Manage Characters"
            containerStyle={{
              position: "absolute",
              bottom: 28,
              left: "20%",
              width: "60%",
              height: 50,
            }}
            buttonStyle={{ height: "100%", backgroundColor: "#990000" }}
            onPress={() => fuckReact(true)}
          />
        </>
      ) : (
        <PageToDisplay
          setCharacterData={setCharacterData}
          characterData={characterData}
          fuckReact={fuckReact}
        />
      )}
    </View>
  );
}
const style = StyleSheet.create({
  container: {
    width: "100%",
    height: "90%",
    backgroundColor: "white",
  },
});
export default MainTabs;

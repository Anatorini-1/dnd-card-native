import React from "react";
import { StyleSheet, Text, View, Dimensions } from "react-native";
import { Overlay, Button, Icon } from "react-native-elements";
import ChooseCharacters from "./ChooseCharacter";
import CreateCharacters from "./CreateCharacter";
import Menu from "./Menu";
const CharacterHandler = ({ show, setShow, setCharacterData }) => {
  const [page, setPage] = React.useState("menu");

  const Pages = {
    choose: ChooseCharacters,
    create: CreateCharacters,
    menu: Menu,
  };
  const PageToShow = Pages[page];
  return (
    <Overlay isVisible={show} animationType="fade">
      <View style={styles.container}>
        <PageToShow
          setPage={setPage}
          setShow={setShow}
          setCharacterData={setCharacterData}
        />
      </View>
    </Overlay>
  );
};

export default CharacterHandler;

const styles = StyleSheet.create({
  container: {
    width: Dimensions.get("window").width - 50,
    height: Dimensions.get("window").height - 80,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  btnContainerStyle: {
    width: "80%",
    margin: 10,
  },
  btnStyle: {
    backgroundColor: "#900",
  },
});

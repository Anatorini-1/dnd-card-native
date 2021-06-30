import React from "react";
import { StyleSheet, Text, View, Dimensions } from "react-native";
import { Icon, Button } from "react-native-elements";
const Menu = ({ setShow, setPage }) => {
  return (
    <>
      <Icon
        size={100}
        name="face"
        type="material"
        style={{ marginBottom: 40 }}
      />
      <Button
        title="Pick/Swap Characters"
        containerStyle={styles.btnContainerStyle}
        buttonStyle={styles.btnStyle}
        onPress={() => {
          setPage("choose");
        }}
      />
      <Button
        title="Create a New Character"
        containerStyle={styles.btnContainerStyle}
        buttonStyle={styles.btnStyle}
        onPress={() => {
          setPage("create");
        }}
      />
      <Button
        disabled
        title="Export A Character"
        containerStyle={styles.btnContainerStyle}
        buttonStyle={styles.btnStyle}
      />
      <Button
        disabled
        title="Import A Character"
        containerStyle={styles.btnContainerStyle}
        buttonStyle={styles.btnStyle}
      />
      <Button
        icon={<Icon type="material" name="close" />}
        containerStyle={{ position: "absolute", top: 10, right: 10 }}
        buttonStyle={{
          borderColor: "#900",
          borderWidth: 2,
        }}
        type="outline"
        onPress={() => setShow(false)}
      />
    </>
  );
};

export default Menu;

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

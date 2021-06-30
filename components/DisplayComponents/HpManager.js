import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Button, Icon, Input } from "react-native-elements";
import { RFPercentage } from "react-native-responsive-fontsize";
const HpManager = ({ setCharacterData, characterData, field }) => {
  const [inputVal, setInputVal] = React.useState("1");
  return (
    <>
      <View style={styles.container}>
        <Text style={styles.text}>{field}</Text>
        <View style={styles.secondaryContainer}>
          <Icon
            type="font-awesome-5"
            style={styles.iconLeft}
            size={20}
            name="plus"
          />

          <Input
            containerStyle={{
              width: "30%",
              height: "5%",
            }}
            inputContainerStyle={{ borderColor: "transparent" }}
            inputStyle={{ ...styles.input }}
            keyboardType="number-pad"
            value={inputVal}
            onChangeText={(e) => setInputVal(e)}
          />

          <Icon
            type="font-awesome-5"
            style={styles.iconRight}
            name="minus"
            size={20}
          />
        </View>
      </View>
    </>
  );
};

export default HpManager;

const styles = StyleSheet.create({
  input: {
    borderColor: "black",
    borderWidth: 4,
    borderStyle: "solid",
    borderRadius: 3,
    height: 20,
    top: "25%",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: RFPercentage(2),
  },
  iconLeft: { backgroundColor: "transparent", borderRadius: 5 },
  iconRight: { backgroundColor: "transparent", borderRadius: 5 },
  text: {
    flex: 1,
    justifyContent: "center",
    fontSize: RFPercentage(2),
    fontWeight: "bold",
    textAlign: "center",
  },
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderColor: "#600",
    borderWidth: 5,
    borderStyle: "solid",
    borderRadius: 10,
    width: "90%",
    left: "5%",
    margin: 2,
  },
  secondaryContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
});

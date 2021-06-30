import React from "react";
import { StyleSheet, Text, View, ActivityIndicator } from "react-native";
import { Image, Input } from "react-native-elements";
import { RFPercentage } from "react-native-responsive-fontsize";
const HitDiceCreator = ({ files, setFiles }) => {
  const [die, setDie] = React.useState(6);
  const [amount, setAmount] = React.useState(1);
  const updateFiles = () => {
    files["stats"]["Hit Dice"]["Type"] = `d${die}`;
    files["stats"]["Hit Dice"]["Max"] = `${amount}`;
    files["stats"]["Hit Dice"]["Left"] = `${amount}`;
    setFiles(files);
  };
  updateFiles();
  return (
    <View
      style={{
        width: "100%",
        height: "60%",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Text
        style={{
          fontWeight: "bold",
          fontSize: RFPercentage(4),
          marginBottom: 10,
        }}
      >
        Hit Dice
      </Text>
      <View style={{ flexDirection: "row" }}>
        <Image
          style={{
            width: 80,
            height: 80,
            borderColor: die == 6 ? "#900" : "transparent",
            borderWidth: 3,
            borderRadius: 5,
          }}
          source={require("../../../assets/hitDice/d6.png")}
          PlaceholderContent={<ActivityIndicator />}
          onPress={() => {
            setDie(6);
          }}
        />
        <Image
          style={{
            width: 80,
            height: 80,
            borderColor: die == 8 ? "#900" : "transparent",
            borderWidth: 3,
            borderRadius: 5,
          }}
          source={require("../../../assets/hitDice/d8.png")}
          PlaceholderContent={<ActivityIndicator />}
          onPress={() => {
            setDie(8);
          }}
        />
      </View>
      <View style={{ flexDirection: "row" }}>
        <Image
          style={{
            width: 80,
            height: 80,
            borderColor: die == 10 ? "#900" : "transparent",
            borderWidth: 3,
            borderRadius: 5,
          }}
          source={require("../../../assets/hitDice/d10.png")}
          PlaceholderContent={<ActivityIndicator />}
          onPress={() => {
            setDie(10);
          }}
        />
        <Image
          style={{
            width: 80,
            height: 80,
            borderColor: die == 12 ? "#900" : "transparent",
            borderWidth: 3,
            borderRadius: 5,
          }}
          source={require("../../../assets/hitDice/d12.png")}
          PlaceholderContent={<ActivityIndicator />}
          onPress={() => {
            setDie(12);
          }}
        />
      </View>
      <Input
        keyboardType="numeric"
        label="Amount"
        value={String(amount)}
        onChangeText={(t) => {
          setAmount(Number(t));
        }}
      />
    </View>
  );
};

export default HitDiceCreator;

const styles = StyleSheet.create({});

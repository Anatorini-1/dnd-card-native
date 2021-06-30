import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Input } from "react-native-elements/dist/input/Input";
import { RFPercentage } from "react-native-responsive-fontsize";

const SpellSlots = ({ files, setFiles }) => {
  const [s1, setS1] = React.useState("");
  const [s2, setS2] = React.useState("");
  const [s3, setS3] = React.useState("");
  const [s4, setS4] = React.useState("");
  const [s5, setS5] = React.useState("");
  const [s6, setS6] = React.useState("");
  const [s7, setS7] = React.useState("");
  const [s8, setS8] = React.useState("");
  const [s9, setS9] = React.useState("");
  const saveChanges = () => {
    files["spells"]["Spell Slots"]["1"]["Max"] = Number(s1) ?? 0;
    files["spells"]["Spell Slots"]["1"]["Left"] = Number(s1) ?? 0;
    files["spells"]["Spell Slots"]["2"]["Max"] = Number(s2) ?? 0;
    files["spells"]["Spell Slots"]["2"]["Left"] = Number(s2) ?? 0;
    files["spells"]["Spell Slots"]["3"]["Max"] = Number(s3) ?? 0;
    files["spells"]["Spell Slots"]["3"]["Left"] = Number(s3) ?? 0;
    files["spells"]["Spell Slots"]["4"]["Max"] = Number(s4) ?? 0;
    files["spells"]["Spell Slots"]["4"]["Left"] = Number(s4) ?? 0;
    files["spells"]["Spell Slots"]["5"]["Max"] = Number(s5) ?? 0;
    files["spells"]["Spell Slots"]["5"]["Left"] = Number(s5) ?? 0;
    files["spells"]["Spell Slots"]["6"]["Max"] = Number(s6) ?? 0;
    files["spells"]["Spell Slots"]["6"]["Left"] = Number(s6) ?? 0;
    files["spells"]["Spell Slots"]["7"]["Max"] = Number(s7) ?? 0;
    files["spells"]["Spell Slots"]["7"]["Left"] = Number(s7) ?? 0;
    files["spells"]["Spell Slots"]["8"]["Max"] = Number(s8) ?? 0;
    files["spells"]["Spell Slots"]["8"]["Left"] = Number(s8) ?? 0;
    files["spells"]["Spell Slots"]["9"]["Max"] = Number(s9) ?? 0;
    files["spells"]["Spell Slots"]["9"]["Left"] = Number(s9) ?? 0;
    setFiles(files);
  };
  saveChanges();
  return (
    <View
      style={{
        width: "100%",
        height: "70%",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "transparent",
      }}
    >
      <Text
        style={{
          fontWeight: "bold",
          fontSize: RFPercentage(4),
          marginBottom: 10,
          height: "10%",
        }}
      >
        Spell Slots
      </Text>
      <View
        style={{
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
        }}
      >
        <View
          style={{
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "row",
            width: "100%",
            margin: 5,
          }}
        >
          <View style={{ width: "33%", padding: 10 }}>
            <Input
              keyboardType="numeric"
              placeholder="Level 1"
              textAlign="center"
              containerStyle={{ margin: 0, height: 40 }}
              inputContainerStyle={{ borderBottomWidth: 0 }}
              value={String(s1)}
              onChangeText={(t) => setS1(Number(t))}
              inputStyle={{
                fontSize: RFPercentage(2),
                borderColor: "#900",
                borderStyle: "solid",
                borderWidth: 3,
              }}
            />
          </View>
          <View style={{ width: "33%", padding: 10 }}>
            <Input
              keyboardType="numeric"
              placeholder="Level 2"
              textAlign="center"
              containerStyle={{ margin: 0, height: 40 }}
              inputContainerStyle={{ borderBottomWidth: 0, margin: 0 }}
              value={String(s2)}
              onChangeText={(t) => setS2(Number(t))}
              inputStyle={{
                fontSize: RFPercentage(2),
                borderColor: "#900",
                borderStyle: "solid",
                borderWidth: 3,
              }}
            />
          </View>
          <View style={{ width: "33%", padding: 10 }}>
            <Input
              keyboardType="numeric"
              placeholder="Level 3"
              textAlign="center"
              containerStyle={{ margin: 0, height: 40 }}
              inputContainerStyle={{ borderBottomWidth: 0 }}
              value={String(s3)}
              onChangeText={(t) => setS3(Number(t))}
              inputStyle={{
                fontSize: RFPercentage(2),
                borderColor: "#900",
                borderStyle: "solid",
                borderWidth: 3,
              }}
            />
          </View>
        </View>
        <View
          style={{
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "row",
            width: "100%",
            margin: 5,
          }}
        >
          <View style={{ width: "33%", padding: 10 }}>
            <Input
              keyboardType="numeric"
              placeholder="Level 4"
              textAlign="center"
              containerStyle={{ margin: 0, height: 40 }}
              inputContainerStyle={{ borderBottomWidth: 0 }}
              value={String(s4)}
              onChangeText={(t) => setS4(Number(t))}
              inputStyle={{
                fontSize: RFPercentage(2),
                borderColor: "#900",
                borderStyle: "solid",
                borderWidth: 3,
              }}
            />
          </View>
          <View style={{ width: "33%", padding: 10 }}>
            <Input
              keyboardType="numeric"
              placeholder="Level 5"
              textAlign="center"
              containerStyle={{ margin: 0, height: 40 }}
              inputContainerStyle={{ borderBottomWidth: 0, margin: 0 }}
              value={String(s5)}
              onChangeText={(t) => setS5(Number(t))}
              inputStyle={{
                fontSize: RFPercentage(2),
                borderColor: "#900",
                borderStyle: "solid",
                borderWidth: 3,
              }}
            />
          </View>
          <View style={{ width: "33%", padding: 10 }}>
            <Input
              keyboardType="numeric"
              placeholder="Level 6"
              textAlign="center"
              containerStyle={{ margin: 0, height: 40 }}
              inputContainerStyle={{ borderBottomWidth: 0 }}
              value={String(s6)}
              onChangeText={(t) => setS6(Number(t))}
              inputStyle={{
                fontSize: RFPercentage(2),
                borderColor: "#900",
                borderStyle: "solid",
                borderWidth: 3,
              }}
            />
          </View>
        </View>
        <View
          style={{
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "row",
            width: "100%",
            margin: 5,
          }}
        >
          <View style={{ width: "33%", padding: 10 }}>
            <Input
              keyboardType="numeric"
              placeholder="Level 7"
              textAlign="center"
              containerStyle={{ margin: 0, height: 40 }}
              inputContainerStyle={{ borderBottomWidth: 0 }}
              value={String(s7)}
              onChangeText={(t) => setS7(Number(t))}
              inputStyle={{
                fontSize: RFPercentage(2),
                borderColor: "#900",
                borderStyle: "solid",
                borderWidth: 3,
              }}
            />
          </View>
          <View style={{ width: "33%", padding: 10 }}>
            <Input
              keyboardType="numeric"
              placeholder="Level 8"
              textAlign="center"
              containerStyle={{ margin: 0, height: 40 }}
              inputContainerStyle={{ borderBottomWidth: 0, margin: 0 }}
              value={String(s8)}
              onChangeText={(t) => setS8(Number(t))}
              inputStyle={{
                fontSize: RFPercentage(2),
                borderColor: "#900",
                borderStyle: "solid",
                borderWidth: 3,
              }}
            />
          </View>
          <View style={{ width: "33%", padding: 10 }}>
            <Input
              keyboardType="numeric"
              placeholder="Level 9"
              textAlign="center"
              containerStyle={{ margin: 0, height: 40 }}
              inputContainerStyle={{ borderBottomWidth: 0 }}
              value={String(s9)}
              onChangeText={(t) => setS9(Number(t))}
              inputStyle={{
                fontSize: RFPercentage(2),
                borderColor: "#900",
                borderStyle: "solid",
                borderWidth: 3,
              }}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

export default SpellSlots;

const styles = StyleSheet.create({});

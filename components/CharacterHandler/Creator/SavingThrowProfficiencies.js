import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Switch } from "react-native-elements";
import { RFPercentage } from "react-native-responsive-fontsize";
const SavingThrowProfficiencies = ({ files, setFiles }) => {
  const [Strength, setStrength] = React.useState(0);
  const [Dexterity, setDexterity] = React.useState(0);
  const [Constitution, setConstitution] = React.useState(0);
  const [Intelligence, setIntelligence] = React.useState(0);
  const [Wisdom, setWisdom] = React.useState(0);
  const [Charisma, setCharisma] = React.useState(0);
  const updateFile = () => {
    let stats = files["stats"];
    stats["Saving Throws"] = {
      Strength: Strength,
      Dexterity: Dexterity,
      Constitution: Constitution,
      Intelligence: Intelligence,
      Wisdom: Wisdom,
      Charisma: Charisma,
    };
  };
  return (
    <View style={{ alignItems: "center" }}>
      <Text
        style={{
          fontWeight: "bold",
          fontSize: RFPercentage(3),
          marginBottom: 20,
        }}
      >
        Saving Throw Profficiencies
      </Text>
      <View style={{ flexDirection: "row" }}>
        <View
          style={{
            fontWeight: "bold",
            backgroundColor: "transparent",
            justifyContent: "center",
            flexDirection: "row",
            alignItems: "center",
            margin: 5,
            padding: 10,
            borderColor: "#900",
            borderWidth: 2,
            borderStyle: "solid",
            borderRadius: 4,
          }}
        >
          <Text style={{ fontWeight: "bold" }}>Strength</Text>
          <Switch
            color="#900"
            thumbColor="#444"
            value={Strength}
            onValueChange={() => {
              setStrength(!Strength);
              updateFile();
            }}
          />
        </View>
        <View
          style={{
            fontWeight: "bold",
            backgroundColor: "transparent",
            justifyContent: "center",
            flexDirection: "row",
            alignItems: "center",
            margin: 5,
            padding: 10,
            borderColor: "#900",
            borderWidth: 2,
            borderStyle: "solid",
            borderRadius: 4,
          }}
        >
          <Text style={{ fontWeight: "bold" }}>Dexterity</Text>
          <Switch
            color="#900"
            thumbColor="#444"
            value={Dexterity}
            onValueChange={() => {
              setDexterity(!Dexterity);
              updateFile();
            }}
          />
        </View>
      </View>

      <View
        style={{
          fontWeight: "bold",
          backgroundColor: "transparent",
          justifyContent: "center",
          flexDirection: "row",
          alignItems: "center",
          margin: 5,
          padding: 10,
          borderColor: "#900",
          borderWidth: 2,
          borderStyle: "solid",
          borderRadius: 4,
        }}
      >
        <Text style={{ fontWeight: "bold" }}>Constitution</Text>
        <Switch
          color="#900"
          thumbColor="#444"
          value={Constitution}
          onValueChange={() => {
            setConstitution(!Constitution);
            updateFile();
          }}
        />
      </View>
      <View
        style={{
          fontWeight: "bold",
          backgroundColor: "transparent",
          justifyContent: "center",
          flexDirection: "row",
          alignItems: "center",
          margin: 5,
          padding: 10,
          borderColor: "#900",
          borderWidth: 2,
          borderStyle: "solid",
          borderRadius: 4,
        }}
      >
        <Text style={{ fontWeight: "bold" }}>Intelligence</Text>
        <Switch
          color="#900"
          thumbColor="#444"
          value={Intelligence}
          onValueChange={() => {
            setIntelligence(!Intelligence);
            updateFile();
          }}
        />
      </View>

      <View style={{ flexDirection: "row" }}>
        <View
          style={{
            fontWeight: "bold",
            backgroundColor: "transparent",
            justifyContent: "center",
            flexDirection: "row",
            alignItems: "center",
            margin: 5,
            padding: 10,
            borderColor: "#900",
            borderWidth: 2,
            borderStyle: "solid",
            borderRadius: 4,
          }}
        >
          <Text style={{ fontWeight: "bold" }}>Wisdom</Text>
          <Switch
            color="#900"
            thumbColor="#444"
            value={Wisdom}
            onValueChange={() => {
              setWisdom(!Wisdom);
              updateFile();
            }}
          />
        </View>
        <View
          style={{
            fontWeight: "bold",
            backgroundColor: "transparent",
            justifyContent: "center",
            flexDirection: "row",
            alignItems: "center",
            margin: 5,
            padding: 10,
            borderColor: "#900",
            borderWidth: 2,
            borderStyle: "solid",
            borderRadius: 4,
          }}
        >
          <Text style={{ fontWeight: "bold" }}>Charisma</Text>
          <Switch
            color="#900"
            thumbColor="#444"
            value={Charisma}
            onValueChange={() => {
              setCharisma(!Charisma);
              updateFile();
            }}
          />
        </View>
      </View>
    </View>
  );
};

export default SavingThrowProfficiencies;

const styles = StyleSheet.create({});

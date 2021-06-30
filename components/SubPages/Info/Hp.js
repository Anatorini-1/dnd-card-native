import React from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import Container from "../../DisplayComponents/StandardContainer";
import LabeledField from "../../DisplayComponents/LabeledField";
import { Icon, Button, Input } from "react-native-elements";
import { RFPercentage } from "react-native-responsive-fontsize";
import HpManager from "../../DisplayComponents/HpManager";
const Hp = ({ characterData, setCharacterData }) => {
  return (
    <ScrollView style={styles.container}>
      <Button
        buttonStyle={{ width: "80%", marginLeft: "10%", marginTop: 30 }}
        title="HP"
        titleStyle={{ textAlign: "center" }}
        disabled
        disabledStyle={{
          backgroundColor: "#fff",
          borderColor: "#900",
          borderStyle: "solid",
          borderWidth: 4,
          borderRadius: 10,
        }}
        icon={<Icon type="material" name="favorite" />}
      />
      <Container>
        <LabeledField label="Max" text={characterData["stats"]["Hp"]["Max"]} />
        <LabeledField
          label="Current"
          text={characterData["stats"]["Hp"]["Current"]}
        />
        <LabeledField
          label="Temporary"
          text={characterData["stats"]["Hp"]["Temporary"]}
        />
      </Container>
      <HpManager field="Max" />
      <HpManager field="Current" />
      <HpManager field="Temporary" />
    </ScrollView>
  );
};

export default Hp;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "column",
    marginBottom: 100,
  },
});

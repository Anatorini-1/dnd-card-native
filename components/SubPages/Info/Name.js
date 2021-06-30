import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Icon, Button } from "react-native-elements";
import Container from "../../DisplayComponents/StandardContainer";
import IsEmpty from "is-empty-obj";
import LabeledField from "../../DisplayComponents/LabeledField";
import Lib, { validateStats } from "../../Utility/Utility";
const Name = ({ characterData }) => {
  //console.log(characterData);

  return (
    <View>
      <Button
        buttonStyle={{ width: "80%", marginLeft: "10%", marginTop: 30 }}
        title="Basic Info"
        titleStyle={{ textAlign: "center", marginLeft: 10 }}
        disabled
        disabledStyle={{
          backgroundColor: "#fff",
          borderColor: "#900",
          borderStyle: "solid",
          borderWidth: 4,
          borderRadius: 10,
        }}
        icon={<Icon type="material" name="badge" />}
      />
      <Container>
        <LabeledField
          label="Player"
          text={characterData["stats"]["Names"]["Player"]}
        />
        <LabeledField
          label="Character"
          text={characterData["stats"]["Names"]["Character"]}
        />
        <LabeledField
          label="Class"
          text={characterData["stats"]["Info"]["Class"]}
        />
        <LabeledField
          label="Subclass"
          text={characterData["stats"]["Info"]["SubClass"]}
        />
        <LabeledField
          label="Level"
          text={characterData["stats"]["Info"]["Level"]}
        />
        <LabeledField
          label="Background"
          text={characterData["stats"]["Info"]["Background"]}
        />
        <LabeledField
          label="Alignment"
          text={characterData["stats"]["Info"]["Alignment"]}
        />
      </Container>
    </View>
  );
};

export default Name;

const styles = StyleSheet.create({});

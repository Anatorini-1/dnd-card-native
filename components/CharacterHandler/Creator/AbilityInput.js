import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Button, ButtonGroup, Input } from "react-native-elements";
import { RFPercentage } from "react-native-responsive-fontsize";

const AbilityInput = ({ group, ability, files, setFiles }) => {
  const [dummyState, setDummyState] = React.useState(0);
  React.useEffect(() => {}, [files]);
  return (
    <>
      <Text
        style={{
          fontWeight: "bold",
          fontSize: RFPercentage(4),
          marginBottom: 10,
        }}
      >
        {ability}
      </Text>
      <ButtonGroup
        buttons={[
          <Button
            buttonStyle={{
              backgroundColor:
                files["stats"]["Abilities"][group][ability]["proficiency"] ==
                0.5
                  ? "#900"
                  : "transparent",
            }}
            title="Half-Profficient"
            titleStyle={{
              color:
                files["stats"]["Abilities"][group][ability]["proficiency"] ==
                0.5
                  ? "white"
                  : "#900",
              fontSize: RFPercentage(2),
            }}
            onPress={() => {
              if (
                files["stats"]["Abilities"][group][ability]["proficiency"] ==
                0.5
              ) {
                files["stats"]["Abilities"][group][ability]["proficiency"] = 0;
              } else
                files["stats"]["Abilities"][group][ability][
                  "proficiency"
                ] = 0.5;
              setFiles(files);
              setDummyState(!dummyState);
            }}
          />,
          <Button
            buttonStyle={{
              backgroundColor:
                files["stats"]["Abilities"][group][ability]["proficiency"] == 1
                  ? "#900"
                  : "transparent",
            }}
            title="Profficiency"
            titleStyle={{
              color:
                files["stats"]["Abilities"][group][ability]["proficiency"] == 1
                  ? "white"
                  : "#900",
              fontSize: RFPercentage(2),
            }}
            onPress={() => {
              if (
                files["stats"]["Abilities"][group][ability]["proficiency"] == 1
              ) {
                files["stats"]["Abilities"][group][ability]["proficiency"] = 0;
              } else
                files["stats"]["Abilities"][group][ability]["proficiency"] = 1;
              setFiles(files);
              setDummyState(!dummyState);
            }}
          />,
          <Button
            buttonStyle={{
              backgroundColor:
                files["stats"]["Abilities"][group][ability]["expertise"] == 1
                  ? "#900"
                  : "transparent",
            }}
            title="Expertise"
            titleStyle={{
              color:
                files["stats"]["Abilities"][group][ability]["expertise"] == 1
                  ? "white"
                  : "#900",
              fontSize: RFPercentage(2),
            }}
            onPress={() => {
              if (
                files["stats"]["Abilities"][group][ability]["expertise"] == 1
              ) {
                files["stats"]["Abilities"][group][ability]["expertise"] = 0;
              } else {
                files["stats"]["Abilities"][group][ability]["proficiency"] = 1;
                files["stats"]["Abilities"][group][ability]["expertise"] = 1;
              }

              setFiles(files);
              setDummyState(!dummyState);
            }}
          />,
        ]}
      />
      <Input
        label="Bonus"
        onChangeText={(t) => {
          files["stats"]["Abilities"][group][ability]["bonus"] = Number(t);
          setFiles(files);
          setDummyState(!dummyState);
        }}
        keyboardType="numeric"
      />
    </>
  );
};

export default AbilityInput;

const styles = StyleSheet.create({});

import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Input } from "react-native-elements";
const InputToJson = ({
  keyboardType,
  placeholder,
  jsonPath,
  onChangeText,
  label,
}) => {
  return (
    <Input
      key={label}
      onChangeText={onChangeText}
      autoFocus={true}
      style={styles.input}
      defaultValue=""
      clearTextOnFocus={true}
      label={label}
      keyboardType={keyboardType}
    ></Input>
  );
};

export default InputToJson;

const styles = StyleSheet.create({
  input: {},
});

import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Button, Icon } from "react-native-elements";
const InputsWrapper = ({ children }) => {
  const [kid, setKid] = React.useState(0);

  return (
    <View style={styles.container}>
      {children[kid] ?? children}
      <View style={styles.actions}>
        <Button
          buttonStyle={styles.actionBtn}
          icon={<Icon type="material" name="arrow-back" />}
          type="outline"
          onPress={() => {
            setKid(kid - 1 < 0 ? React.Children.count(children) - 1 : kid - 1);
          }}
        />
        <Text style={{ fontWeight: "bold" }}>{`${
          kid + 1
        } / ${React.Children.count(children)}`}</Text>
        <Button
          buttonStyle={styles.actionBtn}
          icon={<Icon type="material" name="arrow-forward" />}
          type="outline"
          onPress={() => {
            setKid(kid + 1 == React.Children.count(children) ? kid : kid + 1);
          }}
        />
      </View>
    </View>
  );
};

export default InputsWrapper;

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
  actions: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  actionBtn: {
    borderColor: "#900",
    borderWidth: 3,
    margin: 20,
    borderRadius: 25,
  },
});

import React from "react";
import { Tab, Icon, Button } from "react-native-elements";
import { View, StyleSheet } from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";
function MainNavbar({ value, onChange }) {
  return (
    <View style={style.container}>
      <Button
        icon={<Icon size={30} name="face" type="material" />}
        titleStyle={style.titleStyle}
        title="Info"
        containerStyle={{
          ...style.containerStyle,
          borderBottomWidth: value == "Info" ? 10 : 0,
        }}
        type="clear"
        iconPosition="top"
        onPress={() => {
          onChange("Info");
        }}
      />
      <Button
        icon={<Icon size={28} name="stats-chart-outline" type="ionicon" />}
        titleStyle={style.titleStyle}
        title="Stats"
        containerStyle={{
          ...style.containerStyle,
          borderBottomWidth: value == "Stats" ? 10 : 0,
        }}
        type="clear"
        iconPosition="top"
        onPress={() => {
          onChange("Stats");
        }}
      />

      <Button
        icon={<Icon size={30} name="handyman" type="material" />}
        titleStyle={style.titleStyle}
        title="Items"
        containerStyle={{
          ...style.containerStyle,
          borderBottomWidth: value == "Items" ? 10 : 0,
        }}
        type="clear"
        iconPosition="top"
        onPress={() => {
          onChange("Items");
        }}
      />
      <Button
        icon={<Icon size={30} name="auto-fix-high" type="material" />}
        titleStyle={style.titleStyle}
        title="Spells"
        containerStyle={{
          ...style.containerStyle,
          borderBottomWidth: value == "Spells" ? 10 : 0,
        }}
        type="clear"
        iconPosition="top"
        onPress={() => {
          onChange("Spells");
        }}
      />
    </View>
  );
}
const style = StyleSheet.create({
  container: {
    width: "100%",
    height: "14%",
    paddingTop: 30,
    backgroundColor: "white",
    flexDirection: "row",
  },
  titleStyle: {
    fontSize: RFPercentage(2),
    color: "#880000",
  },
  containerStyle: {
    backgroundColor: "white",
    height: "100%",
    borderRadius: 0,
    flex: 1,
    borderColor: "#990000",
    borderStyle: "solid",
  },
});
export default MainNavbar;

import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { SpeedDial } from "react-native-elements";
const SpeedDialComp = ({ buttons, page, setPage }) => {
  const [open, setOpen] = React.useState(false);
  let actions = [];
  for (let btn in buttons) {
    let button = buttons[btn];
    actions.push(
      <SpeedDial.Action
        key={button.title}
        icon={{ name: button.icon, color: "#f00" }}
        title={button.title}
        color="#fff"
        onPress={() => {
          let target = String(button.title);
          target = target.replace(" ", "");
          setPage(target);
        }}
        buttonStyle={{ backgroundColor: "white", borderRadius: 30 }}
      />
    );
  }

  return (
    <SpeedDial
      isOpen={open}
      icon={{ name: "menu", color: "#900" }}
      size="large"
      openIcon={{ name: "close", color: "#900" }}
      onOpen={() => setOpen(!open)}
      onClose={() => setOpen(!open)}
      overlayColor="rgba(0,0,0,0.3)"
      style={{ position: "absolute", right: 0, bottom: 10, zIndex: 1000 }}
      type="outline"
      raised
      buttonStyle={{ backgroundColor: "white", borderRadius: 30 }}
    >
      {actions}
    </SpeedDial>
  );
};

export default SpeedDialComp;

const styles = StyleSheet.create({});

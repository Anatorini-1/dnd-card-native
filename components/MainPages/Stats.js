import React, { useState } from "react";
import { View, Text } from "react-native";
import { Button, SpeedDial } from "react-native-elements";
export default function Stats() {
  const [open, setOpen] = useState(false);
  return (
    <View>
      <Text>{`Dial is ${open}`}</Text>
      <Button
        title="open dial"
        onPress={() => {
          setOpen(!open);
        }}
      />
      <SpeedDial
        isOpen={open}
        icon={{ name: "edit", color: "#fff" }}
        openIcon={{ name: "close", color: "#fff" }}
        onOpen={() => setOpen(!open)}
        onClose={() => setOpen(!open)}
      >
        <SpeedDial.Action
          icon={{ name: "add", color: "#fff" }}
          title="Add"
          onPress={() => console.log("Add Something")}
        />
      </SpeedDial>
    </View>
  );
}

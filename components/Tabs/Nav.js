import React from "react";
import { Tab, Icon } from "react-native-elements";
import { Text, StyleSheet, View } from "react-native";
import { RFPercentage, RfPercentage } from "react-native-responsive-fontsize";
function Nav({ index, setIndex }) {
  const disables = [
    index == 0 ? true : false,
    index == 1 ? true : false,
    index == 2 ? true : false,
    index == 3 ? true : false,
  ];
  let x = 5;
  return (
    <View style={{ width: "100%", height: 100 }}>
      <Tab
        style={{
          marginTop: 10,
          borderStyle: "solid",
          borderWidth: 10,
          borderColor: "black",
        }}
        indicatorStyle={{ backgroundColor: "#990000" }}
        variant="default"
        onChange={setIndex}
        value={index}
      >
        <Tab.Item
          buttonStyle={{ backgroundColor: "rgb(150,0,0)" }}
          containerStyle={styles.tabButton}
          titleStyle={styles.tabItemLabel}
          title="Info"
          icon={<Icon size={30} name="face" type="material" />}
          iconContainerStyle={{ backgroundColor: "green" }}
          disabled={disables[0]}
        />
        <Tab.Item
          buttonStyle={{ backgroundColor: "rgb(150,0,0)" }}
          containerStyle={styles.tabButton}
          titleStyle={styles.tabItemLabel}
          title="Stats"
          icon={<Icon size={28} name="stats-chart-outline" type="ionicon" />}
          iconContainerStyle={{ backgroundColor: "green" }}
          disabled={disables[1]}
        />
        <Tab.Item
          buttonStyle={{ backgroundColor: "rgb(150,0,0)" }}
          containerStyle={styles.tabButton}
          titleStyle={styles.tabItemLabel}
          title="Items"
          icon={<Icon size={30} name="handyman" type="material" />}
          iconContainerStyle={{ paddingTop: 10, height: 70 }}
          disabled={disables[2]}
        />
        <Tab.Item
          buttonStyle={{ backgroundColor: "rgb(150,0,0)" }}
          containerStyle={styles.tabButton}
          titleStyle={styles.tabItemLabel}
          title="Spells"
          icon={<Icon size={30} name="auto-fix-high" type="material" />}
          iconContainerStyle={{ paddingTop: 10 }}
          disabled={disables[3]}
        />
      </Tab>
    </View>
  );
}

const styles = StyleSheet.create({
  tabItemLabel: {
    color: "white",
    paddingTop: 10,
    fontSize: RFPercentage(1.5),
  },
  tabButton: {
    backgroundColor: "rgb(150,0,0)",
    paddingTop: RFPercentage(3.5),
    height: "100%",
  },
});

export default Nav;

import React from "react";
import { TabView } from "react-native-elements";
import { Text, StyleSheet } from "react-native";

import Info from "./Tabs/InfoTab";
import Items from "./Tabs/ItemsTab";
import Spells from "./Tabs/SpellsTab";
import Stats from "./Tabs/StatsTab";

function Tabs({ index, setIndex }) {
  return (
    <TabView value={index - 1.5} style={{ flex: 1 }}>
      <TabView.Item style={style.tabItem}>
        <Info />
      </TabView.Item>
      <TabView.Item style={style.tabItem}>
        <Stats />
      </TabView.Item>
      <TabView.Item style={style.tabItem}>
        <Items />
      </TabView.Item>
      <TabView.Item style={style.tabItem}>
        <Spells />
      </TabView.Item>
    </TabView>
  );
}

const style = StyleSheet.create({
  tabItem: {
    flex: 1,
    backgroundColor: "#00F",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 0,
  },
});

export default Tabs;

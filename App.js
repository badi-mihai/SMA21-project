import React from "react";
import { View, Text, StatusBar } from "react-native";

import RootNavigator from "./navigation";

export default function App() {
  return (
    <>
      <StatusBar hidden={true}></StatusBar>
      <RootNavigator />
    </>
  );
}

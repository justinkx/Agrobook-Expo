import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";

import AppNavigation from "./Navigation/AppNavigation";

export default App = () => {
  return (
    <SafeAreaProvider>
      <StatusBar style="auto" />
      <AppNavigation />
    </SafeAreaProvider>
  );
};

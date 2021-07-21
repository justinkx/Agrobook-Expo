import React, { useState, useEffect } from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import AppLoading from "expo-app-loading";
import { ApolloProvider } from "@apollo/client";

import AppNavigation from "./Navigation/AppNavigation";
import appoloClientInit from "./Apollo/AppoloClient";

export default App = () => {
  const [client, setClient] = useState(null);
  const [persistor, setPersistor] = useState(null);

  useEffect(() => {
    async function init() {
      try {
        const { appoloClient, newPersistor } = await appoloClientInit();
        setClient(appoloClient);
        setPersistor(newPersistor);
      } catch {}
    }
    init();
  }, []);

  if (!client) {
    return <AppLoading />;
  }

  return (
    <ApolloProvider client={client}>
      <SafeAreaProvider>
        <StatusBar style="auto" />
        <AppNavigation />
      </SafeAreaProvider>
    </ApolloProvider>
  );
};

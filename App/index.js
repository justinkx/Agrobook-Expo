import { SafeAreaProvider } from "react-native-safe-area-context";
import AppLoading from "expo-app-loading";

import AppNavigation from "./Navigation/AppNavigation";

export default App = () => {
  return (
    <SafeAreaProvider>
      <AppNavigation />
    </SafeAreaProvider>
  );
};

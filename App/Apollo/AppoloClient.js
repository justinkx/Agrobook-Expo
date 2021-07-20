import { ApolloClient, InMemoryCache } from "@apollo/client";
import { CachePersistor, AsyncStorageWrapper } from "apollo3-cache-persist";
import AsyncStorage from "@react-native-async-storage/async-storage";

async function appoloClientInit() {
  const cache = new InMemoryCache();

  let newPersistor = new CachePersistor({
    cache,
    storage: new AsyncStorageWrapper(AsyncStorage),
    debug: __DEV__,
    trigger: "write",
  });
  await newPersistor.restore();
  const appoloClient = new ApolloClient({
    uri: "https://agrobook-backoffice.herokuapp.com/graphql",
    cache,
  });
  return { appoloClient, newPersistor };
}

export default appoloClientInit;

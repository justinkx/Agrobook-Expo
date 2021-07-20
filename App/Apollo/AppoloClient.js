import { ApolloClient, InMemoryCache } from "@apollo/client";
import { CachePersistor, AsyncStorageWrapper } from "apollo3-cache-persist";
import FsStorage from "redux-persist-expo-fs-storage";

async function appoloClientInit() {
  const cache = new InMemoryCache();

  let newPersistor = new CachePersistor({
    cache,
    storage: new AsyncStorageWrapper(FsStorage()),
    debug: __DEV__,
  });
  await newPersistor.restore();
  const appoloClient = new ApolloClient({
    uri: "https://agrobook-backoffice.herokuapp.com/graphql",
    cache,
  });
  return { appoloClient, newPersistor };
}

export default appoloClientInit;

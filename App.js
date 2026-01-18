import { ApolloProvider } from "@apollo/client/react";
import { NativeRouter } from "react-router-native";
import { StatusBar } from "expo-status-bar";
import Main from "./src/Main";
import createApolloClient from "./src/utils/apolloClient";
import AuthStorage from "./src/utils/authStorage";
import AuthStorageContext from "./src/contexts/AuthStorageContext";
import { PaperProvider } from "react-native-paper";

const authStorage = new AuthStorage();
const apolloClient = createApolloClient(authStorage);

export default function App() {
  return (
    <PaperProvider>
      <AuthStorageContext.Provider value={authStorage}>
        <ApolloProvider client={apolloClient}>
          <NativeRouter>
            <StatusBar style="auto" />
            <Main />
          </NativeRouter>
        </ApolloProvider>
      </AuthStorageContext.Provider>
    </PaperProvider>
  );
}

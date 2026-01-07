import React from "react";
import RepositoryList from "./components/RepositoryList";
import { SafeAreaProvider } from "react-native-safe-area-context";

const Main = () => {
  return (
    <SafeAreaProvider>
      <RepositoryList />
    </SafeAreaProvider>
  );
};

export default Main;

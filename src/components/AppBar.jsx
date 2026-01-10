import { View, StyleSheet, Text, Pressable } from "react-native";
import Constants from "expo-constants";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#24292e",
    paddingTop: Constants.statusBarHeight,
    paddingHorizontal: 16,
  },
  tabText: {
    color: "white",
    fontSize: 18,
    fontWeight: "700",
  },
  button: {
    paddingVertical: 10,
  },
});

const AppBar = () => {
  console.log("AppBar rendered");
  return (
    <View style={styles.container}>
      <Pressable style={styles.button}>
        <Text style={styles.tabText}>Repositories</Text>
      </Pressable>
    </View>
  );
};

export default AppBar;

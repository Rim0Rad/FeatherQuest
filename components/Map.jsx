import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

export default Map = () => {
  return (
    <View styles={styles.container}>
      <Text>Map page can go here...</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

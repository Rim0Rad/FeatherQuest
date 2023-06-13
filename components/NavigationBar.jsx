import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";

export default NavigationBar = ({ navigation }) => {
  return (
    <View style={styles.navContainer}>
      <View style={styles.navBar}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("SightingList");
          }}
          title="SightingList"
          style={styles.imageContainer}
        >
          <Image
            source={require("../assets/HomeButton.png")}
            style={styles.image}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Species");
          }}
          title="Species"
          style={styles.imageContainer}
        >
          <Image
            source={require("../assets/SpeciesButton.png")}
            style={styles.image}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Sighting");
          }}
          title="Sighting"
          style={styles.imageContainer}
        >
          <Image
            source={require("../assets/PostSightingButton.png")}
            style={styles.image}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Maps");
          }}
          title="Maps"
          style={styles.imageContainer}
        >
          <Image
            source={require("../assets/MapButton.png")}
            style={styles.image}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Profile");
          }}
          title="Profile"
          style={styles.imageContainer}
        >
          <Image
            source={require("../assets/Profile.png")}
            style={styles.image}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Settings");
          }}
          title="Settings"
          style={styles.imageContainer}
        >
          <Image
            source={require("../assets/Settings.png")}
            style={styles.image}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  navContainer: {
    marginTop: 28,
    width: "100%",
    alignItems: "center",
    backgroundColor: "#AAC0AA",
  },
  navBar: {
    marginTop: 5,
    marginBottom: 5,
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  image: {
    width: 60,
    height: 60,
    alignSelf: "center",
    justifyContent: "center",
  },
});

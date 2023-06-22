import { Platform, Text, View, StyleSheet } from "react-native";
// import Device from 'expo-device';
import * as Device from "expo-device";
import * as Location from "expo-location";

async function getUserLocation() {
  if (Platform.OS === "android" && !Device.isDevice) {
    console.log(
      "this will not work on Snack in an Android Emulator. Try it on your device!"
    );
  }
  let { status } = await Location.requestForegroundPermissionsAsync();
  if (status !== "granted") {
    console.log("Permission to access location was denied");
  }
  try {
    const dynamicLocation = await Location.getCurrentPositionAsync({});
    console.log(dynamicLocation);
    return [dynamicLocation.coords.latitude, dynamicLocation.coords.longitude];
  } catch (err) {
    console.log(err);
  }
}
export { getUserLocation };

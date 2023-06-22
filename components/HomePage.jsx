import { auth } from "../firebaseConfig";
import { UserContext } from "../utils/UserContext";
import { getUserData } from "../utils/pullUserInfo";
import { useContext, useEffect, useState } from "react";
import {
  Button,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  BackHandler,
} from "react-native";
import { styles, textStyles } from "../styles/style.js";
import { getUserLocation } from "../utils/getUserLocation";

export default HomePage = ({ navigation, route }) => {
  const { globalUser, setGlobalUser } = useContext(UserContext);
  const [loadingUser, setLoadingUser] = useState(true);
  const [userLocation, setUserLocation] = useState([0, 0]);
  const [loadingUserLocation, setLoadingUserLocation] = useState(true);

  useEffect(() => {
    BackHandler.addEventListener("hardwareBackPress", () => true);
  
    const fetchData = async () => {
      try {
        const location = await getUserLocation();
        setUserLocation([...location]);
        setLoadingUserLocation(false);
      } catch (err) {
        console.log(err);
      }
  
      if (auth.currentUser) {
        try {
          const data = await getUserData(auth.currentUser.uid);
          setGlobalUser({
            userId: auth.currentUser.uid,
            first_name: data.first_name,
            last_name: data.last_name,
            location: data.location,
            username: data.screen_name,
            profile_image_url: data.profile_image_url,
            perch_list: [...data.perch_list],
            coordinates: [...userLocation],
          });
          setLoadingUser(false);
        } catch (err) {
          console.log(err);
        }
      }
    };
  
    fetchData();
  }, [loadingUserLocation]);
  if (loadingUser) {
    return (
      <View styles={styles.pageContainer}>
        <Text style={textStyles.loadingText}> Loading...</Text>
      </View>
    );
  }
  return (
    <View style={styles.pageContainer}>
      <View style={styles.centeredContainer}>
        <Text style={textStyles.titleText}>
          Welcome, {globalUser.username || globalUser.first_name || "User"}{" "}
        </Text>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              navigation.navigate("SightingList");
            }}

          >
            <Text style={textStyles.buttonText}>Start Twitching!</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

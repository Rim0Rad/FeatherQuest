import { useFonts } from "expo-font";
import { UserContext } from "./utils/UserContext.js";
import { StyleSheet, Text } from "react-native";
import { useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Bird from "./components/Bird.jsx";
import Maps from "./components/Maps/Maps.jsx";
import SignUp from "./components/SignUp.jsx";
import Profile from "./components/Profile.jsx";
import Species from "./components/Species.jsx";
import Settings from "./components/Settings.jsx";
import HomePage from "./components/HomePage.jsx";
import Sighting from "./components/Sighting.jsx";
import LoginScreen from "./components/LoginScreen.jsx";
import SightingList from "./components/SightingList.jsx";
import IdentifyBird from "./components/IdentifyBird.jsx";
import PostSighting from "./components/postSightings/PostSighting.jsx";
import NavigationBar from "./components/NavigationBar.jsx";
import NavToLoginBar from "./components/NavToLoginBar.jsx";
import ForgotPassword from "./components/ForgotPassword.jsx";
import * as SplashScreen from "expo-splash-screen";
import FillerHeader from "./components/FillerHeader.jsx";

const Stack = createNativeStackNavigator();

function App() {
  const [fontsLoaded] = useFonts({
    Virgil: require("./assets/fonts/Virgil.ttf"),
  });
  const [globalUser, setGlobalUser] = useState(null);

  useEffect(() => {
    async function prepare() {
      await SplashScreen.preventAutoHideAsync();
    }
    prepare();
  }, []);

  if (!fontsLoaded) {
    return <Text>Loading...</Text>;
  } else {
    SplashScreen.hideAsync();
  }

  return (
    <UserContext.Provider value={{ globalUser, setGlobalUser }}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="LoginScreen"
            component={LoginScreen}
            options={({ navigation }) => ({
              header: () => <FillerHeader navigation={navigation}/>
            })}
          />
          <Stack.Screen
            name="Home"
            component={HomePage}
            options={({ navigation }) => ({
              header: () => <NavigationBar navigation={navigation} />,
            })}
          />
          <Stack.Screen
            name="Profile"
            component={Profile}
            options={({ navigation }) => ({
              header: () => <NavigationBar navigation={navigation} />,
            })}
          />
          <Stack.Screen
            name="Maps"
            component={Maps}
            options={({ navigation }) => ({
              header: () => <NavigationBar navigation={navigation} />,
            })}
          />
          <Stack.Screen
            name="Species"
            component={Species}
            options={({ navigation }) => ({
              header: () => <NavigationBar navigation={navigation} />,
            })}
          />
          <Stack.Screen
            name="Settings"
            component={Settings}
            options={({ navigation }) => ({
              header: () => <NavigationBar navigation={navigation} />,
            })}
          />
          <Stack.Screen
            name="Sighting"
            component={Sighting}
            options={({ navigation }) => ({
              header: () => <NavigationBar navigation={navigation} />,
            })}
          />
          <Stack.Screen
            name="PostSighting"
            component={PostSighting}
            options={({ navigation }) => ({
              header: () => <NavigationBar navigation={navigation} />,
            })}
          />
          <Stack.Screen
            name="SightingList"
            component={SightingList}
            options={({ navigation }) => ({
              header: () => <NavigationBar navigation={navigation} />,
            })}
          />

          <Stack.Screen
            name="IdentifyBird"
            component={IdentifyBird}
            options={({ navigation }) => ({
              header: () => <NavigationBar navigation={navigation} />,
            })}
          />
          <Stack.Screen
            name="Bird"
            component={Bird}
            options={({ navigation }) => ({
              header: () => <NavigationBar navigation={navigation} />,
            })}
          />
          <Stack.Screen
            name="SignUp"
            component={SignUp}
            options={({ navigation }) => ({
              header: () => <NavToLoginBar navigation={navigation} />,
            })}
          />
          <Stack.Screen
            name="ForgotPassword"
            component={ForgotPassword}
            options={({ navigation }) => ({
              header: () => <NavToLoginBar navigation={navigation} />,
            })}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </UserContext.Provider>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

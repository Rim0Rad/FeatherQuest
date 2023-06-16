import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomePage from "./components/HomePage.jsx";
import Profile from "./components/Profile.jsx";
import Maps from "./components/Maps.jsx";
import Species from "./components/Species.jsx";
import Settings from "./components/Settings.jsx";
import PostSighting from "./components/postSightings/PostSighting.jsx";
import Sighting from "./components/Sighting.jsx";
import SightingList from "./components/SightingList.jsx";
import NavigationBar from "./components/NavigationBar.jsx";
import Bird from "./components/Bird.jsx";
import IdentifyBird from "./components/IdentifyBird.jsx";
import { UserContext } from "./utils/UserContext.js";
import LoginScreen from "./components/LoginScreen.jsx";
import { useState } from "react";
import UserPerchAlerts from "./components/UserPerchAlerts.jsx";
import SignUp from "./components/SignUp.jsx";
import ForgotPassword from "./components/ForgotPassword.jsx";

const Stack = createNativeStackNavigator();

function App() {
  const [globalUser, setGlobalUser] = useState();
  return (
    <UserContext.Provider value={{ globalUser, setGlobalUser }}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="LoginScreen" component={LoginScreen} />

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

          <Stack.Screen name="IdentifyBird" component={IdentifyBird} />
          <Stack.Screen
            name="Bird"
            component={Bird}
            options={({ navigation }) => ({
              header: () => <NavigationBar navigation={navigation} />,
            })}
          />
          <Stack.Screen name="SignUp" component={SignUp} />
          <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
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

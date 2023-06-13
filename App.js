import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomePage from "./components/HomePage.jsx";
import Profile from "./components/Profile.jsx";
import Maps from "./components/Maps.jsx";
import Species from "./components/Species.jsx";
import Settings from "./components/Settings.jsx";
import Sighting from "./components/Sighting.jsx";
import SightingList from "./components/SightingList.jsx";
import NavigationBar from "./components/NavigationBar.jsx";
import Bird from "./components/Bird.jsx";

import LoginScreen from "./components/LoginScreen.jsx";


const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomePage}
          options={({ navigation }) => ({
            header: () => <NavigationBar navigation={navigation} />,
          })}
        />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="Maps" component={Maps} />
        <Stack.Screen name="Species" component={Species} />
        <Stack.Screen name="Settings" component={Settings} />
        <Stack.Screen name="Sighting" component={Sighting} />
        <Stack.Screen name="SightingList" component={SightingList} />

        <Stack.Screen name="LoginScreen" component={LoginScreen} />

        <Stack.Screen name="Bird" component={Bird} />
      </Stack.Navigator>
    </NavigationContainer>
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

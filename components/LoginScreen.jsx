import { auth } from "../firebaseConfig";
import {signInWithEmailAndPassword} from "firebase/auth";
import { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import {
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
} from "react-native";
import { styles, textStyles } from '../styles/style.js'


export default LoginScreen = ({ navigation }) => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigation1 = useNavigation();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        navigation1.navigate("Home", { prevPage: "LoginScreen" });
      }
    });

    return unsubscribe;
  }, []);

  const handleLogin = () => {
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredentials) => {
    })
    .catch((error) => {
      alert(error.message);
    });
  };
  
  return (
    <KeyboardAvoidingView style={styles.pageContainer} behavior="padding">
      <View style={styles.centeredContainer}>
        <Text style={textStyles.titleText}>WELCOME TO FEATHER QUEST!</Text>
        <View style={styles.logoContainer}>
          <Image source={require("../assets/feather.png")} />
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            autoCapitalize="none"
            placeholder="Email"
            value={email}
            onChangeText={(text) => setEmail(text)}
            style={styles.input}
            />
          <TextInput
            autoCapitalize="none"
            placeholder="Password"
            value={password}
            onChangeText={(text) => setPassword(text)}
            style={styles.input}
            secureTextEntry
          />
        </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity 
          onPress={handleLogin} 
          style={styles.button}
          >
            <Text style={textStyles.buttonText}>Login</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate("SignUp")}
          style={styles.button}
          >
          <Text style={textStyles.buttonText}>Sign Up!</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("ForgotPassword")}>
          <Text style={textStyles.textClickable}>Forgot Password</Text>
        </TouchableOpacity>
      </View>
    </View>
    </KeyboardAvoidingView>
  );
};

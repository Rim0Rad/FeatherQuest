import { useState, useEffect } from "react";
import {
  View,
  Text,
  Image,
  Alert,
  Keyboard,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { auth } from "../firebaseConfig";
import { doc, setDoc } from "firebase/firestore";
import { db, storage } from "../firebaseConfig"; // Import the storage module
import { createUserWithEmailAndPassword } from "firebase/auth";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import NavToLoginBar from "./NavToLoginBar.jsx";
import * as ImagePicker from "expo-image-picker";
import { styles, textStyles } from "../styles/style.js";

const SignUp = ({ navigation }) => {
  const [screenName, setScreenName] = useState("");
  const [screenNameValid, setScreenNameValid] = useState(false);
  const [email, setEmail] = useState("");
  const [emailValid, setEmailValid] = useState(false);
  const [password, setPassword] = useState("");
  const [passwordValid, setPasswordValid] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [firstNameValid, setFirstNameValid] = useState(false);
  const [lastName, setLastName] = useState("");
  const [lastNameValid, setLastNameValid] = useState(false);
  const [location, setLocation] = useState("");
  const [locationValid, setLocationValid] = useState(false);

  const [imageUrl, setImageUrl] = useState("");
  const [image, setImage] = useState(null);
  const [uploading, setUploading] = useState(false);

  useEffect(() => {
    (async () => {
      const { status } =
        await ImagePicker.requestMediaLibraryPermissionsAsync();
      if (status !== "granted") {
        Alert.alert(
          "Permission Denied",
          "Please allow access to the image library."
        );
      }
    })();
  }, []);

  const handleImageUpload = async () => {
    if (!uploading) {
      try {
        const result = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.All,
          allowsEditing: true,
          aspect: [4, 3],
          quality: 1,
        });

        if (!result.canceled) {
          setImage(result.assets[0].uri); //"result.uri" deprecated
          setUploading(true);
          await uploadImage(result.assets[0].uri);
          setUploading(false);
        }
      } catch (error) {
        console.log(error);
        Alert.alert("Error selecting image.", "Please try again later.");
      }
    }
  };

  const uploadImage = async (imageUri) => {
    try {
      const response = await fetch(imageUri);
      const blob = await response.blob();
      const filename = imageUri.substring(imageUri.lastIndexOf("/") + 1);
      const fileRef = ref(storage, "users/" + filename);
      await uploadBytes(fileRef, blob);
      const downloadURL = await getDownloadURL(fileRef);
      setImageUrl(downloadURL);
      Alert.alert("Photo uploaded successfully!");
    } catch (error) {
      console.log(error);
      Alert.alert("Error uploading photo.", "Please try again later.");
    }
  };

  Keyboard.addListener("keyboardDidShow", () => {
    navigation.setOptions({
      header: () => {},
    });
  });
  Keyboard.addListener("keyboardDidHide", () => {
    navigation.setOptions({
      header: () => <NavToLoginBar navigation={navigation} />,
    });
  });

  const handleUsername = (text) => {
    if (text.length >= 6) {
      setScreenName(text);
      setScreenNameValid(true);
    } else {
      setScreenName(text);
      setScreenNameValid(false);
    }
  };
  const handleEmail = (text) => {
    if (/^[a-zA-z0-9]+@[a-zA-z0-9]+\.[a-zA-z0-9]+$/.test(text)) {
      setEmail(text);
      setEmailValid(true);
    } else {
      setEmail(text);
      setEmailValid(false);
    }
  };
  const handlerPassword = (text) => {
    if (text.length >= 6) {
      setPassword(text);
      setPasswordValid(true);
    } else {
      setPassword(text);
      setPasswordValid(false);
    }
  };

  const handleFirstName = (text) => {
    if (text.length > 0) {
      setFirstName(text);
      setFirstNameValid(true);
    } else {
      setFirstName(text);
      setFirstNameValid(false);
    }
  };

  const handleLastName = (text) => {
    if (text.length > 0) {
      setLastName(text);
      setLastNameValid(true);
    } else {
      setLastName(text);
      setLastNameValid(false);
    }
  };

  const handleLocation = (text) => {
    if (text.length > 0) {
      setLocation(text);
      setLocationValid(true);
    } else {
      setLocation(text);
      setLocationValid(false);
    }
  };

  const handleSignUp = async () => {
    if (
      screenNameValid &&
      emailValid &&
      passwordValid &&
      firstNameValid &&
      lastNameValid &&
      locationValid
    ) {
      try {
        const userCredentials = await createUserWithEmailAndPassword(
          auth,
          email,
          password
        );
        const user = userCredentials.user;

        await setDoc(doc(db, "users", user.uid), {
          created_at: user.metadata.creationTime,
          first_name: firstName,
          last_name: lastName,
          location: location,
          follower_list: [],
          friend_list: [],
          perch_list: [],
          spotted_list: [],
          profile_image_url: imageUrl,
          screen_name: screenName,
        });

        Alert.alert("Account Registered");
      } catch (error) {
        Alert.alert("Sign Up Error", error.message);
      }
    } else {
      Alert.alert("Missing Fields", "Please fill in all required fields.");
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollView}>
      <View style={styles.pageContainer}>
        <Text style={styles.titleText}>Sign Up</Text>
        <View style={styles.inputContainer}>
          <TextInput
            autoCapitalize="none"
            placeholder="Username *"
            onChangeText={handleUsername}
            style={styles.input}
          />
          {!screenNameValid && screenName !== "" && (
            <Text style={styles.warningText}>Username too short</Text>
          )}
          <TextInput
            autoCapitalize="none"
            placeholder="Email *"
            onChangeText={handleEmail}
            style={styles.input}
          />
          {!emailValid && email !== "" && (
            <Text style={styles.warningText}>Email invalid</Text>
          )}
          <TextInput
            autoCapitalize="none"
            placeholder="Password *"
            onChangeText={handlerPassword}
            style={styles.input}
            secureTextEntry
          />
          {!passwordValid && password !== "" && (
            <Text style={styles.warningText}>Password too short</Text>
          )}
          <TextInput
            placeholder="First Name *"
            value={firstName}
            onChangeText={handleFirstName}
            style={styles.input}
          />
          {!firstNameValid && firstName !== "" && (
            <Text style={styles.warningText}>First Name required</Text>
          )}
          <TextInput
            placeholder="Last Name *"
            value={lastName}
            onChangeText={handleLastName}
            style={styles.input}
          />
          {!lastNameValid && lastName !== "" && (
            <Text style={styles.warningText}>Last Name required</Text>
          )}
          <TextInput
            placeholder="Location *"
            value={location}
            onChangeText={handleLocation}
            style={styles.input}
          />
          {!locationValid && location !== "" && (
            <Text style={styles.warningText}>Location required</Text>
          )}
        </View>
        {image && (
          <View style={styles.imagePreviewContainer}>
            <Image source={{ uri: image }} style={styles.imagePreview} />
          </View>
        )}
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            onPress={handleImageUpload}
            style={[styles.button, uploading && styles.disabledButton]}
            disabled={uploading}
          >
            <Text style={styles.buttonText}>
              {uploading ? "Uploading..." : "Upload Avatar"}
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={handleSignUp}
            disabled={
              !(
                screenNameValid &&
                emailValid &&
                passwordValid &&
                firstNameValid &&
                lastNameValid &&
                locationValid
              )
            }
            style={[
              styles.button,
              !(
                screenNameValid &&
                emailValid &&
                passwordValid &&
                firstNameValid &&
                lastNameValid &&
                locationValid
              ) && styles.disabledButton,
            ]}
          >
            <Text style={styles.buttonText}>Sign Up</Text>
          </TouchableOpacity>

          {!(
            screenNameValid &&
            emailValid &&
            passwordValid &&
            firstNameValid &&
            lastNameValid &&
            locationValid
          ) && <Text style={styles.warningText}>Missing some fields</Text>}
        </View>
      </View>
    </ScrollView>
  );
};

export default SignUp;

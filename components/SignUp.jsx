// import { useState } from "react";
// import {
//   View,
//   Text,
//   TextInput,
//   TouchableOpacity,
//   StyleSheet,
// } from "react-native";
// import { auth } from "../firebaseConfig";
// import { createUserWithEmailAndPassword } from "firebase/auth";
// import { doc, setDoc } from "firebase/firestore";
// import { db } from "../firebaseConfig";

// const SignUp = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [firstName, setFirstName] = useState("");
//   const [lastName, setLastName] = useState("");
//   const [location, setLocation] = useState("");
//   const [profilePic, setProfilePic] = useState("");
//   const [screenName, setScreenName] = useState("");

//   const handleSignUp = () => {
//     createUserWithEmailAndPassword(auth, email, password)
//       .then((userCredentials) => {
//         const user = userCredentials.user;

//         setDoc(doc(db, "users/" + user.uid), {
//           created_at: user.metadata.creationTime,
//           first_name: firstName,
//           last_name: lastName,
//           location: location,
//           follower_list: [],
//           friend_list: [],
//           perch_list: [],
//           spotted_list: [],
//           profile_image_url: "",
//           screen_name: screenName,
//         });
//         alert("Account Registered");
//       })
//       .catch((error) => {
//         alert(error.message);
//       });
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Sign Up</Text>
//       <TextInput
//         autoCapitalize="none"
//         placeholder="Username"
//         value={screenName}
//         onChangeText={(text) => setScreenName(text)}
//         style={styles.input}
//       />

//       <TextInput
//         autoCapitalize="none"
//         placeholder="Email"
//         value={email}
//         onChangeText={(text) => setEmail(text)}
//         style={styles.input}
//       />
//       <TextInput
//         autoCapitalize="none"
//         placeholder="Password"
//         value={password}
//         onChangeText={(text) => setPassword(text)}
//         style={styles.input}
//         secureTextEntry
//       />
//       <TextInput
//         placeholder="First Name"
//         value={firstName}
//         onChangeText={(text) => setFirstName(text)}
//         style={styles.input}
//       />
//       <TextInput
//         placeholder="Last Name"
//         value={lastName}
//         onChangeText={(text) => setLastName(text)}
//         style={styles.input}
//       />
//       <TextInput
//         placeholder="Location"
//         value={location}
//         onChangeText={(text) => setLocation(text)}
//         style={styles.input}
//       />
//       <TouchableOpacity onPress={handleSignUp} style={styles.button}>
//         <Text style={styles.buttonText}>Sign Up</Text>
//       </TouchableOpacity>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//     backgroundColor: "#5e7975",
//   },
//   title: {
//     fontSize: 30,
//     fontWeight: "bold",
//     marginBottom: 20,
//     textAlignVertical: "center",
//   },
//   input: {
//     backgroundColor: "white",
//     paddingHorizontal: 15,
//     paddingVertical: 10,
//     borderRadius: 10,
//     marginTop: 5,
//     width: "80%",
//   },
//   button: {
//     backgroundColor: "#0782F9",
//     width: "60%",
//     padding: 15,
//     borderRadius: 10,
//     alignItems: "center",
//     marginTop: 20,
//   },
//   buttonText: {
//     color: "white",
//     fontWeight: "700",
//     fontSize: 16,
//   },
// });

// export default SignUp;

// import { useState } from "react";
// import {
//   View,
//   Text,
//   TextInput,
//   TouchableOpacity,
//   StyleSheet,
//   Image,
//   Alert,
// } from "react-native";

// import { auth } from "../firebaseConfig";
// import { createUserWithEmailAndPassword } from "firebase/auth";
// import { doc, setDoc } from "firebase/firestore";
// import { db } from "../firebaseConfig";
// import * as ImagePicker from "expo-image-picker";
// import { firebase } from "../firebaseConfig";

// const SignUp = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [firstName, setFirstName] = useState("");
//   const [lastName, setLastName] = useState("");
//   const [location, setLocation] = useState("");
//   const [screenName, setScreenName] = useState("");

//   const [image, setImage] = useState(null);
//   const [uploading, setUploading] = useState(false);

//   const pickImage = async () => {
//     let result = await ImagePicker.launchImageLibraryAsync({
//       mediaTypes: ImagePicker.MediaTypeOptions.All,
//       allowsEditing: true,
//       aspect: [4, 3],
//       quality: 1,
//     });
//     const source = { uri: result.uri };

//     console.log(source);
//     setImage(source);
//   };
//   const uploadImage = async () => {
//     setUploading(true);
//     const response = await fetch(image.uri);
//     const blob = await response.blob();
//     const filename = image.uri.substring(image.uri.lastIndexOf("/") + 1);
//     const ref = firebase.storage().ref().child("users").put(blob);

//     try {
//       await ref;
//     } catch (err) {
//       console.log(err);
//     }
//     setUploading(false);
//     Alert.alert("Photo uploaded...");
//     setImage(null);
//   };

//   const handleSignUp = () => {
//     createUserWithEmailAndPassword(auth, email, password)
//       .then((userCredentials) => {
//         const user = userCredentials.user;

//         setDoc(doc(db, "users/" + user.uid), {
//           created_at: user.metadata.creationTime,
//           first_name: firstName,
//           last_name: lastName,
//           location: location,
//           follower_list: [],
//           friend_list: [],
//           perch_list: [],
//           spotted_list: [],
//           profile_image_url: image,
//           screen_name: screenName,
//         });
//         alert("Account Registered");
//       })
//       .catch((error) => {
//         alert(error.message);
//       });
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Sign Up</Text>
//       <TextInput
//         autoCapitalize="none"
//         placeholder="Username"
//         value={screenName}
//         onChangeText={(text) => setScreenName(text)}
//         style={styles.input}
//       />

//       <TextInput
//         autoCapitalize="none"
//         placeholder="Email"
//         value={email}
//         onChangeText={(text) => setEmail(text)}
//         style={styles.input}
//       />
//       <TextInput
//         autoCapitalize="none"
//         placeholder="Password"
//         value={password}
//         onChangeText={(text) => setPassword(text)}
//         style={styles.input}
//         secureTextEntry
//       />
//       <TextInput
//         placeholder="First Name"
//         value={firstName}
//         onChangeText={(text) => setFirstName(text)}
//         style={styles.input}
//       />
//       <TextInput
//         placeholder="Last Name"
//         value={lastName}
//         onChangeText={(text) => setLastName(text)}
//         style={styles.input}
//       />
//       <TextInput
//         placeholder="Location"
//         value={location}
//         onChangeText={(text) => setLocation(text)}
//         style={styles.input}
//       />

//       <TouchableOpacity onPress={pickImage}>
//         <Text>Upload Profile Picture</Text>
//       </TouchableOpacity>
//       <View>
//         {image && (
//           <Image
//             source={{ uri: image.uri }}
//             style={{ width: 300, height: 300 }}
//           />
//         )}
//         <TouchableOpacity onPress={uploadImage}>
//           <Text>Upload Image</Text>
//         </TouchableOpacity>
//       </View>

//       <TouchableOpacity onPress={handleSignUp} style={styles.button}>
//         <Text style={styles.buttonText}>Sign Up</Text>
//       </TouchableOpacity>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//     backgroundColor: "#5e7975",
//   },
//   title: {
//     fontSize: 30,
//     fontWeight: "bold",
//     marginBottom: 20,
//     textAlignVertical: "center",
//   },
//   input: {
//     backgroundColor: "white",
//     paddingHorizontal: 15,
//     paddingVertical: 10,
//     borderRadius: 10,
//     marginTop: 5,
//     width: "80%",
//   },
//   button: {
//     backgroundColor: "#0782F9",
//     width: "60%",
//     padding: 15,
//     borderRadius: 10,
//     alignItems: "center",
//     marginTop: 20,
//   },
//   buttonText: {
//     color: "white",
//     fontWeight: "700",
//     fontSize: 16,
//   },
// });

// export default SignUp;

import { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  Alert,
} from "react-native";
import { auth } from "../firebaseConfig";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { db, storage } from "../firebaseConfig"; // Import the storage module
import * as ImagePicker from "expo-image-picker";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [location, setLocation] = useState("");
  const [screenName, setScreenName] = useState("");

  const [image, setImage] = useState(null);
  const [uploading, setUploading] = useState(false);

  useEffect(() => {
    // Request permission to access the image library
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

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

  const uploadImage = async () => {
    if (image) {
      setUploading(true);

      try {
        const response = await fetch(image);
        const blob = await response.blob();
        const filename = image.substring(image.lastIndexOf("/") + 1);
        const ref = storage.ref().child("users/" + filename);

        await ref.put(blob);
        const downloadURL = await ref.getDownloadURL();

        // Update the user document with the image URL
        createUserWithEmailAndPassword(auth, email, password)
          .then((userCredentials) => {
            const user = userCredentials.user;

            setDoc(doc(db, "users", user.uid), {
              created_at: user.metadata.creationTime,
              first_name: firstName,
              last_name: lastName,
              location: location,
              follower_list: [],
              friend_list: [],
              perch_list: [],
              spotted_list: [],
              profile_image_url: downloadURL, // Use the download URL as the image URL
              screen_name: screenName,
            });
            alert("Account Registered");
          })
          .catch((error) => {
            alert(error.message);
          });

        setUploading(false);
        Alert.alert("Photo uploaded successfully!");
        setImage(null);
      } catch (error) {
        console.log(error);
        setUploading(false);
        Alert.alert("Error uploading photo.", "Please try again later.");
      }
    } else {
      Alert.alert("No image selected.", "Please select an image first.");
    }
  };

  const handleSignUp = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredentials) => {
        const user = userCredentials.user;

        setDoc(doc(db, "users/" + user.uid), {
          created_at: user.metadata.creationTime,
          first_name: firstName,
          last_name: lastName,
          location: location,
          follower_list: [],
          friend_list: [],
          perch_list: [],
          spotted_list: [],
          profile_image_url: image,
          screen_name: screenName,
        });
        alert("Account Registered");
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign Up</Text>
      <TextInput
        autoCapitalize="none"
        placeholder="Username"
        value={screenName}
        onChangeText={(text) => setScreenName(text)}
        style={styles.input}
      />

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
      <TextInput
        placeholder="First Name"
        value={firstName}
        onChangeText={(text) => setFirstName(text)}
        style={styles.input}
      />
      <TextInput
        placeholder="Last Name"
        value={lastName}
        onChangeText={(text) => setLastName(text)}
        style={styles.input}
      />
      <TextInput
        placeholder="Location"
        value={location}
        onChangeText={(text) => setLocation(text)}
        style={styles.input}
      />

      <TouchableOpacity onPress={pickImage}>
        <Text>Upload Profile Picture</Text>
      </TouchableOpacity>
      <View>
        {image && (
          <Image source={{ uri: image }} style={{ width: 300, height: 300 }} />
        )}
        <TouchableOpacity onPress={uploadImage}>
          <Text>Upload Image</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity onPress={handleSignUp} style={styles.button}>
        <Text style={styles.buttonText}>Sign Up</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#5e7975",
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 20,
    textAlignVertical: "center",
  },
  input: {
    backgroundColor: "white",
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 10,
    marginTop: 5,
    width: "80%",
  },
  button: {
    backgroundColor: "#0782F9",
    width: "60%",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 20,
  },
  buttonText: {
    color: "white",
    fontWeight: "700",
    fontSize: 16,
  },
});

export default SignUp;

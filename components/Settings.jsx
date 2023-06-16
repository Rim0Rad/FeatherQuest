import { StatusBar } from "expo-status-bar";
import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { db } from "../firebaseConfig";
import { auth } from "../firebaseConfig";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../utils/UserContext";
import { getUserData } from "../utils/pullUserInfo";
import {
  collection,
  query,
  where,
  getDocs,
  doc,
  updateDoc,
  onSnapshot,
} from "firebase/firestore";

export default Settings = ({ navigation }) => {
  // const { globalUser, setGlobalUser } = useContext(UserContext);

  const [user, setUser] = useState({});
  const [screenNameUpdated, setScreenNameUpdated] = useState(false);
  const [firstNameUpdated, setFirstNameUpdated] = useState(false);
  const [lastNameUpdated, setLastNameUpdated] = useState(false);
  const [locationUpdated, setLocationUpdated] = useState(false);

  const [newScreenName, setNewScreenName] = useState("");
  const [newFirstName, setNewFirstName] = useState("");
  const [newLastName, setNewLastName] = useState("");
  const [newLocation, setNewLocation] = useState("");
  const [newScreenNameValid, setNewScreenNameValid] = useState(true);
  const [newFirstNameValid, setNewFirstNameValid] = useState(true);
  const [newLastNameValid, setNewLastNameValid] = useState(true);
  const [newLocationValid, setNewLocationValid] = useState(true);

  useEffect(() => {
    const getUser = async () => {
      try {
        const current_user = auth.currentUser;
        onSnapshot(doc(db, "users", current_user.uid), (doc) => {
          setUser(doc.data());
        });
      } catch (error) {
        console.log(error);
      }
    };

    getUser();
  }, [handleSubmit]);

  const updateScreenName = async () => {
    try {
      const current_user = auth.currentUser;

      const userRef = doc(db, "users", current_user.uid);
      await updateDoc(userRef, {
        screen_name: newScreenName,
      });
    } catch (error) {
      console.log(error);
    } finally {
      setNewScreenName("");
      alert("Details successfully updated");
    }
  };

  const updatedFirstName = async () => {
    try {
      const current_user = auth.currentUser;

      const userRef = doc(db, "users", current_user.uid);
      await updateDoc(userRef, {
        first_name: newFirstName,
      });
    } catch (error) {
      console.log(error);
    } finally {
      setNewFirstName("");
    }
  };

  const updatedLastName = async () => {
    try {
      const current_user = auth.currentUser;

      const userRef = doc(db, "users", current_user.uid);
      await updateDoc(userRef, {
        last_name: newLastName,
      });
    } catch (error) {
      console.log(error);
    } finally {
      setNewLastName("");
    }
  };

  const updatedLocation = async () => {
    try {
      const current_user = auth.currentUser;

      const userRef = doc(db, "users", current_user.uid);
      await updateDoc(userRef, {
        location: newLocation,
      });
    } catch (error) {
      console.log(error);
    } finally {
      setNewLocation("");
    }
  };

  const handleSubmit = async () => {
    try {
      if (screenNameUpdated) {
        if (newScreenNameValid) {
          await updateScreenName();
          setScreenNameUpdated(false);
        } else {
          throw new Error("Invalid screen name");
        }
      }
      if (firstNameUpdated) {
        if (newFirstNameValid) {
          await updatedFirstName();
          setFirstNameUpdated(false);
        } else {
          throw new Error("Invalid First name");
        }
      }
      if (lastNameUpdated) {
        if (newLastNameValid) {
          await updatedLastName();
          setLastNameUpdated(false);
        } else {
          throw new Error("Invalid Last name");
        }
      }
      if (locationUpdated) {
        if (newLocationValid) {
          await updatedLocation();
          setLocationUpdated(false);
        } else {
          throw new Error("Invalid Last name");
        }
      }
      alert("Details successfully updated");
    } catch (err) {
      console.log(err);
      alert("Invalid entries. Please update the above fields.");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>User Settings</Text>
      <View style={styles.inputGroup}>
        <Text>Change Username:</Text>
        <TextInput
          inputMode="text"
          textAlign="center"
          autoCapitalize="none"
          style={styles.inputText}
          placeholder={user.screen_name}
          value={newScreenName}
          onChangeText={(text) => {
            setNewScreenName(text);
            setScreenNameUpdated(true);
            if (newScreenName.length < 6) {
              setNewScreenNameValid(false);
            } else {
              setNewScreenNameValid(true);
            }
          }}
        />
      </View>
      {!newScreenNameValid && (
        <View>
          <Text>Username must be 6 or more characters.</Text>
        </View>
      )}

      <View style={styles.inputGroup}>
        <Text>Change First Name:</Text>
        <TextInput
          inputMode="text"
          textAlign="center"
          autoCapitalize="none"
          style={styles.inputText}
          placeholder={user.first_name}
          value={newFirstName}
          onChangeText={(text) => {
            setNewFirstName(text);
            setFirstNameUpdated(true);
            if (newFirstName.length < 1) {
              setNewFirstNameValid(false);
            } else {
              setNewFirstNameValid(true);
            }
          }}
        />
      </View>
      {!newFirstNameValid && (
        <View>
          <Text>First name must not be empty.</Text>
        </View>
      )}

      <View style={styles.inputGroup}>
        <Text>Change Last Name:</Text>
        <TextInput
          inputMode="text"
          textAlign="center"
          autoCapitalize="none"
          style={styles.inputText}
          placeholder={user.last_name}
          value={newLastName}
          onChangeText={(text) => {
            setNewLastName(text);
            setLastNameUpdated(true);

            if (newLastName.length < 1) {
              setNewLastNameValid(false);
            } else {
              setNewLastNameValid(true);
            }
          }}
        />
      </View>
      {!newLastNameValid && (
        <View>
          <Text>Last name must not be empty.</Text>
        </View>
      )}

      <View style={styles.inputGroup}>
        <Text>Change Location:</Text>
        <TextInput
          inputMode="text"
          textAlign="center"
          autoCapitalize="none"
          style={styles.inputText}
          placeholder={user.location}
          value={newLocation}
          onChangeText={(text) => {
            setNewLocation(text);
            setLocationUpdated(true);

            if (newLocation.length < 1) {
              setNewLocationValid(false);
            } else {
              setNewLocationValid(true);
            }
          }}
        />
      </View>
      {!newLocationValid && (
        <View>
          <Text>Location must not be empty.</Text>
        </View>
      )}

      <View style={styles.inputGroup}>
        <Text>Change Password:</Text>
        <TextInput style={styles.inputText} placeholder="****TBC****" />
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={handleSubmit}>
          <Text style={styles.buttonText}>Save</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#7A918D",
    alignItems: "center",
    justifyContent: "center",
  },
  inputGroup: {
    padding: 10,
    marginBottom: 20,
    width: "100%",
    flexDirection: "row",
    backgroundColor: "#A18276",
    alignItems: "center",
    justifyContent: "center",
  },
  inputText: {
    marginLeft: 10,
    color: "white",
  },
  header: {
    color: "white",
    marginTop: 20,
    marginBottom: 20,
    textAlign: "center",
    fontSize: 30,
  },
  buttonContainer: {
    width: "60%",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
  button: {
    backgroundColor: "#736372",
    width: "100%",
    padding: 10,
    borderRadius: 10,
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontWeight: "700",
    fontSize: 16,
  },
});
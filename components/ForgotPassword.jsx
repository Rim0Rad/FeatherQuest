import { auth } from "../firebaseConfig";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import React, { useState } from "react";
import { sendPasswordResetEmail } from "firebase/auth";
import { styles, textStyles } from "../styles/style.js";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [resetSent, setResetSent] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleResetPassword = () => {
    if (email === "") {
      setErrorMessage("Please enter your email address.");
      return;
    }

    sendPasswordResetEmail(auth, email)
      .then(() => {
        setResetSent(true);
      })
      .catch((error) => {
        console.log("Error sending password reset email:", error);
      });
  };

  return (
    <>
      {resetSent ? (
        <View style={styles.successContainer}>
          <Text style={styles.resetText}>Password reset email sent!</Text>
        </View>
      ) : (
        <View style={styles.pageContainer}>
          <Text style={styles.titleText}>Forgot Password</Text>
          {errorMessage !== "" && (
            <Text style={styles.errorText}>{errorMessage}</Text>
          )}
          <View style={styles.inputContainer}>
            <TextInput
              autoCapitalize="none"
              placeholder="Email"
              value={email}
              onChangeText={(text) => setEmail(text)}
              style={styles.input}
            />
          </View>
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              onPress={handleResetPassword}
              style={styles.button}
            >
              <Text style={styles.buttonText}>Reset Password</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
    </>
  );
};

export default ForgotPassword;

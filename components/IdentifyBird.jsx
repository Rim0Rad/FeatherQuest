import { VISION_API_KEY } from "@env";
import * as ImagePicker from "expo-image-picker";
import { getApps } from "firebase/app";
import { storage } from "../firebaseConfig";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import React, { useState, useEffect } from "react";
import {
  ActivityIndicator,
  Button,
  Image,
  Share,
  StatusBar,
  StyleSheet,
  Text,
  View,
  LogBox,
  FlatList,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import * as Clipboard from "expo-clipboard";
import uuid from "uuid";
import CustomButton from "./CustomButton";

if (!getApps().length) {
  console.log("App not initalised");
}

LogBox.ignoreLogs([`Setting a timer for a long period`]);

const IdentifyBird = ({ navigation }) => {
  const [image, setImage] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [googleResponse, setGoogleResponse] = useState(null);

  useEffect(() => {
    (async () => {
      if (Platform.OS !== "web") {
        const { status } =
          await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== "granted") {
          alert("Sorry, we need camera roll permissions to make this work!");
        }
      }
    })();
  }, []);

  const submitToGoogle = async () => {
    try {
      setUploading(true);
      const body = JSON.stringify({
        requests: [
          {
            features: [
              { type: "WEB_DETECTION", maxResults: 3 },
              {
                maxResults: 3,
                type: "OBJECT_LOCALIZATION",
              },
              {
                maxResults: 3,
                type: "LABEL_DETECTION",
              },
            ],
            image: {
              source: {
                imageUri: image,
              },
            },
          },
        ],
      });
      const response = await fetch(
        `https://vision.googleapis.com/v1/images:annotate?key=${VISION_API_KEY}`,
        {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          method: "POST",
          body: body,
        }
      );
      const responseJson = await response.json();
      setGoogleResponse(responseJson);
      // console.log(responseJson.localizedObjectAnnotations);
      setUploading(false);
    } catch (error) {
      console.log(error);
    }
  };

  const maybeRenderUploadingOverlay = () => {
    if (uploading) {
      return (
        <View
          style={[
            StyleSheet.absoluteFill,
            {
              backgroundColor: "rgba(0,0,0,0.4)",
              alignItems: "center",
              justifyContent: "center",
            },
          ]}
        >
          <ActivityIndicator color="#fff" animating size="large" />
        </View>
      );
    }
  };

  const maybeRenderImage = () => {
    if (!image) {
      return;
    }

    return (
      <View
        style={{
          marginTop: 30,
          width: 250,
          borderRadius: 3,
          elevation: 2,
        }}
      >
        <View
          style={{
            borderTopRightRadius: 3,
            borderTopLeftRadius: 3,
            shadowColor: "rgba(0,0,0,1)",
            shadowOpacity: 0.2,
            shadowOffset: { width: 4, height: 4 },
            shadowRadius: 5,
            overflow: "hidden",
          }}
        >
          <Image source={{ uri: image }} style={{ width: 250, height: 250 }} />
        </View>
      </View>
    );
  };

  const handleImagePicked = async (assets) => {
    try {
      setUploading(true);

      if (assets && assets.length > 0) {
        const uploadUrl = await uploadImageAsync(assets[0].uri);
        setImage(uploadUrl);
      }
    } catch (e) {
      console.log(e);
      alert("Upload failed, sorry :(");
    } finally {
      setUploading(false);
    }
  };

  const takePhoto = async () => {
    const pickerResult = await ImagePicker.launchCameraAsync({
      allowsEditing: true,
      aspect: [4, 3],
    });

    handleImagePicked(pickerResult.assets);
  };

  const pickImage = async () => {
    const pickerResult = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      aspect: [4, 3],
    });

    handleImagePicked(pickerResult.assets);
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        {googleResponse !== null ? (
          <View>
            {googleResponse.responses[0].webDetection !== undefined ? (
              <View>
                <Text style={styles.bestGuess}>
                  Our best guess is:
                  {
                    googleResponse.responses[0].webDetection.webEntities[0]
                      .description
                  }
                </Text>
              </View>
            ) : null}
            {googleResponse.responses[0].localizedObjectAnnotations !==
            undefined ? (
              <View>
                <Text style={styles.objectGuess}>
                  Main object:{" "}
                  {
                    googleResponse.responses[0].localizedObjectAnnotations[0]
                      .name
                  }
                </Text>
                <Text>
                  Confidence:{" "}
                  {(
                    googleResponse.responses[0].localizedObjectAnnotations[0]
                      .score * 100
                  ).toFixed(0)}{" "}
                  %
                </Text>
              </View>
            ) : null}

            <View>
              {googleResponse.responses[0].labelAnnotations[0] !== undefined ? (
                <Text>
                  Likely:{" "}
                  {googleResponse.responses[0].labelAnnotations[0].description}
                </Text>
              ) : null}
              {googleResponse.responses[0].labelAnnotations[1] !== undefined ? (
                <Text>
                  Likely:{" "}
                  {googleResponse.responses[0].labelAnnotations[1].description}
                </Text>
              ) : null}
              {googleResponse.responses[0].labelAnnotations[2] !== undefined ? (
                <Text>
                  Likely:{" "}
                  {googleResponse.responses[0].labelAnnotations[2].description}
                </Text>
              ) : null}
            </View>

            <TouchableOpacity>
              <Text>To use this guess in a posting please click</Text>
              <CustomButton
                title="here"
                onPress={() => {
                  navigation.goBack();
                }}
              ></CustomButton>
            </TouchableOpacity>
          </View>
        ) : (
          false
        )}

        {!image && (
          <View>
            <CustomButton
              title="Pick an image from camera roll"
              onPress={pickImage}
            ></CustomButton>
            <CustomButton
              title="Take a photo"
              onPress={takePhoto}
            ></CustomButton>
          </View>
        )}

        {maybeRenderImage()}
        {maybeRenderUploadingOverlay()}

        <StatusBar barStyle="default" />

        {image && (
          <View>
            <CustomButton onPress={submitToGoogle} title="Analyze!" />
          </View>
        )}
      </View>
    </ScrollView>
  );
};

async function uploadImageAsync(uri) {
  const blob = await new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.onload = function () {
      resolve(xhr.response);
    };
    xhr.onerror = function (e) {
      console.log(e);
      reject(new TypeError("Network request failed"));
    };
    xhr.responseType = "blob";
    xhr.open("GET", uri, true);
    xhr.send(null);
  });

  const fileRef = ref(storage, uuid.v4());
  const result = await uploadBytes(fileRef, blob);

  blob.close();

  return await getDownloadURL(fileRef);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#7A918D",
  },
  bestGuess: {
    fontFamily: "Virgil",
    fontWeight: "700",
  },
});

export default IdentifyBird;

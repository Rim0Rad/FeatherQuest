import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  Dimensions,
  Button,
  TouchableOpacity,
} from "react-native";
import { db } from "../firebaseConfig";
import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import CustomButton from "./CustomButton";

export default Species = ({ navigation }) => {
  const [birds, setBirds] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  
  useEffect(() => {
    const fetchBirds = async () => {
      try {
        setLoading(true);
        const querySnapshot = await getDocs(collection(db, "birds"));
        const birdData = querySnapshot.docs.map((doc) => doc.data());
        setBirds(birdData);
      } catch (error) {
        console.log("Error fetching birds:", error.message);
        setError("Failed to fetch bird data. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchBirds();
  }, []);

  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.header}>All Birds</Text>
        {loading && <Text>Loading...Please Wait</Text>}

        <View style={styles.buttonContainer}>
          <CustomButton title="Go Back" onPress={() => navigation.goBack()} />
        </View>
        <View style={styles.row}>
          {birds.map((bird, index) => (
            <View key={index} style={styles.birdCard}>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate("Bird", bird);
                }}
              >
                <Image
                  source={{
                    uri: bird.bird_image_url,
                  }}
                  style={styles.image}
                />
              </TouchableOpacity>
              <Text style={styles.birdName}>{bird.common_name}</Text>
            </View>
          ))}
        </View>
      </View>
      {error && <Text>{error}</Text>}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#7A918D",
    alignItems: "center",
    paddingTop: 20,
    paddingBottom: 40,
  },
  row: {
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "flex-start",
  },
  image: {
    width: "100%",
    aspectRatio: 1,
    resizeMode: "cover",
    marginBottom: 10,
  },
  header: {
    color: "white",
    textAlign: "center",
    marginTop: 10,
    marginBottom: 0,
    fontWeight: "bold",
    fontSize: 30,
  },
  birdCard: {
    width: "33%",
    height: 180,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: "#A18276",
    borderRadius: 5,
    padding: 10,
    backgroundColor: "#AAC0AA",
  },
  birdName: {
    color: "white",
    textAlign: "center",
    fontSize: 14,
    marginBottom: 5,
  },
  buttonContainer: {
    marginBottom: 15,
  },
});

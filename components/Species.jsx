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

let width = Dimensions.get("window").width;

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

        <Button title="Go Back" onPress={() => navigation.goBack()} />

        {birds.map((bird, index) => (
          <View key={index} style={styles.birdCard}>
            <Text style={styles.birdName}>{bird.common_name}</Text>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("Bird", bird);
                // console.log(bird);
              }}
            >
              <Image
                source={{
                  uri: bird.bird_image_url,
                }}
                style={styles.image}
              />
            </TouchableOpacity>
          </View>
        ))}
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
    justifyContent: "center",
  },
  image: {
    width: width * 0.8,
    aspectRatio: 1,
    resizeMode: "contain",
    alignSelf: "center",
    justifyContent: "center",
  },
  header: {
    textAlign: "center",
    marginTop: 10,
    marginBottom: 10,
    fontWeight: "bold",
    fontSize: 40,
  },
  birdCard: {
    marginBottom: 20,
  },
  birdName: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 25,
    marginBottom: 5,
  },
});

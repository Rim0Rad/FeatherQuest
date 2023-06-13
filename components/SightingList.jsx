import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  Dimensions,
  Button,
} from "react-native";
import { db } from "../firebaseConfig";
import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";

let width = Dimensions.get("window").width;

export default Species = ({ navigation }) => {
  const [allSightings, setAllSightings] = useState([]);
  const [allBirds, setAllBirds] = useState([]);
  const [allUsers, setAllUsers] = useState([]);

  useEffect(() => {
    const fetchAllBirds = async () => {
      try {
        const [birdsQuerySnapshot, sightingsQuerySnapshot, usersQuerySnapshot] =
          await Promise.all([
            getDocs(collection(db, "birds")),
            getDocs(collection(db, "sightings")),
            getDocs(collection(db, "users")),
          ]);
        const birdData = birdsQuerySnapshot.docs.map((doc) => doc.data());
        const sightingsData = sightingsQuerySnapshot.docs.map((doc) =>
          doc.data()
        );
        const usersData = usersQuerySnapshot.docs.map((doc) => doc.data());

        setAllSightings(sightingsData);
        setAllBirds(birdData);
        setAllUsers(usersData);
        
      } catch (error) {
        console.log(error);
      }
    };

    fetchAllBirds();
  }, []);

  let matchedSightings = [];
  if (allSightings.length > 0 && allBirds.length > 0) {
    matchedSightings = allSightings.map((sighting) => {
      const result = allBirds.find((bird) => bird.id === sighting.bird);
      return result;
    });
  }
  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.header}>All Sightings</Text>
        <Button title="Go Back" onPress={() => navigation.goBack()} />

        {matchedSightings.length > 0 &&
          matchedSightings.map((bird, index) => (
            <View key={index} style={styles.birdCard}>
              <Text style={styles.birdName}>{bird.common_name}</Text>
              <Image
                source={{
                  uri: bird.bird_image_url,
                }}
                style={styles.image}
              />
            </View>
          ))}
      </View>
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

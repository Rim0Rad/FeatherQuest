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
import { db, auth } from "../firebaseConfig";
import { useEffect, useState, useContext } from "react";
import { collection, getDocs } from "firebase/firestore";
import { UserContext } from "../utils/UserContext";
import { getUserData } from "../utils/pullUserInfo";

let width = Dimensions.get("window").width;

export default SightingList = ({ navigation }) => {
  const [allSightings, setAllSightings] = useState([]);
  const [allBirds, setAllBirds] = useState([]);
  const [allUsers, setAllUsers] = useState([]);
  const [allComments, setAllComments] = useState([]);

  useEffect(() => {
    const fetchAllBirds = async () => {
      try {
        const [
          birdsQuerySnapshot,
          sightingsQuerySnapshot,
          usersQuerySnapshot,
          commentsQuerySnapshot,
        ] = await Promise.all([
          getDocs(collection(db, "birds")),
          getDocs(collection(db, "sightings")),
          getDocs(collection(db, "users")),
          getDocs(collection(db, "comments")),
        ]);
        const birdData = birdsQuerySnapshot.docs.map((doc) => doc.data());
        const sightingsData = sightingsQuerySnapshot.docs.map((doc) =>
          doc.data()
        );
        const usersData = usersQuerySnapshot.docs.map((doc) => doc.data());
        const commentsData = commentsQuerySnapshot.docs.map((doc) =>
          doc.data()
        );

        setAllSightings(sightingsData);
        setAllBirds(birdData);
        setAllUsers(usersData);
        setAllComments(commentsData);
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
      const findUser = allUsers.find((user) => user.id === sighting.user);
      return { ...result, ...sighting, ...findUser };
    });
  }

  return (
    
    <ScrollView >
      <View style={styles.container}>
        <Text style={styles.header}>All Sightings</Text>
        <Button title="Go Back" onPress={() => navigation.goBack()} />

        {matchedSightings.length > 0 &&
          matchedSightings.map((bird, index) => (
            <View key={index} style={styles.birdCard}>
              <Text style={styles.birdName}>{bird.bird}</Text>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate("Sighting", bird);
                }}
              >
                <Image
                  source={{
                    uri: bird.sighting_img_url,
                  }}
                  style={styles.image}
                />
              </TouchableOpacity>
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
    fontFamily: "Virgil",
    textAlign: "center",
    marginTop: 10,
    marginBottom: 10,
    fontSize: 40,
  },
  birdCard: {
    marginBottom: 20,
  },
  birdName: {
    fontFamily: "Virgil",
    textAlign: "center",
    fontSize: 25,
    marginBottom: 5,
  },
});

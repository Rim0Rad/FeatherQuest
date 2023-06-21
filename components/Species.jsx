import { StatusBar } from "expo-status-bar";
import {
  Text,
  View,
  Image,
  ScrollView,
  Dimensions,
  Button,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { db } from "../firebaseConfig";
import { useEffect, useState } from "react";
import {
  collection,
  getCountFromServer,
  getDocs,
  limit,
  query,
  startAfter,
  orderBy,
} from "firebase/firestore";
import CustomButton from "./CustomButton";
import { styles, textStyles } from "../styles/style.js";

let height = Dimensions.get("window").height;

export default Species = ({ navigation }) => {
  const [birds, setBirds] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredList, setFilteredList] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [reachedEnd, setReachedEnd] = useState(false);

  useEffect(() => {
    const fetchBirds = async () => {
      try {
        setLoading(true);
        const speciesRef = collection(db, "birds");
        const speciesSnapshot = await getCountFromServer(speciesRef);
        const totalSpecies = speciesSnapshot.data().count;
        const q = query(
          speciesRef,
          orderBy("common_name", "asc"),
          limit(currentPage * 9)
        );
        if (currentPage === 1) {
          const querySnapshot = await getDocs(q);
          const birdData = querySnapshot.docs.map((doc) => doc.data());
          setBirds(birdData);
          setFilteredList(birdData);
        } else {
          const startAfterDoc = birds[birds.length - 1];
          const qWithPagination = query(
            speciesRef,
            orderBy("common_name", "asc"),
            startAfter(startAfterDoc.common_name),
            limit(currentPage * 9)
          );
          const querySnapshot = await getDocs(qWithPagination);
          const birdData = querySnapshot.docs.map((doc) => doc.data());
          setBirds((prevBirds) => [...prevBirds, ...birdData]);
          setFilteredList((prevList) => [...prevList, ...birdData]);
        }

        if (currentPage * 9 >= totalSpecies) {
          setReachedEnd(true);
        }
      } catch (error) {
        console.log("Error fetching birds:", error.message);
        setError("Failed to fetch bird data. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchBirds();
  }, [currentPage]);

  useEffect(() => {
    setFilteredList(
      birds.filter((bird) => {
        return bird.common_name
          .toLowerCase()
          .includes(searchQuery.toLowerCase());
      })
    );
  }, [searchQuery, birds]);

  function isCloseToBottom({ layoutMeasurement, contentOffset, contentSize }) {
    return (
      layoutMeasurement.height + contentOffset.y >= contentSize.height - 20
    );
  }

  return (
    <ScrollView
      style={styles.scrollView}
      onScroll={({ nativeEvent }) => {
        if (isCloseToBottom(nativeEvent) && !loading && !reachedEnd) {
          setCurrentPage((prevPage) => prevPage + 1);
        }
      }}
      scrollEventThrottle={400}
    >
      <View style={styles.pageContainer}>
        <View style={styles.titleContainer}>
          <Text style={textStyles.titleText}>All Birds</Text>
        </View>
        {loading && (
          <Text style={styles.loadingText}>Loading...Please Wait</Text>
        )}

        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.goBack()}
          >
            <Text style={styles.buttonText}>Go Back</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.inputContainer}>
          <TextInput
            autoCapitalize="none"
            placeholder="Search for a bird"
            maxLength={50}
            style={styles.input}
            value={searchQuery}
            onChangeText={(text) => setSearchQuery(text)}
          />
        </View>

        {filteredList.length === 0 ? (
          <View>
            <Text style={styles.warningText}>
              Oops. Nothing here, please search again...
            </Text>
          </View>
        ) : null}

        <View style={styles.listContainer}>
          {filteredList.map((bird, index) => (
            <TouchableOpacity
              key={index}
              style={styles.birdCardContainer}
              onPress={() => {
                navigation.navigate("Bird", bird);
              }}
            >
              <View style={styles.birdCardImageContainer}>
                <Image
                  source={{
                    uri: bird.bird_image_url,
                  }}
                  style={[styles.birdCardImage]}
                />
              </View>
              <Text
                style={textStyles.text}
                numberOfLines={2}
                ellipsizeMode="tail"
              >
                {bird.common_name}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
      {error && <Text style={textStyles.warningText}>{error}</Text>}
    </ScrollView>
  );
};

import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  ScrollView,
} from "react-native";

let width = Dimensions.get("window").width;

export default Bird = ({ route, navigation }) => {
  const {
    common_name,
    bird_image_url,
    description,
    weight,
    height,
    latin_name,
    diet,
    order,
    suborder,
    family,
    subfamilies,
    facts,
    rarity,
  } = route.params;
  return (
    <ScrollView>
      <View style={styles.container}>
        <View>
          <Text style={styles.header}>{common_name}</Text>
          <Text style={styles.header}>Rarity: {rarity}</Text>
        </View>
        <View>
          <Image
            source={{
              uri: bird_image_url,
            }}
            style={styles.image}
          />
        </View>
        <View style={styles.birdDetails}>
          <Text style={styles.detailsText}>Weight: {weight}</Text>
          <Text style={styles.detailsText}>Height: {height}</Text>
          <Text style={styles.detailsText}>Latin Name: {latin_name}</Text>
        </View>
        <View>
          <Text style={styles.mainText}>{description}</Text>
        </View>
        <View style={styles.hr}></View>
        <View>
          <Text style={styles.mainText}>Family: {family}</Text>
          <Text style={styles.mainText}>Sub Families: {subfamilies}</Text>
          <Text style={styles.mainText}>Order: {order}</Text>
          <Text style={styles.mainText}>Suborder: {suborder}</Text>
          <Text style={styles.mainText}>Diet: {diet}</Text>
        </View>
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
  header: {
    textAlign: "center",
    marginTop: 10,
    marginBottom: 10,
    fontWeight: "bold",
    fontSize: 40,
    color: "white",
  },
  image: {
    width: width * 0.8,
    aspectRatio: 1,
    resizeMode: "contain",
    alignSelf: "center",
    justifyContent: "center",
  },
  mainText: {
    textAlign: "center",
    margin: 10,
    textAlign: "justify",
    color: "white",
  },
  birdDetails: {
    textAlign: "center",
    margin: 10,
    textAlign: "justify",
  },
  detailsText: {
    color: "white",
    fontStyle: "italic",
  },
  hr: {
    width: "100%",
    padding: 1,
    backgroundColor: "black",
  },
});

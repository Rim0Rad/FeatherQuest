import React, { useEffect, useState, useContext } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { pullBirdsById } from "../utils/pullBirdsById";
import { UserContext } from "../utils/UserContext";
import { styles, textStyles, profileStyles } from "../styles/style.js"

function UserPerchAlerts({ birds, user, navigation }) {
  const [userBird, setUserBird] = useState([]);
  const { globalUser, setGlobalUser } = useContext(UserContext);

  useEffect(() => {
    if (user.userId) {
      if (birds.length !== 0) {
        pullBirdsById(birds)
          .then((data) => {
            setUserBird([...data]);
          })
          .catch((err) => {
            console.log("no birds");
          });
      } else {
        setUserBird([]);
      }
    }
  }, [user]);
  
  return (
    <View style={profileStyles.perchContainer}>

      <Text style={textStyles.textMedium}>Perch Alerts</Text>

      {userBird.length !== 0 ? (
        
        <ScrollView horizontal={true} style={styles.scrollViewHorizontal}>
          {userBird.map((bird) => {
          return (

            <TouchableOpacity key={bird["id"] + bird["common_name"]}
              onPress={() => { navigation.navigate("Bird", bird) }}
              style={styles.birdCardContainerHorizontal}>
              {/* <View > */}
                <View style={styles.birdCardImageContainer}>
                  <Image
                    source={{ uri: bird["bird_image_url"] }}
                    style={styles.birdCardImage}
                    />
                </View>
                <Text style={textStyles.text}>{bird["common_name"]}</Text>
              {/* </View> */}
            </TouchableOpacity>
            
          );
        })}
        </ScrollView>

      ) : (
        /* Empty perch alert message*/
        <View style={styles.container}>
          <Text style={textStyles.textMedium}> You do no have any birds in your Perch Alert </Text>
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.button} onPress={() => {navigation.navigate("Species")}}>
              <Text style={textStyles.buttonText}> Find some!</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}

  </View>
  );
}

// const styles = StyleSheet.create({
//   textStyling: {
//     fontFamily: "Virgil",
//     fontSize: 25,
//     color: "#C7CCDB",
//     top: 60,
//   },
//   userSightingText: {
//     fontFamily: "Virgil",
//     fontSize: 11,
//     color: "#C7CCDB",
//     textAlign: "center",
//   },
//   userSightingText2: {
//     fontSize: 18,
//     color: "#C7CCDB",
//     textAlign: "center",
//   },

//   ScrollViewContainer: {
//     alignItems: "center",
//     justifyContent: "center",
//     // backgroundColor: 'blue',
//     width: width,
//     top: 140,
//   },

//   userSights: {
//     width: 90,
//     height: 90,
//     backgroundColor: "red",
//     margin: 8,
//     borderRadius: 10,

//     // flexDirection: 'row',
//   },
//   perchAlerts: {
//     backgroundColor: "#7A918D",
//     width: width,
//     flex: 1,
//     alignItems: "center",
//     top: 40,
//     fontSize: "20px",
//     fontWeight: "bold",
//   },
// });

export default UserPerchAlerts;

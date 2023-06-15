import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image, Dimensions } from "react-native";
import { getUserData } from "../utils/pullUserInfo";
import { useEffect, useState, useContext } from "react";
import UserPerchAlerts from "./UserPerchAlerts";
import { auth } from "../firebaseConfig";
import { UserContext } from "../utils/UserContext";

let width = Dimensions.get("window").width;

export default Profile = () => {
  const { globalUser } = useContext(UserContext);
  const [user, setUser] = useState({});

  useEffect(() => {
    getUserData(globalUser.uid)
      .then((data) => {
        console.log(data);

        setUser({
          firstName: data.first_name,
          secondName: data.last_name,
          region: data.location,
          username: data.screen_name,
          profilePic: data.profile_image_url,
          perchList: [...data.perch_list],
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  // console.log(user);
  return (
    <View style={styles.container}>
      <View style={styles.userInfocontainer}>
        <Image source={{ uri: user.profilePic }} style={styles.profilePic} />
        <View style={styles.userInfo}>
          <Text style={styles.textStyling}>Username - {user.username}</Text>
          <Text style={styles.textStyling}>Forename - {user.firstName}</Text>
          <Text style={styles.textStyling}>Surname - {user.secondName}</Text>
          <Text style={styles.textStyling}>Region - {user.region}</Text>
        </View>
      </View>
      <UserPerchAlerts birds={user.perchList} user={user} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    backgroundColor: "#AAC0AA",
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
  },
  textStyling: {
    fontSize: 16,
    color: "#344055",
  },

  userInfocontainer: {
    // backgroundColor: "skyblue",
    alignItems: "center",
    justifyContent: "center",
    width: "90%",
    height: 200,
    top: 10,
  },
  profilePic: {
    position: "absolute",
    left: 20,
    width: 130,
    height: 130,
    aspectRatio: 1,
    padding: 10,
    borderRadius: 10,
    // resizeMode: "contain",
  },
  userInfo: {
    // backgroundColor: 'red',
    position: "absolute",
    width: 200,
    right: 20,
  },
  userSights: {
    width: 60,
    height: 60,
    backgroundColor: "red",
    margin: 8,

    // flexDirection: 'row',
  },
  perchAlerts: {
    marginTop: 170,
    // backgroundColor: 'pink',
    width: width,
    flex: 1,
    flexDirection: "row",
    // flexWrap:'wrap',
  },
});

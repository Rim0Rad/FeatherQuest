import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image, Dimensions } from "react-native";
import { getUserData } from "../utils/pullUserInfo";
import { useEffect, useState } from "react";
import UserBirdSightings from "./UserBirdSightings";


let width = Dimensions.get("window").width;


export default Profile = () => {
  const [user, setUser] = useState({})


useEffect(() => {
  getUserData().then((data) => {
    const perchAlert = [];
    data[3].perch_list.arrayValue.values.forEach(birdId => {
      perchAlert.push(birdId.integerValue)
    })
    setUser({
      firstName: data[3].first_name.stringValue,
      secondName: data[3].last_name.stringValue,
      region: data[3].location.stringValue,
      username: data[3].first_name.stringValue,
      profilePic: data[3].profile_image_url.stringValue,
      perchList: perchAlert,
    })

  }).catch((err) => {

  })
}, [])

  return (
    <View style={styles.container}>

      <View style={styles.userInfocontainer}>
      <Image source={{uri: user.profilePic}} style={styles.profilePic} />
      <View style={styles.userInfo}>
        <Text style={styles.textStyling}>Forename - {user.firstName}</Text>
        <Text style={styles.textStyling}>Surname - {user.secondName}</Text>
        <Text style={styles.textStyling}>Region - {user.region}</Text>
        <Text style={styles.textStyling}>Username - {user.firstName}e</Text>
      </View>
      </View>
      <UserBirdSightings birds = {user.perchList} user={user}/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    backgroundColor: "#AAC0AA",
    alignItems: "center",
    justifyContent: "center",
    height: '100%'

  },
  textStyling:{
    fontSize: 16,
    color: '#344055'
   },
 
  userInfocontainer: {
    // backgroundColor: "skyblue",
    alignItems: "center",
    justifyContent: "center",
    width: '90%',
    height: 200,
    top: 10,
  },
  profilePic: {
    position:'absolute',
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
    position: 'absolute',
    width: 200,
    right: 20,
    
  },
  userSights: {
    width: 60,
    height: 60,
    backgroundColor: 'red',
    margin: 8,
    
    // flexDirection: 'row',
    
  },
  perchAlerts: {
    marginTop: 170,
    // backgroundColor: 'pink',
    width: width,
    flex: 1,
    flexDirection:'row', 
    // flexWrap:'wrap',

  }
});



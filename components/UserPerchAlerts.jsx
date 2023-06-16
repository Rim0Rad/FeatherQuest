import React, { useEffect, useState, useContext } from 'react'
import { StyleSheet, Text, View, Image, Dimensions, ScrollView, TouchableOpacity } from "react-native";
import { pullBirdsById } from '../utils/pullBirdsById';
let width = Dimensions.get("window").width;
import { UserContext } from '../utils/UserContext';


function UserPerchAlerts({birds, user, navigation}) {
const [userBird, setUserBird] = useState([]);
const {globalUser, setGlobalUser} = useContext(UserContext)


useEffect(() =>{
if(user.first_name){
  if(birds.length !== 0){
  pullBirdsById(birds)
  .then((data) => {
      setUserBird([...data])
  }).catch((err)=>{
    console.log('no birds');
  })
} else {
setUserBird([])
}
}
}, [user])
  return (
    <View style={styles.perchAlerts}>
     
        <Text style={styles.textStyling}>Perch Alerts</Text>
        <View style={styles.ScrollViewContainer}>
        <ScrollView horizontal={true}>
    { userBird.length !== 0 ?
      userBird.map(bird=>{

        return (
          <TouchableOpacity
          key={bird['id'] + bird["common_name"]}
          onPress={() => {
            navigation.navigate("Bird", bird);
          }}
        >
              <View>  
              <Text style={styles.userSightingText}>{bird["common_name"]}</Text>
              <Image source={{uri: bird["bird_image_url"]}} style={styles.userSights} />
              </View>

        </TouchableOpacity>
        )
      })
      :
      <View>
        <Text style={styles.userSightingText2}>You do no have any birds in your Perch Alert</Text>
        <TouchableOpacity
        onPress={() => {
          navigation.navigate("Species");
        }}
        >
        <Text style={styles.userSightingText2}>Click Here to find some!</Text>
        </TouchableOpacity>

      </View>
      
    }
        </ScrollView>
        </View>
        
    </View>
  )
}

const styles = StyleSheet.create({
  textStyling:{
   fontSize: 25,
   color: '#C7CCDB',
   top: 60,
  },
  userSightingText:{
    fontSize: 11,
    color: '#C7CCDB',
   textAlign: 'center',

  },
  userSightingText2:{
    fontSize: 18,
    color: '#C7CCDB',
   textAlign: 'center',

  },

  ScrollViewContainer:{
    alignItems: "center",
    justifyContent: "center",
    // backgroundColor: 'blue',
    width: width,
    top: 140,

  },

  userSights: {
    width: 90,
    height: 90,
    backgroundColor: 'red',
    margin: 8,
    borderRadius: 10,
    
    // flexDirection: 'row',
    
  },
  perchAlerts: {

    backgroundColor: '#7A918D',
    width: width,
    flex: 1,
    alignItems: "center",
    top: 40,
    fontSize: '20px',
    fontWeight: 'bold',


  }
});

export default  UserPerchAlerts;
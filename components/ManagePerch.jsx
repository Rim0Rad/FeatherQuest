
import {
    StyleSheet,
    Text,
    View,
    Image,
    Dimensions,
    ScrollView,
    TouchableOpacity,
  } from "react-native";
  import { addToPerchAlert, removeFromPerchAlert } from "../utils/managePerchAlert";
  import { useContext, useEffect, useState } from "react";
  import { UserContext } from "../utils/UserContext";
  import { getUserData } from "../utils/pullUserInfo";

 function ManagePerch({id}) {
    const { globalUser, setGlobalUser } = useContext(UserContext)
    const [ birdAdded, setBirdAdded] = useState(false);

function handleAddBird(){
    addToPerchAlert(id, globalUser.userId)
    .then(()=>{
    getUserData(globalUser.userId)
    .then((data)=>{
        setGlobalUser((currUser) => {
       return( 
        {
        userId: currUser.userId,
        first_name: data.first_name,
        last_name: data.last_name,
        location: data.location,
        username: data.username,
        profile_image_url: data.profile_image_url,
        perch_list: [...data.perch_list],
        })
        })
    })
    }).catch((err) =>{
        console.log(err);
    })
}
    
function handleRemoveBird(){
  removeFromPerchAlert(id, globalUser.userId)
  .then(()=>{
  getUserData(globalUser.userId)
  .then((data)=>{
      setGlobalUser((currUser) => {
     return( 
      {
      userId: currUser.userId,
      first_name: data.first_name,
      last_name: data.last_name,
      location: data.location,
      username: data.username,
      profile_image_url: data.profile_image_url,
      perch_list: [...data.perch_list],
      })
      })
  })
  }).catch((err) =>{
      console.log(err);
  })
}

useEffect(()=>{
    if(globalUser.perch_list.includes(id)){
        setBirdAdded(true);
    } else {
        setBirdAdded(false);
    }

}, [globalUser])

  return (
    <View>
      { birdAdded ? 
        <TouchableOpacity
          onPress={() => {
            handleRemoveBird();
           
          }}
          style={styles.addContainer}
        >
          <Image
            source={require("../assets/added.png")}
            style={styles.image}
          />
          <Text>Saved to Perch Alert!</Text>
        </TouchableOpacity>
          :
          <TouchableOpacity
          onPress={() => {

            handleAddBird();
          }}
          style={styles.addContainer}
        >
          <Image
            source={require("../assets/add.png")}
            style={styles.image}
          />
          <Text>Add to Perch Alert</Text>
        </TouchableOpacity>
        }
      </View>
  )
}

const styles = StyleSheet.create({
  addContainer:{
    justifyContent: 'center',
  },
  image: {
    alignSelf: "center",}
})


export default ManagePerch;
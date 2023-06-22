
import MapView, { PROVIDER_GOOGLE } from "react-native-maps"; //https://github.com/react-native-maps/react-native-maps/blob/master/docs/mapview.md
import { View, Text, StyleSheet } from "react-native";
import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState, useContext } from "react";
import { db } from "../../firebaseConfig.js";
import { UserContext } from "../../utils/UserContext.js";

import SightingMarker from "./SightingMarker.jsx";
import mapStyle from "../../styles/mapStyle.js";
import * as React from "react";
import { smallMapStyles, styles, textStyles } from "../../styles/style.js"


export default Maps = ({ navigation }) => {
  const [sightingsList, setSightingList] = useState([]);
  const [loadingMarkers, setLoadingMarkers] = useState(true);
  const [mapCentered, setMapCentered] = useState(false);
  const { globalUser } = useContext(UserContext);
  const [region,setRegion] = useState({})

  useEffect(() => {
    if (globalUser !== null) {
      setRegion({
        latitude: Number(globalUser.coordinates[0]),
        longitude: Number(globalUser.coordinates[1]),
        latitudeDelta: 0.01,
        longitudeDelta: 0.01,
      });
    }
  },[globalUser])



  //Fetch sightings data
  useEffect(() => {
    getDocs(collection(db, "sightings"))
    .then((data) => {
        const sightingArr =  []
        data.forEach( sighting => {
          sightingArr.push( sighting.data())
        })
        setSightingList(sightingArr)
        setLoadingMarkers(false)
    })
    .catch( err => {
      console.log(" Failed to fetch sightings", err)
    })
  }, [])

  if( loadingMarkers ){
    return <Text style={textStyles.loadingText}>Loading...</Text>
  }else{
    return (
      <View style={styles.pageContainer}>
        <View style={styles.titleContainer}>
          <Text style={textStyles.titleText}>Sightings Near You</Text>
        </View>
        <View style={[smallMapStyles.container, {widht: 200, height: 200}]}>
          <View style={smallMapStyles.mapContainer}>
            <MapView 
              provider={PROVIDER_GOOGLE}
              onRegionChangeComplete={()=> { setMapCentered(true)} }
              onRegionChange={()=> { setMapCentered(false)} }
              style={smallMapStyles.map}
              initialRegion={region}
              customMapStyle={mapStyle}
              >
              {sightingsList.map( (sighting) => {
                return <SightingMarker key={sighting.created_at} navigation={navigation} sighting={sighting} mapCentered={mapCentered} setMapCentered={setMapCentered}/>
              })}
            </MapView>
          </View>

        </View>
      </View>
    );
  }
};

// const styles = StyleSheet.create({
//   container:{
//     backgroundColor: "#7A918D",
//     borderWidth: 2,
//     color: 'red'
//   },
//   headerContainer:{
//     backgroundColor: "#7A918D",
//     borderWidth: 2,
//     color: 'red'
//   },
//   headerText: {
//     minHeight: '5%',
//     textAlign: 'center',
//     fontSize: 20,
//     color: 'white',
//     backgroundColor: "#7A918D"

//   },
//   mapContainer: {
//     borderRadius: 10, 
//     borderWidth: 5,
//     borderColor: '#7A918D',
//     margin: 10,
//     overflow: 'hidden',
//     minHeight: "90%",
//     backgroundColor: "#7A918D"
// },
//   map: {
//     ...StyleSheet.absoluteFillObject,
//   },
// })


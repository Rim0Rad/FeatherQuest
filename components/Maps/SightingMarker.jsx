import { collection, getDocs, where, query } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../../firebaseConfig.js";
import { Marker } from "react-native-maps";
import {  Image } from 'react-native';

import SightingCard from "./SightingCard.jsx";

export default SightingMarker = ({
  navigation,
  sighting,
  mapCentered,
  setMapCentered,
}) => {
  const [sightedBird, setSightedBird] = useState([]);
  const [loadingBirds, setLoadingBirds] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [markerPressed, setMarkerPressed] = useState(false);
  const [marker, setMarker] = useState(null);
  const [markerImageLoaded, setMarkerImageLoaded] = useState(false);

  //Fetch data of sightings bird
  useEffect(() => {

    const fetchData = async () => {
        try {
            setLoadingBirds(true);
            const getSightings = await getDocs(query(collection(db, "birds"), where("common_name", "==", sighting.bird)));
            const birdArr = getSightings.docs.map((bird) => bird.data());
            setSightedBird(birdArr);
            setLoadingBirds(false);
        } catch (err) {
            console.log(err)
        }
    }

    fetchData();

}, []);

  //Gett coordinates for a marker
  const sightingCoordinates = {
    latitude: Number(sighting.coordinates.coordinates[0].toFixed(4)),
    longitude: Number(sighting.coordinates.coordinates[1].toFixed(4)),
    latitudeDelta: 0.02,
    longitudeDelta: 0.02,
  };

  const markerImage = require("../../assets/bino2_small.png");

//   if (loadingBirds) {
//     return;
//   }
  return (
    <>
      {loadingBirds ? null : (
        <Marker
          coordinate={sightingCoordinates}
          title="Sighting"
          description="Sighting description"
          tracksViewChanges={false}
          onPress={() => {
            setMarkerPressed(true);
            marker.showCallout();
            setModalVisible(true);
          }}
          ref={(ref) => {
            setMarker(ref);
          }}
        >
          <Image
            style={{ height: 50, aspectRatio: 1,resizeMode: "contain" }}
            source={markerImage}
            onLoad={() => setMarkerImageLoaded(true)}
          />
          {markerImageLoaded && (
            <SightingCard
              sightedBird={sightedBird[0]}
              navigation={navigation}
              sighting={sighting}
              modalVisible={modalVisible}
              setModalVisible={setModalVisible}
              marker={marker}
              mapCentered={mapCentered}
              setMapCentered={setMapCentered}
            />
          )}
        </Marker>
      )}
    </>
  );
};

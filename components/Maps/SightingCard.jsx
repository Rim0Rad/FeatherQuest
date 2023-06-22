import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity} from 'react-native';
import React, { useEffect, useState } from 'react';
import { Callout } from 'react-native-maps';
import dayjs from "dayjs";
import { styles, textStyles } from '../../styles/style.js'
import Modal from "react-native-modal";

// ISUE: The image in the card does note render at first time the callout opens. Image appears on the third press of the marker
export default SightingCard = ( { sightedBird, navigation, sighting, modalVisible, setModalVisible, marker,  mapCentered}) => {
   
   
    // function cacheImages(images) {
    //     return images.map(image => {
    //       if (typeof image === 'string') {
    //         return Image.prefetch(image);
    //       } else {
    //         return Asset.fromModule(image).downloadAsync();
    //       }
    //     });
    // }

    // useEffect( () => {
    //     try {
    //         const imageAssets = cacheImages([
    //             sightedBird.bird_image_url,
    //         ]);
    //         Promise.all([...imageAssets, ])
    //     } catch (err) {
    //         console.log(err)
    //     }
    // }, [])

    //Navigate to Sighting
    function handlePress () {
        setModalVisible(false)
        marker.hideCallout()
        navigation.navigate("Sighting", {...sightedBird, ...sighting})
    }

    
    return (
        <Callout  onPress={handlePress} tooltip>
            <View style={{width: 200, height: 200, overflow: "hidden"}}>
                <Modal isVisible={true} 
                        coverScreen={false}
                        // backdropColor={"white"}
                        backdropOpacity={0}
                        
                        children={
                            <View style={{backgroundColor: "#5e7975", borderRadius: 20, marginTop: 100, borderWidth: 3, borderColor: "#A18276", height: 70}}>
                                <Text style={{color: "white", fontFamily: "Virgil", fontSize: 15, textAlign: 'center', verticalAlign: "top"}}> 
                                    {sightedBird.common_name +" " + dayjs(sighting.date_spotted).format("YYYY-MM-DD HH:mm:ss ")}
                                </Text>
                            </View>
                        }
                        // customBackdrop={ 
                        //     <View style={{width: 200, height: 200, backgroundColor: "#5e7975", borderRadius: 10,borderWidth: 2, borderColor:  "#A18276"}}>
                        //         <Text style={{width: 2, marginTop: -40, textAlign: 'center', width: 200, height: 200}}>
                        //             <Image style={{ borderWidth: 2, height: 150, width: 180}} source={{uri: sightedBird.bird_image_url}}></Image>
                        //         </Text>
                        //     </View>
                        // }
                    >
                </Modal>
            </View>
        </Callout>
    )

        // MIGHT NEED TO REVERT TO THIS CODE
{/* 
            <View style={[styles.birdCardContainerHorizontal, {height: 220, width:400}]}>
                <Text style={{height: 200, width: 180, backgroundColor: "green", paddingBottom: 100, borderRadius: 20, borderWidth: 4}}>
                        <Image style={{height: 100, width: 150, borderWidth: 4}} source={{uri: sightedBird.bird_image_url}}></Image>
                        <Text style={{color: 'white'}}>Birn name</Text>
                     <View style={{backgroundColor: 'green'}}>
                        <Text style={{color: 'white'}}>Date and Time</Text>
                    </View>
                </Text>
            </View> 
            
                
                <View styles={[styles.birdCardImageContainer, { minHeight: 300, minWidth: 300}]}>
                    <Text> 
                        <Image style={{height: 200, width: 200}} source={{uri: sightedBird.bird_image_url, cache: 'only-if-cached'}} tracksViewChanges></Image>
                    </Text>
                    <View style={styles.birdCardImageContainer}>
                        <Modal
                            visible={ modalVisible && mapCentered}
                            transparent={true}
                            hardwareAccelerated={true}
                            animationType='fade'
                            >
                              <TouchableOpacity style={styles.screenOpacity} onPress={()=> {marker.hideCallout(); setModalVisible(false)}}>
                                <TouchableOpacity style={styles.cardOpacity} onPress={handlePress}>
                                <Image style={styles.popupImage} source={{uri: sightedBird.bird_image_url, cache: 'only-if-cached'}} tracksViewChanges></Image>
                                </TouchableOpacity>
                                </TouchableOpacity>

                        </Modal>
                    </View>
                    <View style={textStyles.textContainer}>
                        <Text style={textStyles.text}> {sightedBird.common_name} </Text>
                        <Text style={textStyles.text}>{dayjs(sighting.date_spotted).format("YYYY-MM-DD HH:mm:ss ")}</Text>
                    </View>
                </View>
            */}
    
}

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         flexDirection: 'column',
//         borderWidth: 2,
//         borderRadius: 20,
//         width: 200,
//         height: 200,
//         backgroundColor: '#7A918D',
        
//     },
//     screenOpacity: {
//         flex: 1,
//         justifyContent: 'center',
//         alignItems: 'center',
//         backgroundColor: "rgba(10,10,10,0.3)"
//     },
//     cardOpacity: {
//         flex: 1,
//         justifyContent: 'center',
//         alignItems: 'center',
//         width:200,
//         maxHeight: 200,
//         borderRadius: 20,
//         marginTop: -165
//     },
//     calloutText: {
//         textAlign: 'center',
//         color: "white",
//         fontWeight: 'bold',
//         rowGap: 10,
//     },
//     callout: {
//         height: 200,
//         width: 204,
//         borderWidth: 2,
//         flex: 1,
//         justifyContent: 'center',
//         alignItems: 'center',
//     },
//     popupImage:{
//         height: 140,
//         width: 170,
//     }
// })
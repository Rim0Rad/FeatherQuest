import { View, Text, Image, StyleSheet, Keyboard} from 'react-native';
import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from 'react';
import { db } from '../../firebaseConfig.js'

import AsyncStorage from '@react-native-async-storage/async-storage';
import SelectDropdown from 'react-native-select-dropdown';



export default BirdSelection = ( { setSightingData, sightingData }) => {
    const [ birdList , setBirdList ] = useState([]);
    const [ dropDownMargin, setDropDownMargin ] = useState(-90);

    // AsyncStorage.removeItem('birdList').then( (result) => {
    // })

    Keyboard.addListener('keyboardDidShow', () => {
        setDropDownMargin(245)
    })
    Keyboard.addListener('keyboardDidHide', () => {
        setDropDownMargin(-90)
    })
    
    
    // Get bird images and names to display for selection
    useEffect(() => {
        getLocalBirdList()
        .then( birds => {
            if(Array.isArray(birds)){
                setBirdList(birds)
            }else{
                getDocs(collection(db, "birds"))
                .then((data) => {
                    const arr =  []
                    data.forEach( bird => {
                        arr.push({
                            id: bird.data().id,
                            common_name: bird.data().common_name,
                            sighting_img_url: bird.data().bird_image_url})
                    })
                    setBirdList(arr)
                    //Store the bird data to local storage
                    return AsyncStorage.setItem('birdList', JSON.stringify({arr}))
                })
                .catch( err => console.log(err))
            }
        })
        .catch( err => {
            console.log("Failed to load birds list", err)
        })
    }, [])
    // Retrieve stored list from local storage
    function getLocalBirdList() {
        return AsyncStorage.getItem('birdList')
        .then( result => {
            return JSON.parse(result).arr;
        }).catch( err => {
            console.log( "Failed to load birds from local storage", err)
        })
    }

    const handleBirdSelect = (data) => {
        let tempSightingData = {...sightingData}
        tempSightingData.bird = data.common_name
        tempSightingData.sighting_img_url = data.sighting_img_url
        
        setSightingData(tempSightingData)
    }

    return (
        <View style={styles.containerSelectBirds}>
                <SelectDropdown
                    data={birdList}
                    onSelect={handleBirdSelect}
                    dropdownStyle={ { marginTop: dropDownMargin, minHeight: 500 }}
                    buttonStyle={styles.dropDownButton}
                    rowStyle={styles.dropdownRow}
                    search
                    searchPlaceHolder={"Search..."}
                    searchInputStyle={styles.searchInput}
                    renderCustomizedButtonChild={(selectedItem, index) => {
                        return (
                            <View style={styles.row}>
                                    {selectedItem ? (
                                        <Image source={{uri: selectedItem.sighting_img_url}} style={styles.image}/>
                                        ) : ( 
                                        <Image source={require('../../assets/bird-select.jpg')} style={styles.image}/>
                                        )} 
                                    <Text style={styles.dropDownText} >{selectedItem ? selectedItem.common_name : 'Select Bird'}</Text>
                            </View>
                        );
                    }}
                    renderCustomizedRowChild={(item, index) => {
                        return (
                            <View style={styles.row}>
                                <Image source={{uri: item.sighting_img_url}} style={styles.image}/>
                                <Text style={styles.dropDownText} >{item.common_name}</Text>
                            </View>
                        );
                    }}
                />
        </View>
    )
}

const styles = StyleSheet.create({
    containerSelectBirds: {
        backgroundColor: "#7A918D"
    },
    image: {
        ...StyleSheet.absoluteFillObject,
    },
    dropdownRow: {
        height: 200,
        width: '100%',
    },
    dropDownButton: {
        borderWidth: 2,
        height: 200,
        width: '100%',
        backgroundColor: "#7A918D"
    },
    row: {
        flex:1,
        flexDirection: 'row',
    },
    dropDownText: {
        fontSize: 25,
        margin: 30,
        width: '100%',
        color: 'white',
        fontWeight: 'bold'
    },
    dropDown: {
        flex:1,
        minHeight: 1000,
    },
    searchInput: {
        backgroundColor: "rgb(100, 150, 100)",
    }
})
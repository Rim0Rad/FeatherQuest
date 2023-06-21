import DateTimePicker from '@react-native-community/datetimepicker'; //https://github.com/react-native-datetimepicker/datetimepicker#expo-users-notice
import { Text, View, Button, StyleSheet, TouchableOpacity } from 'react-native';
import { useState } from 'react';
import { styles, textStyles } from '../../styles/style.js'

export default TimeSelector = ( { onChange, setTimeIsSet,  time, setTime } ) => {
    const [ showTime, setShowTime ] = useState(false) 

    return (
        <View>
            <TouchableOpacity style={styles.button} onPress={ () => {setShowTime(true); setTimeIsSet(false)}}>
                <Text style={textStyles.textMedium}>{time}</Text>
            </TouchableOpacity>
            {showTime && <DateTimePicker 
                mode='time' 
                value={new Date()}
                style={styless.timePicker}

                onChange={(event, date) => {
                    setShowTime(false)
                    setTime(date.toLocaleTimeString())
                    setTimeIsSet(true)
                    // onChange(event, date)
                }}
            />} 
        </View>
    )
}

const styless = StyleSheet.create( {
    timePicker: {
        backgroundColor: "red",
        tintColor: "purple",
        overlayColor: "red",
        shadowColor: "red",
        textDecorationColor: "red",

    }
})
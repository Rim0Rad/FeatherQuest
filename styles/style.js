import { StyleSheet, Dimensions } from "react-native";

/*
    Colors:

    darkGreen : #5e7975
    lightGreen: #AAC0AA
    salmon:     #A18276
    pink:       #B24C63
    purple:     #736372
*/

const devBorder = 0;

let SCREEN_WIDTH = Dimensions.get("window").width;
let SCREEN_HEIGHT = Dimensions.get("window").height;

/* Colors */
const darkGreen = "#5e7975";
const lightGreen = "#AAC0AA";
const salmon = "#A18276";
const pink = "#B24C63";
const purple = "#736372";
const textWhite = "white";
const textBlack = "black";
const inputColor = "white";

/* Rarity Colors */
const common = "grey";
const uncomon = "green";
const rare = "blue";
const epic = "purple";
const legendary = "red"

/* Fonts */
const font = "Virgil";

export const styles = StyleSheet.create({
/* Containers */
    scrollView: {
        borderWidth: devBorder,
        minHeight: SCREEN_HEIGHT,
        backgroundColor: darkGreen,
    },
    scrollViewHorizontal: {
        borderWidth: devBorder,
        flex: 1,
        minHeight: 180,
        paddingVertical: 20,
        
    },

    pageContainer: {
        borderWidth: devBorder,
        flex: 1,
        alignItems: "center",
        alignContent: 'center',
        backgroundColor: darkGreen,
        paddingBottom: 70, //necesasary for scroll view
    },

    centeredContainer: {
        borderWidth: devBorder,
        ...StyleSheet.absoluteFillObject,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: -100
    },
    logoContainer:{
        borderWidth: devBorder,
        width: 200,
        height: 200,
    },  
    titleContainer: {
        borderWidth: devBorder,
        maxHeight: 60,
    },
    iconContainer: {
        borderWidth: devBorder,
        justifyContent: "center",
        alignItems: "center",
        width: 60,
        height: 60,
    },
    buttonContainer: {
        borderWidth: devBorder,
        width: "60%",
        justifyContent: "center",
        alignItems: "center",
        marginVertical: 5
    },
    inputContainer: {
        borderWidth: devBorder,
        width: "80%",
        margin: 5,
    },
    listContainer: {
        flex: 1,
        borderWidth: devBorder,
        flexDirection: "row",
        flexWrap: "wrap",
        alignItems: "flex-start",
    },
    birdCardContainer: {
        flex: 1,
        minWidth: "33%",
        maxWidth: "33%",
        height: 200,
        marginBottom: 10,
        borderWidth: 1,
        borderColor: salmon,
        backgroundColor: lightGreen,
        borderRadius: 11,
        // padding: 1,
    },
    birdCardContainerHorizontal: {
        minWidth: 110,
        maxWidth: 160,
        height: 180,
        marginBottom: 10,
        borderWidth: 1,
        borderColor: salmon,
        backgroundColor: lightGreen,
        borderRadius: 10,
        padding: 1,
    },
    /* Images */
    birdCardImageContainer: {
        width: "100%",
        height: "80%",
        borderWidth: 2,
        borderRadius: 10,
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 0,
        borderColor: darkGreen,
        overflow: 'hidden',
    },
    birdCardImage: {
        aspectRatio:1,
        height: "100%",
        width: "100%",
    },
    imagePreviewContainer: {
        margin: 10,
        minHeight: 150,
        width: "60%",
        borderRadius: 20,
        borderWidth: 4,
        borderColor: "#7A918D",
        overflow: 'hidden',
    },
    dateTimeContainer: {
        flexDirection: 'row',
        borderWidth: devBorder,
        width: "60%",
        justifyContent: "center",
        alignItems: "center",
        marginVertical: 5
    },
    /* Input */
    input: {
        fontFamily: font,
        backgroundColor: inputColor,
        paddingHorizontal: 15,
        paddingVertical: 5,
        borderRadius: 10,
        marginTop: 5,
    },
    /*  Button */
    button: {
        backgroundColor: lightGreen,
        borderColor: purple,
        width: "100%",
        paddingHorizontal: 15,
        paddingVertical: 3,
        borderRadius: 10,
        alignItems: "center",
        marginVertical: 2,
        borderWidth: 2,
        shadowRadius: 100,
    },
    disabledButton:{
        opacity: 0.5
    },
    icon:{
        width: 60,
        height: 60,
        alignSelf: "center",
        justifyContent: "center",
    },
    buletPoint:{
        width: 20,
        height: 20,
        alignSelf: "center",
        justifyContent: "center",
    },
    imagePreview: {
        ...StyleSheet.absoluteFillObject,
    },

    /* Containers  */
    container: {
        borderWidth: devBorder,
        flex: 1,
        padding: 5,
        justifyContent: 'center',
        alignItems: 'center',
        width: "100%",
    },
    containerHorizontal:{
        borderWidth: devBorder,
        flex: 1,
        flexDirection: "row",
        padding: 5,
        justifyContent: 'center',
        alignItems: 'center',
        width: "100%",
    },
    containerRight:{
        borderWidth: devBorder,
        flex: 1,
        justifyContent: 'center',
        alignItems:"flex-end",
        width: "100%",
    },
    containerFilledLight: {
        borderWidth: devBorder,
        flex: 1,
        width: "100%",
        padding: 5,
        margin: 2,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        borderWidth: 3,
        backgroundColor: lightGreen,
    },
    containerFilledLightH: {
        borderWidth: devBorder,
        flex: 1,
        flexDirection: "row",
        width: "100%",
        padding: 5,
        margin: 2,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        borderWidth: 3,
        backgroundColor: lightGreen,
    },
    containerFilledDark: {
        borderWidth: devBorder,
        flex: 1,
        width: "100%",
        padding: 5,
        margin: 2,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        borderWidth: 3,
        borderColor: salmon,
        backgroundColor: darkGreen,
    },
    containerFilledPurple: {
        borderWidth: devBorder,
        flex: 1,
        width: "100%",
        padding: 5,
        margin: 2,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        borderWidth: 3,
        borderColor: salmon,
        backgroundColor: purple,
    },
});

export const buttonStyle = StyleSheet.create({
    deleteButton: {
        backgroundColor: pink,
        borderRadius: 20,
        width: 25,
        height: 25,
        justifyContent: "center",
    },
    voteButton: {
        // backgroundColor: pink,
        borderRadius: 20,
        width: 25,
        height: 25,
        justifyContent: "center",
    }
})
export const textStyles = {
    textContainer: {
        borderWidth: devBorder,
        backgroundColor: lightGreen,
        borderRadius: 10,
        margin: 2,
        padding: 5,
    },
    textContainerHorizontal: {
        borderWidth: devBorder,
        flex: 1,
        maxWidth: "100%",
        flexDirection: "row",
        backgroundColor: lightGreen,
        borderRadius: 10,
        paddingHorizontal: 5,
        margin: 2,
    },
    textContainerHorizontalDark: {
        borderWidth: devBorder,
        flex: 1,
        maxWidth: "100%",
        flexDirection: "row",
        backgroundColor: darkGreen,
        borderRadius: 10,
        paddingHorizontal: 5,
        margin: 2,
    },
     titleText: {
        fontFamily: font,
        fontSize: 30,
        textAlign: "center",
        color: textWhite,
        shadowColor: 'black',
        shadowRadius: 10, 
        textShadowColor: lightGreen,
        textShadowRadius: 10,
    },
    text:{
        fontFamily: font,
        textAlign: "center",
        fontSize: 12,
    },
    textEmphasized: {
        fontFamily: font,
        textAlign: "center",
        fontSize: 14,
        textShadowRadius: 2,
        textShadowColor: darkGreen,
    },
    textEmphasizedLight: {
        fontFamily: font,
        color: textWhite,
        textAlign: "center",
        fontSize: 14,
        textShadowRadius: 2,
        textShadowColor: lightGreen,
    },
    
    textLeft: {
        fontFamily: font,
        textAlign: "left",
        paddingHorizontal: 5,
        fontSize: 12,
    },
    textWhite: {
        fontFamily: font,
        textAlign: "center",
        fontSize: 12,
        color: "white"
    },
    textMedium: {
        fontFamily: font,
        textAlign: "center",
        fontSize: 18,
        color: textWhite
    },
    textMediumBlack: {
        flexWrap: "wrap",
        fontFamily: font,
        textAlign: "center",
        fontSize: 18,
    },
    textMediumBlackRight: {
        fontFamily: font,
        fontSize: 18,
        textAlign: "right",
        paddingHorizontal: 20,
    },
    textMediumBlackLeft: {
        fontFamily: font,
        fontSize: 18,
        textAlign: "left",
        paddingHorizontal: 20,
    },
    buttonText: {
        fontFamily: font,
        color: textBlack,
        fontSize: 18,
    },
    buttonDeleteText: {
        fontSize: 18,
        textAlign: "center",
    },

    textClickable: {
        fontFamily: font,
        color: textWhite,
        fontSize: 18,
        textShadowRadius: 10,
        textShadowColor: lightGreen,

    },
    loadingText: {
        fontFamily: font,
        textAlign: "center",
        fontSize: 25,
    },
    warningText: {
        fontFamily: font,
        color: pink,
        textShadowColor: lightGreen,
        textShadowRadius: 5,
        fontSize: 18
    },
}

const profilePicSize = 100;
export const profileStyles = StyleSheet.create({
    avatarContainer: {
        borderWidth: devBorder,
        width: profilePicSize,
        height: profilePicSize,
        maxHeight: profilePicSize,
        maxWidth: profilePicSize,
        minHeight: profilePicSize,
        minWidth: profilePicSize,
        borderWidth: 4,
        borderColor: salmon ,
        borderRadius: 1000,
        overflow: 'hidden',
    },
    userInfoConatainer: {
        borderWidth: devBorder,
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        padding: 5,
        borderWidth: 3,
        borderRadius: 10,
        borderColor: lightGreen,
    },
    perchContainer: {
        borderWidth: devBorder,
        flex: 1,
        minWidth: SCREEN_WIDTH,
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        marginTop: 10,
        marginBottom: 10,
        padding: 5,
        borderWidth: 3,
        borderRadius: 10,
        borderColor: lightGreen,
    },
    
})

export const navStyles = StyleSheet.create({
    fillerHeader: {
        backgroundColor: darkGreen
    },
    navContainer: {
        flexDirection: "row",
        paddingTop: "10%",
        height: 100,
        width: "100%",
        justifyContent: "space-evenly",
        backgroundColor: "#AAC0AA",
    

      },
      image: {
        width: 60,
        height: 60,
        alignSelf: "center",
        justifyContent: "center",
      },
      text: {
        alignSelf: 'center',
        fontFamily:'Virgil',
        fontSize: 20,
      },
})

export const smallMapStyles = StyleSheet.create({
    container:{
        flex: 1,
        borderWidth: 3,
        borderColor: lightGreen,
        borderRadius: 10,
        width: SCREEN_WIDTH,
        height: SCREEN_HEIGHT,
    },
    mapContainer: {
        flex: 1,
        borderWidth: 4,
        borderColor: salmon,
        borderRadius: 10,
        width: "100%",
        height: "100%",
        overflow: 'hidden',
    },
    map: {
        ...StyleSheet.absoluteFillObject,
    },
})

export const dropDownStyle = StyleSheet.create({
  dropDownButton: {
    width: "80%",
    height: 200,
    backgroundColor: darkGreen,
    borderWidth: 3,
    borderColor: lightGreen,
    borderRadius: 10,
    marginVertical: 2,
  },
  dropdownRow: {
    height: 200,
  },
  row: {
    flex: 1,
    flexDirection: "row",
  },
  image: {
    ...StyleSheet.absoluteFillObject,
    maxHeight: 199,
    maxWidth: "100%",
    borderWidth: 2,
  },
  dropDownText: {
    fontSize: 25,
    margin: 30,
    width: "100%",
    color: "white",
    fontFamily: font,
  },
  searchInput: {
    backgroundColor: lightGreen,
    fontFamily: font,
    color: textWhite,
  },
  searchInputText: {
    fontFamily: "Virgil",
    color: "white",
  },
});

export const birdCardStyles = StyleSheet.create({
    cardContainer: {
      flex: 1,
      width: "100%",
      padding: 5,
      margin: 2,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 10,
      borderWidth: 3,
    },
    imageContainer: {
      borderWidth: 5,
      borderColor: "#5e7975",
      borderRadius: 10,
      width: "100%",
      flex: 2,
      overflow: "hidden"
  
    },
    image: {
      width: "100%",
      aspectRatio: 1,
      resizeMode: "contain",
      alignSelf: "center",
      justifyContent: "center",
    },
  });

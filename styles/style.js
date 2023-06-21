import { StyleSheet, Dimensions } from "react-native";

/*
    Colors:
    darkGreen : #5e7975
    lightGreen: #AAC0AA
    salmon:     #A18276
    pink:       #B24C63
    purple:     #736372
*/

const devBoder = 0;

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
/* Fonts */
const font = "Virgil";

export const styles = StyleSheet.create({
  /* Containers */
  scrollView: {
    borderWidth: devBoder,
    minHeight: SCREEN_HEIGHT,
    backgroundColor: darkGreen,
  },
  scrollViewHorizontal: {
    borderWidth: devBoder,
    flex: 1,
    minHeight: 180,
    paddingVertical: 20,
  },

  pageContainer: {
    borderWidth: devBoder,
    flex: 1,
    alignItems: "center",
    alignContent: "center",
    backgroundColor: darkGreen,
    paddingBottom: 70, //necesasary for scroll view
  },

  centeredContainer: {
    borderWidth: devBoder,
    ...StyleSheet.absoluteFillObject,
    alignItems: "center",
    justifyContent: "center",
    marginTop: -100,
  },
  logoContainer: {
    borderWidth: devBoder,
    width: 200,
    height: 200,
  },
  titleContainer: {
    borderWidth: devBoder,
    maxHeight: 60,
  },
  iconContainer: {
    borderWidth: devBoder,
    justifyContent: "center",
    alignItems: "center",
    width: 60,
    height: 60,
  },
  buttonContainer: {
    borderWidth: devBoder,
    width: "60%",
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 5,
  },
  inputContainer: {
    borderWidth: devBoder,
    width: "80%",
    margin: 5,
  },
  listContainer: {
    flex: 1,
    borderWidth: devBoder,
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
    overflow: "hidden",
  },
  birdCardImage: {
    aspectRatio: 1,
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
    overflow: "hidden",
  },
  dateTimeContainer: {
    flexDirection: "row",
    borderWidth: devBoder,
    width: "60%",
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 5,
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
  disabledButton: {
    opacity: 0.5,
  },
  icon: {
    width: 60,
    height: 60,
    alignSelf: "center",
    justifyContent: "center",
  },
  imagePreview: {
    ...StyleSheet.absoluteFillObject,
  },

  /* Profile */
  container: {
    borderWidth: devBoder,
    flex: 1,
    padding: 5,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  containerFilledLight: {
    borderWidth: devBoder,
    flex: 1,
    width: "100%",
    padding: 5,
    margin: 2,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    borderWidth: 3,
    backgroundColor: lightGreen,
  },
  containerFilledLightH: {
    borderWidth: devBoder,
    flex: 1,
    flexDirection: "row",
    width: "100%",
    padding: 5,
    margin: 2,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    borderWidth: 3,
    backgroundColor: lightGreen,
  },

  containerFilledDark: {
    borderWidth: devBoder,
    flex: 1,
    width: "100%",
    padding: 5,
    margin: 2,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    borderWidth: 3,
    borderColor: salmon,
    backgroundColor: purple,
  },
});

export const textStyles = {
  textContainer: {
    borderWidth: devBoder,
    flex: 1,
    backgroundColor: lightGreen,
    borderRadius: 10,
    margin: 2,
  },
  titleText: {
    fontFamily: font,
    fontSize: 30,
    textAlign: "center",
    color: textWhite,
    shadowColor: "black",
    shadowRadius: 10,
    textShadowColor: lightGreen,
    textShadowRadius: 10,
  },
  text: {
    fontFamily: font,
    textAlign: "center",
    fontSize: 12,
  },
  textLeft: {
    fontFamily: font,
    textAlign: "left",
    paddingHorizontal: 20,
    fontSize: 12,
  },
  textWhite: {
    fontFamily: font,
    textAlign: "center",
    fontSize: 12,
    color: "white",
  },
  textMedium: {
    fontFamily: font,
    textAlign: "center",
    fontSize: 18,
    color: textWhite,
  },
  textMediumBlack: {
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
    color: purple,
    fontSize: 18,
  },
  resetText: {
    color: "#4CAE4C",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
};

const profilePicSize = 100;
export const profileStyles = StyleSheet.create({
  avatarContainer: {
    borderWidth: devBoder,
    width: profilePicSize,
    height: profilePicSize,
    maxHeight: profilePicSize,
    maxWidth: profilePicSize,
    minHeight: profilePicSize,
    minWidth: profilePicSize,
    borderWidth: 4,
    borderColor: salmon,
    borderRadius: 1000,
    overflow: "hidden",
  },
  userInfoConatainer: {
    borderWidth: devBoder,
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
    borderWidth: devBoder,
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
  successContainer: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    backgroundColor: "#DFF0D8",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderTopWidth: 2,
    borderTopColor: "#4CAE4C",
  },
});

export const navStyles = StyleSheet.create({
  navContainer: {
    flexDirection: "row",
    marginTop: "10%",
    height: 60,
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
    alignSelf: "center",
    fontFamily: "Virgil",
    fontSize: 20,
  },
});

export const smallMapStyles = StyleSheet.create({
  container: {
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
    overflow: "hidden",
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});

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

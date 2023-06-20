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
    paddingVertical: 20,
  },
  pageContainer: {
    borderWidth: devBoder,
    flex: 1,
    alignItems: "center",
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
    height: 180,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: salmon,
    backgroundColor: lightGreen,
    borderRadius: 5,
    padding: 1,
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
  },
  disabledButton: {
    opacity: 0.5,
  },
  /* text */
  titleText: {
    fontFamily: font,
    fontSize: 30,
    textAlign: "center",
    color: textWhite,
    shadowColor: "black",
    // shadowOffset: 10,
    shadowRadius: 10,
    textShadowColor: lightGreen,
    textShadowRadius: 10,
  },
  text: {
    fontFamily: "Virgil",
    textAlign: "center",
    fontSize: 12,
  },
  textWhite: {
    fontFamily: "Virgil",
    textAlign: "center",
    fontSize: 12,
    color: "white",
  },
  textMedium: {
    fontFamily: "Virgil",
    textAlign: "center",
    fontSize: 18,
    color: textWhite,
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
  },
  loadingText: {
    fontFamily: font,
    textAlign: "center",
    fontSize: 25,
  },
  warningText: {
    fontFamily: font,
    color: textBlack,
    fontSize: 18,
  },
  /* Images */
  birdCardImageContainer: {
    width: "100%",
    height: "80%",
    borderRadius: 10,
    borderColor: darkGreen,
    overflow: "hidden",
  },
  birdCardImage: {
    aspectRatio: 1,
    height: "100%",
    width: "100%",
  },
  /* Profile */
  container: {
    flex: 1,
  },
  horizontalContainer: {
    borderWidth: devBoder,
    flex: 2,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
    marginBottom: 10,
    padding: 5,
  },
  horizontalBorderedContainer: {
    borderWidth: devBoder,
    flex: 1,
    maxHeight: "30%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
    marginBottom: 10,
    padding: 5,
    borderWidth: 3,
    borderRadius: 10,
    borderColor: lightGreen,
  },
  verticalContainer: {
    borderWidth: devBoder,
    flex: 1,
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
  icon: {
    width: 60,
    height: 60,
    alignSelf: "center",
    justifyContent: "center",
  },
  textContainer: {
    borderWidth: devBoder,
    flex: 1,
    backgroundColor: lightGreen,
    borderRadius: 10,
    margin: 2,
    textAlign: "justify",
  },
  avatarContainer: {
    borderWidth: devBoder,
    flex: 1,
    width: "100%",
    height: "100%",
    borderWidth: 2,
    borderColor: salmon,
    borderRadius: 10,
    overflow: "hidden",
  },
  imagePreview: {
    ...StyleSheet.absoluteFillObject,
  },
  successContainer: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    backgroundColor: "#dff0d8",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderTopWidth: 2,
    borderTopColor: "#4cae4c",
  },
  resetText: {
    color: "#4cae4c",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
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
    width: "80%",
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

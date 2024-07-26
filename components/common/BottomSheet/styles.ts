import { StyleSheet, Dimensions } from "react-native";

const BUTTON_WIDTH = 350;
const BUTTON_HEIGHT = 100;
const BUTTON_PADDING = 10;
const SWIPEABLE_DIMENSIONS = BUTTON_HEIGHT - 2 * BUTTON_PADDING;

export const styles = StyleSheet.create({
  // SwipeButton styles
  swipeCont: {
    height: BUTTON_HEIGHT,
    width: BUTTON_WIDTH,
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
  },
  swipeable: {
    position: "absolute",
    backgroundColor: "white",
    left: BUTTON_PADDING+10,
    height: SWIPEABLE_DIMENSIONS-10,
    width: SWIPEABLE_DIMENSIONS-10,
    borderRadius: SWIPEABLE_DIMENSIONS / 2,
    zIndex: 3,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: "60%",
    height: "60%",
    resizeMode: "contain",
  },
  swipeText: {
    position: "absolute",
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
    zIndex: 2,
  },
  buttonContainer: {
    position: "absolute",
    left: BUTTON_PADDING,
    height: SWIPEABLE_DIMENSIONS,
    width: BUTTON_WIDTH - 2 * BUTTON_PADDING,
    borderRadius: BUTTON_HEIGHT,
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1,
  },
  orderText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff",
    zIndex: 2,
  },
  
  // YesNoSwitch styles
  container: {
    flex: 1,
    alignItems: "center",
    height: Dimensions.get("window").height / 13,
  },
  switchContainer: {
    flexDirection: "row",
    width: Dimensions.get("window").width - 30,
    height: Dimensions.get("window").height / 13,
    borderRadius: 31,
    borderWidth: 1,
    borderColor: "#ccc",
    alignItems: "center",
    overflow: "hidden",
  },
  button: {
    width: "50%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  innerButton: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 30,
  },
  text: {
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
  },
  activeText: {
    color: "white",
  },
  inactiveText: {
    color: "black",
  },
});

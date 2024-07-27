import { Dimensions, StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    scrollContainer: {
      flexGrow: 1,
      alignItems: "center",
    },
    container: {
      flex: 1,
      marginVertical: 10,
      width: Dimensions.get("window").width,
      alignItems: "center",
    },
    carouselContainer: {
      marginTop: 5,
      width: Dimensions.get("window").width,
      height: 120,
      marginBottom:25
    },
    bannerFlatListContainer: {
      width: Dimensions.get("window").width,
      height: 90,
    },
    heading: {
      fontSize: 22,
      fontWeight: "bold",
      textAlign: "left",
      width: "100%",
      paddingHorizontal: 20,
      marginBottom: 10,
    },
    card: {
      backgroundColor: "#fff",
      borderRadius: 8,
      elevation: 2,
      padding: 10,
      margin: 10,
      width: Dimensions.get("window").width - 20,
    },
    header: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
    },
    question: {
      fontSize: 16,
      fontWeight: "bold",
      flex: 1,
      marginRight: 10,
    },
    logo: {
      width: 50,
      height: 50,
      borderRadius: 50,
      resizeMode: "contain",
    },
    info: {
      fontSize: 14,
      color: "#666",
      marginVertical: 15,
    },
    buttonContainer: {
      flexDirection: "row",
      justifyContent: "space-between",
    },
    button: {
      flex: 1,
      padding: 10,
      borderRadius: 5,
      alignItems: "center",
      marginHorizontal: 5,
    },
    yesButton: {
      backgroundColor: "#e0f0ff",
    },
    noButton: {
      backgroundColor: "#ffe0e0",
    },
    yesText: {
      color: "#1a73e8",
      fontSize: 16,
      fontWeight: "bold",
    },
    noText: {
      color: "#d93025",
      fontSize: 16,
      fontWeight: "bold",
    },
    contentContainer: {
      flex: 1,
      alignItems: "center",
    },
  });
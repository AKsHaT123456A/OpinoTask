import React from "react";
import {
  Dimensions,
  Text,
  TouchableOpacity,
  View,
  StyleSheet,
} from "react-native";

const YesNoSwitch = ({ isYes, onToggle }: { isYes: boolean, onToggle: (value: boolean) => void }) => {
  console.log(isYes);
  
  return (
    <View style={styles.container}>
      <View style={styles.switchContainer}>
        <TouchableOpacity
          style={[
            styles.button,
            isYes ? styles.activeButtonYes : styles.inactiveButton,
          ]}
          onPress={() => onToggle(true)}
        >
          <Text
            style={[
              styles.text,
              isYes ? styles.activeText : styles.inactiveText,
            ]}
          >
            Yes
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.button,
            !isYes ? styles.activeButtonNo : styles.inactiveButton,
          ]}
          onPress={() => onToggle(false)}
        >
          <Text
            style={[
              styles.text,
              !isYes ? styles.activeText : styles.inactiveText,
            ]}
          >
            No
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
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
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  activeButtonYes: {
    backgroundColor: "blue",
  },
  activeButtonNo: {
    backgroundColor: "red",
  },
  inactiveButton: {
    backgroundColor: "transparent",
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

export default YesNoSwitch;

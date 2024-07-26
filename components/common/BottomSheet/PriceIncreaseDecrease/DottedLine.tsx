import { StyleSheet, View } from "react-native";

export const DottedLine = () => {
    const dotSize = 8;
    const spaceBetweenDots = 2;
  
    const numDots = Math.floor(100 / (dotSize + spaceBetweenDots)) + 20;
  
    return (
      <View style={styles.dottedLineContainer}>
        {[...Array(numDots)].map((_, index) => (
          <View
            key={index}
            style={[
              styles.dot,
              { width: dotSize, height: 2, marginRight: spaceBetweenDots },
            ]}
          />
        ))}
      </View>
    );
  };


const styles=StyleSheet.create({
    dottedLineContainer: {
        flexDirection: "row",
        alignItems: "center",
        width: "100%",
        justifyContent: "space-between",
      },
      dot: {
        backgroundColor: "#d3d3d3",
        width: 8,
        borderRadius: 30,
      },
})
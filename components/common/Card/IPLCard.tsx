import { View, Text, Image } from "react-native";

import { StyleSheet } from "react-native";

import { COLORS, FONT, SHADOWS, SIZES } from "../../../constants/index";
import iplogo from "../../../assets/images/ipl.png";

const IPLCard = ({ question ,info}: { question: string | undefined,info:string | undefined }) => {
  const formatInfo = (info: string|undefined) => {
    if (!info) return "";
    if (info.length <= 4) return "";
    const trimmedInfo = info.slice(4);
    return trimmedInfo.charAt(0).toUpperCase() + trimmedInfo.slice(1);
  };
  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image source={iplogo} resizeMode="contain" style={styles.logoImage} />
      </View>
      <Text style={styles.companyName} numberOfLines={1}>
        {question}
      </Text>

      <View style={styles.infoContainer}>
        <View style={styles.infoWrapper}>
          <Text style={styles.Keyword}> IPL </Text>
          <Text style={styles.Keyword}> T20 </Text>
          <Text style={styles.Keyword}> Cricket</Text>
        </View>
        <Text style={styles.location} numberOfLines={1}>
          {formatInfo(info)}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    padding: 10,
    backgroundColor: "#FFF",
    borderRadius: SIZES.medium,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    ...SHADOWS.medium,
    shadowColor: COLORS.white,
  },
  logoContainer: {
    width: 70,
    height: 70,
    resizeMode:"contain",
    backgroundColor:"transparent",
    borderRadius: SIZES.medium,
    justifyContent: "center",
    alignItems: "center",
  },
  logoImage: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
  },
  companyName: {
    fontSize: SIZES.medium,
    fontFamily: FONT.regular,
    color: "#000",
    fontWeight: "bold",
    marginTop: SIZES.small / 1.5,
  },
  infoContainer: {
    marginTop: SIZES.large,
    marginBottom: SIZES.medium,
  },
  jobName: {
    fontSize: SIZES.large,
    fontFamily: FONT.medium,
    color: COLORS.white,
  },
  infoWrapper: {
    flexDirection: "row",
    marginTop: 5,
    marginBottom: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  Keyword: {
    fontSize: SIZES.medium - 4,
    fontFamily: FONT.bold,
    backgroundColor: COLORS.lightWhite,
    margin: 5,
    padding: 2,
    borderRadius: 5,
    color: "#000",
  },
  location: {
    fontSize: SIZES.medium - 2,
    fontFamily: FONT.regular,
    backgroundColor: "#F0FFEA",
    color: "green",
    paddingHorizontal: 10,
    borderRadius: 5,
  },
});

export default IPLCard;

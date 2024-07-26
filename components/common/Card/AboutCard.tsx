import { View,StyleSheet} from "react-native";

import { COLORS, FONT, SHADOWS, SIZES } from "../../../constants/index";
import EventDetails from "@/components/Event";


const AboutCard = () => {
  return (
    <View style={styles.container}>
        <EventDetails/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    padding: 10,
    backgroundColor:  "#FFF",
    borderRadius: SIZES.medium,
    flexDirection:"column",
    justifyContent: "center",
    alignItems: "center",
    ...SHADOWS.medium,
    shadowColor: COLORS.white,
  },
});

export default AboutCard
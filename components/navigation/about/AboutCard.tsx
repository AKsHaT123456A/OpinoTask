import { View,StyleSheet} from "react-native";

import Event from '../../utils/Event'
import { COLORS, FONT, SHADOWS, SIZES } from "../../../constants/index";


const AboutCard = () => {
  return (
    <View style={styles.container}>
        <Event/>
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
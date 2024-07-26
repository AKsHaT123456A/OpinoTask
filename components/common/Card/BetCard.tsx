import { Text, TouchableOpacity, View} from "react-native";

import { StyleSheet } from "react-native";

import { COLORS, FONT, SHADOWS, SIZES } from "../../../constants/index";
import ActivityOrderBook from '../../Activity'

const BetCard = () => {
  return (
    <View
      style={styles.container}
    >
        <View style={styles.btns}>
            <TouchableOpacity >
                <Text style={styles.btntypes}> ACTIVITY</Text>
            </TouchableOpacity>
            <TouchableOpacity >
                <Text> ORDER BOOK</Text>
            </TouchableOpacity>
        </View>
        <ActivityOrderBook/>
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
  btns:{
      flexDirection: 'row',
      alignItems:'flex-start',
      alignSelf:'flex-start',
      gap:10,
      marginBottom: 10
  },
  btntypes:{
      borderBottomWidth: 2,
      borderBottomRightRadius:2,
      borderBottomLeftRadius:2,
      fontWeight:'500',
      borderRadius: 20
  }
});

export default BetCard
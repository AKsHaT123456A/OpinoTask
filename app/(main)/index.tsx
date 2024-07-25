import React from 'react';
import { Image, StyleSheet, View, Text, TouchableOpacity, ScrollView, ImageSourcePropType, ImageStyle } from 'react-native';
import { Stack, useRouter } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Colors } from '@/constants/Colors';
import left from '../../assets/left.png';
import share from '../../assets/share.png';
import { COLORS } from '@/constants';
import IPLCard from '@/components/navigation/ipl/IPLCard';
import ChartCard from '@/components/navigation/chart/ChartCard';
import BetCard from '@/components/navigation/betting/BetCard';
import AboutCard from '@/components/navigation/about/AboutCard';
import ButtonsCard from '@/components/navigation/buttons/ButtonsCards';

const HomeScreen: React.FC = () => {
  const router = useRouter();
  return (
    <SafeAreaView style={styles.container}>
      <Stack.Screen  options={{
  
        headerStyle: {
          backgroundColor: Colors.light.background,
        },
        headerShadowVisible: false,
        headerLeft: () => (
          <TouchableOpacity style={styles.btnContainer}  onPress={()=>{
            router.navigate("(tabs)")
          }}>
            <Image
              source={left}
              resizeMode='cover'
              style={{width: 20, height:20}}
            />
            <Text style={styles.btn}>Event 8625</Text>
          </TouchableOpacity>
        ),
        headerRight: () => (
          <TouchableOpacity style={styles.btnContainer}>
            <Image
              source={share}
              resizeMode='cover'
              style={{width: 20, height:20}}
            />
          </TouchableOpacity>
        ),
        headerTitle: "",
      }} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{ flex: 1, paddingHorizontal: 10, gap: 10, marginBottom: 30 }}>
          <IPLCard />
          <ChartCard />
          <BetCard/>
          <AboutCard />
          <ButtonsCard />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.lightWhite,
  },
  btnContainer: {
    height: 40,
    flexDirection: 'row',
    backgroundColor: Colors.light.background,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  btn: {
    fontSize: 17,
  },
});

export default HomeScreen;

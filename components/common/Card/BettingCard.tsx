import { BottomSheetMethods } from '@gorhom/bottom-sheet/lib/typescript/types';
import React, { useCallback, useRef } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';

type BettingCardProps = {
  question: string;
  info: string;
  yesOdds: string;
  noOdds: string;
  logo: any;
};

const BettingCard = ({ question, info, yesOdds, noOdds, logo }: BettingCardProps) => {
  const bottomSheetRef = useRef<BottomSheetMethods>(null);
  const pressHandler = useCallback(() => {
    bottomSheetRef.current?.expand();
  }, []);
  return (
    <View style={styles.card}>
      <View style={styles.header}>
        <Text style={styles.question}>{question}</Text>
        <Image source={logo} style={styles.logo} />
      </View>
      <Text style={styles.info}>{info}</Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={[styles.button, styles.yesButton] }onPress={() => pressHandler()} >
          <Text style={styles.yesText}>Yes ₹ {yesOdds}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, styles.noButton]}>
          <Text style={styles.noText}>NO ₹ {noOdds}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 8,
    elevation: 2,
    padding: 10,
    margin: 10,
    width: Dimensions.get('window').width - 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  question: {
    fontSize: 16,
    fontWeight: 'bold',
    flex: 1,
    marginRight: 10,
    // marginBottom:4
  },
  logo: {
    width: 50,
    height: 50,
    borderRadius: 50,
    resizeMode: 'contain',
  },
  info: {
    fontSize: 14,
    color: '#666',
    marginVertical: 15,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {
    flex: 1,
    paddingVertical: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginHorizontal: 5,
  },
  yesButton: {
    backgroundColor: '#e0f0ff',
  },
  noButton: {
    backgroundColor: '#ffe0e0',
  },
  yesText: {
    color: '#1a73e8',
    fontSize: 16,
    fontWeight: 'bold',
  },
  noText: {
    color: '#d93025',
    fontWeight: 'bold',
  },
});

export default BettingCard;

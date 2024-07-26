import React from 'react';
import { View, Text, FlatList, Image, TouchableOpacity, ListRenderItem, StyleSheet, ViewStyle, TextStyle, ImageStyle } from 'react-native';
import user from '../assets/user.png';
import right from '../assets/right.png';

interface DataItem {
  id: string;
  amount1: string;
  amount2: string;
  user1: string;
  user2: string;
  barWidth1: number;
  barWidth2: number;
}

const data: DataItem[] = [
  { id: '1', amount1: '₹9', amount2: '₹1', user1: 'Hella', user2: 'Robin', barWidth1: 0.85, barWidth2: 0.15 },
  { id: '2', amount1: '₹5', amount2: '₹5', user1: 'Hella', user2: 'Robin+', barWidth1: 0.5, barWidth2: 0.5 },
  { id: '3', amount1: '₹2', amount2: '₹8', user1: 'Hella', user2: 'Robin+', barWidth1: 0.2, barWidth2: 0.8 },
  { id: '4', amount1: '₹4', amount2: '₹6', user1: 'Hella', user2: 'Robin+', barWidth1: 0.4, barWidth2: 0.6 },
];

const renderItem: ListRenderItem<DataItem> = ({ item }) => (
  <View style={styles.itemContainer}>
    <View style={styles.userContainer}>
      <View style={styles.avatar}>
        <Image source={user} resizeMode='contain' style={styles.logoImage} />
      </View>
      <Text style={{ fontWeight: 'bold' }}>{item.user1}</Text>
    </View>
    <View style={styles.barContainer1}>
      <View style={styles.barContainer}>
        <View style={[styles.bar, { width: `${item.barWidth1 * 100}%`, backgroundColor: item.id === '1' ? '#0000FF' : '#ADBCE6' }]}>
          <Text style={styles.amount}>{item.amount1}</Text>
        </View>
        <View style={[styles.bar1, { width: `${item.barWidth2 * 100}%`, backgroundColor: item.id === '1' ? '#000000' : '#ffc080' }]}>
          <Text style={styles.amount1}>{item.amount2}</Text>
        </View>
      </View>
      <View>
        <Text>a few seconds ago</Text>
      </View>
    </View>
    <View style={styles.userContainer}>
      <View style={styles.avatar}>
        <Image source={user} resizeMode='contain' style={styles.logoImage} />
      </View>
      <Text style={{ fontWeight: 'bold' }}>{item.user2}</Text>
    </View>
  </View>
);

const ActivityOrderBook: React.FC = () => {
  return (
    <View style={styles.container}>
      <FlatList data={data} renderItem={renderItem} keyExtractor={(item) => item.id} />
      <TouchableOpacity style={styles.showAll}>
        <Text style={{ fontWeight: 'bold' }}>Show all</Text>
        <Image source={right} resizeMode='cover' style={{ width: 18, height: 18 }} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  itemContainer: {
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    marginBottom: 10,
  },
  userContainer: {
    alignItems: 'center',
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 20,
    backgroundColor: 'white',
    marginRight: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoImage: {
    width: '80%',
    height: '80%',
  },
  barContainer1: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    marginHorizontal: 16,
  },
  barContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 16,
  },
  bar: {
    height: 24,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    justifyContent: 'center',
  },
  bar1: {
    height: 24,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    justifyContent: 'center',
  },
  amount: {
    color: 'white',
    textAlign: 'left',
    paddingLeft: 5,
  },
  amount1: {
    color: 'white',
    textAlign: 'right',
    paddingRight: 5,
  },
  showAll: {
    color: 'black',
    fontWeight: 'bold',
    borderWidth: 1,
    marginTop: 10,
    padding: 10,
    borderRadius: 10,
    textAlign: 'center',
    flexDirection: 'row',
    gap: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default ActivityOrderBook;

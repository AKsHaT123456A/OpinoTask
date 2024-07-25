import React, { useState } from 'react';
import { View, Dimensions, Text, TouchableOpacity, StyleSheet, ViewStyle, TextStyle } from 'react-native';
import { LineChart } from 'react-native-chart-kit';

interface Dataset {
  data: number[];
  color: (opacity?: number) => string;
  strokeWidth: number;
  label: string;
}

interface DataSets {
  [key: string]: {
    labels: string[];
    datasets: Dataset[];
  };
}

const dataSets: DataSets = {
  '1h': {
    labels: ["01:00 AM", "01:30 AM", "02:00 AM", "02:30 AM"],
    datasets: [
      {
        data: [30, 35, 23, 40, 60, 40],
        color: (opacity = 1) => `rgba(0, 0, 255, ${opacity})`, // blue
        strokeWidth: 1,
        label: 'Yes'
      },
      {
        data: [40, 30, 20, 10, 20, 40],
        color: (opacity = 1) => `rgba(0, 255, 0, ${opacity})`, // green
        strokeWidth: 1,
        label: 'No'
      }
    ]
  },
  '3h': {
    labels: ["01:00 AM", "01:30 AM", "02:00 AM", "02:30 AM"],
    datasets: [
      {
        data: [30, 50, 40, 70, 20, 10],
        color: (opacity = 1) => `rgba(0, 0, 255, ${opacity})`, // blue
        strokeWidth: 1,
        label: 'Yes'
      },
      {
        data: [60, 30, 40, 90, 10, 80],
        color: (opacity = 1) => `rgba(0, 255, 0, ${opacity})`, // green
        strokeWidth: 1,
        label: 'No'
      }
    ]
  },
  '12h': {
    labels: ["01:00 AM", "01:30 AM", "02:00 AM", "02:30 AM"],
    datasets: [
      {
        data: [80, 60, 40, 60, 40, 20],
        color: (opacity = 1) => `rgba(0, 0, 255, ${opacity})`, // blue
        strokeWidth: 1,
        label: 'Yes'
      },
      {
        data: [60, 20, 80, 40, 60, 80],
        color: (opacity = 1) => `rgba(0, 255, 0, ${opacity})`, // green
        strokeWidth: 1,
        label: 'No'
      }
    ]
  },
  'all time': {
    labels: ["01:00 AM", "01:30 AM", "02:00 AM", "02:30 AM"],
    datasets: [
      {
        data: [50, 30, 40, 20, 80, 90],
        color: (opacity = 0) => `rgba(0, 0, 255, ${opacity})`, // blue
        strokeWidth: 1,
        label: 'Yes'
      },
      {
        data: [60, 30, 50, 90, 70, 100],
        color: (opacity = 0) => `rgba(0, 255, 0, ${opacity})`, // green
        strokeWidth: 1,
        label: 'No'
      }
    ]
  }
};

const chartConfig = {
  backgroundColor: '#fff',
  backgroundGradientFrom: '#fff',
  backgroundGradientTo: '#fff',
  decimalPlaces: 0,
  color: (opacity = 0) => `rgba(0, 0, 0, ${opacity})`,
  labelColor: (opacity = 0) => `rgba(0, 0, 0, ${opacity})`,
  style: {
    borderRadius: 16
  },
  propsForDots: {
    r: '4',
    strokeWidth: '1',
    stroke: '#fff'
  }
};

const MyLineChart: React.FC = () => {
  const [selectedTime, setSelectedTime] = useState<string>('1h');

  return (
    <View>
      <Text style={{ paddingLeft: 10, fontSize: 13, margin: 16, fontWeight: "500" }}>THE MARKET TRENDS/CHART</Text>
      <View style={{ flexDirection: 'column', alignSelf: 'flex-end', marginTop: 8, marginBottom: -35, zIndex: 1, marginRight: 10 }}>
        <View style={{ flexDirection: 'row', alignItems: 'center', marginRight: 16 }}>
          <View style={{ width: 10, height: 10, backgroundColor: 'blue', marginRight: 4, borderRadius: 2 }} />
          <Text>Yes</Text>
        </View>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <View style={{ width: 10, height: 10, backgroundColor: 'green', marginRight: 4, borderRadius: 2 }} />
          <Text>No</Text>
        </View>
      </View>
      <LineChart
        data={dataSets[selectedTime]}
        width={Dimensions.get('window').width - 16}
        height={220}
        yAxisLabel=""
        yAxisSuffix=""
        yAxisInterval={1} // optional, defaults to 1
        chartConfig={chartConfig}
        bezier
        style={{
          marginVertical: 8,
          borderRadius: 16
        }}
      />
      <View style={styles.buttonContainer}>
        {['1h', '3h', '12h', 'all time'].map(time => (
          <TouchableOpacity
            key={time}
            style={[
              styles.button,
              selectedTime === time && styles.selectedButton
            ]}
            onPress={() => setSelectedTime(time)}
          >
            <Text style={[
              styles.buttonText,
              selectedTime === time && styles.selectedButtonText
            ]}>{time}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 16
  } as ViewStyle,
  button: {
    backgroundColor: '#000',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 16,
    marginHorizontal: 4
  } as ViewStyle,
  selectedButton: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#000'
  } as ViewStyle,
  buttonText: {
    color: '#fff',
    fontSize: 16
  } as TextStyle,
  selectedButtonText: {
    color: '#000'
  } as TextStyle
});

export default MyLineChart;

import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View, Image, Button, Dimensions} from 'react-native';
import {LineChart} from 'react-native-chart-kit';
import {getPlantHum, getPlants} from '../api';

const HumidityDataChart = props => {
  const [chartData, setChartData] = useState([0, 0, 0, 0, 0, 0, 0]);

  const loadData = async () => {
    try {
      const measures = await getPlantHum(props.plantId);
      let data = measures.map(item => parseInt(item.hum));
      setChartData(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    loadData();
  }, []);

  return (
    <View>
      <LineChart
        data={{
          labels: ['6am', '10am', '2pm', '6pm', '10pm', '2am'],
          datasets: [
            {
              data: chartData,
            },
          ],
        }}
        width={360} // from react-native
        height={210}
        yAxisSuffix="%"
        yAxisInterval={2} // optional, defaults to 1
        chartConfig={{
          backgroundColor: 'transparent',
          backgroundGradientFrom: 'white',
          backgroundGradientTo: 'white',
          decimalPlaces: 2, // optional, defaults to 2dp
          // color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
          color: () => `#4d88d1`,
          labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
          style: {
            borderRadius: 15,
          },
          propsForDots: {
            r: '0',
            // strokeWidth: '2',
            // stroke: '#ffa726',
          },
        }}
        bezier
        style={{
          marginVertical: 8,
          borderRadius: 16,
        }}
      />
    </View>
  );
};

export default HumidityDataChart;

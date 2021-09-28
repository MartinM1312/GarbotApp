import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View, Image, Button, Dimensions} from 'react-native';
import {getPlantLum} from '../api';
import {LineChart} from 'react-native-chart-kit';

const LightDataChart = props => {
  const [chartData, setChartData] = useState([0, 0, 0, 0, 0, 0, 0]);

  const loadData = async () => {
    try {
      const measures = await getPlantLum(props.plantId);
      let data = measures.map(item => parseInt(item.lum));
      setChartData(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    loadData();
    return () => {};
  }, []);

  return (
    <View testID={props.testID}>
      <LineChart
        data={{
          labels: ['6am', '10am', '2pm', '4pm'],
          datasets: [
            {
              data: chartData,
            },
          ],
        }}
        width={350} // from react-native
        height={210}
        withInnerLines={false}
        withOuterLines={false}
        yAxisSuffix="L"
        // yAxisInterval={2} // optional, defaults to 1
        chartConfig={{
          backgroundColor: 'transparent',
          backgroundGradientFrom: 'white',
          backgroundGradientTo: 'white',
          decimalPlaces: 0, // optional, defaults to 2dp
          // color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
          color: () => `#62cd4d`,
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

export default LightDataChart;

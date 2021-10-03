import React, {useState, useEffect, useCallback} from 'react';
import {View, Button} from 'react-native';
import {LineChart} from 'react-native-chart-kit';
import {getPlantHum} from '../api';
import {useSelector, useDispatch} from 'react-redux';

const HumidityDataChart = props => {
  const dispatch = useDispatch();

  const stateID = useSelector(state => state.humData.id);

  (() => {
    if (stateID != props.plantId) {
      dispatch({
        type: 'SET_HUM_DATA',
        data: [0, 0, 0, 0, 0, 0, 0],
      });
    }
  })();

  const [stateData, setStateData] = useState(
    useSelector(state => state.humData.data),
  );

  const loadData = async () => {
    try {
      const measures = await getPlantHum(props.plantId);
      let data = measures.map(item => parseInt(item.hum));
      setStateData(data);
    } catch (error) {
      console.log(error);
    }
  };
  const setNewData = () => {
    dispatch({
      type: 'SET_HUM_DATA',
      data: stateData,
    });
  };
  const setNewId = () => {
    dispatch({
      type: 'SET_HUM_ID',
      id: props.plantId,
    });
  };

  useEffect(() => {
    loadData();

    return () => {};
  }, []);

  setNewData();
  setNewId();

  return (
    <View>
      <LineChart
        data={{
          labels: ['6am', '10am', '2pm', '4pm'],
          datasets: [
            {
              data: stateData,
            },
          ],
        }}
        withInnerLines={false}
        withOuterLines={false}
        width={360} // from react-native
        height={210}
        yAxisSuffix="%"
        // yAxisInterval={100000} // optional, defaults to 1
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
            elevation: 7,
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

import React, {useState, useEffect} from 'react';
import {View} from 'react-native';
import {getPlantLum} from '../api';
import {LineChart} from 'react-native-chart-kit';
import {useDispatch, useSelector} from 'react-redux';

const LightDataChart = props => {
  const dispatch = useDispatch();

  const stateID = useSelector(state => state.lightData.id);

  (() => {
    if (stateID != props.plantId) {
      dispatch({
        type: 'SET_LIGHT_DATA',
        data: [0, 0, 0, 0, 0, 0, 0],
      });
    }
  })();

  const [stateData, setStateData] = useState(
    useSelector(state => state.lightData.data),
  );

  const loadData = async () => {
    try {
      const measures = await getPlantLum(props.plantId);
      let data = measures.map(item => parseInt(item.lum));
      setStateData(data);
    } catch (error) {
      console.log(error);
    }
  };
  const setNewData = () => {
    dispatch({
      type: 'SET_LIGHT_DATA',
      data: stateData,
    });
  };
  const setNewId = () => {
    dispatch({
      type: 'SET_LIGHT_ID',
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
    <View testID={props.testID}>
      <LineChart
        data={{
          labels: ['6am', '10am', '2pm', '4pm'],
          datasets: [
            {
              data: stateData,
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

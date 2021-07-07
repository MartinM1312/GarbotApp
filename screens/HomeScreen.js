import React from 'react';
import {StyleSheet, Text, View, FlatList, TouchableOpacity} from 'react-native';
import {PLANTS} from '../data/dummy-data';

const HomeScreen = props => {
  const renderItem = itemData => {
    return (
      <TouchableOpacity
        onPress={() => {
          props.navigation.navigate({
            routeName: 'Data',
            params: {
              plantID: itemData.item.id,
              plantType: itemData.item.type,
            },
          });
        }}>
        <View style={styles.item}>
          <Text style={styles.title}>{itemData.item.id}</Text>
          <Text>{itemData.item.type}</Text>
        </View>
      </TouchableOpacity>
    );
  };
  return <FlatList data={PLANTS} renderItem={renderItem} />;
};

HomeScreen.navigationOptions = {
  headerTitle: 'Home',
};

const styles = StyleSheet.create({
  item: {
    flex: 1,
    margin: 15,
    height: 150,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    borderRadius: 12,
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 6,
    shadowOpacity: 0.3,
    backgroundColor: 'white',
    elevation: 6,
    borderRadius: 5,
    padding: 25,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 20,
  },
});

export default HomeScreen;

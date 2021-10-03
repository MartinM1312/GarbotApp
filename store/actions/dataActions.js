export const SET_HUM_DATA = 'SET_HUM_DATA';
export const SET_HUM_ID = 'SET_HUM_ID';
export const SET_LIGHT_DATA = 'SET_LIGHT_DATA';
export const SET_LIGHT_ID = 'SET_LIGHT_ID';

export const setHumData = data => {
  return {type: SET_HUM_DATA, data: data};
};

export const setHumId = id => {
  return {type: SET_HUM_ID, id: id};
};

export const setLightData = data => {
  return {type: SET_LIGHT_DATA, data: data};
};

export const setLightId = id => {
  return {type: SET_LIGHT_ID, id: id};
};

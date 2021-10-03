import {SET_HUM_DATA} from '../actions/dataActions';
import {SET_HUM_ID} from '../actions/dataActions';

const initialState = {
  data: [0, 0, 0, 0, 0],
  id: '1',
};

const humDataReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_HUM_DATA:
      return {...state, data: action.data};
    case SET_HUM_ID:
      return {...state, id: action.id};
    default:
      return state;
  }
};

export default humDataReducer;

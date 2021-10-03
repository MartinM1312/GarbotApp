import {SET_LIGHT_DATA} from '../actions/dataActions';
import {SET_LIGHT_ID} from '../actions/dataActions';

const initialState = {
  data: [0, 0, 0, 0, 0],
  id: '1',
};

const lightDataReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_LIGHT_DATA:
      return {...state, data: action.data};
    case SET_LIGHT_ID:
      return {...state, id: action.id};
    default:
      return state;
  }
};

export default lightDataReducer;

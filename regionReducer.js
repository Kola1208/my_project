import { SET_REGION } from '../actions/types';

const initialState = {
  region: null,
};

const regionReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_REGION:
      return {
        ...state,
        region: action.payload,
      };
    default:
      return state;
  }
};

export default regionReducer;

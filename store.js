import { createStore, combineReducers } from 'redux';
import regionReducer from './reducers/regionReducer';

const rootReducer = combineReducers({
  region: regionReducer,
});

const store = createStore(rootReducer);

export default store;

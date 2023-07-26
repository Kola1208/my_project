import { SET_REGION } from './types';

export const setRegion = (region) => {
  return {
    type: SET_REGION,
    payload: region,
  };
};
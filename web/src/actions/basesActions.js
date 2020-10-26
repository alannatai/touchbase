import touchbase from '../apis/touchbase';
import { BASE_SELECTED } from './types';

export const selectBase = (base) => {
  return {
    type: BASE_SELECTED,
    payload: base,
  };
};

export const createBase = (formValues) => async (dispatch) => {
  const instance = await touchbase.getTouchbaseInstance();
  instance.post('/api/v1/base', formValues);
};

export const deleteBase = () => async (dispatch) => {
  const instance = await touchbase.getTouchbaseInstance();
};

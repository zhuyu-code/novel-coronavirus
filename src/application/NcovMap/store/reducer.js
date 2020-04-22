//reducer.js
import * as actionTypes from './constants';
import { fromJS } from 'immutable';// 这里用到 fromJS 把 JS 数据结构转化成 immutable 数据结构

const defaultState = fromJS ({
  mainData: ['zhuyu'],
});
export default (state = defaultState, action) => {
    switch (action.type) {
      case actionTypes.GET_MAIN_DATA:
        return state.set ('mainData', action.data);
      default:
        return state;
    }
  }
//reducer.js
import * as actionTypes from './constants';
import { fromJS } from 'immutable';// 这里用到 fromJS 把 JS 数据结构转化成 immutable 数据结构

const defaultState = fromJS ({
  distanceData: [],
});
export default (state = defaultState, action) => {
    switch (action.type) {
      case actionTypes.GET_DISTANCE_QUERY:
        return state.set ('distanceData', action.data);
      default:
        return state;
    }
  }
//actionCreators.js
import * as actionTypes from './constants';
import { fromJS } from 'immutable';// 将 JS 对象转换成 immutable 对象
import { getDistanceQuery } from '../../../api/request';
export const getDistanceAction = (data) => ({
    type: actionTypes.GET_DISTANCE_QUERY,
    data: fromJS (data)
  });
  export const getDistanceList=()=>{
      return (dispatch)=>{
        getDistanceQuery()
          .then(res=>{
              dispatch(getDistanceAction(res.data.travelInfo))
          })
          .catch(()=>{
              console.log("请求数据失败")
          })
      }
  }
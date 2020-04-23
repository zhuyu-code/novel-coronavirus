//actionCreators.js
import * as actionTypes from './constants';
import { fromJS } from 'immutable';// 将 JS 对象转换成 immutable 对象
import { getNcovWorld } from '../../../api/request';
export const getNcovWorldAction = (data) => ({
    type: actionTypes.GET_NCOV_WORLD,
    data: fromJS (data)
  });
  export const getNcovWorldList=()=>{
      return (dispatch)=>{
        getNcovWorld()
          .then(res=>{
              dispatch(getNcovWorldAction(res))
          })
          .catch(()=>{
              console.log("请求数据")
          })
      }
  }
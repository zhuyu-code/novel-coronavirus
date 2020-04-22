//actionCreators.js
import * as actionTypes from './constants';
import { fromJS } from 'immutable';// 将 JS 对象转换成 immutable 对象
import { getMainData } from '../../../api/request';
export const getMainDataAction = (data) => ({
    type: actionTypes.GET_MAIN_DATA,
    data: fromJS (data)
  });
  export const getMainDataList=()=>{
      return (dispatch)=>{
          getMainData()
          .then(res=>{
              dispatch(getMainDataAction(res.data.detail))
          })
          .catch(()=>{
              console.log("请求数据")
          })
      }
  }
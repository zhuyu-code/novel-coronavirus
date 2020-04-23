//actionCreators.js
import * as actionTypes from './constants';
import { fromJS } from 'immutable';// 将 JS 对象转换成 immutable 对象
import { getNcovTrend } from '../../../api/request';
export const getNcovTrendAction = (data) => ({
    type: actionTypes.GET_NCOV_TREND,
    data: fromJS (data)
  });
  export const getNcovTrendList=()=>{
      return (dispatch)=>{
        getNcovTrend()
          .then(res=>{
              console.log(res);
              dispatch(getNcovTrendAction(res.data.items))
          })
          .catch(()=>{
              console.log("请求数据失败")
          })
      }
  }
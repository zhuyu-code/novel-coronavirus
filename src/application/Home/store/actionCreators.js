//actionCreators.js
import * as actionTypes from './constants';
import { fromJS } from 'immutable';// 将 JS 对象转换成 immutable 对象
import { getSwiperData } from '../../../api/request';
export const getSwiperAction = (data) => ({
    type: actionTypes.GET_SWIPER_DATA,
    data: fromJS (data)
  });
  export const getSwiperList=()=>{
      return (dispatch)=>{
        getSwiperData()
          .then(res=>{
              dispatch(getSwiperAction(res.data.areaConfig))
          })
          .catch(()=>{
              console.log("请求数据失败")
          })
      }
  }
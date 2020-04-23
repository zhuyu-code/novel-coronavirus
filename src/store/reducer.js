//reducer.js
import { combineReducers } from 'redux-immutable';
import {reducer as ncovmapReducer} from '../application/NcovMap/store/index';
import {reducer as ncovtrend} from '../application/NcovTrend/store/index';
import {reducer as distanceQuery} from '../application/DistanceQuery/store/index';
import {reducer as swiperData} from '../application/Home/store/index';
import {reducer as ncovWorldReducer} from '../application/NcovWorld/store/index'
export default combineReducers ({
// 之后开发具体功能模块的时候添加 reducer
    ncovmap:ncovmapReducer,
    ncovtrend:ncovtrend,
    distance:distanceQuery,
    swiper:swiperData,
    ncovWorld:ncovWorldReducer
});

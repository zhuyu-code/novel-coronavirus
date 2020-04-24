import { axiosInstance } from "./config";

export const getMainData = () => {
  return axiosInstance.get ('/api/index/country');
}
export const getNcovTrend=()=>{
    return axiosInstance.get('/api/index/ncovtrend')
}
export const getDistanceQuery=(params)=>{
    return axiosInstance.get('/api/index/distance',{params:params})
}
export const getSwiperData=()=>{
    return axiosInstance.get('/api/index/swiper');
}
export const getNcovWorld=()=>{
    return axiosInstance.get('/api/index/worldList')
}
import { axiosInstance } from "./config";

export const getMainData = () => {
  return axiosInstance.get ('/api/index/country');
}
export const getNcovTrend=()=>{
    return axiosInstance.get('/api/index/ncovtrend')
}
export const getDistanceQuery=()=>{
    return axiosInstance.get('/api/index/distance')
}
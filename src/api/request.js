import { axiosInstance } from "./config";

export const getMainData = () => {
  return axiosInstance.get ('/api/index/country');
}
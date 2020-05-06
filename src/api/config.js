import axios from 'axios';

export const baseUrl = 'http://39.98.189.108:7000';

//axios 的实例及拦截器配置
const axiosInstance = axios.create ({
  baseURL: baseUrl
});

axiosInstance.interceptors.response.use (
  res => res.data,
  err => {
    console.log (err, "网络错误");
  }
);

export {
  axiosInstance
};
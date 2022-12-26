import axios from "axios";
import { serverUrl, serverUrlApiV1 } from ".";

// 헤더 없이 사용하는 경우
export const instance = axios.create({
  baseURL: serverUrl,
  headers: {
    "Access-Control-Allow-Origin": "*",
  },
});

// 헤더 토큰 값이 들어가야 하는 경우
export const baseURL = axios.create({
  baseURL: serverUrl,
  headers: {
    "Access-Control-Allow-Origin": "*",
  },
});

// 헤더 없이 사용하는 경우( API 추가 )
export const instanceApi = axios.create({
  baseURL: serverUrlApiV1,
  headers: {
    "Access-Control-Allow-Origin": "*",
  },
});

// 헤더 토큰 값이 들어가야 하는 경우( API 추가 )
export const baseURLApi = axios.create({
  baseURL: serverUrlApiV1,
  headers: {
    "Access-Control-Allow-Origin": "*",
  },
});

// interceptors를 통해 토큰값을 보내주는 것에 사용
baseURL.interceptors.request.use((config) => {
  if (config.headers === undefined) return;
  const token = localStorage.getItem("authorization");
  console.log(token);
  config.headers["Authorization"] = `${token}`;
  return config;
});

baseURLApi.interceptors.request.use((config) => {
  if (config.headers === undefined) return;
  const token = localStorage.getItem("authorization");
  config.headers["Authorization"] = `${token}`;
  return config;
});

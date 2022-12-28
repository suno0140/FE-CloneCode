import React, { useEffect } from "react";
import { serverUrlApiV1 } from "../../../../core";
import { useSearchParams } from "react-router-dom";
import axios from "axios";

const useKakaoLogin = () => {
  const [searchParams] = useSearchParams();
  // 받아오는 url 형태 확인
  const kakaoCode = searchParams.get("code");
  const callBackURL = `${serverUrlApiV1}/members/login/kakao`;

  useEffect(() => {
    if (kakaoCode) {
      const gitHubCallBack = async () => {
        try {
          // 다이렉트 url에서 code를 받은 후 어떤 형태로 보내드려야하는지
          const res = await axios.post(callBackURL, {
            code: kakaoCode,
          });
          localStorage.setItem("id", res.headers.Authorization);
          alert(res.data.msg);
        } catch (error) {
          console.log(error);
        }
      };
      gitHubCallBack();
    }
  }, [callBackURL, kakaoCode]);

  return;
};

export default useKakaoLogin;

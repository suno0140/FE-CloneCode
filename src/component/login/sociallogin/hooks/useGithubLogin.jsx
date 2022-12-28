import React, { useEffect } from "react";
import { serverUrlApiV1 } from "../../../../core";
import { useSearchParams } from "react-router-dom";
import axios from "axios";

const useGithubLogin = () => {
  const [searchParams] = useSearchParams();
  const gitCode = searchParams.get("code");
  const callBackURL = `${serverUrlApiV1}/members/login/github`;

  useEffect(() => {
    if (gitCode) {
      const gitHubCallBack = async () => {
        try {
          const res = await axios.post(callBackURL, { code: gitCode });
          localStorage.setItem("id", res.headers.Authorization);
          alert(res.data.msg);
        } catch (error) {
          console.log(error);
        }
      };
      gitHubCallBack();
    }
  }, [callBackURL, gitCode]);

  return;
};

export default useGithubLogin;

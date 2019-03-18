import qs from "qs";
import axios from "axios";

import { $getToken } from "@/libs/util.js";

const TIME_OUT_MS = 5000;

const obj = {
  post(url, data) {
    return axios({
      method: "post",
      url,
      data,
      timeout: TIME_OUT_MS,
      headers: {
        "Content-Type": "application/json",
        tokenId: $getToken("tokenId") || ""
      }
    });
  },
  get(url) {
    return axios({
      url,
      timeout: TIME_OUT_MS,
      headers: {
        "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8"
      }
    });
  }
};

export default obj;

import axios from "axios";
import React from "react";
import { users, userInfo, blog, blogInfo } from "./userInterface";

export function getApi(
    setBackEndData:
      | React.Dispatch<React.SetStateAction<[users]>>
      | React.Dispatch<React.SetStateAction<[blog]>>,
    api: String
  ) {
    axios
      .get(`/api/${api}`)
      .then((res) => {
        console.log(res.data);
        setBackEndData(res.data);
      })
      .catch((err) => console.log(err));
  }
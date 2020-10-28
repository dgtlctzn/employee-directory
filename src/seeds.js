const axios = require("axios");
// import fs from "fs";

const url = "https://randomuser.me/api/?results=20";

(async function toJson() {
  try {
    const {data} = await axios({
      method: "GET",
      url: url,
      responseType: "json",
    });
    console.log(data);
  } catch (err) {
    console.log(err);
  }
})()

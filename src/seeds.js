const axios = require("axios");
const fs = require("fs");

const url = "https://randomuser.me/api/?results=20";

// call to random user api to get seeds
(async function toJson() {
  try {
    const {data} = await axios({
      method: "GET",
      url: url,
      responseType: "json",
    });
    const personas = data.results;
    // simplifies the random user api results to only applicable categories
    const modPersonas = [];
    let id = 0;
    for (const person of personas) {
        id++;
        const newPersona = {
            id: id,
            image: person.picture.thumbnail,
            name: `${person.name.first} ${person.name.last}`,
            phone: person.phone,
            email: person.email,
            dob: person.dob.date
        }
        modPersonas.push(newPersona);
    }
    fs.writeFile("./src/components/Table/seeds.json", JSON.stringify(modPersonas, null, 2), err => {
        if (err) {
            console.log(err)
        }
    })
  } catch (err) {
    console.log(err);
  }
})()
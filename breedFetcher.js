// IMPORT MODULES
const request = require('request');

const args = process.argv.slice(2);

request('https://api.thecatapi.com/v1/breeds/search?q=' + args[0], (error, response, body) => {
  const data = JSON.parse(body);
  // console.log(response.statusCode);
  // console.log(data.length)
  if (!error) {
    if (data[0] === undefined) {
      console.log(`Breed: ${args[0]} not found.`);
    } else {
      console.log(data[0].description);
    }
  } else {
    console.log(error);
  }
});

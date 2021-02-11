// IMPORT MODULES
const request = require('request');

const fetchBreedDescription = (breed, callback) => {
  request('https://api.thecatapi.com/v1/breeds/search?q=' + breed, (error, response, body) => {
    if (!error) {
      const data = JSON.parse(body);
      if (data[0] === undefined) {
        callback(null, `Breed: ${breed} not found.`);
      } else {
        callback(null, data[0].description);
      }
    } else {
      callback(error, null);
    }
  });
};

//EXPORT MODULES
module.exports = {
  fetchBreedDescription
};
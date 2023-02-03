const axios = require('axios')
const { Country } = require('../db')
function countryCreator(country) {
    return {
        name: country.name.common,
        id: country.cca3,
        imgflag: country.flags[0],
        Region: country.region? country.region: 'Antarctic',
        capital:  country.capital ? country.capital[0] : 'Not found',
        subRegion: country.subregion,
        area: country.area,
        population: country.population,
        
        
    };
};

function activityCreator(element){
    return {
        id: element.id,
        name: element.name,
        season: element.season,
        duration: element.duration,
        difficult: element.difficult

    };
}; 

const bulkCreateCountry = () => {
    return axios.get('https://restcountries.com/v3/all')
      .then((result) => {
        let response = result.data.map(el => {
          return countryCreator(el)
        })
        return Country.bulkCreate(response)
      })
  }

module.exports = {
    countryCreator, 
    activityCreator,
    bulkCreateCountry
}
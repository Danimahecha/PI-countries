export async function countriesOrder(orderTarget, criteria) {

    let orderedCountries
   
    let AscendentN= (orderTarget2)=>{
      orderedCountries = orderTarget2.sort((a, b) => (
        a.name.localeCompare(b.name))
    )
    }
    let DescendentN= (orderTarget2)=>{
      orderedCountries = orderTarget2.sort((a, b) => (
        b.name.localeCompare(a.name))
    )
    }
    let AscendentP= (orderTarget2)=>{
      orderedCountries = orderTarget2.sort((a, b) => a.population < b.population?-1:a.population > b.population? 1:0)
    }
    let DescendentP= (orderTarget2)=>{
      orderedCountries = orderTarget2.sort((a, b) =>a.population > b.population?-1:a.population < b.population?1:0
    )
    }
    let AscendentR= (orderTarget2)=>{
      orderedCountries = orderTarget2.sort((a, b) => (
        a.Region.localeCompare(b.Region))
    )
    }
    let DescendentR= (orderTarget2)=>{
      orderedCountries = orderTarget2.sort((a, b) => (
        b.Region.localeCompare(a.Region))
    )
    }
    if (criteria.name === 'Ascendent') AscendentN(orderTarget)
    if (criteria.name === 'Descendent') DescendentN(orderTarget)
    if (criteria.population === 'Ascendent') AscendentP(orderTarget)
    if (criteria.population === 'Descendent') DescendentP(orderTarget)
    if (criteria.Region === 'Ascendent') AscendentR(orderTarget)
    if (criteria.Region === 'Descendent') DescendentR(orderTarget)
    return orderedCountries;
}

export async function filterContinentActivity(orderTarget, criteria) {
let filteredCountries;
if (criteria.Region){
  filteredCountries = orderTarget.filter((countries) => 
    countries.Region.includes(criteria.Region)
  )
}  
  if (criteria.activities){
    filteredCountries = orderTarget.filter((country) =>
    country.activities.filter((activity) => activity.name === criteria.activities).length)
    }
    


return filteredCountries;

}  

export function validate(input) {
    let errors = {}
    if (!input.difficult) {
      errors.difficulty = 'Se requiere un nivel de dificultad'
    } else if (/^[0-5]$/.test(input.difficult)) {
      errors.difficulty = 'Solo debes ingresar numeros del 1 al 5'
    };
    if (!input.name) {
      errors.name = 'Se requiere un nombre de actividad'
    };
    if (!input.season) {
      errors.season = 'Se requiere un nombre de temporada'
    };
    if (!input.duration) {
      errors.duration = 'Se requiere duración de actividad en horas'
      } else if(input.duration > 24 || input.duration < 1) {
        errors.duration= 'La duración debe ser entre 1 y 24!'
      }
    if (!input.country) {
      errors.country = 'Se requiere al menos un nombre de país'
    }
    return errors
  }
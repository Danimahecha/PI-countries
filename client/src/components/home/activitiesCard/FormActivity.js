import React from 'react';
import { connect, useSelector } from 'react-redux';
import { getCountries, postActivity, getAllActivities } from '../../../redux/actions';
import { useState, useEffect } from 'react'
import { validate } from '../../../utils/utils';
import {Link} from 'react-router-dom'
import styles from './styles.module.css'
document.title= 'Countries Web'
function ActivityPost({ countries, activityPost, getAllCountries }) {
  const [input, setInput] = useState({
    name: '',
    difficult: '',               // 1 a 5
    duration: '',
    season: '',
    countries: [],                 //otoño, invierno, primavera, verano
  });

  const [errors, setErrors] = useState({
    name: '',
    duration: '',
    countries: '',
  })
  const error = useSelector(state=> state.error)
  useEffect(() => {
    getAllCountries()
    
  },[])


  function handleInputChange(event) {
    setErrors(validate({
      ...input,
      [event.target.name]: event.target.value
    }))
    
    setInput({
      ...input,
      [event.target.name]: event.target.value
    })
  }

  function handleCountriesSelection(event) {
    if (event.target.value === "") {
      setErrors({ 
        ...errors, 
        countries: "Debes elegir uno o varios paises " });
      return;
    }
    setErrors({ 
      ...errors, 
      countries: "" });
    const countryExists = input.countries.find(
      (item) => item === event.target.innerText
    );

    if (!countryExists) {

      setInput({
        ...input,
        countries: [...input.countries, event.target.value],
      });
    }
  }

 function handleSubmit(event){
  event.preventDefault();
  activityPost(input)

} 

 function onCLickSubmit(){
   if(!input.name || !input.difficult || !input.duration || !input.countries || !input.season ) {
     alert('Debes completar todos los campos!')
   } else{
     alert('Actividad creada con éxito!')
   }
  }
       
 
  return (
    <div>
      <div className={`${styles.container}`}>
    <Link className={`${styles.btnHome}`} to={'/home'} >Home </Link>  
    <form className={`${styles.form}`} onSubmit={handleSubmit}>
      <div className={`${styles.elements}`}>
       
        <input  className={`${styles.select}`}
          name="name"
          type="text"
          value={input.name}
          onChange={handleInputChange}
          placeholder="Actividad" />
        {errors.name && (
          <p >{errors.name}</p>
        )}
      </div>
      <div>
      
        </div>
        <div>
        <select className={`${styles.selectSeason}`}  onChange={handleInputChange} name="season">
          <option value={input.season} >
            {"Elegir Termporada"}
          </option>
          <option value="verano">Verano</option>
          <option value="otoño">Otoño</option>
          <option value="invierno">Invierno</option>
          <option value="primavera">Primavera</option>
          <option value="allseasons">Todo el año</option>
        </select>
      </div>

      <div>
        
        </div>
        <div>
        <select className={`${styles.selectDifficulty}`} onChange={handleInputChange} name="difficult">
          <option value={input.difficult} >
            {"Elegir Dificultad"}
          </option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>

      </div>

      <div>
       
        </div>
        <div>
        <input className={`${styles.select}`}
          name="duration"
          type="number"
          value={input.duration}
          onChange={handleInputChange}
          placeholder="Duración en Horas" />
        {errors.duration && (
          <p >{errors.duration}</p>
        )}
      </div>
      
      <select className={`${styles.selectCountry}`} onChange={handleCountriesSelection}>
              <option  value="" >
                Elige tu País o Países!
              </option>
              {countries &&
                countries.map((item) => {
                  return <option value={item.id}>{item.name}</option>;
                })}
            </select>
      <input className={`${styles.inputCountry}`}
        name="countries"
        type="text"
        value={input.countries}
        onChange={handleInputChange}
        placeholder="País" />
         {errors.countries && (
          <p >{errors.countries}</p>
        )}
        {error !== '' && <p className={`${styles.errorAxios}`}>{` no puedes repetir paises : ${error}`}</p>}
      <input className={`${styles.btnCrear}`} onClick={onCLickSubmit} type="submit" value="Crear Actividad Turística" />

    </form>
    </div>
    </div>
  )
}


const mapStateToProps = (state) => {
  console.log(state)
  return {
    countries: state.countries,
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    activityPost: (activity) => dispatch(postActivity(activity)),
    getAllCountries: () => dispatch(getCountries()),
    getAllActivities : () => dispatch( getAllActivities()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ActivityPost)

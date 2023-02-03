import React from 'react';
import { useState } from 'react';
import { getCountryByName, cleanCountry } from '../../../../redux/actions.js';
import { connect } from 'react-redux';
import CountryName from '../../countriesCards/nameCountry.js';
import styles from './style.module.css'


function SearchBar({ country, getCountryByName, cleanCountry }) {
    const [formActualState, setFormActualState] = useState('')
    const [buttonClicked, setButtonClicked] = useState(false)
    const [countryNameButtonClose, setCountryNameButtonClose] = useState(true)


    function handleCountryNameButtonClose() {
        setCountryNameButtonClose(false)
    }

    function handleButtonClick() {
        if(!formActualState){
           return alert('Ups! Debes ingresar el nombre de un país!')
        }
        setButtonClicked(true)
        setCountryNameButtonClose(true)

    }
    function handleChange(event) {
        setFormActualState(event.target.value)
    }

    function handleSubmit(event) {
        
        getCountryByName(formActualState)
        event.preventDefault()
        setFormActualState('')
        cleanCountry()


    }


    return (

        <div>
            <form onSubmit={handleSubmit}>
                <input className={`${styles.searchC}`} 
                    type="text"
                    placeholder="Nombre (ej: Colombia, paraguay)"
                    value={formActualState}
                    onChange={handleChange}
                ></input>
                <button className={`${styles.Btn}`} 
                    onClick={() => handleButtonClick()}
                    type="submit">BUSCAR PAÍS!!
                </button>

                { buttonClicked&&country.name?<CountryName
                    name={country.name}
                    id={country.id}
                    imgflag={country.imgflag}
                    population={country.population}
                    Region={country.Region}
                    onClose={handleCountryNameButtonClose}
                    countryNameButtonClose={countryNameButtonClose}
                /> : null & console.log('algo fallo')}
            </form>
        </div>


    )
}


const mapStateToProps = (state) => {
    return {
        country: state.country,
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        getCountryByName: name => {
            dispatch(getCountryByName(name))
        },
        cleanCountry: () => dispatch(cleanCountry())

    }
}


export default connect(mapStateToProps, mapDispatchToProps)(SearchBar)
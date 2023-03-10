import React from 'react';
import { orderCountries, getCountries, filterCountries } from '../../../../redux/actions';
import { connect } from 'react-redux'
import styles from './style.module.css'

function CountriesOrderFilters({
    countriesOrder,
    orderCountries2,
    filterCountries2,
    activities,
getAllCountries }) {

    function handleName(event) {

        if (event.target.value === 'Name') {
            return getAllCountries();
        }
        orderCountries2(countriesOrder, { name: event.target.value })

    }

    function handlePupulation(event) {
        if (event.target.value === 'Population') {
            return getAllCountries();
        }
        orderCountries2(countriesOrder, { population: event.target.value })

    }

    function handleContinent(event) {
        if (event.target.value === 'Continent') {
            return getAllCountries();
        }
        orderCountries2(countriesOrder, { Region: event.target.value })

    }

    function handleFilterCountries(event) {
        if (event.target.value === 'continentFilter') {
            return getAllCountries();
        }
        filterCountries2(countriesOrder, { Region: event.target.value })

    }

    function handleFilterActivities(event) {
        if (event.target.value === 'activityFilter') {
            return getAllCountries();
        }
        filterCountries2(countriesOrder, { activities: event.target.value })

    }

    

    return (
        <div className={`${styles.filter}`}> 
            <div>

                <select  className={`${styles.select}`} onChange={handleName}>
                    <option label='Ordenar por Nombre' value='Name'></option>
                    <option value='Ascendent'>Ascendente</option>
                    <option value='Descendent'>Descendente</option>
                </select>

            </div>
            <div>

                <select className={`${styles.select}`} onChange={handlePupulation}>
                    <option label='Ordenar por Poblacion' value='Population'></option>
                    <option value='Ascendent' >Ascendente</option>
                    <option value='Descendent' >Descendente</option>
                </select>

            </div>
            <div>

                <select className={`${styles.select}`} onChange={handleContinent}>
                    <option label='Ordenar por Continente' value='Continent'></option>
                    <option value='Ascendent' label='Ascendent'></option>
                    <option value='Descendent' label='Descendent'></option>
                </select>

            </div>
            <div>

                <select className={`${styles.select}`} onChange={handleFilterCountries}>
                    <option label='Filtrar por Continente' value='continentFilter'></option>
                    <option value='Americas' label='America'></option>
                    <option value='Africa' label='Africa'></option>
                    <option value='Asia' label='Asia'></option>
                    <option value='Europe' label='Europa'></option>
                    <option value='Oceania' label='Ocean??a'></option>
                    <option value='Antarctic' label='Antarctic'></option>
                </select>

            </div>
            <div>
                <select className={`${styles.select}`} onChange={handleFilterActivities}>
                    <option key="-1" label='Filtrar por Actividad Tur??stica' value='activityFilter'></option>
                    {activities.length ? activities.map((activity, i) => (
                        <option key={i} value={activity.name} label={activity.name}></option>
                    )) : null}
                </select>
            </div>
        </div>
    )

}


const mapStateToProps = ((state) => {

    return {
        countriesOrder: state.countriesOrder,
        activities: state.activities
    }
})

const mapDispatchToProps = (dispatch) => {
    return {
        orderCountries2: (orderTarget, criteria) => dispatch(orderCountries(orderTarget, criteria)),
        getAllCountries: () => dispatch(getCountries()),
        filterCountries2: (countries, criteria) => dispatch(filterCountries(countries, criteria))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CountriesOrderFilters)
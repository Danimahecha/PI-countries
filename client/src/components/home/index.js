import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getCountries, getAllActivities } from '../../redux/actions'
import CountriesCards from "./countriesCards/countriesCard";
import NavBar from "./navBar";
import styles from './syles.module.css'

function Home({ countries, getCountries}) {

document.title = 'Countries Web'
    useEffect(() => {
        getCountries()
        getAllActivities()
    }, [])

    return (
        <div className={`${styles.container}`}>
            <NavBar />
            <div>
                <CountriesCards countries={countries} />
            </div>
        </div>
    )


}

const mapStateToProps = (state) => {
    
    return {
        countries: state.countries
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getCountries: () => dispatch(getCountries()),
    
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
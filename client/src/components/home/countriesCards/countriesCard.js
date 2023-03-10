import React, { useState, useEffect} from 'react';
import CountryCard from './country'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
import styles from './countriesStyle.module.css'
function CountriesCards({ countries }) {
    const [actualStateCountries, setActualStateCountries] = useState([])

    const countriesPerPage = 10
    const pages = Math.ceil(countries.length / countriesPerPage)
    

    const [currentPage, setCurrentPage] = useState(1)

    const showPages = (pageNum) => {
        const index = pageNum * countriesPerPage + 1;
        setActualStateCountries(countries.slice(index - countriesPerPage - 1, index - 1));
        setCurrentPage(pageNum)

    }


    useEffect(() => {

        showPages(1)

    }, [countries])

    return (
        <> 
        <div>
<p>{`${currentPage}`}</p>
</div>
            <div className={`${styles.wrapper}`}>
                <div className={`${styles.searchContainer}`}>
                    <button className={`${styles.btn}`} onClick={() => showPages(currentPage > 1 ?
                        currentPage - 1 : currentPage)}>{'☚'}</button>
                    <div>
                        <Link to={"/createactivity"}>
                            <button className={`${styles.btnActivity}`} >Crear Actividad Turística</button>
                        </Link>
                    </div>
                    <button  className={`${styles.btn}`} onClick={() => showPages(currentPage < pages ?
                        currentPage + 1 : currentPage)}>{`☛`}</button>
                </div>
            
            <div className={`${styles.container}`} >
                {actualStateCountries && actualStateCountries.map((country, i) => (

                    

                        <CountryCard
                            key={country.id}
                            id={country.id}
                            name={country.name}
                            population={country.population}
                            imgflag={country.imgflag}
                            Region={country.Region}
                        />
                   

                ))}
            </div>
            </div>
        </>
    )
}


const mapStateToProps = (state) => {

    return {
        countries: state.countries,

    }
}

export default connect(mapStateToProps, null)(CountriesCards)
import React from 'react';
import {Link} from 'react-router-dom';
import styles from './countryStyle.module.css'

export default function CountryCard({name, id, imgflag, population, Region}) {
    return(
        <div >
        <div className={`${styles.countryCard}`}>
            <Link to={`/detail/${id}`}>
                <img  src={imgflag} alt={`Bandera de ${name}`} />
                </Link>
                <div >
                    <h5>{name}</h5>
                    <p>Continente: {Region}</p>
                    <p>Población: {population}</p>
                </div>
        </div>
        </div>
    )
}
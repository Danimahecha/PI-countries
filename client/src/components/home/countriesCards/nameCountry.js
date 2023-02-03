import React from 'react';
import {Link} from 'react-router-dom';
import styles from './nameStyle.module.css'

export default function CountryName({name, id, imgflag, population, Region, onClose, countryNameButtonClose}) {
    
   return (
        <div>
            {countryNameButtonClose ?
            
            <div className={`${styles.countryName}`}>
                <button className={`${styles.closeBtn}`} onClick={onClose}>X</button>
            <Link to={`/detail/${id}`}>
                <img src={imgflag} alt={`Bandera de ${name}`}/>
                </Link>
                <div>
                    <h1>{name}</h1>
                    <p>Continente: {Region}</p>
                    <p>Población: {population}</p>
                </div>
                </div>
                : null}
        </div>
    )
}
